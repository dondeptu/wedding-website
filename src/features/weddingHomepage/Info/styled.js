import styled from "styled-components";

export const InfoWrapper = styled.section`
    padding: 100px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 120px 0;
    }
`;

export const List = styled.ul`
    padding: 0;
    margin: 0 150px;
    display: grid;
    gap: 22px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 0 16px;
        gap: 18px;
    }
`;

export const ListItem = styled.li`
    list-style: none;
`;

export const InfoTitle = styled.h3`
    font-size: 24px;
    font-weight: 400;
    margin: 18px 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 16px 0;
    }
`;

export const InfoDescription = styled.p`
    margin: 0;
    line-height: 1.32;
`;

export const Steps = styled.ul`
    list-style: none;
    padding: 0;
    margin: 18px 0;
    display: grid;
    gap: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 22px 0;
    }
`;