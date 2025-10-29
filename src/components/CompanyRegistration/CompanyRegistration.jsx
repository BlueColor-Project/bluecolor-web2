import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import DeleteIcon from '../../images/delete.png'
import { SlArrowDown } from "react-icons/sl";
import DropdownMenu from '../Modal/DropdownMenu'
import { useNavigate } from 'react-router-dom'

const CompanyRegistration = () => {
  const navigate = useNavigate()
  const [showConfirm, setShowConfirm] = useState(false);

  const companySizeRef = useRef(null);
  const industryRef = useRef(null);
  const benefitsRef = useRef(null);
  const benefitsInputRef = useRef(null);
  const tagInputRef = useRef(null);
  

  const [introduction, setIntroduction] = useState('');
  const [phoneRaw, setPhoneRaw] = useState('');
  const [phone, setPhone] = useState('');
  const [revenue, setRevenue] = useState('');
  const [rawRevenue, setRawRevenue] = useState('');
  const [tagInputValue, setTagInputValue] = useState('');
  const [showCompanySizeDropdown, setShowCompanySizeDropdown] = useState(false);
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [showBenefitsDropdown, setShowBenefitsDropdown] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0); 
  const [industry, setIndustry] = useState([]);


  const [employeeCount, setEmployeeCount] = useState('');

  const handleLogoRemove = () => setLogoPreview(null);


  const [companySize, setCompanySize] = useState([]);
  const [benefits, setBenefits] = useState([]);

  const companySizeOptions = ['대기업(1000명 이상)', '중견기업(300~999명)', '중소기업(10~299명)', '스타트업(10명 미만)'];
  const industryOptions = ['제조업', '전기/전자', '기계/금속', '조선업', '자동차', '화학', '해운.항만', '중공업', '에너지', '환경'];
  const benefitsOptions = ['건강검진', '식사제공', '기숙사 제공', '안전장비 제공', '근무복 제공', '차량지원', '교육지원', '경조사비', '식비지원', '출산휴가', '사내대출', '여름휴가'];



    const [logoPreview, setLogoPreview] = useState(null)
    const fileInputRef = useRef(null)

    const handleFileClick = () => {
      fileInputRef.current.click()
    }
  
    const handleFileChange = (e) => {
      const file = e.target.files[0]
      if (!file) return
  
      const reader = new FileReader()
      reader.onload = () => {
        setLogoPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }



    const handleSubmit = () => {
      if (window.confirm('등록하시겠습니까?')) {
        console.log('등록 진행');
      } else {
        console.log('취소');
      }
    };
  


  const handleIntroductionChange = (e) => {
    setIntroduction(e.target.value);
  };
  


  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setPhoneRaw(formatted.replace(/\D/g, ''));
    setPhone(formatted);
  };


  const handleRevenueChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, '');
    setRawRevenue(onlyNums);
    const withCommas = onlyNums
      ? Number(onlyNums).toLocaleString('ko-KR')
      : '';
    setRevenue(withCommas);
  };
  

  const handleBenefitsSelect = option => {
    setBenefits(prev =>
      prev.includes(option)
        ? prev.filter(b => b !== option)
        : [...prev, option]
    );
  };


  const handleEmployeeCountChange = e => {
    const onlyNums = e.target.value.replace(/\D/g, '');
    setEmployeeCount(onlyNums);
  };
  

  const handleCompanySizeSelect = option => {
    setCompanySize(prev => {
      if (prev.includes(option)) {
        return prev.filter(o => o !== option);
      }
      return [...prev, option];
    });
  };

  const handleIndustrySelect = option => {
    setIndustry(prev => 
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const handleDeleteLogo = () => {
    setLogoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (companySizeRef.current && !companySizeRef.current.contains(event.target)) {
        setShowCompanySizeDropdown(false);
      }
      if (industryRef.current && !industryRef.current.contains(event.target)) {
        setShowIndustryDropdown(false);
      }
      if (benefitsInputRef.current && !benefitsInputRef.current.contains(event.target) &&
          !event.target.closest('.dropdown-menu-class')) { 
        setShowBenefitsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  useEffect(() => {
    if (benefitsInputRef.current && showBenefitsDropdown) { 
      const inputElement = benefitsInputRef.current;
      const parentPaddingTop = 10; 
      const calculatedTop = inputElement.offsetTop + inputElement.offsetHeight + parentPaddingTop + 2; 
      setDropdownTop(calculatedTop);
    }
  }, [showBenefitsDropdown, benefitsInputRef.current]);


  function formatPhone(value) {
    const digits = value.replace(/\D/g, '');
    const len = digits.length;
  
    if (len < 4) return digits;
    if (len < 8) {
      return `${digits.slice(0,3)}-${digits.slice(3)}`;
    }
    return `${digits.slice(0,3)}-${digits.slice(3,7)}-${digits.slice(7,11)}`;
  }


  


    return (
    <CompanyRegistrationContainer>
        <CompanyRegistrationContent>
      <CompanyRegistrationTitle>기업등록</CompanyRegistrationTitle>
      <FormContainer>
      <CompanyRegistrationForm>
        <InputContainer>
          <InputTitle>
          <InputTitleText>기업명</InputTitleText>
          <InputRequired>*</InputRequired>
          </InputTitle>
          <Input type="text" placeholder="30자 내로  제목을 적어주세요." maxLength={30} />
        </InputContainer>
        <InputContainerDropdown ref={companySizeRef}>
          <InputTitle>
          <InputTitleText>기업규모</InputTitleText>
          <InputRequired>*</InputRequired>
          </InputTitle>
          <Input 
          type="text" 
          placeholder="기업규모를 선택해주세요"
          readOnly
          value={companySize}
          onClick={() => setShowCompanySizeDropdown(! showCompanySizeDropdown)}
          />
          <InputIconStyled onClick={() => setShowCompanySizeDropdown(! showCompanySizeDropdown)}>
            <SlArrowDown size={20} color="#00468e" style={{transform: showCompanySizeDropdown ? 'rotate(0deg)' : 'rotate(180deg)'}} />
          </InputIconStyled>
          {showCompanySizeDropdown && (
            <DropdownMenu
              options={companySizeOptions}
              onSelect={handleCompanySizeSelect}
            />
          )}
        </InputContainerDropdown>
        <InputContainerDropdown ref={industryRef}>
        <TagSection>
    <InputTitle>
      <InputTitleText>업종</InputTitleText>
      <InputRequired>*</InputRequired>
    </InputTitle>

    <TagContainer onClick={() => tagInputRef.current.focus()}>
    {industry.map(tag => (
      <Tag key={tag}>
        ✓ {tag}
        <RemoveButton onClick={() => handleIndustrySelect(tag)}>×</RemoveButton>
      </Tag>
    ))}


    <TagInput
      ref={tagInputRef}
      value={tagInputValue}
      onChange={e => setTagInputValue(e.target.value)}
      onFocus={() => setIsTagInputFocused(true)}
      onBlur={() => {
        setIsTagInputFocused(false);
        if (tagInputValue.trim()) {
          handleIndustrySelect(tagInputValue.trim());
          setTagInputValue('');
        }
      }}
      placeholder="업종을 선택해주세요"
    />
  </TagContainer>
    
    <InputIconStyled onClick={() => setShowIndustryDropdown(o => !o)}>
      <SlArrowDown
        size={20}
        style={{ transform: showIndustryDropdown ? 'rotate(0deg)' : 'rotate(180deg)' }}
      />
    </InputIconStyled>
  </TagSection>
  {showIndustryDropdown && (
    <StyledDropdownMenu
      options={industryOptions}
      onSelect={handleIndustrySelect}
      className="dropdown-menu-class"
      style={{ top: dropdownTop }}
    />
  )}
</InputContainerDropdown>
<InputContainer>
  <InputTitle>
    <InputTitleText>매출액</InputTitleText>
    <InputRequired>*</InputRequired>
  </InputTitle>
  <Input
    type="text"
    placeholder="평균 연매출액을 입력해주세요"
    value={revenue}
    onChange={handleRevenueChange}
  />
  <InputUnit>억 원</InputUnit>
</InputContainer>
        <InputContainer>
          <InputTitle>
          <InputTitleText>설립일</InputTitleText>
          <InputRequired>*</InputRequired>
          </InputTitle>
          <CompanyInput type="date" placeholder="예) 0000.00.00" />
        </InputContainer>
        <InputContainer>
          <InputTitle>
          <InputTitleText2>이메일</InputTitleText2>
          </InputTitle>
          <Input type="text" placeholder="이메일 주소를 입력해주세요" />
        </InputContainer>
        </CompanyRegistrationForm>
        <CompanyRegistrationForm>
        <InputContainer>
          <InputTitle>
          <InputTitleText>대표자명</InputTitleText>
          <InputRequired>*</InputRequired>
          </InputTitle>
          <Input type="text" placeholder="대표자명을 입력하세요" />
        </InputContainer>
        <InputContainer>
          <InputTitle>
          <InputTitleText>직원수</InputTitleText>
          <InputRequired>*</InputRequired>
          </InputTitle>
          <Input
          type="text"
          placeholder="숫자로만 입력해주세요"
          value={employeeCount}
          onChange={handleEmployeeCountChange}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>
          <InputTitleText>회사 주소</InputTitleText>
          <InputRequired>*</InputRequired>
          </InputTitle>
          <Input type="text" placeholder="정확한 주소를 입력해주세요" />
        </InputContainer>
        <InputContainer>
  <InputTitle>
    <InputTitleText>대표 번호</InputTitleText>
    <InputRequired>*</InputRequired>
  </InputTitle>
  <Input
    type="text"
    placeholder="010-1234-5678"
    value={phone}
    onChange={handlePhoneChange}
    maxLength={13}
  />
</InputContainer>
        <InputContainer2>
          <InputTitle>
          <InputTitleText>홈페이지</InputTitleText>
          </InputTitle>
          <Input type="text" placeholder="홈페이지가 없을 경우 비공개를 눌러주세요" />
        </InputContainer2>
        <InputContainer2>
          <InputTitle>
          <InputTitleText2>팩스 번호</InputTitleText2>
          </InputTitle>
          <Input type="text" placeholder="‘-’을 포함하여 입력해주세요/없을경우 비공개를 선택해주세요" />
        </InputContainer2>
        </CompanyRegistrationForm>
        </FormContainer>
        <BenefitsContainer>
  <BenefitsTitle>
    회사소개
    <InputRequired>*</InputRequired>
  </BenefitsTitle>

  <IntroWrapper>
    <IntroductionTextarea
      value={introduction}
      onChange={handleIntroductionChange}
      placeholder="회사 소개를 입력해주세요 (최대 500바이트)"
      maxLength={500}
    />
    <LastTitle>
      <Title1>총 글자수</Title1>
      <Title2>{introduction.length} 자</Title2>
      <Title3>/ 500 byte</Title3>
    </LastTitle>
  </IntroWrapper>
</BenefitsContainer>
        <FirstInput3Dropdown ref={benefitsRef}>
        <InputContainerDropdown ref={benefitsRef}>
  <InputTitle>
    <InputTitleText>복리후생</InputTitleText>
    <InputRequired>*</InputRequired>
  </InputTitle>

  <BenefitsInputWrapper>
    <Input2
      type="text"
      placeholder="복리후생을 선택해주세요"
      readOnly
      value={benefits.join(', ')}
      onClick={() => setShowBenefitsDropdown(v => !v)}
    />

    <DropdownIcon onClick={() => setShowBenefitsDropdown(v => !v)}>
      <SlArrowDown size={20} />
    </DropdownIcon>
  </BenefitsInputWrapper>


  {showBenefitsDropdown && (
    <DropdownMenu
      options={benefitsOptions}
      onSelect={handleBenefitsSelect}
      style={{ top: dropdownTop }}
      className="dropdown-menu-class"
    />
  )}

{benefits.length > 0 && (
    <SelectedList>
      {benefits.map(b => (
        <SelectedItem key={b}>
          {b}
          <RemoveButton onClick={() => handleBenefitsSelect(b)}>×</RemoveButton>
        </SelectedItem>
      ))}
    </SelectedList>
  )}
</InputContainerDropdown>
</FirstInput3Dropdown>
        <FirstInput3Title>
          <LogoTitleSection>
            <LogoTitleText>회사 대표 로고</LogoTitleText>
                    </LogoTitleSection>
                    <LogoImageSection>
                      <LogoImage> 
                      {logoPreview
            ? <PreviewImg src={logoPreview} alt="logo preview" />
            : <DeleteIconImg src={DeleteIcon} alt="logo placeholder" />
          }
          {logoPreview && (
          <DeleteIconImg
            src={DeleteIcon}
            alt="delete logo"
            onClick={handleDeleteLogo}
            style={{cursor: 'pointer'}}
          />
        )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
                        <ButtonSection>
            <Button type="button" onClick={handleFileClick}>
              파일 선택
            </Button>
          </ButtonSection>
        </LogoImage>

        <LogoText>
          <Text>・사진 파일은 10MB 미만의 JPG, JPEG, PNG, GIF 파일만 업로드 가능</Text>
          <Text>・사진 크기는 100*140 픽셀로 노출됩니다.</Text>
          <Text>・로고가 없을 경우 비공개를 선택해주세요</Text>
        </LogoText>
      </LogoImageSection>
    </FirstInput3Title>
    <ButtonSection2>
                      <Button type="button" onClick={handleSubmit}>등록하기</Button>
                    </ButtonSection2>
                    {showConfirm && (
  <ConfirmOverlay>
    <ConfirmBox>
      <p>등록하시겠습니까?</p>
      <div style={{ marginTop: 16 }}>
        <button onClick={onConfirm}>확인</button>
        <button onClick={onCancel} style={{ marginLeft: 8 }}>취소</button>
      </div>
    </ConfirmBox>
  </ConfirmOverlay>
)}
                    </CompanyRegistrationContent>
    </CompanyRegistrationContainer>
  )
}


export default CompanyRegistration



const LogoImage = styled.div`
  position: relative;
  width: 180px;
  height: 240px;
  border: 1px solid #00468e;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
`;

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  `;

const DeleteIconImg = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 1;
`;


const BenefitsInputWrapper = styled.div`
  position: relative;
  width: 1100px;
`;

const DropdownIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #00468e;
`;

const SelectedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const SelectedItem = styled.div`
  background: #eef;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
`;

const RemoveButton = styled.span`
  margin-left: 4px;
  cursor: pointer;
  font-weight: bold;
`;



const CompanyRegistrationContainer = styled.div`
  display: flex;
  width: 100%;
  `

const CompanyRegistrationTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #00468e;
`

const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
`

const CompanyRegistrationForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
  width: 50%;
  box-sizing: border-box;
  padding-right: 20px;
  &:first-child {
      padding-right: 20px;
  }
  &:last-child {
      padding-left: 20px;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 7px;
  position: relative;
`

const InputContainerDropdown = styled(InputContainer)`
  width: 520px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TagSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  position: relative;
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  padding: 4px 8px;
  border: 1px solid #00468e;
  border-radius: 10px;
  min-height: 45px;
  background: #fff;
  box-sizing: border-box;
  width: 520px;

  &::-webkit-scrollbar { height: 4px; }
  &::-webkit-scrollbar-thumb { background: #ccc; border-radius: 2px; }
`;

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  background: #00468e;
  color: #fff;
  border-radius: 8px;
  min-width: 60px;
  height: 24px;
  padding: 0 8px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TagInput = styled.input`
  flex: 1;
  min-width: 100px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 4px;
  &::placeholder {
    color: #D9D9D9;
  }
  &:focus::placeholder {
    opacity: 0;
  }
`;


const InputContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 10px;
`
const InputTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  width: 100%;
`

const InputTitleText = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`

const InputRequired = styled.p`
  color: #5096E6;
  font-size: 30px;
  margin: 0;
`

const CompanyInput = styled.input`
  width: 500px;
  height: 45px;
  border: 1px solid #00468e;
  border-radius: 10px;
  padding: 0 10px;
`

const InputIconStyled = styled.div`
  position: absolute;
  right: 15px; 
  top: 75%;
  transform: translateY(-50%);
  color: #00468e;
  cursor: pointer;

`;

const Input = styled.input`
  position: relative;
  width: 500px;
  height: 45px;
  border: 1px solid #00468e;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 18px;
  font-weight: 400;
  color: #00468e;

  &::placeholder {
    color: #D9D9D9;
    font-size: 15px;
    font-weight: 400;
  }
`

const Input2 = styled.input`
  width: 1090px;
  height: 45px;
  border: 1px solid #00468e;
  border-radius: 10px;
  padding: 0 10px;
`

const InputUnit = styled.p`
  position: absolute;
  right: 10px;
  top: 75%;
  transform: translateY(-50%);
  font-size: 18px;
  font-weight: 700;
  color: #00468e;
  margin: 0;
`

const InputTitleText2 = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`
const BenefitsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 20px; 
`

const BenefitsTitle = styled.h1`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    font-size: 22px;
    font-weight: 700;
    padding-top: 30px;
`

const IntroWrapper = styled.div`
  position: relative;
  width: 1100px;
`;

const IntroductionTextarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  padding-bottom: 40px;
  border: 1px solid #00468e;
  border-radius: 10px;
  resize: none;
  font-size: 14px;
  line-height: 1.5;
  box-sizing: border-box;
`;

const LastTitle = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255,255,255,0.8);
  padding: 2px 6px;
  border-radius: 4px;
`;




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

const FirstInput3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  position: relative;
`

const FirstInput3Dropdown = styled(FirstInput3)`
   
`;

const FirstInput3Title = styled.h1`
   display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    font-size: 22px;
    font-weight: 700;
    padding: 10px;
`

const LogoImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`



const LogoText = styled.div`

`

const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #F60A0A;
`

const LogoTitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

const LogoTitleText = styled.p`
  font-size: 20px;
  font-weight: 700;
`

const Button = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  border: 1px solid #00468e;
  background-color: #00468e;
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`

const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


const StyledDropdownMenu = styled(DropdownMenu)`
  position: absolute;
  top: calc(100% + 5px); 
  left: 0;
  width: 100%; 
  z-index: 100; 
`
const CompanyRegistrationContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 40px;
    background-color: #f8fafc; 
    border: 1px solid #00468e;
    width: 100%;
`

const ButtonSection2 = styled.div`
  
   position: absolute;
   right: 40px;
   bottom: 20px;
   width: 100px;
   height: 30px;
   border: 1px solid #00468e;
   background-color: #00468e;
   color: white;
   font-size: 15px;
   font-weight: 700;
   cursor: pointer;
`

const ConfirmOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ConfirmBox = styled.div`
  background: #f8fafc;
  border: 1px solid #00468e ;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  width: 200px;
  text-align: center;
`;