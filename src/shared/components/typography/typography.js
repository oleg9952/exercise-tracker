import React from 'react';
import {useTheme} from 'styled-components/native';
import {TypographyVariants} from './typography.namespace';
import {Text} from './typography.styled';

const TypographyComponent = ({
  variant = TypographyVariants.P,
  size,
  color,
  style,
  children = '',
}) => {
  const theme = useTheme();
  return (
    <Text
      size={size}
      color={color ?? theme?.palettes?.common?.black}
      variant={variant}
      style={style}>
      {children}
    </Text>
  );
};

export default TypographyComponent;
