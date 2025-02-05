import { Link } from "gatsby"
import styled from "styled-components"

// Section About

export const AboutContainer = styled.div`
  position: relative;
  display: flex;
  padding: 15rem 0;
  justify-content: center;
  gap: 3rem;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  > div:nth-child(3) {
    // CircularText
    position: absolute;
    bottom: 0;
    right: 1.5rem;
    user-select: none;
    z-index: 1;
  }
`
export const Article = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 45rem;
`
export const Title = styled.h2`
  font-family: "Libre Baskerville", serif;
  font-size: 3rem;
  color: var(--text-dark);
  margin-bottom: 2.5rem;
`

export const Paragraph = styled.p`
  font-family: "Inter", serif;
  font-size: 1.5rem;
  color: var(--text-dark);
  max-width: 39rem;
`

// Section Quote and Projects

export const QuoteContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15rem 0;
  justify-content: center;
  align-items: center;
  padding: 8rem 10rem;
`

export const Quote = styled.q`
  font-family: "Inter", serif;
  font-size: 4rem;
  color: var(--text-light);
  max-width: 70rem;
  text-align: center;
`

// Section Blog

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 12rem auto;
`

export const TitleWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 5rem;
`

export const ListWrapper = styled.ul`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PostLink = styled(Link)`
  color: var(--text);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-size: 1.4rem;

  font-family: "Inter", serif;
  color: var(--text-dark);

  &:hover {
    & > h4 {
      text-decoration: underline;
    }
  }
`

export const PostTag = styled.span`
  color: var(--main);
  font-family: "Atkinson Hyperlegible", sans-serif;
`

export const PostTitle = styled.h4``
export const PostDate = styled.span`
  font-size: 1.2rem;
`
export const PostDescription = styled.p`
  font-size: 1.2rem;
`

// Section Experiences

export const ExperiencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 15rem auto;
`

export const Experience = styled.div`
  width: 100%;
  max-width: 70rem;
  border: 1px solid var(--main);
  background: rgb(255, 255, 255, 0.4);
  padding: 2rem;
`

export const ButterflyWithText = styled.div`
  position: absolute;
  top: 10rem;
  left: 10rem;
`

// Section Recommendations

export const RecommendationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin: 15rem auto;
`

export const RecommendationsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 30rem;
`

export const Recommendation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
  border: 0.5rem solid var(--main);
  padding: 2rem;
  height: 100%;
  width: 30rem;

  font-family: "Inter", serif;
  text-align: center;
  color: var(--text-light);
  font-size: 1rem;
  line-height: 1.5rem;

  > h3,
  span {
    font-weight: 700;
    white-space: nowrap;
  }

  > p {
    margin-top: 1rem;
  }
`

// Section Contact

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  height: 25rem;
  margin: 15rem 15rem 2rem;
  align-items: flex-end;
`

export const ContactTitle = styled.div`
  align-self: center;
`
