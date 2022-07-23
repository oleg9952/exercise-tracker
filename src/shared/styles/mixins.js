export const withSideInsets = ({value = 10, type = 'padding'} = {}) => ({
  [`${type}-horizontal`]: `${value}px`,
});
