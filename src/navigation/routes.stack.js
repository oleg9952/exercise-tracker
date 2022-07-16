import {useHomeScreenOptions} from '../modules/home';
import {useTrainingScreenOptions} from '../modules/training';
import {HomeStackScreens} from './routes.namespace';

export const useHomeStackRoutes = () => ({
  [HomeStackScreens.home]: useHomeScreenOptions(),
  [HomeStackScreens.training]: useTrainingScreenOptions(),
});
