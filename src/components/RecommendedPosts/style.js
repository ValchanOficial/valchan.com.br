import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "gatsby";

export const RecommendedWrapper = styled.section`
    background: var(--background);
    display: flex;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 0.5rem;

    ${media.lessThan("large")`
        font-size: 0.8rem;
    `}
    
`

export const RecommendedLink = styled(Link)`
    font-weight: bold;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    align-items: center;
    color: var(--color);
    display: flex;
    padding: 2.8rem;
    text-decoration: none;
    transition: background-color 0.5s;
    width: 50%;
    margin: 0.2rem;

    &:hover {
        background-color: var(--recommendedPost);
    }

    &.previous {
        border-radius: 1rem;
        transition:  border-bottom 300ms ease-in-out;
    } 

    &.next {
        border-radius: 1rem;
        justify-content: flex-end;
        transition: border-bottom 300ms ease-in-out;
    }

    &.previous:before {
        content: "⯇";
        font-size: 25px;
        margin-right: 0.5rem;
    }
    
    &.next:after {
        content: "⯈";
        font-size: 25px;
        margin-left: 0.5rem;
    }
`