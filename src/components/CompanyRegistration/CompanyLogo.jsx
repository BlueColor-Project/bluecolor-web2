import React, { useRef } from 'react'
import styled from 'styled-components'
import DeleteIcon from '../../images/Delete.png'

const CompanyLogo = ({ logoPreview, setLogoPreview }) => {
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

  const handleDeleteLogo = () => {
    setLogoPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
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
  )
}

export default CompanyLogo

// Styled Components
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

const LogoImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const LogoImage = styled.div`
  position: relative;
  width: 180px;
  height: 240px;
  border: 1px solid #00468e;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
`

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`

const DeleteIconImg = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 1;
`

const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const LogoText = styled.div`
`

const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #F60A0A;
` 