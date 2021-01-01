import React from "react";
import { NavigateNext, NavigateBefore } from '@styled-icons/material-rounded';
import propTypes from "prop-types";
import * as S from "./style";

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink to={previous.fields.slug} className="previous">
        <NavigateBefore title={previous.frontmatter.title}/>
        <span>{previous.frontmatter.title}</span>
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink to={next.fields.slug} className="next">
        <span>{next.frontmatter.title}</span>
        <NavigateNext width="30" title={next.frontmatter.title}/>
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
);

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts;