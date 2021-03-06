import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "gatsby"

export const Header = styled.header`
    background: var(--background);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    margin-bottom: 7rem;
    width: 100vw;

    ${media.lessThan("large")`
        display: none;
    `}
`

export const HeaderLink = styled(Link)`
    color: var(--mainTitle);
    text-shadow: 0 2px var(--text);
    text-decoration: none;
    font-family: Satisfy, Helvetica, sans-serif;
    font-size: 90px;
    margin-bottom: 10px;
`

export const HeaderAnimation = styled.p`
    border-right: 2px solid var(--text);
    color: var(--text);
    font-family: "Special Elite", monospace;
    font-size: 16px;
    text-align: center;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;

    animation: blinkCursor 700ms steps(40) infinite normal,
    typing 4s steps(40) 1s normal both;

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 44.5em;
        }
    }

    @keyframes blinkCursor {
        from {
            border-right-color: var(--text);
        }
        to {
            border-right-color: transparent;
        }
    }
`