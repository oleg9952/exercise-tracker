import React from 'react';
import {Header} from '../../components/header';
import {Content, PageContainer} from './primary-layout.styled';

const PrimaryLayoutComponent = ({
  navigation,
  showHeader = false,
  headerConfig = {},
  children,
}) => {
  return (
    <PageContainer>
      {showHeader && <Header {...headerConfig} navigation={navigation} />}
      <Content>{children}</Content>
    </PageContainer>
  );
};

export default PrimaryLayoutComponent;
