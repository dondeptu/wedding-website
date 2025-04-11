import { NavLink } from "react-router";
import styled, { css } from "styled-components";

export const NavWrapper = styled.nav`
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -2;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.navBackground};

    ${({ $isOpen }) => $isOpen && css`
        opacity: 1;
        z-index: 1;
    `}
`;

export const LayoutWrapper = styled.div`
    padding-top: 106px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    justify-items: center;
    gap: 48px;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 28px;
    transition: opacity 0.3s;

    &:active {
        opacity: 0.6;
    }
`;