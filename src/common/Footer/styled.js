import styled from "styled-components";

export const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.footer.background};
    padding: 28px 16px;
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 12px;
    margin: 0;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.footer.link};
    text-decoration: none;
    border-bottom: 1px solid;
`;