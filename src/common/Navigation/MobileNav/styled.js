import styled, { css } from "styled-components";
import { NavLink } from "react-router";
import { ReactComponent as Logo } from "../logo.svg";

export const NavHeader = styled.header`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
    padding: 34px 16px;
`;

export const StyledNavLink = styled(NavLink)`
    grid-column-start: 2;
    text-align: center;
`;

export const StyledLogo = styled(Logo)`
    width: 68px;
    height: auto;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ToggleMenuButton = styled.button`
    justify-self: flex-end;
    position: relative;
    border-top: 1px solid ${({ theme }) => theme.colors.textPrimary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.textPrimary};
    border-left: none;
    border-right: none;
    padding: 9px;
    margin: 10px;
    width: 32px;
    background: none;

    &::before, 
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.textPrimary};
        top: 50%;
        left: 0;
        transform-origin: center;
        transition: transform 0.3s ease;
    }

    ${({ $isOpen }) => $isOpen && css`
        border-top: none;
        border-bottom: none;

        &::before {
        transform: translate(0%, -50%) rotate(45deg);
        }

        &::after {
        transform: translate(0%, -50%) rotate(-45deg);
        }
  ` }
`;