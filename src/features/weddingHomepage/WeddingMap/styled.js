import styled from "styled-components";

export const MapSection = styled.section`
    background-color: ${({ theme }) => theme.colors.darkSection.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 120px 58px;

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
        padding: 100px 58px;
    }
    
    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        padding: 120px 16px;
    }
`;

export const Header = styled.h2`
    text-align: center;
    font-weight: 400;
    font-size: 42px;
    margin-top: 0;
    margin-bottom: 100px;

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
        font-size: 38px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 34px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-bottom: 58px;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
        justify-content: space-between;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        gap: 58px;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 44px;

    @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        gap: 36px;
    }
`

export const Couple = styled.img`
    width: 84px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        width: 70px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 54px;
    }
`;

export const Time = styled.h3`
    margin: 0;
    font-weight: 400;
    font-size: 36px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 30px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 26px;
    }
`;

export const Place = styled.p`
    margin: 0;
    text-align: center;
    line-height: 1.7;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        line-height: 1.5;
    }
`;