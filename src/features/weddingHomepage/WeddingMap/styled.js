import styled from "styled-components";

export const MapSection = styled.section`
    background-color: ${({ theme }) => theme.colors.darkSection.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 120px 58px;
`;

export const Header = styled.h2`
    text-align: center;
    font-weight: 400;
    font-size: 42px;
    margin-top: 0;
    margin-bottom: 100px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 44px;
    padding: 0 8px;
`

export const Couple = styled.img`
    width: 84px;
`;

export const Time = styled.h3`
    margin: 0;
    font-weight: 400;
    font-size: 36px;
`;

export const Place = styled.p`
    margin: 0;
    text-align: center;
    line-height: 1.7;
`;