import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = () => {
  const handleClick = () => {
    window.open('https://www.topcv.vn/xem-cv/UwcHA1wMWAZWAgIGAFhbVFYIAQdUB1MDAlxbAwe7f3')
  }

  return (
       <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        My name is Tung, Front End Developer at EMSO JS Company. I'm looking for a position related to Front End Developer or Quality Control(Manual Testing, Automation Testing)
        </SectionText>
        <Button onClick={handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  )
}


export default Hero;