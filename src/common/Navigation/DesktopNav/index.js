import { NavLink } from "react-router";
import { toHomepage, toOurStory, toPhotoBook, toRSVP, toStay } from "../../../core/App/routes";
import { List, LogoLink, StyledNavLink, Wrapper } from "./styled";
import { ButtonLink as RsvpButtonLink } from "../../ButtonLink/styled"

export const DesktopNav = () => (
    <Wrapper>
        <NavLink to={toHomepage()} aria-label="Przejdź do strony głównej">
            <LogoLink alt="Logo" />
        </NavLink>
        <List>
            <li>
                <StyledNavLink to={toOurStory()}>Nasza Historia</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to={toStay()}>Nocleg</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to={toPhotoBook()}>Galeria</StyledNavLink>
            </li>
        </List>
        <RsvpButtonLink to={toRSVP()} aria-label="RSVP - potwierdź obecność">
            RSVP
        </RsvpButtonLink>
    </Wrapper>
);