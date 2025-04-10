import { toOurStory, toPhotoBook, toStay } from "../../../../core/App/routes";
import { List, StyledNavLink, NavWrapper, LayoutWrapper } from "./styled";
import { ButtonLink as RsvpButtonLink } from "../../../ButtonLink/styled";

export const DropdownMenu = ({ isOpen }) => {

    return (
        <NavWrapper $isOpen={isOpen}>
            <LayoutWrapper>
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
                <RsvpButtonLink aria-label="RSVP - potwierdź obecność">
                    RSVP
                </RsvpButtonLink>
            </LayoutWrapper>
        </NavWrapper >
    );
};