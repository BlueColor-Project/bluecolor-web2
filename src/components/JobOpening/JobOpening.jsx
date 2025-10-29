import React, { useState, useEffect ,useRef } from 'react'
import styled from 'styled-components'
import searchIcon from "../../images/search.png";
import settingIcon from "../../images/setting.png";
import nextIcon from "../../images/next.png";
import { useNavigate } from 'react-router-dom';
import { JobOpeningData } from '../../mockdata/JobOpeningData';

const JobOpening = () => {
  const navigate = useNavigate();
  const [showStatusModalId, setShowStatusModalId] = useState(null);
  const [jobOpeningData, setJobOpeningData] = useState(JobOpeningData);
  const [showModalId, setShowModalId] = useState(null);
  const statusModalRef = useRef(null);
  const modalRef = useRef(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);


  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModalId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [modalRef]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (statusModalRef.current && !statusModalRef.current.contains(event.target)) {
        setShowStatusModalId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [statusModalRef]);


    
  return (
    <JobOpeningContainer>
        {deleteConfirmId !== null && (
      <ConfirmOverlay>
        <ConfirmBox>
          <p>“{
            jobOpeningData.find(x => x.id === deleteConfirmId).title
          }” 공고를 정말 삭제하시겠어요?</p>
          <button onClick={() => {
            setJobOpeningData(d => d.filter(x => x.id !== deleteConfirmId));
            setDeleteConfirmId(null);
          }}>
            네, 삭제할게요
          </button>
          <button onClick={() => setDeleteConfirmId(null)}>
            취소
          </button>
        </ConfirmBox>
      </ConfirmOverlay>
    )}
        <JobOpeningContent>
            <JobOpeningContentTitle>공고관리</JobOpeningContentTitle>
            <SearchContainer>
        <SearchInput type="text" placeholder="등록자명 또 는 공고명을 입력하세요" maxWidth={30} />
        <SearchIcon src={searchIcon} alt="searchIcon" />
        </SearchContainer>
        <JobOpeningContentListContainer>
    <JobOpeningContentList>
        <Title1>등록일</Title1>
        <Title1>등록자</Title1>
        <Title1>공고명</Title1>
        <Title2>직무</Title2>
        <Title2>근무지</Title2>
        <Title2>지원자</Title2>
        <Title2>상태</Title2>
        <Title2>관리·설정</Title2>
    </JobOpeningContentList>

    <AllJobOpeningContentList>
        {jobOpeningData.map((item) => (
            <JobOpeningContentList2 key={item.id}>
                <Title3>{item.createdAt}</Title3>
                <Title4>{item.createdBy}</Title4>
                <Title5>{item.title}</Title5>
                <Title6>{item.type}</Title6>
                <Title7>{item.location}</Title7>
                <Title8>
                    <PeopleIcon src={item.icon} alt="peopleIcon" />
                    {item.people}
                </Title8>
                <Title9 style={{ color: item.statusColor }}>
                    <StatusText
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowStatusModalId(prevId => (prevId === item.id ? null : item.id));
                            if (showModalId === item.id) {
                                setShowModalId(null);
                            }
                        }}
                    >
                        {item.status}
                    </StatusText>
                    {showStatusModalId === item.id && (
  <StatusModalContainer ref={statusModalRef}>
    <StatusModalButton
      style={{ color: "#1B960D" }}
      onClick={() => {
        setJobOpeningData(prev =>
          prev.map(x =>
            x.id === item.id
              ? { ...x, status: '승인완료', statusColor: '#1B960D' }
              : x
          )
        );
        setShowStatusModalId(null);
      }}
    >
      승인완료
    </StatusModalButton>
    <StatusModalButton
      style={{ color: "#0D2B96" }}
      onClick={() => {
        setJobOpeningData(prev =>
          prev.map(x =>
            x.id === item.id
              ? { ...x, status: '승인대기', statusColor: '#0D2B96' }
              : x
          )
        );
        setShowStatusModalId(null);
      }}
    >
      승인대기
    </StatusModalButton>
    <StatusModalButton
  style={{ color: "#E03607" }}
  onClick={() => {
    setDeleteConfirmId(item.id);
    setShowStatusModalId(null);
  }}
>
  승인취소
</StatusModalButton>
  </StatusModalContainer>
)}
                </Title9>
                <SettingColumnWrapper>
                <SettingIcon src={settingIcon}
                    alt="settingIcon"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowModalId(prevId => (prevId === item.id ? null : item.id));
                        if (showStatusModalId === item.id) {
                            setShowStatusModalId(null);
                        }
                    }}
                />
                {showModalId === item.id && (
                    <ModalContainer ref={modalRef}>
                         <ModalButton
                         onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/JobPosting`);
                          }}
                          >
                        수정
                    </ModalButton>
                    <ModalButton2
                    onClick={e => {
                        e.stopPropagation();
                        setShowModalId(null);
                        setDeleteConfirmId(item.id);
                        }}
                        >
                            삭제
                            </ModalButton2>
                        <ModalButton
                         onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/JobPosting`);
                          }}
                          >
                        상세보기
                    </ModalButton>
                    </ModalContainer>
                )}
                </SettingColumnWrapper>
            </JobOpeningContentList2>
        ))}
    </AllJobOpeningContentList>
    <Pagination>
        <PaginationItem1 src={nextIcon} alt="leftIcon" />
        <PaginationItem2 src={nextIcon} alt="rightIcon" />
    </Pagination>
