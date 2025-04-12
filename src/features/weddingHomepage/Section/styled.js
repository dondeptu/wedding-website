import styled from "styled-components";
import { ButtonLink } from "../../../common/ButtonLink/styled";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

export const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-content: center;
    padding: 100px 58px;
    gap: 100px 120px;

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
        gap: 56px 72px;
        justify-content: center;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        display: flex;
        flex-direction: column;
        gap: 58px;
        padding: 120px 16px;
    }
`;

export const Title = styled.h2`
    grid-column: 2 / 4;
    font-weight: 400;
    font-size: 42px;
    line-height: 1.2;
    max-width: 85%;

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
        font-size: 38px;
        margin: 24px 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 34px;
        margin: 12px 0;
    }

    @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        margin: 0;
    }
`;

export const Paragraph = styled.p`
    margin: 0;
    line-height: 1.5;
`;

export const MainImageWrapper = styled.div`
    grid-row: 1 / 4;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MainImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const SideImgWrapper = styled.div`
    grid-row: 2 / 4;
    grid-column-start: 3;
    grid-row-start: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;

    @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        min-height: 550px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledButtonLink = styled(ButtonLink)`
    text-align: center;

      &:hover, &:active {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.textPrimary};
        border-color: ${({ theme }) => theme.colors.primary};
    }

`;