import { InfoDescription, InfoTitle, InfoWrapper, List, ListItem, Steps } from "./styled";

export const Info = () => (
    <InfoWrapper>
        <List>
            <ListItem>
                <InfoTitle>Doba hotelowa</InfoTitle>
                <InfoDescription>
                    Doba hotelowa rozpoczyna się o godzinie <strong>14:00</strong> i trwa do godziny <strong>13:00</strong> dnia następnego.
                </InfoDescription>
            </ListItem>
            <ListItem>
                <InfoTitle>Poprawiny</InfoTitle>
                <InfoDescription>
                    Serdecznie zapraszamy następnego dnia na <strong>poprawiny</strong>, które również odbędą się w <strong>Zajeździe REN</strong>.<br />Rozpoczniemy wspólną zabawę o godzinie <strong>13:00</strong>, a zakończymy około <strong>18:00</strong>.
                </InfoDescription>
            </ListItem>
            <ListItem>
                <InfoTitle>Księga gości</InfoTitle>
                <InfoDescription>
                    Serdecznie zapraszamy Was do wpisania się do naszej <strong>Księgi Gości</strong>.<br />Aby uczynić ją jeszcze piękniejszą i pełną wspomnień:
                </InfoDescription>
                <Steps>
                    <li>📸 wykonajcie zdjęcie Instaxem,</li>
                    <li>📖 wklejcie je do księgi,</li>
                    <li>✒️ dodajcie kilka słów od serca.</li>
                </Steps>
                <InfoDescription>
                    Do Waszej dyspozycji przygotowaliśmy <strong>kolorowe długopisy, naklejki oraz drobne dodatki</strong>, które pozwolą Wam ozdobić wpis w wyjątkowy sposób.<br />Niech każda strona stanie się małym dziełem sztuki i pamiątką, do której z radością będziemy wracać przez lata. 💕
                </InfoDescription>
            </ListItem>
            <ListItem>
                <InfoTitle>Tort</InfoTitle>
                <InfoDescription>
                    Dla naszych Gości przygotowana została również <strong>warstwa tortu w wersji wegańskiej</strong> – bez laktozy i odpowiednia dla osób na diecie wegetariańskiej oraz wegańskiej.
                </InfoDescription>
            </ListItem>
            <ListItem>
                <InfoTitle>Obcasy & trawa</InfoTitle>
                <InfoDescription>
                    Ponieważ nasza uroczystość odbywa się w plenerze, przygotowaliśmy specjalne <strong>nasadki na obcasy</strong>, które ułatwią poruszanie się po trawie. 🌿👠<br />
                    Nasza Świadkowa Kasia będzie miała je przy sobie i chętnie je Wam udostępni.<br />Jeśli macie szpilki i chcielibyście z nich skorzystać – wystarczy się do niej zgłosić.
                </InfoDescription>
            </ListItem>
        </List>
    </InfoWrapper >
);