import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from '../Modal/Modal'
import SaveButton from '../../images/SaveButton.png'

const UserStrengths = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHireClick = () => {
    setIsModalOpen(true);
  }
  const handleModalClose = () => {
    setIsModalOpen(false);
  }
  return (
    <UserStrengthsContainer>
        <UserStrengthsContent>
                <UserStrengthsContentTitleText>본인의 장점</UserStrengthsContentTitleText>
                <UserStrengthsContentText></UserStrengthsContentText>
        </UserStrengthsContent>
        <UserStrengthsButtonContainer>
        <UserStrengthsButton onClick={handleHireClick}>채용 하기</UserStrengthsButton>
        <Modal isOpen={isModalOpen} onClose={handleModalClose} />
        <UserStrengthsButton2>
        <UserStrengthsButtonImage src={SaveButton} alt="save" />
            <UserStrengthsButtonText>SAVE</UserStrengthsButtonText>
        </UserStrengthsButton2>
        </UserStrengthsButtonContainer>
    </UserStrengthsContainer>
  )
}

export default UserStrengths

const UserStrengthsContainer = styled.div`
 padding: 30px 50px 150px 50px;
`
const UserStrengthsContent = styled.div`
height: 270px;
font-size: 24px;
font-weight: 700;
padding: 10px 0;
border-top: 3px solid #00468e;
border-bottom: 3px solid #00468e;

`

const UserStrengthsContentTitleText = styled.div`
border-bottom: 2px solid #D9D9D9;
`

const UserStrengthsContentText = styled.div`

`
const UserStrengthsButton = styled.button`
  width: 100px;
  height: 35px;
  background-color: #00468e;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
`;

const UserStrengthsButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
margin-top: 100px;
display: flex;
align-items: center;
justify-content: center;
`

const UserStrengthsButton2 = styled.button`
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
background-color: white;
border: 1px solid #00468e;
padding: 10px 10px;
cursor: pointer;
gap: 5px;
`

const UserStrengthsButtonImage = styled.img`
width: 15px;
height: 15px;
`

const UserStrengthsButtonText = styled.div`
font-size: 12px;
color: #00468e;
font-weight: bold;
margin-left: 5px;
`