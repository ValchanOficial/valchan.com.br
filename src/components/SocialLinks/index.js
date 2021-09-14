import React from 'react';

import links from './content';
import Icons from '../Icons';

import * as S from './style';

const SocialLinks = () => {
    return (
        <S.SocialLinksWrapper>
            <S.SocialLinksList>
                {links.map((link, i) => {
                    const Icon = Icons[link.icon]
                    return (
                        <S.SocialLinksItem key={i}>
                            <S.SocialLinksLink 
                                href={link.url} 
                                title={link.label} 
                                target="_blank" 
                                rel="nofollow, noreferrer, noopener, external"
                            >
                               <S.Icon>
                                   <Icon/>
                               </S.Icon>
                            </S.SocialLinksLink>
                        </S.SocialLinksItem>
                    )
                })}
            </S.SocialLinksList>
        </S.SocialLinksWrapper>
    );
}

export default SocialLinks;