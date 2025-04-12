import { Content, Image, Paragraph, SectionHeader, Wrapper } from "../../stay/Section/styled";
import ourPhoto from "../ourPhoto.jpg";

export const Section = () => (
    <Wrapper>
        <Image src={ourPhoto} alt={"Donata i Marcin"} />
        <Content>
            <SectionHeader>Już wkrótce...</SectionHeader>
            <Paragraph>
                Już wkrótce udostępnimy możliwość dodawania zdjęć ze ślubu! Pracujemy nad tym, aby każdy mógł łatwo podzielić się swoimi wspomnieniami z tego wyjątkowego dnia. Zaglądajcie tu regularnie – damy znać, gdy opcja będzie dostępna!
            </Paragraph>
        </Content>
    </Wrapper>
);