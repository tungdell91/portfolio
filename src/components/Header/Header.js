import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#home">
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skill</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/tungdell91">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://facebook.com/tungdell91">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/t%C3%B9ng-%C4%91inh-ng%E1%BB%8Dc-2404b8216/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
