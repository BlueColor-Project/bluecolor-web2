import React, { useState } from 'react'
import styled from 'styled-components'
import DeleteConfirmModal from './DeleteConfirmModal'

const Introduction = () => {

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [selfIntroduction, setSelfIntroduction] = useState('');
    const [strengths, setStrengths] = useState('');

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
      };
      
      const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
      };

      const handleConfirmDelete = () => {
        setSelfIntroduction('');
        setStrengths('');
        alert('모든 내용이 삭제되었습니다!'); 
        closeDeleteModal(); 
      }; 
      const handleSelfIntroductionChange = (e) => {
        setSelfIntroduction(e.target.value);
      };

      const handleStrengthsChange = (e) => {
        setStrengths(e.target.value);
      };

      const maxLength = 200;



  return (
    <IntroductionContainer>
        <IntroductionSection></IntroductionSection>
        <IntroductionContent>
            <IntroductionSection>
                <IntroductionSectionTitle>자기소개서</IntroductionSectionTitle>
            </IntroductionSection>
            <TitleButton>
                <Button1>저장</Button1>
                <Button2 onClick={openDeleteModal}>전체 삭제</Button2>
            </TitleButton>
        </IntroductionContent>
        <IntroductionInputWrapper>
        <IntroductionInputTitle>자기소개서</IntroductionInputTitle>
            <IntroductionInput
            placeholder='자기소개서를 입력해주세요.'
            value={selfIntroduction}
            onChange={handleSelfIntroductionChange}
            maxLength={maxLength}
            />
            <LastTitle>
                <Title1>총 글자수</Title1>
                <Title2>{selfIntroduction.length} 자</Title2>
                <Title3>/ {maxLength} byte</Title3>
            </LastTitle>
        </IntroductionInputWrapper>
        <IntroductionInputWrapper2>
        <IntroductionInputTitle>본인의 장점</IntroductionInputTitle>
            <IntroductionInput
            placeholder='본인의 장점을 입력해주세요.'
            value={strengths}
            onChange={handleStrengthsChange}
            maxLength={maxLength}
            />
            <LastTitle>
                <Title1>총 글자수</Title1>
                <Title2>{strengths.length} 자</Title2>
                <Title3>/ {maxLength} byte</Title3>
            </LastTitle>
        </IntroductionInputWrapper2>

        {isDeleteModalOpen && (
          <DeleteConfirmModal
            onClose={closeDeleteModal}
            onConfirm={handleConfirmDelete} 
          />
        )}
    </IntroductionContainer>
  )
}

export default Introduction

const IntroductionContainer = styled.div`
margin-top: 20px;
padding: 50px 30px 0 30px;

`

const IntroductionSection = styled.div`

`

const IntroductionContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 30px;
`

const IntroductionSectionTitle = styled.div`
font-size: 32px;
font-weight: 700;
color: #00468e;
`

const TitleButton = styled.div`
margin-right: 50px;
`

const Button1 = styled.button`
border: 1.5px solid #00468e;
box-sizing: border-box;
font-size: 16px;
font-weight: 700;
background-color: #FFF;
cursor: pointer;
padding: 5px 10px;
`

const Button2 = styled.button`
margin: 20px;
border: 1.5px solid #00468e;
box-sizing: border-box;
font-size: 16px;
font-weight: 700;
background-color: #FFF;
cursor: pointer;
color: #F91111;
padding: 5px;
`

const IntroductionInputWrapper = styled.div`
  
`

const IntroductionInputWrapper2 = styled.div`
display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-bottom: 3px solid #00468e;
  margin-bottom: 20px; 
`


const IntroductionInput = styled.textarea`
  width: 1350px;
  height: 170px;
  border: 1.5px solid black;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  resize: none;
  border-radius: 5px;
  box-sizing: border-box;
  display: block;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  outline: none;
  
  &::placeholder {
    color: #808080;
    font-style: italic;
  }
`;


const IntroductionInputTitle = styled.div`
font-size: 22px;
font-weight: 700;
padding: 15px 0;
`

const LastTitle = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
 margin-bottom: 40px;
`

const Title1 = styled.div`
font-size: 16px;
font-weight: 700;
`

const Title2 = styled.div`
font-size: 16px;
font-weight: 700;
color: #F47171;
`

const Title3 = styled.div`
font-size: 16px;
font-weight: 700;
color: #808080;
`
