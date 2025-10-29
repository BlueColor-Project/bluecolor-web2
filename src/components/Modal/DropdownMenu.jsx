import React from 'react';
import styled from 'styled-components';

const DropdownMenu = ({ options, onSelect }) => {
  return (
    <DropdownContainer>
      {options.map((option, index) => (
        <DropdownItem key={index} onClick={() => onSelect(option)}>
          {option}
        </DropdownItem>
      ))}
    </DropdownContainer>
  );
};

export default DropdownMenu;

const DropdownContainer = styled.div`
  border: 1px solid #00468e;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute; 
  width: 100%; 
  max-height: 200px;
  overflow-y: auto;
  z-index: 10; 
  top: 100%; 
  right: 0;
  margin-top: 5px;
`;

const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;