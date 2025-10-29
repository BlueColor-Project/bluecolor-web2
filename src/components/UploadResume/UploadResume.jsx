import React,{useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import { GrAddCircle } from "react-icons/gr";
import { SlArrowDown } from "react-icons/sl";
import DeleteConfirmModal from './DeleteConfirmModal'

const UploadResume = () => {

  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [detailedAddress, setDetailedAddress] = useState('');
  const [education, setEducation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  const formatPhoneNumber = (value) => {
    const onlyNumber = value.replace(/\D/g, '');
    if (onlyNumber.length < 4) return onlyNumber;
    if (onlyNumber.length < 8) {
      return `${onlyNumber.slice(0, 3)}-${onlyNumber.slice(3)}`;
    }
    return `${onlyNumber.slice(0, 3)}-${onlyNumber.slice(3, 7)}-${onlyNumber.slice(7, 11)}`;
  };
  

  const handleConfirmDelete = () => {
  setPhoneNumber('');
  setBirthday('');
  setEmailId('');
  setCustomEmailDomain('');
  setSelectedEmail('');
  setSelectedGender('');
  setName('');
  setAddress('');
  setDetailedAddress('');
  setEducation('');
  setProfileImage(null);
  alert('모든 내용이 삭제되었습니다!'); 
  closeDeleteModal(); 
  };


  

  const [birthday, setBirthday] = useState('');
  

  const formatBirthDate = (value) => {
    const digits = value.replace(/\D/g, '');
    if(digits.length <= 4) return digits;
    if(digits.length <= 6) return `${digits.slice(0, 4)}.${digits.slice(4)}`;
    return `${digits.slice(0, 4)}.${digits.slice(4, 6)}.${digits.slice(6, 8)}`;
  }

  const handleBirthdayChange = (e) => {
    const formatted = formatBirthDate(e.target.value);
    setBirthday(formatted);
  }

  const [emailId, setEmailId] = useState('');
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const [isEmailDropdownOpen, setIsEmailDropdownOpen] = useState(false);
  const [customEmailDomain, setCustomEmailDomain] = useState('');

  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedGender, setSelectedGender] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');
  const [isEmailInputEditable, setIsEmailInputEditable] = useState(true);

  const GenderDropdownRef = useRef(null);
  const EmailDropdownRef = useRef(null);
  const customDomainInputRef = useRef(null);

  const toggleGenderDropdown = () => {
    setIsGenderDropdownOpen(prevState => !prevState);
  }
  const toggleEmailDropdown = () => {
    setIsEmailDropdownOpen(prevState => !prevState);
  }

  const fullEmail = `${emailId}@${isEmailInputEditable && customEmailDomain ? `@${customEmailDomain}` : selectedEmail}`;


  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setIsGenderDropdownOpen(false);
  }

  const handleEmailSelect = (domain) => {
  if( domain === '직접입력'){
    setIsEmailInputEditable(true);
    setSelectedEmail('');
    setCustomEmailDomain('');

    setTimeout(() => {
      customDomainInputRef.current?.focus();
    }, []);
  } else {
    setIsEmailInputEditable(false);
    setSelectedEmail(domain);
    setCustomEmailDomain('');
  }
  setIsEmailDropdownOpen(false);
}

  const handleEmailInputChange = (e) => {
    setSelectedEmail(e.target.value);
  }

  useEffect(() => {
    const handleClickoutSide = (e) => {
      if(GenderDropdownRef.current && !GenderDropdownRef.current.contains(e.target)) {
        setIsGenderDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickoutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickoutSide);
    }
  },[])



useEffect(() => {
  const handleClickoutSide = (e) => {
    if(EmailDropdownRef.current && !EmailDropdownRef.current.contains(e.target)) {
      setIsEmailDropdownOpen(false);
    }
  }
  document.addEventListener('mousedown', handleClickoutSide);
  return () => {
    document.removeEventListener('mousedown', handleClickoutSide);
  }
},[])

const openDeleteModal = () => {
  setIsDeleteModalOpen(true);
};

const closeDeleteModal = () => {
  setIsDeleteModalOpen(false);
};






  return (
    <UploadResumeContainer>
        <UploadResumeContent>
            <UploadResumeContentTitle>프로필</UploadResumeContentTitle>
        </UploadResumeContent>
        <UploadResumeContent2>
        <ProfileImageSection onClick={handleImageClick}>
        <GrAddCircle size={60}/>
        <ProfileImageText>프로필 이미지 등록</ProfileImageText>
        {profileImage ? (
            <ProfileImagePreview src={profileImage} alt="Profile Preview" />
          ) : (
            <ProfileImagePlaceholder>이미지를 선택하세요</ProfileImagePlaceholder>
          )}
        </ProfileImageSection>
        <input
        type="file"
        ref={fileInputRef}
        style={{display: 'none'}}
        accept="image/*"
        onChange={handleImageChange}
        />
          <Content2Search>
            <FirstInput>
            <SearchInput1 
            placeholder='이름' 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <InputWithArrow ref={GenderDropdownRef}>
            <SearchInput2 
            placeholder='성별' 
            readOnly 
            onClick={toggleGenderDropdown} 
            value={selectedGender}
            />
            <StyledArrowDown size={10} onClick={toggleGenderDropdown}/>
            {isGenderDropdownOpen && (
              <Dropdown>
                <DropdownItem onClick={() => handleGenderSelect('남자')}>남자</DropdownItem>
                <DropdownItem onClick={() => handleGenderSelect('여자')}>여자</DropdownItem>
                <DropdownItem onClick={() => handleGenderSelect('선택 안함')}>선택 안함</DropdownItem>
              </Dropdown>
            )}
            </InputWithArrow>
            </FirstInput>
            <SearchInput3 placeholder='생년월일 ex)1998.09.02' value={birthday} onChange={handleBirthdayChange} maxLength={10}/>
            <SearchInput3 
            placeholder='주소' 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
            <SearchInput3 
            placeholder='상세주소' 
            value={detailedAddress}
            onChange={(e) => setDetailedAddress(e.target.value)}
            maxLength={30} />
          </Content2Search>

          <Content2Search>
            <FirstInput>
            <SearchInput1 
            placeholder='이메일' 
            value={emailId + 
              (isEmailInputEditable 
              && customEmailDomain 
              ? `@${customEmailDomain}` 
              : selectedEmail 
              ? `@${selectedEmail}` 
              : '')}
            onChange={(e) => {
              const val = e.target.value;
              const atIndex = val.indexOf('@');
              if(atIndex === -1) {
                setEmailId(val);
              } else {
                setEmailId(val.slice(0, atIndex));
              }
            }}
            />
            <InputWithArrow ref={EmailDropdownRef}>
            <SearchInput2
            onClick={toggleEmailDropdown}
            ref={customDomainInputRef}
            placeholder={isEmailInputEditable ? '직접입력' : '직접입력'}
            readOnly={!isEmailInputEditable}
            value={isEmailInputEditable ? customEmailDomain : selectedEmail}
            onChange={(e) => {
              if (isEmailInputEditable) {
                setCustomEmailDomain(e.target.value);
                setIsEmailDropdownOpen(false);
              }
            }}
            />
            <StyledArrowDown size={10}/>
            {isEmailDropdownOpen && (
              <Dropdown onMouseDown={(e) => e.stopPropagation()}>
                <DropdownItem onClick={() => handleEmailSelect('naver.com')}>naver.com</DropdownItem>
                <DropdownItem onClick={() => handleEmailSelect('gmail.com')}>gmail.com</DropdownItem>
                <DropdownItem onClick={() => handleEmailSelect('daum.net')}>daum.net</DropdownItem>
                <DropdownItem onClick={() => handleEmailSelect('직접입력')}>직접입력</DropdownItem>
              </Dropdown>
            )}
            </InputWithArrow>
            </FirstInput>
            <SearchInput3 
            placeholder='최종학력 입력  ex) 대학교 졸업, 고등학교 중퇴' 
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            />
            <SearchInput3 
            type='text'
            placeholder='휴대폰번호/숫자만 입력해주세요'
            value={phoneNumber}
            onChange={(e) => {
              const formatted = formatPhoneNumber(e.target.value);
              setPhoneNumber(formatted);
            }}
            maxLength={13}
          />
          </Content2Search>
        </UploadResumeContent2>
        <InputButtonSection>
            <InputButton1>저장</InputButton1>
            <InputButton2 onClick={openDeleteModal}>전체 삭제</InputButton2>
            </InputButtonSection>

            {isDeleteModalOpen && (
          <DeleteConfirmModal
            onClose={closeDeleteModal}
            onConfirm={handleConfirmDelete} 
          />
        )}
    </UploadResumeContainer>
  )
} 

