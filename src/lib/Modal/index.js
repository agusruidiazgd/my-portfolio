import React from 'react'
import styled from 'styled-components';
import BtnPrimary from '../../lib/ButtonPrimary'

const Modal = ({ handleClose, show, children, scrollPos }) => {
  return (
    <Background show={show}>
        <MainModal topPos={scrollPos}>
            {children}
            <FooterModal>
                <BtnPrimary
                    action={handleClose}
                    outline
                    style={{ width: '160px', color: ' #ee0b72' }}
                >
                    Close
                </BtnPrimary>
            </FooterModal>
        </MainModal>
    </Background>
  );
};

export default Modal

const Background = styled.div`
overflow:auto;
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 6;
`;

const MainModal = styled.section`
  position: fixed;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  background: white;
  width: 90%;
  height: 90vh;
  top: ${({ topPos }) => `${topPos}px`};
  left: 50%;
  overflow: scroll;
  transform: translate(-50%, -50%);
`;

const FooterModal = styled.footer`
    align-items: center;
    justify-content: center;
    display: flex;
`;
