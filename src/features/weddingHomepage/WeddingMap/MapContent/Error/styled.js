import styled from "styled-components";
import { ReactComponent as ExclamationMark } from "../../../images/exclamationMark.svg";

export const ErrorWrapper = styled.div`
    width: 900px;
    height: 500px;
    background-color: ${({ theme }) => theme.colors.page.background};
    color: ${({ theme }) => theme.colors.page.text};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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

export const Icon = styled(ExclamationMark)`
    color: ${({ theme }) => theme.colors.primary};
    width: 50px;
    height: 50px;
    margin-bottom: 22px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 40px;
        height: 40px;
        margin-top: 22px;
    }
`;

export const Paragraph = styled.p`
    text-align: center;
`;