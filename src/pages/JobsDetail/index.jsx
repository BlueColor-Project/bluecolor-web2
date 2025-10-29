import React from "react";
import HiringDetail from "../../components/HiringDetail/HiringDetail";
import styled from "styled-components";
import Information from "../../components/HiringDetail/Information";
import ApplyButton from "../../components/HiringDetail/ApplyButton";
import Notice from "../../components/HiringDetail/Notice";
import Deadline from "../../components/HiringDetail/Deadline";

const JobsDetail = () => {
  return (
        <JobsDetailContainer>
            <HiringDetail />
            <Information />
            <ApplyButton />
            <Deadline />
            <Notice />
        </JobsDetailContainer>
  );
};

export default JobsDetail

const JobsDetailContainer = styled.div`

`