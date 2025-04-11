import { ToggleMenuButton, StyledLogo, StyledNavLink, NavHeader } from "./styled";
import { toHomepage } from "../../../core/App/routes";
import { DropdownMenu } from "./DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen, toggleMenu } from "./mobileNavSlice";

export const MobileNav = () => {
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(selectIsMenuOpen);

    return (
        <>
            <NavHeader>
                <StyledNavLink to={toHomepage()} aria-label="Przejdź do strony głównej">
                    <StyledLogo alt="Logo" />
                </StyledNavLink>
                <ToggleMenuButton
                    $isOpen={isMenuOpen}
                    onClick={() => dispatch(toggleMenu())}
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                    aria-controls="dropdown-menu"
                    aria-label="Główne menu nawigacyjne"
                />
            </NavHeader>
            <DropdownMenu
                id="dropdown-menu"
                isOpen={isMenuOpen}
            />
        </>
    );
};