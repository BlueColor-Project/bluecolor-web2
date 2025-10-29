import React, {useState} from 'react'
import styled from 'styled-components'
import { SlArrowDown } from "react-icons/sl";


const JobPosting = () => {

  const [workText, setWorkText] = useState('');
  const [requirementsText, setRequirementsText] = useState('');
  const [conditionsText, setConditionsText] = useState('');
  const [benefitsText, setBenefitsText] = useState('');
  const [phoneRaw, setPhoneRaw] = useState('');
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalDays, setTotalDays] = useState('');
  const [showSavedPopup, setShowSavedPopup] = useState(false);





  const handleSaveClick = () => {
    setShowSavedPopup(true);
    setTimeout(() => {
      setShowSavedPopup(false);
    }, 3000);
  };


  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
  }

    const calcTotalDays = (start, end) => {
      if (!start || !end) return '';
      const s = new Date(start);
      const e = new Date(end);
      const diffMs = e.getTime() - s.getTime();
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
      return days > 0 ? days : '';
    };
    
    const handleStartDateChange = (e) => {
      const val = e.target.value;
      setStartDate(val);
      setTotalDays(calcTotalDays(val, endDate));
    };
    
    const handleEndDateChange = (e) => {
      const val = e.target.value;
      setEndDate(val);
      setTotalDays(calcTotalDays(startDate, val));
    };

 
   
  const formatPhone = (value) => {
    const nums = value.replace(/\D/g, '')
    if (nums.length < 4) return nums
    if (nums.length < 7)
      return `${nums.slice(0,3)}-${nums.slice(3)}`
    if (nums.length < 11) 
      return `${nums.slice(0,3)}-${nums.slice(3,7)}-${nums.slice(7)}`
    
    return `${nums.slice(0,3)}-${nums.slice(3,7)}-${nums.slice(7,11)}`
  }

  const handlePhoneChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, '')
    const lastDigit = onlyNums.slice(-1)
    if (/\d/.test(lastDigit)) {
      setPhoneRaw(prev => (prev + lastDigit).slice(0, 11))
    }
  }

  const handlePhoneKeyDown = (e) => {
    if (e.key === 'Backspace') {
      e.preventDefault()
      setPhoneRaw(prev => prev.slice(0, -1))  
    }
  }



    const [descripttionError, setDescripttionError] = useState(false);

    const [isExperienced, setIsExperienced] = useState(false);


    const [showEmailSubModal, setShowEmailSubModal] = useState(false);
    const [emailDomain, setEmailDomain] = useState('');
    const [emailLocalPart, setEmailLocalPart] = useState('');
    const [selectedJob, setSelectedJob] = useState('');
    const [directJobInput, setDirectJobInput] = useState('');
    const [showJobPostingModal, setShowJobPostingModal] = useState(false);
    const [isDirectInputMode, setIsDirectInputMode] = useState(false);


  
    const toggleEmailSubModal = () => {
        setShowEmailSubModal(prev => !prev);
      };

      const handleEmailDomainSelect = (domain) => {
        setEmailDomain(domain);
        setIsDirectInputMode(false);
        setShowEmailSubModal(false); 
        const [localPart] = email.split('@');
        setEmail(`${localPart}@${domain}`);
        setShowEmailSubModal(false);
        setIsDirectInputMode(false);
      };

      const handleDirectInputClick = () => {
        setIsDirectInputMode(true);
        setShowEmailSubModal(true);
        setEmailDomain('');
      };

      const handleEmailLocalPartChange = (e) => {
        setEmailLocalPart(e.target.value);
        const domain = e.target.value;
        const [localPart] = email.split('@');
        setEmail(`${localPart}@${domain}`);
      };

      const handleDirectDomainInputChange = (e) => {
        setEmailDomain(e.target.value);
      };

      
      const toggleJobPostingModal = () => {
        setShowJobPostingModal(prev => !prev);
      };

      const handleJobSelect = (job) => {
        setSelectedJob(job);
        setDirectJobInput('');
        setShowJobPostingModal(false);
      };

      const handleDirectJobInputChange = (e) => {
        setDirectJobInput(e.target.value);
        setSelectedJob('');
      };

      const handleConfirmDirectJobInput = () => {
        setSelectedJob(directJobInput);
        setShowJobPostingModal(false);
      };
      

    return (
      <JobPostingContainer>
        <RevisionContainer>
          <RevisionTitleContainer>
            <RevisionTitle>공고등록</RevisionTitle>
            </RevisionTitleContainer>
            <ContentContainer>
            <RevisionContent>
                <FirstInput1>
                    <FirstInput1Title>공고명</FirstInput1Title>
                <NoticeInput placeholder='30자 내로  제목을 적어주세요.' maxLength={30}/>
                </FirstInput1>
                <FirstInput2>
                    <FirstInput1Title>회사명</FirstInput1Title>
                <NoticeInput placeholder='30자 내로  제목을 적어주세요.' maxLength={30}/>
                </FirstInput2>
            </RevisionContent>
            <RevisionContent>
                <FirstInput1>
                    <FirstInput1Title>직무</FirstInput1Title>
                    <InputWithIconWrapper>
                <NoticeInput
                            placeholder='입력 또는 선택해주세요'
                            value={selectedJob || directJobInput}
                            onChange={handleDirectJobInputChange}
                            readOnly={selectedJob !== ''}
                        />
                <SlArrowDown
                    size={20}
                    style={{
                        position: 'absolute',
                        right: '15px',
                        cursor: 'pointer',
                        zIndex: 2,
                    }}
                    onClick={toggleJobPostingModal}
                />
                {showJobPostingModal && (
                            <JobPostingModal>
                                <JobOptionButton onClick={() => handleJobSelect('생산·제조')} selected={selectedJob === '생산·제조'}>생산·제조</JobOptionButton>
                                <JobOptionButton onClick={() => handleJobSelect('건설·토목')} selected={selectedJob === '건설·토목'}>건설·토목</JobOptionButton>
                                <JobOptionButton onClick={() => handleJobSelect('운송·물류')} selected={selectedJob === '운송·물류'}>운송·물류</JobOptionButton>
                                <JobOptionButton onClick={() => handleJobSelect('환경·청소')} selected={selectedJob === '환경·청소'}>환경·청소</JobOptionButton>
                                <JobOptionButton onClick={() => handleJobSelect('시설·정비')} selected={selectedJob === '시설·정비'}>시설·정비</JobOptionButton>
                                <JobOptionButton onClick={() => handleJobSelect('기타·특수')} selected={selectedJob === '기타·특수'}>기타·특수</JobOptionButton>
                                <DirectJobInputContainer>
                                    <DirectJobInputField
                                        placeholder='직접입력'
                                        value={directJobInput}
                                        onChange={handleDirectJobInputChange}
                                        maxLength={10}
                                    />
                                    <CharacterCount>{directJobInput.length}자 / 10자</CharacterCount>
                                </DirectJobInputContainer>
                                <ConfirmButton onClick={handleConfirmDirectJobInput}>확인</ConfirmButton>
                            </JobPostingModal>
                )}
                </InputWithIconWrapper>
                </FirstInput1>
                <FirstInput2>
                    <FirstInput1Title>근무지역</FirstInput1Title>
                <NoticeInput placeholder='상세 주소를 적어주세요' maxLength={50}/>
                </FirstInput2>
            </RevisionContent>
            <RevisionContent>
                <FirstInput1>
                    <FirstInput1Title>평균연봉</FirstInput1Title>
                <NoticeInput placeholder='평균 연봉을 입력해주세요 (단위: 원)' maxLength={30}/>
                </FirstInput1>
            </RevisionContent>
            </ContentContainer>
            <FirstInput3>
                <FirstInput3Title>업무내용</FirstInput3Title>
                <WorkTextArea>
              <WorkTextBox 
                placeholder="담당했던 업무에 대해 자세하게 작성해주세요."
                value={workText}
                onChange={e=>setWorkText(e.target.value)}
              />
              <LastTitle>
                <Title1>총 글자수</Title1>
                <Title2>{workText.length} 자</Title2>
                <Title3>/ 200 byte</Title3>
              </LastTitle>
            </WorkTextArea>
            {descripttionError && <Title4>※ 200byte를 초과했습니다.</Title4>}
        </FirstInput3>
        <FirstInput3>
                <FirstInput3Title>자격요건</FirstInput3Title>
                <WorkTextArea2>
                <WorkTextBox 
                placeholder="자격요건을 입력해주세요."
                value={requirementsText}
                onChange={e=>setRequirementsText(e.target.value)}
              />
            <LastTitle>
            <Title1>총 글자수</Title1>
                <Title2>{requirementsText.length} 자</Title2>
                <Title3>/ 200 byte</Title3>
            </LastTitle>
            </WorkTextArea2>
            {descripttionError && <Title4>※ 200byte를 초과했습니다.</Title4>}
        </FirstInput3>
        <FirstInput3>
                <FirstInput3Title>근무조건</FirstInput3Title>
                <WorkTextArea3>
                <WorkTextBox 
                placeholder="근무조건을 입력해주세요."
                value={conditionsText}
                onChange={e=>setConditionsText(e.target.value)}
              />
            <LastTitle>
                <Title1>총 글자수</Title1>
                <Title2>{conditionsText.length} 자</Title2>
                <Title3>/ 200 byte</Title3>
            </LastTitle>
            </WorkTextArea3>
            {descripttionError && <Title4>※ 200byte를 초과했습니다.</Title4>}
        </FirstInput3>
        <CareerCheck>
        <FirstInput3Title>경력조건</FirstInput3Title>
        <CheckboxContainer>
        <Checkbox>
            <CheckboxInput 
            type="checkbox"
            checked={!isExperienced}
            onChange={() => setIsExperienced(false)}
            />
            <CheckboxLabel>신입</CheckboxLabel>
            <CheckboxInput 
            type="checkbox"
            checked={isExperienced}
            onChange={() => setIsExperienced(true)} 
            />
            <CheckboxLabel>경력</CheckboxLabel>
        </Checkbox>
        {isExperienced && (
          <>
        <CheckInputContainer>
        <CheckInput type="text" placeholder='예:1'/>
        <Text>년 이상</Text>
        </CheckInputContainer>
        <Text2>~</Text2>
        <CheckInputContainer>
        <CheckInput type="text" placeholder='예:10'/>
        <Text>년 이하</Text>
        </CheckInputContainer>
        </>
        )}
        </CheckboxContainer>
        </CareerCheck>
        <FirstInput3>
                <FirstInput3Title>복리후생</FirstInput3Title>
                <WorkTextBox 
                placeholder="복리후생을 입력해주세요."
                value={benefitsText}
                onChange={e=>setBenefitsText(e.target.value)}
                style={{height: '150px', paddingTop: '10px', border: '1px solid #00468e', backgroundColor: 'white'}}
              />
        </FirstInput3>
        <Manager>
        <FirstInput1>
        <FirstInput3Title>담당자 연락처</FirstInput3Title>
            <NoticeInput 
            placeholder='번호를 입력해주세요' 
            maxLength={13}
            value={formatPhone(phoneRaw)}
            onChange={handlePhoneChange}
            onKeyDown={handlePhoneKeyDown}
            />
        </FirstInput1>
        <FirstInput1>
        <CheckboxContainer2>
        <FirstInput3Title> 담당자 이메일</FirstInput3Title>
            </CheckboxContainer2>
            <EmailInputGroup>
            <NoticeInput
          placeholder="이메일을 입력하거나, 오른쪽에서 선택하세요."
          value={email}
          onChange={handleEmailChange}
          style={{ width: '300px' }}
        />
                {isDirectInputMode ? (
                    <DirectEmailInput
                        placeholder='직접입력'
                        value={emailDomain}
                        onChange={handleDirectDomainInputChange}
                        maxLength={10}
                    />
                ) : (
                    <EmailDomainDisplay>
                      {emailDomain || '직접입력'} 
                    </EmailDomainDisplay>
                )}
                   <SlArrowDown
                   size={20}
                   onClick={toggleEmailSubModal}
                   style={{ marginLeft: '10px', cursor: 'pointer' }}
                   />
                {showEmailSubModal && (
                    <EmailSubModal>
                        <DomainButton 
                        onClick={() => handleEmailDomainSelect('naver.com')}
                        selected={emailDomain === 'gmail.com' && !isDirectInputMode}
                        >
                        naver.com
                        </DomainButton>
                        <DomainButton 
                        onClick={() => handleEmailDomainSelect('gmail.com')}
                        selected={emailDomain === 'gmail.com' && !isDirectInputMode}
                        >
                        gmail.com
                        </DomainButton>
                        <DomainButton 
                        onClick={() => handleEmailDomainSelect('daum.net')}
                        selected={emailDomain === 'daum.net' && !isDirectInputMode}
                        >
                        daum.net
                        </DomainButton>
                        <DomainButton 
                        onClick={() => handleEmailDomainSelect('hanmail.net')}
                        selected={emailDomain === 'hanmail.net' && !isDirectInputMode}
                        >
                        hanmail.net
                        </DomainButton>
                        <DomainButton 
                        onClick={() => handleEmailDomainSelect('outlook.com')}
                        selected={emailDomain === 'outlook.com' && !isDirectInputMode}
                        >
                        outlook.com
                        </DomainButton> 
                        <DomainButton1 
                        onClick={handleDirectInputClick}
                        selected={isDirectInputMode}
                        >직접입력
                        </DomainButton1>
                        {isDirectInputMode && 
                        (<DirectEmailInput
                          placeholder="도메인을 직접 입력하세요"
                          value={email.split('@')[1] || ''}
                          onChange={handleDirectDomainInputChange}
                          maxLength={30}
                          />
                          )}
                    </EmailSubModal>
                )}
            </EmailInputGroup>
        </FirstInput1>
        <CheckboxContainer3>
  <FirstInput3Title2>접수 기간</FirstInput3Title2>
  <SubmissionPeriod>
    <SubmissionPeriodInput1
      type="date"
      value={startDate}
      onChange={handleStartDateChange}
    />
    <Text2>~</Text2>
    <SubmissionPeriodInput2
      type="date"
      value={endDate}
      onChange={handleEndDateChange}
    />
    <SubmissionPeriodInput3
      type="text"
      placeholder="총 일수"
      value={totalDays ? `${totalDays}일` : ''}
      readOnly
    />
  </SubmissionPeriod>
</CheckboxContainer3>
        </Manager>
        <ButtonContainer>
        <Button onClick={handleSaveClick}>등록하기</Button>
        {showSavedPopup && (
  <SavedPopup>
    저장되었습니다.
  </SavedPopup>
)}
        </ButtonContainer>
        </RevisionContainer>
    </JobPostingContainer>
  )
}

