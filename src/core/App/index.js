import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { WeddingHomepage } from "../../features/weddingHomepage";
import { HashRouter, Route, Routes } from "react-router";
import { toHomepage, toOurStory, toPhotoBook, toStay } from "./routes";
import { Navigation } from "../../common/Navigation";
import { useSelector } from "react-redux";
import { selectIsMenuOpen } from "../../common/Navigation/MobileNav/mobileNavSlice";

export const App = () => {
    const isMenuOpen = useSelector(selectIsMenuOpen);

    return (
        <HashRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle $lockScroll={isMenuOpen} />
                <Navigation />
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