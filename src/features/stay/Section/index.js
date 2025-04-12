import { Content, Image, Link, Paragraph, SectionHeader, Wrapper } from "./styled";
import photo from "../room.jpg";

export const Section = () => {
    const hotelPath = "https://iwiczno.pl/#hotel";

    return (
        <Wrapper>
            <Image src={photo} alt="pokój" />
            <Content>
                <SectionHeader>Gdzie?</SectionHeader>
                <Paragraph>
                    Rezerwujemy pokoje dla naszych gości w hotelu&nbsp;
                    <Link target="_blank" rel="noreferrer noopener" href={hotelPath}>Zajazd&nbsp;REN&nbsp;Iwiczno</Link>
                    . Prosimy o kontakt z nami, jeśli potrzebujecie noclegów.
                </Paragraph>
                <Paragraph>
                    Zajazd Ren dysponuje pokojami dwuosobowymi. Pokoje wyposażone są we własny, niezależny aneks łazienkowy, suszarkę do włosów, ręczniki, bezprzewodowy Internet. W pokojach istnieje możliwość zastosowania dostawki.
                </Paragraph>
                <Paragraph>
                    Hotel znajduje się w bezpośrednim sąsiedztwie sali weselnej – to ten sam ośrodek, zaledwie budynek obok.
                </Paragraph>
            </Content>
        </Wrapper>
    );
}