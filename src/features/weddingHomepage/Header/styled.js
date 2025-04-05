import styled from "styled-components";

export const Wrapper = styled.header`
    
`;

export const BannerContainer = styled.div`
    
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
    grid-gap: 32px;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-shadow: 0px 0px 18px ${({ theme }) => theme.colors.primary};
`;

export const Newlyweds = styled.h1`
    font-size: 80px;
    font-weight: 400;
    margin: 0;
`;

export const WeddingDate = styled.h2`
    order: -1;
    margin: 0;
    font-weight: 400;
`;

export const WeddigPlace = styled.h3`
    margin: 0;
    font-family: ${({ theme }) => theme.headingFont};
    font-size: 54px;
    font-weight: 400;
`;