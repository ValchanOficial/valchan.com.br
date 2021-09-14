import React from "react";

import Main from '../components/Main'
import Seo from '../components/seo'
import Icons from '../components/Icons'

const NotFoundPage = () => (
  <Main>
    <Seo title="404: Not found" description="Página não encontrada | Page not found" />
    <div className="notFound">
      <h1>404</h1>
      <p>Page Not Found!</p>
      <div className="icon">
        <Icons.EmojiSad/>
      </div>
    </div>
  </Main>
)

export default NotFoundPage;