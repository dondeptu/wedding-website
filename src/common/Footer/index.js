import { FooterWrapper, Link, Paragraph } from "./styled";

export const Footer = () => (
    <FooterWrapper>
        <Paragraph>
            Design by&nbsp;
            <Link target="_blank" rel="noreferrer noopener" href={"https://dondeptu.com/"}>Donata Deptuła</Link>
        </Paragraph>
    </FooterWrapper>
);