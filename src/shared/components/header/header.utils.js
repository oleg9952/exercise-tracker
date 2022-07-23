import {useRoute} from '@react-navigation/native';

export const useHeaderConfig = ({title = ''} = {}) => {
  const {name} = useRoute() ?? {};
  return {
    title: title || name,
  };
};
