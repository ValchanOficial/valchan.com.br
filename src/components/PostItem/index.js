import React from "react";
import PropTypes from 'prop-types';

import * as S from "./style";

const PostItem = ({
        slug, 
        category, 
        date, 
        time, 
        title,
        description
    }) => {
    return (
        <S.PostItemLink to={slug}>
            <S.PostItemWrapper>
            <S.PostItemTag># {category}</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>{date} • <S.PostItemBreak>{time} min de leitura</S.PostItemBreak></S.PostItemDate>
                <S.PostItemTitle>{title}</S.PostItemTitle>
                <S.PostItemDescription>{description}</S.PostItemDescription>
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
    description: PropTypes.string.isRequired
}

export default PostItem;