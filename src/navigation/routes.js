import {useHomeScreenOptions} from '../modules/home';
import {useTrainingScreenOptions} from '../modules/training';
import {StackRoutes} from './routes.namespace';

export const useStackRoutes = () => ({
  [StackRoutes.home]: useHomeScreenOptions(),
  [StackRoutes.training]: useTrainingScreenOptions(),
});