export default JobPosting

const InputWithIconWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

const JobPostingContainer = styled.div`
    display: flex;
    width: 100%;
`

const RevisionTitleContainer = styled.div`
  display: flex;
  width: 100%;
`

const RevisionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background-color: #f8fafc; 
    border: 1px solid #00468e;
    width: 100%;
`

const RevisionTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #00468e;
  margin: 0 0 50px 0;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`   
const RevisionContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

const NoticeInput = styled.input`
  width: 500px;
  height: 50px;
  border: 1px solid #00468e;
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
`


const FirstInput1 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
`

const FirstInput1Title = styled.h1`
    position: relative;
    font-size: 18px;
    font-weight: 700;
    color: #00468e;
    margin: 0 0 10px 0;
`

const FirstInput2 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
`

const FirstInput3 = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 20px; 
`

const FirstInput3Title = styled.h2`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    font-size: 22px;
    font-weight: 700;
    padding-top: 30px;
`
const ToDoList = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #00468e;
  background-color: white;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  white-space: pre-wrap;
  word-wrap: break-word; 
  text-align: left; 
  padding-top: 5px;
  overflow-y: auto;
  font-size: 14px;
  position: relative;
`


const WorkTextArea = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #00468e;
  background-color: white;
  margin-bottom: 10px;
  position: relative;
