import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { WeddingHomepage } from "../../features/weddingHomepage";
import { Navigation } from "../../common/Navigation";
import { BrowserRouter, Route, Routes } from "react-router";
import { toHomepage, toOurStory, toPhotoBook, toStay } from "./routes";

export const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navigation />
                <Routes>
                    <Route path={toHomepage()} element={<WeddingHomepage />} />
                    <Route path={toOurStory()} />
                    <Route path={toStay()} />
                    <Route path={toPhotoBook()} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;