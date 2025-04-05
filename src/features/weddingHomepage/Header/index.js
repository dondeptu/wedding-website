import { Banner, BannerContainer, Container, Newlyweds, WeddingDate, WeddigPlace, Wrapper } from "./styled";
import banner from "./banner.jpeg";

export const Header = () => (
    <Wrapper>
        <BannerContainer>
            <Banner src={banner} />
            <Container>
                <Newlyweds>Donata & Marcin</Newlyweds>
                <WeddingDate>24.08.2025</WeddingDate>
                <WeddigPlace>Zajazd REN Iwiczno</WeddigPlace>
            </Container>
        </BannerContainer>
    </Wrapper>
);