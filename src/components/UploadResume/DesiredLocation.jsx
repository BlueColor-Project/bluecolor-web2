import React, { useState } from 'react'
import styled from 'styled-components'
import { BsBan } from "react-icons/bs";
import DeleteConfirmModal from './DeleteConfirmModal'

    const DesiredLocation = () => {
        const [locationEntries, setLocationEntries] = useState([
            {id: 1, city: '', district: ''}
        ])

        const [deleteTarget, setDeleteTarget] = useState(null); 


        const [nextId, setNextId] = useState(2);

        const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

        const handleAddEntry = () => {
            if(locationEntries.length < 4){
                setLocationEntries(prevEntries => [
                    ...prevEntries,
                    { id: nextId, city: '', district: '' }
                  ]);
                  setNextId(prevId => prevId + 1);
            } else {
                alert("희망 근무지역은 4개까지만 입력 가능합니다.")
            }
        }

        const handleDeleteEntry = (idToDelete) => {
            if (locationEntries.length > 1) {
                setLocationEntries(prevEntries => prevEntries.filter(entry => entry.id !== idToDelete));
            }
        }

        const handleInputChange = (id, field, value) => {
            setLocationEntries(prevEntries => 
                prevEntries.map(entry => 
                    entry.id === id ? { ...entry, [field]: value } : entry
                )
            );
        }

        const handleOpenDeleteModal = (target) => {
            setDeleteTarget(target);
            setIsDeleteModalOpen(true);
          };
          
          const closeDeleteModal = () => {
            setIsDeleteModalOpen(false);
          };

          const handleConfirmDelete = () => {
            if (deleteTarget === 'location') {
                setLocationEntries([{ id: 1, city: '', district: '' }]);
                setNextId(2);
            } else if (deleteTarget === 'skill') {
                setSkills([{ id: 1, value: '' }]);
                setNextSkillId(2);
            }
            alert('모든 내용이 삭제되었습니다!'); 
            closeDeleteModal(); 
          };

          const [skills, setSkills] = useState([{ id: 1, value: '' }]);
          const [nextSkillId, setNextSkillId] = useState(2);

          const handleAddSkill = () => {
            if (skills.length < 8) {
              setSkills(prev => [...prev, { id: nextSkillId, value: '' }]);
              setNextSkillId(prev => prev + 1);
            } else {
              alert("보유 기술은 8개까지만 입력 가능합니다.");
            }
          };
          
          const handleDeleteSkill = (idToDelete) => {
            if (skills.length > 1) {
              setSkills(prev => prev.filter(skill => skill.id !== idToDelete));
            }
          };
          
          const handleSkillChange = (id, value) => {
            setSkills(prev =>
              prev.map(skill => skill.id === id ? { ...skill, value } : skill)
            );
          };
          
          

    return (
        <AllContainer>
            <AllContainerTitle>
    <DesiredLocationContainer>
        <DesiredLocationContent>
            <DesiredLocationContentTitle>근무 희망지역</DesiredLocationContentTitle>
            <DesiredLocationContentText>희망 근무지역은 4개까지만 입력 가능합니다.</DesiredLocationContentText>
        </DesiredLocationContent>
        <DesiredLocationInputWrapper>
        <ButtonSection>
  <AllDeleteButton onClick={() => handleOpenDeleteModal('location')}>
    전체 삭제
  </AllDeleteButton>
  <AddButtonContainer>
    <Button1
      onClick={handleAddEntry}
      disabled={locationEntries.length >= 4}
    >
      희망지역 추가
    </Button1>
    <Button2>저장</Button2>
  </AddButtonContainer>
</ButtonSection>
        {locationEntries.map(entry => (
            <InputRow key={entry.id}>
                <DesiredLocationInput>
                    <DesiredLocationInput1 
                    placeholder='시/도 만 입력하세요'
                    value={entry.city}
                    onChange={e => handleInputChange(entry.id, 'city', e.target.value)}
                    />
                    <DesiredLocationInput2 
                    placeholder='시/군/구 만 입력하세요'
                    value={entry.district}
                    onChange={e => handleInputChange(entry.id, 'district', e.target.value)}
                    />
                </DesiredLocationInput>
                {locationEntries.length > 1 && (
                    <DeleteButtonContainer>
                        <Button0 onClick={() => handleDeleteEntry(entry.id)}>
                            <BsBan size={25} color='#F91111' />
                        </Button0>
                    </DeleteButtonContainer>
                )}
                </InputRow>
        ))}
    </DesiredLocationInputWrapper>
    </DesiredLocationContainer>



    <SkillsContainer>
        <SkillsContent>
            <SkillsContentTitle>보유 기술</SkillsContentTitle>
            <SkillsContentText>보유 기술은 8개까지만 입력 가능합니다.</SkillsContentText>
        </SkillsContent>
        <SkillsInputWrapper>
            <SkillsInput>
            <ButtonSection2>
            <AllDeleteButton onClick={() => handleOpenDeleteModal('skill')}>
                전체 삭제
                </AllDeleteButton>
        <AddButtonContainer>
          <Button1 onClick={handleAddSkill}>보유기술 추가</Button1>
          <Button2>저장</Button2>
        </AddButtonContainer>
        </ButtonSection2>
        <SkillsInputRowSection>
      {skills.map(skill => (
        <InputButton key={skill.id}>
          <SkillsInput1
            placeholder='자격증명 또는 본인 기술명을 적어주세요.'
            value={skill.value}
            onChange={e => handleSkillChange(skill.id, e.target.value)}
          />
          {skills.length > 1 && (
            <Button0 onClick={() => handleDeleteSkill(skill.id)}>
              <BsBan size={25} color='#F91111' />
            </Button0>
          )}
        </InputButton>
      ))}
    </SkillsInputRowSection>
            </SkillsInput>
        </SkillsInputWrapper>
    </SkillsContainer>
    </AllContainerTitle>

    {isDeleteModalOpen && (
          <DeleteConfirmModal
            onClose={closeDeleteModal}
            onConfirm={handleConfirmDelete} 
          />
        )}
    </AllContainer>
  );
};
export default DesiredLocation


