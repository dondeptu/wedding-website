import styled from "styled-components";

export const CounterSection = styled.section`
    background-color: ${({ theme }) => theme.colors.darkSection.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 100px 58px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.h2`
    margin: 0;
    font-family: ${({ theme }) => theme.headingFont};
    font-size: 64px;
    font-weight: 400;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 46px;
        text-align: center;
    }
`;

export const Timer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 90px);
    gap: 24px 100px;
    justify-items: center;
    font-size: 72px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: repeat(2, 90px);
        grid-template-rows: repeat(2, 1fr);
        gap: 10px 70px;
    }
`;

export const Legend = styled.div`
    font-size: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        &:nth-of-type(1) {
            grid-area: 2 / 1;
        }

        &:nth-of-type(2) {
            grid-area: 2 / 2;
        }
    }
`;

export const Img = styled.img`
    width: 400px;
    max-width: 100%;
    margin-top: 50px;
`;