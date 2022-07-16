import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {PrimaryLayout} from '../../shared/layouts/primary-layout';
import {useHeaderConfig} from '../../shared/components/header';
import {
  Typography,
  TypographyVariants,
} from '../../shared/components/typography';
import {ListItem} from '../../shared/components/list-item';
import {Space} from './home.styled';

const HomeScreenComponent = props => {
  const headerConfig = useHeaderConfig({title: 'Training Schedule'});

  return (
    <PrimaryLayout
      navigation={props?.navigation}
      showHeader={true}
      headerConfig={headerConfig}>
      <Typography variant={TypographyVariants.H3}>Section Title</Typography>
      <Space size={15} />
      <ListItem />
      <Space />
      <ListItem />
      <Space />
      <ListItem />
      <Space />
      <ListItem />
      <Space />
      <ListItem />
    </PrimaryLayout>
  );
};

export const useHomeScreenOptions = () => ({
  component: HomeScreenComponent,
  options: {},
});

export default HomeScreenComponent;
