import './Canvas.scss'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Assets.
import DingocoinLogo from './assets/img/dingocoin.png'
import { faEyeDropper, faPaintBrush, faEraser, faUpload, faQuestion } from '@fortawesome/free-solid-svg-icons'

// Bootstrap.
import { Navbar, Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { SketchPicker } from 'react-color'

import bs58 from 'bs58';
import crypto from 'crypto';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function useInterval(callback, delay) {
  const savedCallback = React.useRef(callback)

  // Remember the latest callback if it changes.
  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  React.useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function sha256(data) {
  return crypto.createHash('sha256').update(data).digest();
}

const DINGO_APP_PREFIX = 30; // 0x1e
const DINGO_APP_IDENTIFIER = Buffer.from('5e203f087b3e2e08000000000000', 'hex');
const DINGO_CANVAS_PIXEL_FEE = 100;

function dingoAppDataToAddress(data) {
  const payload = Buffer.concat([Buffer.from([DINGO_APP_PREFIX]), DINGO_APP_IDENTIFIER, data]);
  const checksum = sha256(sha256(payload)).slice(0, 4);
  return bs58.encode(Buffer.concat([payload, checksum]));
}

function pixelToAppData(level, row, column, colorR, colorG, colorB) {
  // 0000|0000000000|0000000000|00000000|00000000|00000000
  const levelBits = Number(level & 0b1111).toString(2).padStart(4, '0');
  const rowBits = Number(row & 0b1111111111).toString(2).padStart(10, '0');
  const colBits = Number(column & 0b1111111111).toString(2).padStart(10, '0');
  const colorRBits = Number(colorR & 0b11111111).toString(2).padStart(8, '0');
  const colorGBits = Number(colorG & 0b11111111).toString(2).padStart(8, '0');
  const colorBBits = Number(colorB & 0b11111111).toString(2).padStart(8, '0');
  const bitString = levelBits + rowBits + colBits + colorRBits + colorGBits + colorBBits;
  return Buffer.from([
    parseInt(bitString.slice(0, 8), 2),
    parseInt(bitString.slice(8, 16), 2),
    parseInt(bitString.slice(16, 24), 2),
    parseInt(bitString.slice(24, 32), 2),
    parseInt(bitString.slice(32, 40), 2),
    parseInt(bitString.slice(40, 48), 2)
  ]);
}

async function post(link, data) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 5000);
  return (await fetch(link, {
    withCredentials: true,
    method: 'POST',
    signal: controller.signal,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })).json();
}

