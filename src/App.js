import React from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;

const StyledText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
`;

const App = () => {
  return (
    <StyledView>
      <StyledText>App</StyledText>
    </StyledView>
  );
};

export default App;
