import { NavLink } from "react-router";
import { toHomepage, toOurStory, toPhotoBook, toStay } from "../../../core/App/routes";
import { List, LogoLink, StyledNavLink, Wrapper } from "./styled";
import { ButtonLink as RsvpButtonLink } from "../../ButtonLink";

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
        <RsvpButtonLink title={"RSVP"} aria-label="RSVP - potwierdź obecność" />
    </Wrapper>
);