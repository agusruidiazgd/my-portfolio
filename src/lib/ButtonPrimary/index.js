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
      {children}

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
  position: relative;
  color: ${({ outline, color }) => (outline ? color : 'white')};
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  transition: all 0.5s;
  z-index: 1;
  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    background-color: #ee0b72;
    width: 100%;
    height: 0%;
    transition: all 0.5s;
    transform-origin: bottom;
    z-index: -1;
  }
  &:hover:before {
    height: 100%;
  }
  &:hover {
    color: #ffffff;
  }
`;
