import { useEffect, useState } from "react";
import { calculateTimeLeft } from "./calculateTimeLeft";
import { CounterSection, Header, Img, Legend, Timer } from "./styled";
import flover from "./flower.png";

export const CountdownSection = () => {

    const targetDate = "2025-08-24T16:00:00+02:00";
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <CounterSection>
            <Header>Niech rozpocznie się odliczanie</Header>
            <Timer>
                <span>{timeLeft.days}</span>
                <span>{timeLeft.hours}</span>
                <span>{timeLeft.minutes}</span>
                <span>{timeLeft.seconds}</span>
                <Legend>dni</Legend>
                <Legend>godzin</Legend>
                <Legend>minut</Legend>
                <Legend>sekund</Legend>
            </Timer>
            <Img src={flover} />
        </CounterSection>
    );
};