</JobOpeningContentListContainer>
        </JobOpeningContent>
    </JobOpeningContainer>
    
  )
}

export default JobOpening

const SettingColumnWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`;

const JobOpeningContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`


const JobOpeningContent = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    background-color: #f8fafc; 
    border: 1px solid #00468e;
    height: auto;
`

const JobOpeningContentTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #00468e;
  margin-bottom: 50px;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
`

const SearchInput = styled.input`
  width: 550px;
  height: 50px;
  border: 2px solid #00468e;
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  outline: none;

  &::placeholder {
    color: #D9D9D9;
  }
`

const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  width: 40px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
`

const JobOpeningContentListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const JobOpeningContentList = styled.div`
    width: 1120px;
    display: grid;
    grid-template-columns: 0.8fr 0.8fr 2.5fr 1fr 1fr 0.5fr 0.8fr 0.8fr;
    align-items: center;
    border: 3px solid #00468e;
`

const Title1 = styled.div`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    padding: 10px 0;
`

const Title2 = styled.div`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    padding: 10px 0;
`

const JobOpeningContentList2 = styled.div`
    width: 1120px;
    display: grid;
    grid-template-columns: 0.8fr 0.8fr 2.5fr 1fr 1fr 0.5fr 0.8fr 0.8fr;
    align-items: center;
    border-bottom: 3px solid #D9D9D9;
    border-left: 3px solid #D9D9D9;
    border-right: 3px solid #D9D9D9;
`
const AllJobOpeningContentList = styled.div`

`

const Title3 = styled.div`
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    padding: 20px 0;
    `

const Title4 = styled.div`
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    padding: 10px 0;
`

const Title5 = styled.div`
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    padding: 10px 0;
`

const Title6 = styled.div`
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    padding: 10px 0;
`

const Title7 = styled.div`
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    padding: 10px 0;
`

const Title8 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    padding: 10px 0;
`

const PeopleIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`

const Title9 = styled.div`
    position: relative;
    font-size: 14px;
    font-weight: 700;
    color: #1B960D;
    text-align: center;
    padding: 10px 0;
    justify-self: center;
`

const StatusText = styled.div`
    cursor: pointer;
    display: inline-block;
    padding: 2px 5px;
`

const SettingIcon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`

const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const PaginationItem1 = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    transform: rotate(180deg);

    &:hover {
        opacity: 0.8;
    }
`

const PaginationItem2 = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-left: 60px;

    &:hover {
        opacity: 0.8;
    }
`

const ModalContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border: 1px solid #00468e;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    z-index: 10;
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`

const ModalButton = styled.button`
    padding: 10px;
    background: none;
    border: none;
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: #00468e;

    &:hover {
        background-color: #f8fafc;
    }
`

const ModalButton2 = styled.button`
padding: 10px;
    background: none;
    border: none;
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: #E03607;

    &:hover {
        background-color: #f8fafc;
    }
`

const StatusModalContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border: 1px solid #00468e;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    z-index: 15;
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
`

const StatusModalButton = styled.button`
    padding: 8px 12px;
    background: none;
    border: none;
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: #00468e;
    width: 100%;
    white-space: nowrap;

    &:hover {
        background-color: #f8fafc;
    }
`

const ConfirmOverlay = styled.div`
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 2000;

  & button {
    margin: 0 8px;
    padding: 10px;
    background: none;
    border: none;
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: #00468e;
  }
`;
const ConfirmBox = styled.div`
  background: white; padding: 20px; border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  text-align: center;
  & > p { margin-bottom: 16px; }
  & > button { margin: 0 8px; }
`;
