import styled from "styled-components";

export const MapWrapper = styled.div`
    width: 900px;
    height: 500px;

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
        width: 600px;
        height: 350px;
        padding: 0 8px;
    }

    @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        width: 100%;
        height: 250px;
    }
`;