function Canvas() {

  const pixelWidth = 5;
  const pixelsX = 1024;
  const pixelsY = 1024;

  // Rendered full canvas.
  const [fullCanvas, setFullCanvas] = React.useState(null);
  const [overlayCanvas, setOverlayCanvas] = React.useState(null);

  // Local canvas.
  const localCanvasRef = React.useRef(null);

  // Internal variables for processing canvas interactions.
  const [localCanvasSize, setLocalCanvasSize] = React.useState([0, 0]);
  const [localCanvasCenter, setLocalCanvasCenter] = React.useState(null);
  const [cursorState, setCursorState] = React.useState(null);
  const [timerState, setTimerState] = React.useState(0);

  // Action active.
  const [actionActive, setActionActive] = React.useState(false);

  // Final variables for canvas state post-interaction.
  const [finalLocalCanvasSize, setFinalLocalCanvasSize] = React.useState(null);
  const [finalLocalCanvasCenter, setFinalLocalCanvasCenter] = React.useState(null);

  // Create full canvas.
  React.useEffect(async () => {
    if (fullCanvas === null) {
      console.log('Creating full canvas.');

      // Raw canvas.
      const pixels = (await post('https://n4.dingocoin.org:8443/canvas', {})).canvas;

      const fullCanvas = document.createElement('canvas');
      fullCanvas.width = pixelsX * pixelWidth;
      fullCanvas.height = pixelsY * pixelWidth;
      const context = fullCanvas.getContext('2d');
      for (const row in pixels) {
        for (const col in pixels[row]) {
          if (pixels[row][col] !== null) {
            context.fillStyle = `rgb(${pixels[row][col][0]}, ${pixels[row][col][1]}, ${pixels[row][col][2]})`;
          } else {
            context.fillStyle = 'rgb(255, 255, 255)';
          }
          context.fillRect(pixelWidth * col, pixelWidth * row, pixelWidth, pixelWidth);
        }
      }

      const overlayCanvas = document.createElement('canvas');
      overlayCanvas.width = fullCanvas.width;
      overlayCanvas.height = fullCanvas.height;
      const overlayContext = overlayCanvas.getContext('2d');
      overlayContext.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);

      setFullCanvas(fullCanvas);
      setLocalCanvasCenter([fullCanvas.width / 2, fullCanvas.height / 2]);
      setOverlayCanvas(overlayCanvas);
      console.log('Full canvas created.');
    }
  }, []);

  function coerceWindow(pt) {
    return [
      Math.max(window.innerWidth / 2, Math.min(fullCanvas.width - window.innerWidth / 2, pt[0])),
      Math.max(window.innerHeight / 2, Math.min(fullCanvas.height - window.innerHeight / 2, pt[1]))];
  }

  // Setup resize listener.
  React.useEffect(() => {
    function handleResize() {
      if (localCanvasSize[0] !== window.innerWidth || localCanvasSize[1] !== window.innerHeight) {
        setLocalCanvasSize([window.innerWidth, window.innerHeight]);
        if (cursorState === null) {
          setCursorState([window.innerWidth / 2, window.innerHeight / 2]);
        }
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  // Timer ticker.
  useInterval(() => {
    if (timerState === null) {
      setTimerState([(new Date()).getTime(), null]);
    } else {
      const newTime = (new Date()).getTime();
      setTimerState([newTime, newTime - timerState[0]]);
    }
  }, 5);

  // Process internal variables of [size, center, cursor, time] => [finalSize, finalCenter].
  React.useEffect(() => {
    if (!arraysEqual(localCanvasSize, [0, 0]) && localCanvasCenter !== null && cursorState !== null && timerState !== null) {
      const newCenter = localCanvasCenter.slice();

      if (!actionActive) {
        const minSpeed = 0;
        const maxSpeed = 1;
        const range = 50;

        if (cursorState[0] < range) {
          newCenter[0] -= timerState[1] * (minSpeed + (maxSpeed - minSpeed) * Math.min(1, (range - cursorState[0]) / range)**2);
        }
        if (cursorState[0] > localCanvasSize[0] - range) {
          newCenter[0] += timerState[1] * (minSpeed + (maxSpeed - minSpeed) * Math.min(1, (range - (localCanvasSize[0] - cursorState[0])) / range)**2);
        }
        if (cursorState[1] < range) {
          newCenter[1] -= timerState[1] * (minSpeed + (maxSpeed - minSpeed) * Math.min(1, (range - cursorState[1]) / range)**2);
        }
        if (cursorState[1] > localCanvasSize[1] - range) {
          newCenter[1] += timerState[1] * (minSpeed + (maxSpeed - minSpeed) * Math.min(1, (range - (localCanvasSize[1] - cursorState[1])) / range)**2);
        }
      }

      const coercedCenter = coerceWindow(newCenter);
      if (!arraysEqual(coercedCenter, localCanvasCenter)) {
        setLocalCanvasCenter(coercedCenter);
      }
      if (!arraysEqual(localCanvasSize, finalLocalCanvasSize)) {
        setFinalLocalCanvasSize(localCanvasSize);
      }
      if (!arraysEqual(coercedCenter, finalLocalCanvasCenter)) {
        setFinalLocalCanvasCenter(coercedCenter);
      }
    }
  }, [timerState]);

  function render() {
    const context = localCanvasRef.current.getContext('2d');
    context.clearRect(0, 0, localCanvasRef.current.width, localCanvasRef.current.height);
    context.drawImage(fullCanvas,
      finalLocalCanvasCenter[0] - finalLocalCanvasSize[0] / 2, finalLocalCanvasCenter[1] - finalLocalCanvasSize[1] / 2,
      finalLocalCanvasSize[0], finalLocalCanvasSize[1], // sx, sy, swidth, sheight
      0, 0, finalLocalCanvasSize[0], finalLocalCanvasSize[1]); // dx, dy, dwidth, dheight
    context.drawImage(overlayCanvas,
      finalLocalCanvasCenter[0] - finalLocalCanvasSize[0] / 2, finalLocalCanvasCenter[1] - finalLocalCanvasSize[1] / 2,
      finalLocalCanvasSize[0], finalLocalCanvasSize[1], // sx, sy, swidth, sheight
      0, 0, finalLocalCanvasSize[0], finalLocalCanvasSize[1]); // dx, dy, dwidth, dheight
  }

  // Render local canvas.
  React.useEffect(() => {
    if (localCanvasRef !== null && fullCanvas !== null && finalLocalCanvasCenter !== null && finalLocalCanvasSize !== null) {
      render();
    }
  }, [localCanvasRef, fullCanvas, overlayCanvas, finalLocalCanvasCenter, finalLocalCanvasSize]);


  // Controls.
  const [colorPickerColor, setColorPickerColor] = React.useState('#000000');
  const [colorPickerShow, setColorPickerShow] = React.useState(false);
  const [pencilEnabled, setPencilEnabled] = React.useState(false);
  const [eraserEnabled, setEraserEnabled] = React.useState(false);

  React.useEffect(() => {
    if (actionActive) {
      const fullCanvasX = finalLocalCanvasCenter[0] - finalLocalCanvasSize[0]  / 2 + cursorState[0];
      const fullCanvasY = finalLocalCanvasCenter[1] - finalLocalCanvasSize[1]  / 2 + cursorState[1];
      const pixelX = Math.floor(fullCanvasX / pixelWidth);
      const pixelY = Math.floor(fullCanvasY / pixelWidth);
      const overlayContext = overlayCanvas.getContext('2d');

      if (pencilEnabled) {
        overlayContext.fillStyle = colorPickerColor;
        overlayContext.fillRect(pixelX * pixelWidth, pixelY * pixelWidth, pixelWidth, pixelWidth);
        overlayContext.stroke();
        render();
      } else if (eraserEnabled) {
        overlayContext.clearRect((pixelX - 2) * pixelWidth, (pixelY - 2) * pixelWidth, 5 * pixelWidth, 5 * pixelWidth);
        render();
      }
    }
  }, [cursorState, actionActive]);

  React.useEffect(() => {
    if (pencilEnabled && eraserEnabled) {
      setEraserEnabled(false);
    }
  }, [pencilEnabled]);

  React.useEffect(() => {
    if (eraserEnabled && pencilEnabled) {
      setPencilEnabled(false);
    }
  }, [eraserEnabled]);

  // Uploads.
  const [uploadShow, setUploadShow] = React.useState(false);
  const [uploadCode, setUploadCode] = React.useState([]);

  React.useEffect(() => {
    if (uploadShow) {
      const overlayContext = overlayCanvas.getContext('2d');
      const imageData = overlayContext.getImageData(0, 0, pixelsX * pixelWidth, pixelsY * pixelWidth);
      function p(x, y) {
        return [
          imageData.data[((y * (imageData.width * 4)) + (x * 4)) + 0],
          imageData.data[((y * (imageData.width * 4)) + (x * 4)) + 1],
          imageData.data[((y * (imageData.width * 4)) + (x * 4)) + 2],
          imageData.data[((y * (imageData.width * 4)) + (x * 4)) + 3]
        ];
      }

      const uploadOutputs = {};
      for (let x = 0; x < pixelsX; x++) {
        for (let y = 0; y < pixelsY; y++) {
          const pixel = p(x * pixelWidth, y * pixelWidth);
          if (!arraysEqual(pixel, [0, 0, 0, 0])) {
            const appData = pixelToAppData(0, y, x, pixel[0], pixel[1], pixel[2]);
            const address = dingoAppDataToAddress(appData);
            uploadOutputs[address] = DINGO_CANVAS_PIXEL_FEE;
          }
        }
      }

      const uploadCode = `createrawtransaction "[]" "${JSON.stringify(uploadOutputs).replace(/"/g, '\\"')}"`;
      setUploadCode(uploadCode);

    }
  }, [uploadShow]);

  // Help.
  const [helpShow, setHelpShow] = React.useState(false);

  return (
      <div onMouseMove={(e) => setCursorState([e.clientX, e.clientY])}>
      <Navbar className="navbar" bg="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <img alt="" src={DingocoinLogo}/>
            <span>DINGOCOIN</span><span className="navbar-brand-subtitle"> CANVAS</span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <header>
        <canvas width={localCanvasSize[0]} height={localCanvasSize[1]} ref={localCanvasRef}
          onMouseDown={() => setActionActive(true)}
          onMouseUp={() => setActionActive(false)}>
        </canvas>
        <Container className="control-panel">
            <Row xs={3} md={5} lg={5}>
              <Col>
                <Button className="control-button" onClick={() => setColorPickerShow(true)}
                    style={{background: colorPickerColor}}>
                  <FontAwesomeIcon className="faicon" icon={faEyeDropper} />
                </Button>
              </Col>
              <Col>
                <Button className={pencilEnabled ? "control-button control-button-active" : "control-button"} onClick={() => setPencilEnabled(!pencilEnabled)}>
                  <FontAwesomeIcon className="faicon" icon={faPaintBrush} />
                </Button>
              </Col>
              <Col>
                <Button className={eraserEnabled ? "control-button control-button-active" : "control-button"} onClick={() => setEraserEnabled(!eraserEnabled)}>
                  <FontAwesomeIcon className="faicon" icon={faEraser} />
                </Button>
              </Col>
              <Col>
                <Button className="control-button" onClick={() => setUploadShow(true)}>
                  <FontAwesomeIcon className="faicon" icon={faUpload} />
                </Button>
              </Col>
              <Col>
                <Button className="control-button" onClick={() => setHelpShow(true)}>
                  <FontAwesomeIcon className="faicon" icon={faQuestion} />
                </Button>
              </Col>
            </Row>
        </Container>
      </header>

      <Modal
        dialogClassName="color-picker-modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={colorPickerShow}
        onHide={() => { setColorPickerShow(false); }}>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <SketchPicker color={colorPickerColor} onChange={(color) => { setColorPickerColor(color.hex); }}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="secondary" onClick={() => { setColorPickerShow(false); }}>Ok</Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      <Modal
        dialogClassName="upload-modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={uploadShow}
        onHide={() => { setUploadShow(false); }}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Upload Changes to Dingocoin Mainnet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <h5>1. Create a transaction to commit changes</h5>
                <textarea className="code-box-big" value={uploadCode} readonly/>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>2. Compute UTXOs to fund transaction</h5>
                <div className="code-box-small">
                  <code>fundrawtransaction &lt;hex from 1.&gt;</code>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>3. Sign transaction with wallet</h5>
                <div className="code-box-small">
                  <code>fundrawtransactionwithwallet &lt;hex from 2.&gt;</code>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>4. Submit transaction to Dingocoin mainnet</h5>
                <div className="code-box-small">
                  <code>sendrawtransaction &lt;hex from 3.&gt;</code>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>5. Wait for changes to apply</h5>
                <p>Check back in a few minutes while the mainnet processes your transaction.</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { setUploadShow(false); }}>Close</Button>
        </Modal.Footer>
      </Modal>


      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={helpShow}
        onHide={() => { setHelpShow(false); }}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            About Dingocoin Canvas
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <h5>What's this about?</h5>
                <p>Arbitrary data can be stored on the Dingocoin mainnet using some tricks. This project explores that idea, by storing a canvas which users can write onto by sending transactions of specific formats.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>How does it work?</h5>
                <p>To write a specific color onto a pixel, users send some money to an associated Dingocoin burn address, such as <code>DDingoCanvasUvUMhbVdgP1sfNn8vXRvxX</code>. The burn address encodes exactly which pixel to write to and what color, and the transaction is carved permantely onto the blockchain.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>Can anyone use the burned amounts?</h5>
                <p>Probably impossible. Each Dingocoin address is uniquely identified by 160 bits and the Canvas looks only at a 48 bit sub-block. The probability that a random address falls into this sub-block is 1/2^112. It is almost impossible for anyone to end up randomly with the keys to any address in the Canvas sub-block.</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { setHelpShow(false); }}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Canvas;
