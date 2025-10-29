import React from 'react'
import UploadResume from '../../components/UploadResume/UploadResume'
import DesiredLocation from '../../components/UploadResume/DesiredLocation'
import WorkExperience from '../../components/UploadResume/WorkExperience'
import Introduction from '../../components/UploadResume/Introduction'

const UploadResumePage = () => {
  return (
    <>
    <UploadResume />
    <DesiredLocation />
    <WorkExperience />
    <Introduction />
    </>
  )
}

export default UploadResumePage
