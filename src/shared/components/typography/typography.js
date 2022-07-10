import React from 'react';
import {TypographyVariants} from './typography.namespace';
import {Text} from './typography.styled';

const TypographyComponent = ({
  variant = TypographyVariants.P,
  size,
  color = '#000',
  children = '',
}) => (
  <Text size={size} color={color} variant={variant}>
    {children}
  </Text>
);

export default TypographyComponent;
