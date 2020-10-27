import React from 'react';
import ThemeButton from './ThemedButton';
import { themes, themeContext } from './themes';

class App extends React.Component {
  state = {
    theme: themes.light,
  };

  toggleThemes = () => {
    const newThemes = this.state.theme === themes.dark
      ? themes.light
      : themes.dark

    this.setState({
      theme: newThemes,
    })
  }
  render() {
    return (
      <div>
        <themeContext.Provider value={this.state.theme}>
          <ThemeButton onClick={this.toggleThemes}>
            Dynamic Theme
          </ThemeButton>
        </themeContext.Provider>
        <ThemeButton onClick={this.toggleThemes}>
          Default Theme
          </ThemeButton>
      </div>
    )
  }
};

export default App;