`

const WorkTextArea2 = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid #00468e;
  background-color: white;
  margin-bottom: 10px;
  position: relative;
`

const WorkTextArea3 = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid #00468e;
  background-color: white;
  margin-bottom: 10px;
  position: relative;
`

const WorkTextBox = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  padding: 10px;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;
`

const LastTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
  color: #808080;
  z-index: 10;
  pointer-events: none;
`

const Title1 = styled.p`
font-size: 14px;
font-weight: 700;
margin: 0;
`

const Title2 = styled.p`
font-size: 14px;
font-weight: 700;
color: #F47171;
margin: 0;
`

const Title3 = styled.p`
font-size: 14px;
font-weight: 700;
color: #808080;
margin: 0;
`
const CareerCheck = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
`

const Checkbox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin: 30px 0 30px 0;
`

const CheckboxInput = styled.input`
    width: 15px;
    height: 15px;
`

const CheckboxLabel = styled.label`
font-size: 14px;
font-weight: 700;
margin: 0;
`

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`
const CheckInput = styled.input`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 30px;
    height: 30px;
    margin-left: 30px;
    }
`

const CheckInputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Text = styled.p`
font-size: 14px;
`

const Text2 = styled.p`
font-size: 24px;
margin-left: 20px;
font-weight: 900;
`

