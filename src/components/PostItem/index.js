import PropTypes from "prop-types"
import React from "react"

import * as S from "./style"

const PostItem = ({ slug, category, date, time, title, description }) => {
  return (
    <S.PostItemLink to={slug}>
      <S.PostItemWrapper>
        <S.PostItemInfo>
          <S.PostItemTag># {category}</S.PostItemTag>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
          <S.PostItemDate>
            {date} • <S.PostItemBreak>{time} min de leitura</S.PostItemBreak>
          </S.PostItemDate>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  )
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
