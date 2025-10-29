import React,{useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import { SlArrowDown } from "react-icons/sl";
import { GrAdd } from "react-icons/gr";
import DeleteConfirmModal from './DeleteConfirmModal'


const WorkExperience = ({id, onAdd, onDelete}) => {

    const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');
    const [isJobInputEditable, setIsJobInputEditable] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState(''); 
  const [totalExperience, setTotalExperience] = useState('');


    const JobDropdownRef = useRef(null);
    const jobInputFieldRef = useRef(null);


    const toggleJobDropdown = () => {
        setIsJobDropdownOpen(prevState => !prevState);
    }

    const handleJobSelect = (job) => {
        setSelectedJob(job);
        setIsJobDropdownOpen(false);

        if(job === '직접입력'){
            setIsJobInputEditable(true);
            setSelectedJob('');
            setTimeout(() => {
                if(jobInputFieldRef.current){
                    jobInputFieldRef.current.focus();
                }
            },0)
        }else{
            setIsJobInputEditable(false);
        }
    }

    const handleJobInputChange = (e) => {
        setSelectedJob(e.target.value);
    }

    const calculateExperience = () => {
        if (startDate && endDate) {
          const start = new Date(startDate);
          const end = new Date(endDate);
          const timeDiff = end - start;
          const days = timeDiff / (1000 * 3600 * 24);
          const years = Math.floor(days / 365);
          const months = Math.floor((days % 365) / 30);
      

          if (years > 0) {
            setTotalExperience(`${years}년 ${months}개월`);
          } else {
            setTotalExperience(`${months}개월`);
          }
        }
      };
    
    useEffect(() => {
        const handleClickoutSide = (e) => {
            if(JobDropdownRef.current && !JobDropdownRef.current.contains(e.target)) {
                setIsJobDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickoutSide);
        return () => {
            document.removeEventListener('mousedown', handleClickoutSide);
        }
    },[])
    useEffect(() => {
        if (startDate && endDate) {
          calculateExperience();
        }
      }, [startDate, endDate]);
    

    const [WorkText, setWorkText] = useState('');
    const myByte = 200;

    const handleWorkTextChange = (e) => {
        const text = e.target.value;
        if(new TextEncoder().encode(text).length <= myByte) {
            setWorkText(text);
        }
    }

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
      };
      
      const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
      };

      const handleConfirmDelete = () => {
        onDelete();
        closeDeleteModal();
        alert('모든 내용이 삭제되었습니다!'); 
      }; 

  return (
    <WorkExperienceContainer>
        <WorkExperienceContent>
            <WorkExperienceSection>
                <WorkExperienceSectionTitle>경력사항</WorkExperienceSectionTitle>
                <WorkExperienceSectionText onClick={onAdd}>
                    <GrAdd size={24} style={{color: 'black'}}/>
                    <span>추가</span>
                </WorkExperienceSectionText>
            </WorkExperienceSection>
            <TitleButton>
                <Button1>저장</Button1>
                <Button2 onClick={openDeleteModal}>전체 삭제</Button2>
            </TitleButton>
        </WorkExperienceContent>
        {isDeleteModalOpen && (
        <DeleteConfirmModal
          onClose={closeDeleteModal}
          onConfirm={handleConfirmDelete}
        />
      )}

        <WorkExperienceInputWrapper>
            <TitleInput>
                <Input1 placeholder='회사명' />
            </TitleInput>
            <InputRow>
            <InputSection>
            <InputSection1>
                <Input2 
                type="date" 
                placeholder='입사년월'
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                />
                </InputSection1>
                <InputSection1>
                <Input2 type="date" placeholder='퇴사년월' 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                />
            </InputSection1>
                <Input3 
                placeholder='총 경력' 
                value={totalExperience}
                readOnly
                />
            </InputSection>


            <InputWithArrow ref={JobDropdownRef} >
            <Input4 
             placeholder= {isJobInputEditable ? '직무를 입력해주세요' : '직무'}
             readOnly={!isJobInputEditable}
             onClick= {isJobInputEditable ? undefined : toggleJobDropdown}
             value={selectedJob}
             onChange={isJobInputEditable ? handleJobInputChange : undefined}
             ref={jobInputFieldRef}
             />
            <StyledArrowDown size={10} onClick={toggleJobDropdown}/>
            {isJobDropdownOpen && (
                <Dropdown>
                    <DropdownItem onClick={() => handleJobSelect('생산·제조')}>생산·제조</DropdownItem>
                    <DropdownItem onClick={() => handleJobSelect('건설·토목')}>건설·토목</DropdownItem>
                    <DropdownItem onClick={() => handleJobSelect('운송·물류')}>운송·물류</DropdownItem>
                    <DropdownItem onClick={() => handleJobSelect('환경·청소')}>환경·청소</DropdownItem>
                    <DropdownItem onClick={() => handleJobSelect('시설·정비')}>시설·정비</DropdownItem>
                    <DropdownItem onClick={() => handleJobSelect('기타·특수')}>기타·특수</DropdownItem>
                    <DropdownItem onClick={() => handleJobSelect('직접입력')}>직접입력</DropdownItem>
                </Dropdown>

            )}
            </InputWithArrow>
            <WorkTextArea>
            <WorkTextLabel>담당업무</WorkTextLabel>
            <WorkTextBox placeholder='담당했던 업무에 대해 자세하게 작성해주세요.'
            value={WorkText}
            onChange={handleWorkTextChange}
            />
            </WorkTextArea>
            <LastTitle>
                <Title1>총 글자수</Title1>
                <Title2>{WorkText.length} 자</Title2>
                <Title3>/ {myByte} byte</Title3>
            </LastTitle>
            </InputRow>
        </WorkExperienceInputWrapper>

        {isDeleteModalOpen && (
          <DeleteConfirmModal
            onClose={closeDeleteModal}
            onConfirm={handleConfirmDelete} 
          />
        )}
    </WorkExperienceContainer>
  )
}

