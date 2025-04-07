import { ToggleMenuButton, StyledLogo, StyledNavLink, NavHeader } from "./styled";
import { toHomepage } from "../../../core/App/routes";
import { useState } from "react";
import { DropdownMenu } from "./DropdownMenu";

export const MobileNav = () => {
    const [isMenuOpen, setIMenuOpen] = useState(false);

    const toggleMenu = () => setIMenuOpen(!isMenuOpen);

    return (
        <>
            <NavHeader>
                <StyledNavLink to={toHomepage()} aria-label="Przejdź do strony głównej">
                    <StyledLogo alt="Logo" />
                </StyledNavLink>
                <ToggleMenuButton
                    $isOpen={isMenuOpen}
                    onClick={() => toggleMenu()}
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