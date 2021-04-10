import styled from "styled-components";
// import media from "styled-media-query";
// import { Link } from "gatsby";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2em;
    padding-left: 2em;
    padding-right: 2em;
    width: 100%;
    max-width: 500px;
`

export const Message = styled.p`
    margin-top: 0.5em;
    width: 210px;
    color: var(--secTitle);
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
`

export const Text = styled.p`
    margin-bottom: 0.8em;
    color: var(--secTitle);
    font-size: 1.1rem;
    text-align: center;
`