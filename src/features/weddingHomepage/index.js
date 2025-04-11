import { Header } from "../../common/Header";
import { Section } from "./Section";
import ourPhoto from "./images/mountain-back.jpg";
import sidePhoto from "./images/mountain-distant.jpg";
import banner from "./images/banner.jpeg";

export const WeddingHomepage = () => (
    <main>
        <Header
            banner={banner}
            title={"Donata & Marcin"}
            extraTitle={"24.08.2025"}
            subTitle={"Zajazd REN Iwiczno"}
        />
        <Section
            title={"Przed nami najpiękniejsza przygoda życia – bądźcie z nami w tym wyjątkowym dniu!"}
            text={"Ona szukała pomocy z programowaniem, on przyszedł z pomocą… i został na dłużej. Zaczęło się od zmiennych i funkcji, a skończyło na wspólnym życiu. Tak właśnie, z linijek kodu, powstała nasza historia – pełna śmiechu, czułości i miłości, która rośnie z każdym dniem (bez bugów!)."}
            mainImgPath={ourPhoto}
            sideImgPath={sidePhoto}
        />
    </main>
);