import { Content, Image, Layout, Paragraph, Title, Wrapper } from "./styled";
import photo from "../beach.jpg";

export const Section = () => (
    <Wrapper>
        <Layout>
            <Title>Once upon a time</Title>
            <Content>
                <Paragraph>
                    Poznaliśmy się na studiach – zupełnie niepozornie, podczas korepetycji z programowania, które Marcin udzielał Donacie. Nie przypuszczaliśmy wtedy, że kilka „pętli” zajęć przerodzi się w coś znacznie ważniejszego...
                </Paragraph>
                <Paragraph>
                    Naszym codziennym rytuałem jest wspólna kawa – parzona z dripa oczywiście. Celebrujemy te chwile, bo to właśnie w nich ukrywa się magia naszej codzienności.
                </Paragraph>
                <Paragraph>
                    Uwielbiamy podróżować, a szczególne miejsce w naszych sercach zajmuje Chorwacja – słońce, woda i wino. Kochamy też wspólne wędrówki po górach – Tatry i Sudety to nasze ulubione kierunki. Ale to Rzym okazał się szczególnym miejscem – właśnie tam, podczas jednej z naszych podróży, powiedzieliśmy sobie „tak” po raz pierwszy – zaręczając się w samym sercu Wiecznego Miasta.
                </Paragraph>
                <Paragraph>
                    Na co dzień kochamy nasze Trójmiasto – Gdańsk to nasz nowy dom, pełen urokliwych uliczek, które znamy niemal na pamięć. Uwielbiamy też wspólne wycieczki rowerowe – każda trasa to nowa przygoda. A do tego mamy dwa czarne koty: Franię i Foresta, które zawsze są blisko, gotowe na drzemkę lub szaloną zabawę.
                </Paragraph>
                <Paragraph>
                    Ten ślub to kolejny rozdział w naszej historii – pięknej, szczerej i pisanej z serca. Cieszymy się, że możemy ją dzielić z Wami.
                </Paragraph>
            </Content>
            <Image src={photo} />
        </Layout>
    </Wrapper>
);