const CheckboxContainer2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 22px;
    font-weight: 700;
`

const Manager = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const EmailInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
`

const EmailDomainDisplay = styled.div`
  width: 150px; 
  height: 50px;
  border: 1px solid #00468e;
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #333;
  font-size: 16px;
  background-color: white; 
`

const EmailSubModal = styled.div`
  position: absolute;
  top: 100%; 
  left: 310px; 
  background-color: white;
  border: 1px solid #00468e;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100; 
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 10px;
  width: 320px; 
  box-sizing: border-box;
`

const DomainButton = styled.button`
  background-color: ${props => props.selected ? '#00468e' : '#f0f0f0'};
  color: ${props => props.selected ? 'white' : '#333'};
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
  ${props => props.selected && `
    &:hover {
      background-color: #00366b;
    }
  `}
`
const DomainButton1 = styled.button`
  grid-column: 1 / -1;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  transition: background-color 0.2s, color 0.2s;
`

const DirectEmailInput = styled.input` 
  width: 150px; 
  height: 50px;
  border: 1px solid #00468e;
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 16px;
`

const CharacterCountContainer = styled.div`
    grid-column: 1 / -1; 
    display: flex;
    justify-content: flex-end;
    width: 100%; 
    box-sizing: border-box;
`
const FirstInput3Title2 = styled.h1`
    font-size: 22px;
    font-weight: 700;
`

