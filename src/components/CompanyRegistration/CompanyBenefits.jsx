import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { SlArrowDown } from "react-icons/sl"
import DropdownMenu from '../Modal/DropdownMenu'

const CompanyBenefits = ({ benefits, setBenefits }) => {
  const benefitsRef = useRef(null)
  const benefitsInputRef = useRef(null)
  
  const [showBenefitsDropdown, setShowBenefitsDropdown] = useState(false)
  const [dropdownTop, setDropdownTop] = useState(0)

  const benefitsOptions = ['건강검진', '식사제공', '기숙사 제공', '안전장비 제공', '근무복 제공', '차량지원', '교육지원', '경조사비', '식비지원', '출산휴가', '사내대출', '여름휴가']

  const handleBenefitsSelect = option => {
    setBenefits(prev =>
      prev.includes(option)
        ? prev.filter(b => b !== option)
        : [...prev, option]
    )
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (benefitsInputRef.current && !benefitsInputRef.current.contains(event.target) &&
          !event.target.closest('.dropdown-menu-class')) { 
        setShowBenefitsDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (benefitsInputRef.current && showBenefitsDropdown) { 
      const inputElement = benefitsInputRef.current
      const parentPaddingTop = 10
      const calculatedTop = inputElement.offsetTop + inputElement.offsetHeight + parentPaddingTop + 2
      setDropdownTop(calculatedTop)
    }
  }, [showBenefitsDropdown, benefitsInputRef.current])

  return (
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
  )
}

export default CompanyBenefits

// Styled Components
const FirstInput3Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  position: relative;
`

const InputContainerDropdown = styled.div`
  width: 520px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
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

const BenefitsInputWrapper = styled.div`
  position: relative;
  width: 1100px;
`

const Input2 = styled.input`
  width: 1090px;
  height: 45px;
  border: 1px solid #00468e;
  border-radius: 10px;
  padding: 0 10px;
`

const DropdownIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #00468e;
`

const SelectedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`

const SelectedItem = styled.div`
  background: #eef;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
`

const RemoveButton = styled.span`
  margin-left: 4px;
  cursor: pointer;
  font-weight: bold;
` 