const AllContainer = styled.div`
padding: 15px;
`

const AllContainerTitle = styled.div`
display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
  border-top: 3px solid #00468e;
  flex-wrap: wrap;
`

const DesiredLocationContainer = styled.div`
  margin-top: 50px;
  width: 650px;
  min-height: 300px;
  display: flex;               
  flex-direction: column;
  justify-content: flex-start;
  border-right: 1.5px solid #00468e;
  padding-bottom: 20px;
`

const DesiredLocationContent = styled.div`
display: flex;
gap: 30px;
align-items: center;
justify-content: flex-start;
margin-bottom: 20px;

`

const DesiredLocationContentTitle = styled.div`
font-size: 32px;
font-weight: 700;
color: #00468e;
`

const DesiredLocationContentText = styled.div`
font-size: 16px;
font-weight: 500;
color: #808080;
`

const DesiredLocationInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
`;


const InputRow = styled.div`
 display: flex;
  align-items: center;
  flex-direction: row; 
  gap: 10px;
  margin-bottom: 10px; 
  min-height: 48px; 
`;

const DeleteButtonContainer = styled.div`
margin-left: 20px;
`;

const Button0 = styled.div`
padding: 10px 20px;
cursor: pointer;
`

const DesiredLocationInput = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
`;

const DesiredLocationInput1 = styled.input`
display: flex;
width: 250px;
height: 40px;
border: 1px solid #00468e;
border-radius: 5px;
padding: 10px 20px;
box-sizing: border-box;

&::placeholder {
    color: #D9D9D9;
}
`

const DesiredLocationInput2 = styled.input`
width: 250px;
height: 40px;
border: 1px solid #00468e;
border-radius: 5px;
padding: 10px 20px;
box-sizing: border-box;
margin-left: 20px;

&::placeholder {
    color: #D9D9D9;
}
`

const AddButtonContainer = styled.div`

`

const ButtonSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 10px;
padding-right: 30px;
`


const Button1 = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;
  color: #FFF;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#00468e')};
  border: 1px solid #00468e;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-right: 30px;
`;



const Button2 = styled.button`
padding: 10px 20px;
font-size: 16px;
font-weight: 700;
color: #00468e;
background-color: #FFF;
border: 1px solid #00468e;
cursor: pointer;
`

const AllDeleteButton = styled.button`
padding: 10px 20px;
font-size: 16px;
font-weight: 700;
background-color: #FFF;
border: 1px solid #00468e;
color: #F91111;
cursor: pointer;
`


const SkillsContainer = styled.div`
 margin-top: 40px;
  width: 650px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`

const SkillsContent = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 30px;
margin-bottom: 20px;
`

const SkillsContentTitle = styled.div`
font-size: 32px;
font-weight: 700;
color: #00468e;
`

const SkillsContentText = styled.div`
font-size: 16px;
font-weight: 500;
color: #808080;
`

const SkillsInputWrapper = styled.div`
display: flex;
  flex-direction: column; 
  margin-bottom: 20px; 
`

const SkillsInput = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 5px;
padding-top: 10px;
`

const ButtonSection2 = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

const SkillsInputRowSection = styled.div`
display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 20px;
  width: 100%;
  padding-top: 10px;
`

const SkillsInputRow = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 5px;
`

const InputButton = styled.div`
display: flex;
  align-items: center;
  gap: 10px;
`


const SkillsInput1 = styled.input`
width: 270px;
height: 40px;
border: 1px solid #00468e;
border-radius: 5px;
background-color: #FFF;

&::placeholder {
    color: #D9D9D9;
    font-size: 12px;
    font-weight: 400;
    padding-left: 10px;
}
`