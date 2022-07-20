import React from 'react';
import {SectionContent, SectionTitle, SectionWrapper} from './section.styled';

const Section = ({title, children}) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  );
};

export default Section;
