import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { WeddingHomepage } from "../../features/weddingHomepage";
import { HashRouter, Route, Routes } from "react-router";
import { toHomepage, toOurStory, toPhotoBook, toStay } from "./routes";
import { Navigation } from "../../common/Navigation";
import { useSelector } from "react-redux";
import { selectIsMenuOpen } from "../../common/Navigation/MobileNav/mobileNavSlice";
import { OurStory } from "../../features/ourStory";
import { Footer } from "../../common/Footer";
import { Stay } from "../../features/stay";

export const App = () => {
    const isMenuOpen = useSelector(selectIsMenuOpen);

    return (
        <HashRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle $lockScroll={isMenuOpen} />
                <Navigation />
                <Routes>
                    <Route path={toHomepage()} element={<WeddingHomepage />} />
                    <Route path={toOurStory()} element={<OurStory />} />
                    <Route path={toStay()} element={<Stay />} />
                    <Route path={toPhotoBook()} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </HashRouter>
    );
};

export default App;