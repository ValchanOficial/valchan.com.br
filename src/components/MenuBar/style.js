import { Link } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"

export const MenuBarWrapper = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  height: 32px;
  margin-top: 2em;
  margin-bottom: 2em;

  svg {
    height: 30px;
    width: 30px;
  }

  ${media.lessThan("large")`
        height: 42px;

        svg {
            height: 40px;
            width: 40px;
        }
    `}
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarIcon = styled.div`
  color: var(--text);
  cursor: pointer;
  width: 32px;
  height: auto;

  ${media.lessThan("large")`
        width: 42px;
    `}

  &.dark {
    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--linkHover);
  }
`
