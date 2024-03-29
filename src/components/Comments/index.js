import PropTypes from "prop-types"
import React from "react"
import ReactDisqusComments from "react-disqus-comments"

import * as S from "./style"

const Comments = ({ url, title }) => {
  const completeURL = `https://valchan.com.br${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="valchan"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
