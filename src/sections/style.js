import { Link } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"

// Section About

export const AboutContainer = styled.div`
  position: relative;
  display: flex;
  padding: 15rem 0;
  justify-content: center;
  gap: 3rem;
  align-items: center;

  ${media.lessThan("large")`
    padding: 10rem 0.5rem;
    flex-direction: column;
  `}
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

  ${media.lessThan("large")`
    font-size: 2.5rem;
  `}
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

  ${media.lessThan("large")`
    padding: 8rem 1rem;
  `}
`

export const Quote = styled.q`
  font-family: "Inter", serif;
  font-size: 4rem;
  color: var(--text-light);
  max-width: 70rem;
  text-align: center;

  ${media.lessThan("large")`
    font-size: 2rem;
  `}
`

// Section Blog

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 12rem auto;

  ${media.lessThan("large")`
    padding: 0;
    flex-direction: column;
    align-items: center;
  `}
`

export const TitleWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 5rem;

  ${media.lessThan("large")`
    margin-left: 0;
  `}
`

export const ListWrapper = styled.ul`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media.lessThan("large")`
    width: 90%;
    align-items: center;
  `}
`

export const PostLink = styled(Link)`
  max-width: 60%;
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

  ${media.lessThan("large")`
    max-width: 100%;
  `}
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

// Section Projects

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 10rem;
  position: relative;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`

// Section Experiences

export const ExperiencesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 15rem auto;
`

export const Experience = styled.li`
  width: 50%;
  max-width: 70rem;
  border: 1px solid var(--main);
  background: rgb(255, 255, 255, 0.4);
  padding: 2rem;

  ${media.lessThan("large")`
    width: 100%;
  `}
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

export const RecommendationsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 30rem;

  ${media.lessThan("large")`
    flex-direction: column;
    height: auto;
  `}
`

export const Recommendation = styled.li`
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

  ${media.lessThan("large")`
    width: auto;
  `}
`

// Section Contact

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  height: 50rem;
  padding: 15rem 15rem 2rem;
  align-items: flex-end;

  -webkit-box-shadow: inset 50rem 0rem 20rem 0rem var(--main);
  -moz-box-shadow: inset 50rem 0rem 20rem 0rem var(--main);
  box-shadow: inset 50rem 0rem 20rem 0rem var(--main);

  ${media.lessThan("large")`
    padding: 10rem 5rem 2rem;
    flex-direction: column;
    align-items: center;
    align-content: center;
  `}
`

export const ContactTitle = styled.div`
  align-self: center;
  z-index: 1;

  ${media.lessThan("large")`
    text-align: center;
  `}
`
