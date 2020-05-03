import styled from "styled-components";
import { Link } from "gatsby";

export const RecommendedWrapper = styled.section`
    background: var(--background);
    display: flex;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    
`

export const RecommendedLink = styled(Link)`
    font-weight: bold;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    align-items: center;
    color: var(--color);
    display: flex;
    padding: 2.5rem;
    text-decoration: none;
    transition: background 0.5s;
    width: 50%;
    margin: 0.2rem;

    &:hover {
        background: var(--recommendedPost);
    }

    &.previous {
        border-radius: 1rem;
        border: 1px solid var(--border);
        transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;

        &:hover {
            padding-left: 0.6rem;
            border-left: 0.5rem solid var(--color);
        }
    }

    &.next {
        border-radius: 1rem;
        border: 1px solid var(--border);
        justify-content: flex-end;
        transition: border-right 300ms ease-in-out, padding-right 300ms ease-in-out;

        &:hover {
            padding-right: 0.6rem;
            border-right: 0.5rem solid var(--color);
        }
    }

    &.previous:before {
        content: "\\2190";
        margin-right: 0.5rem;
    }
    
    &.next:after {
        content: "\\2192";
        margin-left: 0.5rem;
    }
`