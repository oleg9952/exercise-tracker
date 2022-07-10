import React from 'react';
import {Header} from '../../components/header';
import {Content, PageContainer} from './primary-layout.styled';

const PrimaryLayoutComponent = ({
  showHeader = false,
  headerConfig = {},
  children,
}) => {
  return (
    <PageContainer>
      {showHeader && <Header {...headerConfig} />}
      <Content>{children}</Content>
    </PageContainer>
  );
};

export default PrimaryLayoutComponent;
