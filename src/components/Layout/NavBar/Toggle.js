import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; 

const Toggle = ({ handleNavToggle}) => {
  return <StyledToggle icon={solid('burger')} onClick={handleNavToggle} />;
}

export default Toggle

const StyledToggle = styled(FontAwesomeIcon)`
  z-index: 4;
  color: #333399;
  place-items: center;
  font-size: 36px;
  cursor: pointer;
`;