import React from 'react';
import { CusomButtonContainer } from './custom-button.styles'

const CustomButton = ({children, ...props}) => (
  <CusomButtonContainer {...props}>
    {children}
  </CusomButtonContainer>
);

export default CustomButton;
