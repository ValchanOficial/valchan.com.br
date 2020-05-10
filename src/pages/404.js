import React from "react";

import Main from '../components/Main'
import SEO from '../components/seo'
import { EmojiSad } from "@styled-icons/entypo/EmojiSad";

const NotFoundPage = () => (
  <Main>
    <SEO title="404: Not found" />
    <div className="notFound">
      <h1>404</h1>
      <p>Page Not Found!</p>
      <div className="icon">
        <EmojiSad/>
      </div>
    </div>
  </Main>
)

export default NotFoundPage;