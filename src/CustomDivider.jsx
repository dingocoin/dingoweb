// Assets.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function CustomDivider() {
  return (
    <div class="divider-custom">
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon"><FontAwesomeIcon icon={faAngleDown}/></div>
      <div class="divider-custom-line"></div>
    </div>
  );
}

export default CustomDivider;
