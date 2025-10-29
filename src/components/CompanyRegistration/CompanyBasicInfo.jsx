import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { SlArrowDown } from "react-icons/sl"
import DropdownMenu from '../Modal/DropdownMenu'

const CompanyBasicInfo = ({ 
  companySize, 
  setCompanySize, 
  industry, 
  setIndustry, 
  revenue, 
  setRevenue,
  rawRevenue,
  setRawRevenue 
}) => {
  const companySizeRef = useRef(null)
  const industryRef = useRef(null)
  const tagInputRef = useRef(null)

  const [showCompanySizeDropdown, setShowCompanySizeDropdown] = useState(false)
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false)
  const [tagInputValue, setTagInputValue] = useState('')
  const [isTagInputFocused, setIsTagInputFocused] = useState(false)

  const companySizeOptions = ['대기업(1000명 이상)', '중견기업(300~999명)', '중소기업(10~299명)', '스타트업(10명 미만)']
  const industryOptions = ['제조업', '전기/전자', '기계/금속', '조선업', '자동차', '화학', '해운.항만', '중공업', '에너지', '환경']

  const handleCompanySizeSelect = option => {
    setCompanySize(prev => {
      if (prev.includes(option)) {
        return prev.filter(o => o !== option)
      }
      return [...prev, option]
    })
  }

  const handleIndustrySelect = option => {
    setIndustry(prev => 
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    )
  }

  const handleRevenueChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, '')
    setRawRevenue(onlyNums)
    const withCommas = onlyNums
      ? Number(onlyNums).toLocaleString('ko-KR')
      : ''
    setRevenue(withCommas)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (companySizeRef.current && !companySizeRef.current.contains(event.target)) {
        setShowCompanySizeDropdown(false)
      }
      if (industryRef.current && !industryRef.current.contains(event.target)) {
        setShowIndustryDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <CompanyForm>
      <InputContainer>
        <InputTitle>
          <InputTitleText>기업명</InputTitleText>
          <InputRequired>*</InputRequired>
        </InputTitle>
        <Input type="text" placeholder="30자 내로 제목을 적어주세요." maxLength={30} />
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
          onClick={() => setShowCompanySizeDropdown(!showCompanySizeDropdown)}
        />
        <InputIconStyled onClick={() => setShowCompanySizeDropdown(!showCompanySizeDropdown)}>
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
                setIsTagInputFocused(false)
                if (tagInputValue.trim()) {
                  handleIndustrySelect(tagInputValue.trim())
                  setTagInputValue('')
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
        <InputUnit>원</InputUnit>
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
    </CompanyForm>
  )
}

export default CompanyBasicInfo

// Styled Components
const CompanyForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
  width: 50%;
  box-sizing: border-box;
  padding-right: 20px;
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
`

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
`

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
`

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
`

const RemoveButton = styled.span`
  margin-left: 4px;
  cursor: pointer;
  font-weight: bold;
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

const InputTitleText2 = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`

const InputRequired = styled.p`
  color: #5096E6;
  font-size: 30px;
  margin: 0;
`

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

const StyledDropdownMenu = styled(DropdownMenu)`
  position: absolute;
  top: calc(100% + 5px); 
  left: 0;
  width: 100%; 
  z-index: 100; 
` 