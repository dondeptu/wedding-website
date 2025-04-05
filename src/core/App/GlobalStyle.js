import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize};

    html {
        box-sizing: border-box;
    }
    
    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Playfair Display", serif;
        background-color: ${({ theme }) => theme.colors.page.background};
        color: ${({ theme }) => theme.colors.page.text};
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.05em;
        word-break: break-word;
    }
`;