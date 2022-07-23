import React from 'react';
import {Typography} from '../../shared/components/typography';
import {PrimaryLayout} from '../../shared/layouts/primary-layout';

const TrainingScreenComponent = () => {
  return (
    <PrimaryLayout>
      <Typography>Training Screen</Typography>
    </PrimaryLayout>
  );
};

export const useTrainingScreenOptions = () => ({
  component: TrainingScreenComponent,
  options: {
    headerShown: true,
    title: 'Training Details',
  },
});

export default TrainingScreenComponent;
