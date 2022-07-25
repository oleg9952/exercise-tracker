import React from 'react';
import {PrimaryLayout} from '../../shared/layouts/primary-layout';
import {useHeaderConfig} from '../../shared/components/header';
import {Section} from '../../shared/components/section';
import {TimeLine} from '../../shared/components/time-line';
import {useNavigation} from '@react-navigation/native';
import {HomeStackScreens} from '../../navigation/routes.namespace';
import Slider from '../../shared/components/slider/slider';
import mock from '../../mock.json';

const HomeScreenComponent = props => {
  const {navigate} = useNavigation();
  const headerConfig = useHeaderConfig({title: 'Training Schedule'});

  const handleTimeLineItemPress = () => {
    navigate(HomeStackScreens.training);
  };

  return (
    <PrimaryLayout
      navigation={props?.navigation}
      showHeader={true}
      headerConfig={headerConfig}>
      <Section title="Shared Activities">
        <Slider data={mock.sliderData} />
      </Section>
      <Section title="Upcoming Activities">
        <TimeLine onPress={handleTimeLineItemPress} data={mock.timeLineItems} />
      </Section>
    </PrimaryLayout>
  );
};

export const useHomeScreenOptions = () => ({
  component: HomeScreenComponent,
  options: {},
});

export default HomeScreenComponent;
