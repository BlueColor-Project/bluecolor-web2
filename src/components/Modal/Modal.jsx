import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'


const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      alert('복사되었습니다!');
    })
    .catch((err) => {
      console.error('복사 실패:', err);
    });
};
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;

  return (
    <ModalWrapper isOpen={isOpen} onClick={onClose}>
      <ModalContent ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <ModalTitleContainer>
            <ModalDeleteButton onClick={onClose}>X</ModalDeleteButton>
        </ModalTitleContainer>
        <ModalContentContainer>
            <ModalContentEmail>
               <ModalContentEmailText>E-mail: you968@naver.com</ModalContentEmailText>
               <EmailButton  onClick={() => handleCopy('you968@naver.com')}>주소복사</EmailButton>
                </ModalContentEmail>
            <ModalContentPhone>
                <ModalContentPhoneText>Phone: 010-9463-9223</ModalContentPhoneText>
                <PhoneButton onClick={() => handleCopy('010-9463-9223')}>번호복사</PhoneButton>
                </ModalContentPhone>
        </ModalContentContainer>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
`

const ModalContent = styled.div`
  width: 315px;
  height: 170px;
  background-color: #f8fafc;
  border: 1px solid #00468e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ModalTitleContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  background-color: #00468e;
  padding-bottom: 30px;
`

const ModalDeleteButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #00468e;
  color: #fff;
  border: none;
  cursor: pointer;
`

const ModalContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ModalContentEmail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const ModalContentEmailText = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: #00468e;
`

const EmailButton = styled.button`
    border-radius: 7px;
    color: #fff;
    border: 1px solid #00468e;
    cursor: pointer;
    font-size: 12px;
    color: black;
`

const ModalContentPhone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const ModalContentPhoneText = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: #00468e;
`

const PhoneButton = styled.button`
    border-radius: 7px;
    color: #fff;
    border: 1px solid #00468e;
    cursor: pointer;
    font-size: 12px;
    color: black;
`