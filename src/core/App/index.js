import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { WeddingHomepage } from "../../features/weddingHomepage";
import { Navigation } from "../../common/Navigation";
import { BrowserRouter, Route, Routes } from "react-router";
import { toOurStory, toPhotoBook, toStay } from "./routes";

export const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navigation />
                <Routes>
                    <Route path="/" element={<WeddingHomepage />} />
                    <Route path={toOurStory()} />
                    <Route path={toStay()} />
                    <Route path={toPhotoBook()} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;