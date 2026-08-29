import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Icons from "../Icons"

import * as S from "./style"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <Link to={prevPage} title="Página anterior" aria-label="Página anterior">
        <Icons.NavigateBefore aria-hidden="true" />
      </Link>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <Link to={nextPage} title="Próxima página" aria-label="Próxima página">
        <Icons.NavigateNext aria-hidden="true" />
      </Link>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
