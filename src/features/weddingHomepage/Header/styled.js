import styled from "styled-components";

export const Wrapper = styled.header`
    height: 100vh;
`;

export const Banner = styled.img`
    position: relative;
    height: 100vh;
    width: 100%;
    object-fit: cover;
    filter: brightness(92%);
`;

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    justify-items: center;
    text-align: center;
    grid-gap: 32px;
    width: 100%;
    padding: 16px;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-shadow: 0px 0px 18px ${({ theme }) => theme.colors.primary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        top: 55%;
        grid-gap: 22px;
        padding: 8px;
    }
`;

export const Newlyweds = styled.h1`
    font-size: 80px;
    font-weight: 400;
    margin: 0;
    text-transform: uppercase;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 46px;
    }
`;

export const WeddingDate = styled.h2`
    order: -1;
    margin: 0;
    font-size: 28px;
    font-weight: 400;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 22px;
    }
`;

export const WeddigPlace = styled.h3`
    margin: 0;
    font-family: ${({ theme }) => theme.headingFont};
    font-size: 54px;
    font-weight: 400;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 36px;
    }
`;