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
  &::before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff200;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: transform 1s;
  }
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