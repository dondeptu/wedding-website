import { FooterWrapper, Link, Paragraph } from "./styled";

export const Footer = () => {
    const authorPath = "https://dondeptu.com/";

    return (
        <FooterWrapper>
            <Paragraph>
                Design by&nbsp;
                <Link target="_blank" rel="noreferrer noopener" href={authorPath}>Donata Deptuła</Link>
            </Paragraph>
        </FooterWrapper>
    );
}