import React, { useRef } from 'react';
import styled from 'styled-components';
import BtnPrimary from '../../lib/ButtonPrimary'
  import { useOnClickOutside } from '../../hooks/useOnClickOutside';
  import { Link } from 'react-router-dom';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {
    solid,
    regular,
    brands,
  } from '@fortawesome/fontawesome-svg-core/import.macro'; 

const Modal = ({ handleClose, show, children, scrollPos }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => handleClose());

  return (
    <Background show={show}>
      <MainModal ref={ref} topPos={scrollPos}>
        <Close onClick={handleClose}>x</Close>
        {children}
        <FooterModal>
          <Link to="/contact">
            <BtnPrimary
              action={handleClose}
              outline
              style={{ width: '160px', color: ' #ee0b72' }}
            >
              CONTACT ME{' '}
              <FontAwesomeIcon
                className="icon"
                icon={solid('arrow-right-long')}
              />
            </BtnPrimary>
          </Link>
        </FooterModal>
      </MainModal>
    </Background>
  );
};

export default Modal

const Background = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 6;
`;

const Close = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;
  background-color: #c8c6c6;
  cursor: pointer;
  color: #ffffff;
  border: none;
  font-family: 'Poppins';
`;

const MainModal = styled.section`
position:relative;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  background: white;
  width: 90%;
  height: 90vh;
  
  overflow: scroll;
  ${'' /* transform: translate(-50%, -50%); */}
`;

const FooterModal = styled.footer`
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 20px 0;
`;
