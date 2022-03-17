import React from 'react'
import styled from 'styled-components'

const BtnPrimary = ({ action, children, style, outline }) => {
  return (
    <Btn
      onClick={action}
      outline={outline}
      width={style.width}
      color={style.color}
    >
      <Text outline={outline} color={style.color}>
        {children}
      </Text>
    </Btn>
  );
};

export default BtnPrimary;

const Btn = styled.button`
  box-sizing: border-box;
  padding: 5px 50px;
  border-radius: 3px;
  background-color: ${({ outline, color }) => (outline ? 'white' : color)};
  border: ${({ outline, color }) => (outline ? `1px solid ${color}` : 'none')};
  cursor: pointer;
`;
const Text = styled.p`
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  color: ${({ outline, color }) => (outline ? color : 'white')};
`;