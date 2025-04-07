import { Banner, Container, Newlyweds, WeddingDate, WeddigPlace, Wrapper } from "./styled";
import banner from "./banner.jpeg";

export const Header = () => (
    <Wrapper>
        <Banner src={banner} alt="tło" />
        <Container>
            <Newlyweds>Donata & Marcin</Newlyweds>
            <WeddingDate>24.08.2025</WeddingDate>
            <WeddigPlace>Zajazd REN Iwiczno</WeddigPlace>
        </Container>
    </Wrapper>
);