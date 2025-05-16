import { ErrorWrapper, Icon, Paragraph } from "./styled";

export const Error = () => (
    <ErrorWrapper>
        <Icon />
        <h3>Ups... Coś poszło nie tak.</h3>
        <Paragraph>Nie udało się załadować mapy.<br /> Sprawdź połączenie lub odśwież stronę.</Paragraph>
    </ErrorWrapper>
);