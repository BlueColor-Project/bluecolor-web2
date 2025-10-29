import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'

const Input = () => {


  const [isInput1ModalOpen, setIsInput1ModalOpen] = useState(false);
  const [isCheckBoxModalOpen, setIsCheckBoxModalOpen] = useState(false);
  const [isInput3ModalOpen, setIsInput3ModalOpen] = useState(false);

  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedJobCategory, setSelectedJobCategory] = useState('');
  const [selectedCareer, setSelectedCareer] = useState('');


  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const modal1Ref = useRef(null);
  const modal2Ref = useRef(null);
  const modal3Ref = useRef(null);

  const [modal1Position, setModal1Position] = useState({ top: 0, left: 0, width: 0 });
  const [modal2Position, setModal2Position] = useState({ top: 0, left: 0, width: 0 });
  const [modal3Position, setModal3Position] = useState({ top: 0, left: 0, width: 0 });


  const calculateModalPosition = (inputRef, setModalPosition) => {
    if (inputRef.current && inputRef.current.parentElement) {
      const inputRect = inputRef.current.getBoundingClientRect();
      const wrapperRect = inputRef.current.parentElement.getBoundingClientRect();

      setModalPosition({
        top: inputRect.bottom - wrapperRect.top,
        left: inputRect.left - wrapperRect.left,
        width: inputRect.width
      });
    }
  };

  const toggleInput1Modal = () => {
    setIsInput1ModalOpen(prev => !prev);
  };

  const toggleCheckBoxModal = () => {
    setIsCheckBoxModalOpen(prev => !prev);
  };

  const toggleInput3Modal = () => {
    setIsInput3ModalOpen(prev => !prev);
  };

  useEffect(() => {
  const handleClickOutside = (event) => {

    if (modal1Ref.current && !modal1Ref.current.contains(event.target) &&
        input1Ref.current && !input1Ref.current.contains(event.target)) {
      setIsInput1ModalOpen(false);
    }
    if (modal2Ref.current && !modal2Ref.current.contains(event.target) &&
          input2Ref.current && !input2Ref.current.contains(event.target)) {
        setIsCheckBoxModalOpen(false);
      }
      if (modal3Ref.current && !modal3Ref.current.contains(event.target) &&
          input3Ref.current && !input3Ref.current.contains(event.target)) {
        setIsInput3ModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modal1Ref, input1Ref, modal2Ref, input2Ref, modal3Ref, input3Ref]);


  useEffect(() => {
    if (isInput1ModalOpen) {
      calculateModalPosition(input1Ref, setModal1Position);
    }
  }, [isInput1ModalOpen, input1Ref]);

  useEffect(() => {
    if (isCheckBoxModalOpen) {
      calculateModalPosition(input2Ref, setModal2Position);
    }
  }, [isCheckBoxModalOpen, input2Ref]);

  useEffect(() => {
    if (isInput3ModalOpen) {
      calculateModalPosition(input3Ref, setModal3Position);
    }
  }, [isInput3ModalOpen, input3Ref]);

  const handleJobCategorySelect = (category) => {
    setSelectedJobCategory(category);
    setIsInput1ModalOpen(false);
  };

  const handleRegionChange = (region) => {
    setSelectedRegions(prevSelected => {
      if (prevSelected.includes(region)) {
        return prevSelected.filter(item => item !== region);
      } else {
        return [...prevSelected, region];
      }
    });
  };

  const handleCareerSelect = (career) => {
    setSelectedCareer(career);
    setIsInput3ModalOpen(false); 
  };





  return (
    <JobsSearch>
      <InputWrapper>
    <JobsSearchInput1 
    type="text" 
    placeholder="직문분야 입력 및 선택" 
    ref={input1Ref}
    onClick={toggleInput1Modal}
    value={selectedJobCategory}
    readOnly
    />
    {isInput1ModalOpen && (
          <ModalContent
            ref={modal1Ref} 
            style={{
              top: modal1Position.top,
              left: modal1Position.left,
              width: modal1Position.width,
            }}
          >
            <ModalSection>
            <ModalItem onClick={() => handleJobCategorySelect('제조·생산')}>제조·생산</ModalItem>
            <ModalItem onClick={() => handleJobCategorySelect('환경·청소')}>환경·청소</ModalItem>
            <ModalItem onClick={() => handleJobCategorySelect('건설·토목')}>건설·토목</ModalItem>
            </ModalSection>
            <ModalSection>
            <ModalItem onClick={() => handleJobCategorySelect('운송·물류')}>운송·물류</ModalItem>
            <ModalItem onClick={() => handleJobCategorySelect('시설·정비')}>시설·정비</ModalItem>
            <ModalItem onClick={() => handleJobCategorySelect('서비스')}>서비스</ModalItem>
            </ModalSection>
            </ModalContent>
          )}
          </InputWrapper>
          <InputWrapper>
    <JobsSearchInput2 
    type="text" 
    placeholder="지역  입력 및 선택" 
    ref={input2Ref}
    onClick={toggleCheckBoxModal}
    value={selectedRegions.join(', ')}
    readOnly
    />
    {isCheckBoxModalOpen && (
          <CheckboxModalContent
            ref={modal2Ref}
            style={{
              top: modal2Position.top,
              left: modal2Position.left,
              width: modal2Position.width,
            }}
          >
       <CheckboxGroup>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  id="regionSeoul"
                  checked={selectedRegions.includes('서울')}
                  onChange={() => handleRegionChange('서울')}
                />
                <CheckboxLabel htmlFor="regionSeoul">서울</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  id="regionGyeonggi"
                  checked={selectedRegions.includes('경기')}
                  onChange={() => handleRegionChange('경기')}
                />
                <CheckboxLabel htmlFor="regionGyeonggi">경기</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  id="regionIncheon"
                  checked={selectedRegions.includes('인천')}
                  onChange={() => handleRegionChange('인천')}
                />
                <CheckboxLabel htmlFor="regionIncheon">인천</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  id="regionChungnam"
                  checked={selectedRegions.includes('충남')}
                  onChange={() => handleRegionChange('충남')}
                />
                <CheckboxLabel htmlFor="regionChungnam">충남</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  id="regionChungbuk"
                  checked={selectedRegions.includes('충북')}
                  onChange={() => handleRegionChange('충북')}
                />
                <CheckboxLabel htmlFor="regionChungbuk">충북</CheckboxLabel>
              </CheckboxWrapper>
            </CheckboxGroup>

            <CheckboxGroup>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  id="regionJeju"
                  checked={selectedRegions.includes('제주')}
                  onChange={() => handleRegionChange('제주')}
                />
                <CheckboxLabel htmlFor="regionJeju">제주</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  id="regionJeonbuk"
                  checked={selectedRegions.includes('전북')}
                  onChange={() => handleRegionChange('전북')}
                />
                <CheckboxLabel htmlFor="regionJeonbuk">전북</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  id="regionJeonnam"
                  checked={selectedRegions.includes('전남')}
                  onChange={() => handleRegionChange('전남')}
                />
                <CheckboxLabel htmlFor="regionJeonnam">전남</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  id="regionGyeongnam"
                  checked={selectedRegions.includes('경남')}
                  onChange={() => handleRegionChange('경남')}
                />
                <CheckboxLabel htmlFor="regionGyeongnam">경남</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <CheckboxInput
                  type="checkbox"
                  id="regionGyeongbuk"
                  checked={selectedRegions.includes('경북')}
                  onChange={() => handleRegionChange('경북')}
                />
                <CheckboxLabel htmlFor="regionGyeongbuk">경북</CheckboxLabel>
              </CheckboxWrapper>
            </CheckboxGroup>

            <SiGunGuInputWrapper>
              <SiGunGuInput type="text" placeholder="시 만 입력하세요" />
              <SiGunGuInput type="text" placeholder="시/군/구 만 입력하세요" />
              <SearchIcon><BsSearch /></SearchIcon>
            </SiGunGuInputWrapper>
            <ConfirmButton onClick={() => setIsCheckBoxModalOpen(false)}>확인</ConfirmButton>
          </CheckboxModalContent>
          )}
          </InputWrapper>
          <InputWrapper>
    <JobsSearchInput3 
    type="text" 
    placeholder="경력  선택" 
    ref={input3Ref}
    onClick={toggleInput3Modal}
    readOnly
    value={selectedCareer}
    />
    {isInput3ModalOpen && (
          <CheckboxModalContent
            ref={modal3Ref} 
            style={{
              top: modal3Position.top,
              left: modal3Position.left,
                width: modal3Position.width,
            }}
          >
            <CheckboxGroup>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" id="careerNew" checked={selectedCareer === '신입'} onChange={() => handleCareerSelect('신입')} />
                <CheckboxLabel htmlFor="careerNew">신입</CheckboxLabel>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <CheckboxInput type="checkbox" id="careerExp" checked={selectedCareer === '경력'} onChange={() => handleCareerSelect('경력')} />
                <CheckboxLabel htmlFor="careerExp">경력</CheckboxLabel>
              </CheckboxWrapper>
            </CheckboxGroup>

            <CheckboxGroup>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career1" checked={selectedCareer === '~1년'} onChange={() => handleCareerSelect('~1년')} />
                    <CheckboxLabel htmlFor="career1">~1년</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career2" checked={selectedCareer === '2년'} onChange={() => handleCareerSelect('2년')} />
                    <CheckboxLabel htmlFor="career2">2년</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career3" checked={selectedCareer === '3년'} onChange={() => handleCareerSelect('3년')} />
                    <CheckboxLabel htmlFor="career3">3년</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career4" checked={selectedCareer === '4년'} onChange={() => handleCareerSelect('4년')} />
                    <CheckboxLabel htmlFor="career4">4년</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career5" checked={selectedCareer === '5년'} onChange={() => handleCareerSelect('5년')} />
                    <CheckboxLabel htmlFor="career5">5년</CheckboxLabel>
                </CheckboxWrapper>
            </CheckboxGroup>
            <CheckboxGroup>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career6" checked={selectedCareer === '6년'} onChange={() => handleCareerSelect('6년')} />
                    <CheckboxLabel htmlFor="career6">6년</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career7" checked={selectedCareer === '7년'} onChange={() => handleCareerSelect('7년')} />
                    <CheckboxLabel htmlFor="career7">7년</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career8" checked={selectedCareer === '8년'} onChange={() => handleCareerSelect('8년')} />
                    <CheckboxLabel htmlFor="career8">8년</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career9" checked={selectedCareer === '9년'} onChange={() => handleCareerSelect('9년')} />
                    <CheckboxLabel htmlFor="career9">9년</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career10" checked={selectedCareer === '10년'} onChange={() => handleCareerSelect('10년')} />
                    <CheckboxLabel htmlFor="career10">10년</CheckboxLabel>
                </CheckboxWrapper>
            </CheckboxGroup>
            <CheckboxGroup>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career11" checked={selectedCareer === '11년'} onChange={() => handleCareerSelect('11년')} />
                    <CheckboxLabel htmlFor="career11">11년</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career12" checked={selectedCareer === '12년'} onChange={() => handleCareerSelect('12년')} />
                    <CheckboxLabel htmlFor="career12">12년</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career13" checked={selectedCareer === '13년'} onChange={() => handleCareerSelect('13년')} />
                    <CheckboxLabel htmlFor="career13">13년</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career14" checked={selectedCareer === '14년'} onChange={() => handleCareerSelect('14년')} />
                    <CheckboxLabel htmlFor="career14">14년</CheckboxLabel>
                </CheckboxWrapper>
                <CheckboxWrapper>
                    <CheckboxInput type="checkbox" id="career15" checked={selectedCareer === '15년'} onChange={() => handleCareerSelect('15년')} />
                    <CheckboxLabel htmlFor="career15">15년</CheckboxLabel>
                </CheckboxWrapper>
            </CheckboxGroup>

            <ConfirmButton onClick={() => setIsInput3ModalOpen(false)}>확인</ConfirmButton>
          </CheckboxModalContent>
        )}
      </InputWrapper>
      <SearchButton>검색</SearchButton>
    </JobsSearch>
  )
}
export default Input


const JobsSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`

const InputWrapper = styled.div`
  position: relative;
  display: flex;
`

const JobsSearchInput1 = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #00468e;
  border-radius: 10px 0 0 10px;
  padding: 0 20px;
  color: #00468e;
  background-color: #f8fafc;
  box-sizing: border-box;
`

const JobsSearchInput2 = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #00468e;
  padding: 0 20px;
  color: #00468e;
  background-color: #f8fafc;
  box-sizing: border-box;
`

const JobsSearchInput3 = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #00468e;
  border-radius: 0 10px 10px 0;
  padding: 0 20px;
  color: #00468e;
  background-color: #f8fafc;
  box-sizing: border-box;
`

const ModalContent = styled.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #00468e;
  border-top: none;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 8px rgba(24, 11, 11, 0.1);
  gap: 10px;
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  padding: 10px 0;
  box-sizing: border-box;
`;

const ModalSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const ModalItem = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #00468e;
  background-color: #fff;
  color: #00468e;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #00468e;
    color: #fff;
  }
`;

const SearchButton = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid #00468e;
  border-radius: 10px;
  background-color: #00468e;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-left: 10px;
`;

const CheckboxGroup = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(5, auto); 
  gap: 10px; 
  width: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;

`;

const CheckboxInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #00468e;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:checked {
    background-color: #00468e;
    border-color: #00468e;
  }

  &:checked::after {
    content: '✔';
    font-size: 14px;
    color: white;
  }
`;

const CheckboxLabel = styled.label`
  font-size: 12px;
  color: #333;
  cursor: pointer;
  white-space: nowrap;
`;

const SiGunGuInputWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: center;
  position: relative;
`;

const SiGunGuInput = styled.input`
  width: 140px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 15px;
  color: #333;

  &:last-of-type {
      padding-right: 30px;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 13px;
  top: 10px;
  color: #888;
  cursor: pointer;
  font-size: 18px;
`;

const ConfirmButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 20px;
  background-color: #00468e;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  align-self: center;

  &:hover {
    background-color: #003366;
  }
`;

const CheckboxModalContent = styled(ModalContent)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  gap: 10px;
  max-height: 300px;
  overflow-y: auto;

  & > ${SiGunGuInputWrapper} {
    margin-top: 0;
    margin-bottom: 0;
  }
`;