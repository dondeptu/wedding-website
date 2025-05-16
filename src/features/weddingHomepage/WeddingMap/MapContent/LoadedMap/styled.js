import styled from "styled-components";

export const MapWrapper = styled.div`
    .gm-style {
        color: initial;
    }

    width: 900px;
    height: 500px;

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
        width: 600px;
        height: 350px;
        padding: 0 8px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 100%;
        height: 350px;
    }
`;

export const InfoWindowHeader = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    font-size: 14px;
    margin: 0;
`;

export const Address = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 10px;
`;

export const InfoWindowLink = styled.a`
    color: ${({ theme }) => theme.colors.link.color};
`;