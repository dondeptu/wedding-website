import styled from "styled-components";
import { NavLink } from "react-router";

export const List = styled.ul`
    list-style: none;
    padding: 54px 60px;
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 48px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;
    font-size: 18px;
    letter-spacing: 0;
    transition: color 0.3s ease;
`;
