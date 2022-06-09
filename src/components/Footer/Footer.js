import React from 'react';
import { AiFillGithub,  AiFillLinkedin, AiFillFacebook} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0362282696">036 2282 696</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:tung.dn.fnb@gmail.com">
            tung.dn.fnb@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/tungdell91">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://facebook.com/tungdell91">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/t%C3%B9ng-%C4%91inh-ng%E1%BB%8Dc-2404b8216/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
