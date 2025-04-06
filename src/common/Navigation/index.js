import { toOurStory, toPhotoBook, toStay } from "../../core/App/routes";
import { List, StyledNavLink } from "./styled";

export const Navigation = () => (
    <nav>
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
    </nav>
);