import {Stacks} from '../routes.namespace';
import {useHomeStackOptions} from '../stacks';

export const useDrawerRoutes = () => ({
  [Stacks.homeStack]: useHomeStackOptions(),
});
