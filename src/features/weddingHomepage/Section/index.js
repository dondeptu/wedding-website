import {
    MainImage,
    MainImageWrapper,
    Paragraph,
    SideImage,
    SideImgWrapper,
    StyledButtonLink,
    Title,
    Layout,
    Wrapper,
    ButtonWrapper
} from "./styled";
import useWindowWidth from "../../../common/useWindowWidth";
import { theme } from "../../../core/App/theme";
import { toOurStory } from "../../../core/App/routes";

export const Section = ({ title, text, mainImgPath, sideImgPath }) => {
    const windowWidth = useWindowWidth();
    const mobileMax = theme.breakpoints.tabletMax;

    const isMobile = () => windowWidth <= mobileMax;

    return (
        <Wrapper>
            <Layout>
                <Title>{title}</Title>
                {isMobile() ? (
                    <SideImgWrapper>
                        <SideImage src={sideImgPath} />
                    </SideImgWrapper>
                ) : (
                    <MainImageWrapper>
                        <MainImage src={mainImgPath} />
                    </MainImageWrapper>
                )}
                <Paragraph>{text}</Paragraph>
                <ButtonWrapper>
                    <StyledButtonLink to={toOurStory()}>
                        Przeczytaj naszą historię
                    </StyledButtonLink>
                </ButtonWrapper>
                {!isMobile() &&
                    <SideImgWrapper>
                        <SideImage src={sideImgPath} />
                    </SideImgWrapper>
                }
            </Layout>
        </Wrapper>
    );
};