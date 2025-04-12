import { toOurStory, toPhotoBook, toStay } from "../../../../core/App/routes";
import { List, StyledNavLink, NavWrapper, LayoutWrapper } from "./styled";
import { ButtonLink as RsvpButtonLink } from "../../../ButtonLink/styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen, toggleMenu } from "../mobileNavSlice";

export const DropdownMenu = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(selectIsMenuOpen);

    return (
        <NavWrapper $isOpen={isMenuOpen}>
            <LayoutWrapper>
                <List>
                    <li>
                        <StyledNavLink
                            to={toOurStory()}
                            onClick={() => dispatch(toggleMenu())}
                        >
                            Nasza Historia
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink
                            to={toStay()}
                            onClick={() => dispatch(toggleMenu())}
                        >
                            Nocleg
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink
                            to={toPhotoBook()}
                            onClick={() => dispatch(toggleMenu())}
                        >
                            Galeria
                        </StyledNavLink>
                    </li>
                </List>
                <RsvpButtonLink
                    // to={toRSVP()}
                    onClick={() => dispatch(toggleMenu())}
                    aria-label="RSVP - potwierdź obecność"
                >
                    RSVP
                </RsvpButtonLink>
            </LayoutWrapper>
        </NavWrapper >
    );
};