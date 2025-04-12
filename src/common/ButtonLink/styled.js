import styled from "styled-components";
import { NavLink } from "react-router";

export const ButtonLink = styled(NavLink)`
    visibility: hidden;
    text-decoration: none;
    font-size: 18px;
    color: currentColor;
    border: 1px solid currentColor;
    border-radius: 3px;
    padding: 12px 16px;
    box-shadow: 0 0 2px ${({ theme }) => theme.colors.textPrimary};
    transition: background-color 0.3s ease;

    &:hover, &:active {
        background-color: ${({ theme }) => theme.colors.textPrimary};
        color: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.textPrimary};
    }
`;