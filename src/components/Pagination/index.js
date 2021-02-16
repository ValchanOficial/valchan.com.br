import React from "react";
import { NavigateNext, NavigateBefore } from '@styled-icons/material-rounded';
import propTypes from "prop-types";
import { Link } from "gatsby";

import * as S from "./style";

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst && <Link to={prevPage} title="Página anterior"><NavigateBefore title="Página anterior"/><span>Página anterior</span></Link>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && <Link to={nextPage} title="Próxima página" ><span>Próxima página</span><NavigateNext title="Próxima página"/></Link>}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination;