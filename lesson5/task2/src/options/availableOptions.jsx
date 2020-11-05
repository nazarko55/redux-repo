import { connect } from 'react-redux';
import { availableOptionsSelectors } from './options.selectors'
import Options from './Options';
import { toggleOption } from './options.action';

//подключаем эту компоненту к редаксу
const mapState = state => {
  return {
    options: availableOptionsSelectors(state),
  }
}

const mapDispatch = {
  moveOption: toggleOption,
}

export default connect(mapState, mapDispatch)(Options);