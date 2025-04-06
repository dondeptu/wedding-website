import { NavLink } from "react-router";
import { toHomepage, toOurStory, toPhotoBook, toStay } from "../../../core/App/routes";
import { List, LogoLink, StyledNavLink, StyledRsvpButton, Wrapper } from "./styled";


export const DesktopNav = () => (
    <Wrapper>
        <NavLink to={toHomepage()}>
            <LogoLink />
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
        <StyledRsvpButton title={"RSVP"} />
    </Wrapper>
);