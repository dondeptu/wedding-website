import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 3fr 4fr;
    padding: 100px 58px;
    gap: 100px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        grid-template-columns: 1fr;
        padding: 56px 40px;
        gap: 50px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 48px 16px;  
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 60%;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        order: 1;
    }
`;

export const SectionHeader = styled.h2`
    font-family: ${({ theme }) => theme.headingFont};
    font-size: 84px;
    font-weight: 400;
    margin: 0 0 30px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 78px;
    }
`;

export const Paragraph = styled.p`
    line-height: 1.5;
    margin: 40px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        line-height: 1.4;
        margin: 34px 0;
    }
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.link.color};
    text-decoration: none;
    border-bottom: 1px solid;
    padding-bottom: 1px;

    &:active, &:hover {
        color: ${({ theme }) => theme.colors.link.active};
    }
`;

export const Content = styled.div`
    
`;