import styled from "styled-components";
import { NavLink } from "react-router";
import { ReactComponent as Logo } from "../logo.svg";
import { ButtonLink as RsvpButton } from "../../ButtonLink";

export const Wrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 34px 50px;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 48px;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;
    font-size: 18px;
    letter-spacing: 0;
    transition: color 0.3s ease;
`;

export const LogoLink = styled(Logo)`
    width: 90px;
    height: auto;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledRsvpButton = styled(RsvpButton)`
    
`;