const CharacterCount = styled.span`
  font-size: 12px;
  color: #808080;
  margin-top: 5px;
`

const CheckboxContainer3 = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    margin: 30px 0 0 0;
`

const SubmissionPeriod = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`

const SubmissionPeriodInput1 = styled.input`
    width: 150px;
    height: 40px;
    border: 1px solid #00468e;
    border-radius: 10px;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 16px;
`

const SubmissionPeriodInput2 = styled.input`
    width: 150px;
    height: 40px;
    border: 1px solid #00468e;
    border-radius: 10px;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 16px;
    margin-left: 20px;
`

const SubmissionPeriodInput3 = styled.input`
    width: 85px;
    height: 40px;
    border: 1px solid #00468e;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    font-size: 12px;
    margin-left: 20px;

    &::placeholder {
        color: #808080;
    }
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 20px;
`

const Button = styled.button`
    width: 150px;
    height: 50px;
    border: 1px solid #00468e;
    border-radius: 10px;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 16px;
    background-color: #00468e;
    color: white;
    cursor: pointer;
`

const JobPostingModal = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #00468e;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  box-sizing: border-box;
`

const JobOptionButton = styled.button`
  background-color: ${props => props.selected ? '#00468e' : 'white'};
  color: ${props => props.selected ? 'white' : '#333'};
  border: 1px solid #00468e;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${props => props.selected ? '#00366b' : '#e6f0f8'};
  }
`;

const DirectJobInputContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid #00468e;
  border-radius: 5px;
  padding: 5px 10px;
`;

const DirectJobInputField = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 5px 0;
  box-sizing: border-box;

  &::placeholder {
    color: #ccc;
  }
`;


const ConfirmButton = styled.button`
  grid-column: 1 / -1;
  background-color: #00468e;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #00366b;
  }
`;

const SavedPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #00468e;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  z-index: 1000;
  animation: fadein 0.3s, fadeout 0.3s 2.7s;

  @keyframes fadein {
    from { opacity: 0; transform: translate(-50%, -40%); }
    to   { opacity: 1; transform: translate(-50%, -50%); }
  }
  @keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
`;

