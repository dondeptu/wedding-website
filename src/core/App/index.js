import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { WeddingHomepage } from "../../features/weddingHomepage";
import { HashRouter, Route, Routes } from "react-router";
import { toHomepage, toOurStory, toPhotoBook, toStay } from "./routes";
import { Navigation } from "../../common/Navigation";
import { useState } from "react";

export const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <HashRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle $lockScroll={isMenuOpen} />
                <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <Routes>
                    <Route path={toHomepage()} element={<WeddingHomepage />} />
                    <Route path={toOurStory()} />
                    <Route path={toStay()} />
                    <Route path={toPhotoBook()} />
                </Routes>
            </ThemeProvider>
        </HashRouter>
    );
};

export default App;