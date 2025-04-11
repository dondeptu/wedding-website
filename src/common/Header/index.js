import { Banner, Container, Title, ExtraTitle, SubTitle, Wrapper } from "./styled";

export const Header = ({ banner, title, extraTitle, subTitle }) => (
    <Wrapper>
        <Banner src={banner} alt="tło" />
        <Container>
            <Title>{title}</Title>
            <ExtraTitle>{extraTitle}</ExtraTitle>
            <SubTitle>{subTitle}</SubTitle>
        </Container>
    </Wrapper>
);