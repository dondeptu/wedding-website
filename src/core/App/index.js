import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { WeddingHomepage } from "../../features/weddingHomepage";

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <WeddingHomepage />
        </ThemeProvider>
    );
};

export default App;