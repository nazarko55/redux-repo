import { connect } from 'react-redux';
import { selectedOptionsSelectors } from './options.selectors';
import Options from './Options';
import { toggleOption } from './options.action';

//подключаем эту компоненту к редаксу
const mapState = state => {
  return {
    options: selectedOptionsSelectors(state),
  }
}

const mapDispatch = {
  moveOption: toggleOption,
}

export default connect(mapState, mapDispatch)(Options);