export default UploadResume

const ProfileImageSection = styled.div`
  width: 176px;
  height: 234px;
  border: 2px solid #00468e;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
`;

const ProfileImageText = styled.div`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #d9d9d9;
`;

const ProfileImagePlaceholder = styled.div`
   font-size: 14px;
  color: #d9d9d9;
  font-weight: 400;
`;

const ProfileImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const UploadResumeContainer = styled.div`
margin-top: 50px;
padding: 30px 30px 0 30px;
`

const UploadResumeContent = styled.div`
margin: 40px 0;
`

const UploadResumeContentTitle = styled.div`
font-size: 32px;
font-weight: 700;
color: #00468e;
margin-bottom: 40px;
`

const UploadResumeContent2 = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
height: auto;
font-size: 24px;
font-weight: 700;
padding-top: 40px;
border-top: 3px solid #00468e;
`

const Content2Search = styled.div`
display: flex;
gap: 10px;
align-items: center;
flex-direction: column;
`

const FirstInput = styled.div`
display: flex;
gap: 10px;
`



const SearchInput3 = styled.input`
width: 520px;
height: 48px;
border: 1px solid #00468e;
border-radius: 5px;
padding: 10px 20px;
box-sizing: border-box;
margin-left: 20px;
font-size: 16px;
`

const InputButtonSection = styled.div`
display: flex;
justify-content: flex-end;
gap: 10px;
margin: 0 95px 50px 0;
`

const InputButton1 = styled.button`
height: 48px;
border: 1.5px solid #00468e;
padding: 10px 20px;
box-sizing: border-box;
margin-left: 12px;
font-size: 16px;
font-weight: 700;
background-color: #FFF;
cursor: pointer;
`

const InputButton2 = styled.button`
height: 48px;
border: 1.5px solid #00468e;
box-sizing: border-box;
font-size: 16px;
font-weight: 700;
color: #F91111;
background-color: #FFF;
cursor: pointer;

`

const SearchInput1 = styled.input`
width: 355px;
height: 48px;
border: 1px solid #00468e;
border-radius: 5px;
padding: 10px 20px;
box-sizing: border-box;
margin-left: 20px;
`

const InputWithArrow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 143px; 
  height: 48px; 
  margin-left: 12px;
`;

const StyledArrowDown = styled(SlArrowDown)`
  position: absolute; 
  right: 10px; 
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer; 
  color: #00468e; 
`;

const SearchInput2 = styled.input`
width: 100%;
height: 100%;
border: 1px solid #00468e;
border-radius: 5px;
padding: 10px 20px;
padding-right: 30px;
box-sizing: border-box;
cursor: pointer;
`


const Dropdown = styled.div`
 position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #00468e;
  border-top: none;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  z-index: 10;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
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
