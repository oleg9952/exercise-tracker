import React from 'react';
import {PrimaryLayout} from '../../shared/layouts/primary-layout';
import {useHeaderConfig} from '../../shared/components/header';
import {Section} from '../../shared/components/section';
import {TimeLine} from '../../shared/components/time-line';
import mock from '../../mock.json';

const HomeScreenComponent = props => {
  const headerConfig = useHeaderConfig({title: 'Training Schedule'});

  return (
    <PrimaryLayout
      navigation={props?.navigation}
      showHeader={true}
      headerConfig={headerConfig}>
      <Section title="Section Title">
        <TimeLine data={mock.timeLineItems} />
      </Section>
    </PrimaryLayout>
  );
};

export const useHomeScreenOptions = () => ({
  component: HomeScreenComponent,
  options: {},
});

export default HomeScreenComponent;
