import React from 'react';
import deepmerge from 'deepmerge';
import colors from './colors';
import darkColors from './colorsDark';
// @ts-ignore
export const ThemeContext = React.createContext({
    theme: {
        colors,
    },
});
export default class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.updateTheme = (updates) => {
            this.setState(({ theme }) => ({
                theme: deepmerge(theme, updates),
            }));
        };
        this.replaceTheme = (theme) => {
            this.setState(() => ({
                theme: deepmerge(this.defaultTheme, theme),
            }));
        };
        this.getTheme = () => this.state.theme;
        const defaultColors = props.useDark ? darkColors : colors;
        this.defaultTheme = deepmerge({
            colors: defaultColors,
        }, props.theme);
        this.state = {
            theme: this.defaultTheme,
            useDark: props.useDark,
        };
    }
    static getDerivedStateFromProps(props, state) {
        const { useDark } = props;
        if (useDark !== state.useDark) {
            const defaultColors = useDark ? darkColors : colors;
            return {
                theme: deepmerge(state.theme, deepmerge({
                    colors: defaultColors,
                }, props.theme)),
                useDark,
            };
        }
        return null;
    }
    render() {
        return (<ThemeContext.Provider value={{
            theme: this.state.theme,
            updateTheme: this.updateTheme,
            replaceTheme: this.replaceTheme,
        }}>
        {this.props.children}
      </ThemeContext.Provider>);
    }
}
ThemeProvider.defaultProps = {
    theme: {},
    useDark: false,
};
export const ThemeConsumer = ThemeContext.Consumer;
