import { MapContent } from "./MapContent";
import { Content, Couple, Header, Info, MapSection, Place, Time } from "./styled";
import coupleImage from "./couple.png";

export const WeddingMap = () => (
    <MapSection>
        <Header>Ślub i wesele</Header>
        <Content>
            <Info>
                <Couple src={coupleImage} />
                <Time>16:00</Time>
                <Place>Zajazd REN w Iwicznie<br />ul.&nbsp;Wczasowa 32<br />83-260 Iwiczno</Place>
            </Info>
            <MapContent />
        </Content>
    </MapSection>
);