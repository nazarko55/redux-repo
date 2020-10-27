import React from 'react';
import ThemedButton from './ThemedButton';
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
          <ThemedButton onClick={this.toggleThemes}>
            {"Dynamic Theme"}
          </ThemedButton>
        </themeContext.Provider>
        <ThemedButton onClick={this.toggleThemes}>
          {"Default Theme"}
        </ThemedButton>
      </div>
    )
  }
};

export default App;