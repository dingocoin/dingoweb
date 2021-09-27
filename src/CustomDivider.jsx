// Assets.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function CustomDivider() {
  return (
    <div className="divider-custom">
      <div className="divider-custom-line"></div>
      <div className="divider-custom-icon"><FontAwesomeIcon icon={faAngleDown}/></div>
      <div className="divider-custom-line"></div>
    </div>
  );
}

export default CustomDivider;