export default WorkExperience

const WorkExperienceContainer = styled.div`
margin-top: 20px;
padding: 50px 30px 0 30px;
`

const WorkExperienceContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 30px;
margin-bottom: 10px;
`

const WorkExperienceSectionTitle = styled.div`
font-size: 32px;
font-weight: 700;
color: #00468e;
`

const WorkExperienceSectionText = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
font-size: 16px;
font-weight: 500;
color: #808080;
cursor: pointer;

&:hover {
    color: #00468e;
}
`
const WorkExperienceSection = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 30px;
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

const WorkExperienceInputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 67px;
  border-top: 3px solid #00468e;
  border-bottom: 3px solid #00468e;
  margin-bottom: 20px; 
`

const TitleInput = styled.div`
width: 280px;
height: 280px;
display: flex;
align-items: center;
justify-content: center;
border-right: 3px solid #00468e;
`

const Input1 = styled.input`
width: 80px;
height: 35px;
border: 1.5px solid #00468e;
border-radius: 5px;
margin-right: 100px;

&::placeholder {
    padding-left: 23px;
}
`

const InputRow = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
gap: 10px;
margin-left: 20px;
`

const InputSection = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
`

const InputSection1 = styled.div`
position: relative;
  width: 150px;
  height: 35px;
  display: flex;
  align-items: center;
`

const Input2 = styled.input`
position: relative;
width: 150px;
height: 35px;
border: 1.5px solid #00468e;
border-radius: 5px;

&::placeholder {
    padding-left: 25px;
}
`

const Input3 = styled.input`
width: 100px;
height: 35px;
border: 1.5px solid #00468e;
border-radius: 15px;

&::placeholder {
    padding-left: 10px;
}
`

const InputWithArrow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 150px; 
  height: 35px; 
`

const Input4 = styled.input`
position: absolute;
width: 100%;
height: 100%;
border: 1.5px solid #00468e;
border-radius: 5px;
padding-right: 25px;
background-color: #FFF;
box-sizing: border-box;

&::placeholder {
    padding-left: 5px;
}
`

const StyledArrowDown = styled(SlArrowDown)`
position: absolute;
right: 8px;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
`

const WorkTextArea = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
gap: 10px;
`

const WorkTextLabel = styled.div`
font-size: 16px;
font-weight: 700;
color: #333;
`

const WorkTextBox = styled.textarea`
width: 1070px;
height: 110px;
border: 1.5px solid #00468e;
border-radius: 5px;
padding: 10px;
font-size: 16px;
resize: none;

&::placeholder {
    padding-left: 10px;
}
`

const LastTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
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

const Dropdown = styled.div`
position: absolute;
top: 100%;
left: 0;
width: 100%;
background-color: #FFF;
border: 1.5px solid #00468e;
border-radius: 0 0 5px 5px;
border-top: none;
padding: 10px;
z-index: 10;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
box-sizing: border-box;
max-height: 150px;
overflow-y: auto;
`

const DropdownItem = styled.div`
padding: 10px 20px;
font-size: 16px;
color: #333;
cursor: pointer;

&:hover {
    background-color: #f0f0f0;
}
`