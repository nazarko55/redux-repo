import React from 'react';
import { themeContext } from './themes'
class ThemeButton extends React.Component {

  render() {
    console.log(this.props);
    return <button
      {...this.props}
      style={{
        backgroundColor: this.context.background,
        color: this.context.fontColor,
      }}
      className="btn" />
  }
}

ThemeButton.contextType = themeContext

export default ThemeButton;