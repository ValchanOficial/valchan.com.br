import styled from "styled-components";
import Img from 'gatsby-image';

export const Avatar = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AvatarDetails = styled.section`
    display: flex;
    width: 165px;
    height: 165px;
    border-radius: 100%;
	background: linear-gradient(to bottom right, #7F054E, #EAB9E1);
`

export const AvatarImg = styled(Img)`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    margin: auto;
`