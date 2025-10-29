import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom'; 
import { IoCloseSharp } from "react-icons/io5"; 

const DeleteConfirmModal = ({ onClose, onConfirm }) => {
  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <IoCloseSharp size={24} />
        </CloseButton>
        <ModalText>정말 삭제하시겠습니까?</ModalText>
        <ModalActions>
          <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
          <CancelButton onClick={onClose}>취소</CancelButton>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById('modal-root') 
  );
};

export default DeleteConfirmModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 350px; 
  max-width: 90%; 
  position: relative; 
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #555;

  &:hover {
    color: #000;
  }
`;

const ModalText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const ConfirmButton = styled.button`
  padding: 10px 25px;
  background-color: #00468e;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #00306b;
  }
`;

const CancelButton = styled.button`
  padding: 10px 25px;
  background-color: #ccc;
  color: #333;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`;