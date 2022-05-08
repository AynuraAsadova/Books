import React from "react";

export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component {
  state = {
    checked: false,
    dark: { bg: "#222529", txt: "#D65F5f", hover: "rgba(231, 76, 60, 0.8" },
    light: { bg: "#f1f1f1", txt: "#222529", hover: "rgba(254, 209, 54, 0.8" },
  };

  themeChange = () => {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, themeChange: this.themeChange}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
