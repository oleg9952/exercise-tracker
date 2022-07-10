import {useHomeScreenOptions} from '../modules/home';
import {useTrainingScreenOptions} from '../modules/training';
import {stackRoutes} from './routes.namespace';

export const useStackRoutes = () => ({
  [stackRoutes.home]: useHomeScreenOptions(),
  [stackRoutes.training]: useTrainingScreenOptions(),
});
