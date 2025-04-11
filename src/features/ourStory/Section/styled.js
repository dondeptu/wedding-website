import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 798px;
    margin: 70px auto;
    padding: 0 8px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        padding: 0 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 40px 0;
    }
`;

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: ${({ theme }) => theme.headingFont};
    font-size: 96px;
    font-weight: 400;
    margin: 0 0 40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 70px;
    }
`;

export const Content = styled.div`
    margin: 0 0 50px;
    column-count: 2;
    column-gap: 42px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        column-count: 1;
    }
`;

export const Paragraph = styled.p`
    margin-top: 0;
    line-height: 1.6;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        line-height: 1.4;
    }
`;

export const Image = styled.img`
    max-width: 100%;
`;