import { useState } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppBar, AvatarUpload } from '@freelance/components';
import { InterviewModal } from '@freelance/components';
import { mockUserData } from '@freelance/components';
import {
  useGetUserEducationInfoQuery,
  useGetUserInfoQuery,
  useGetUserWorkInfoQuery,
} from 'redux/services/user';

import * as St from './styles';

const FreelancerPageInfo = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const showModal = () => {
    setOpen(true);
  };

  const { data: user, isLoading: isLoadingUser } = useGetUserInfoQuery();
  const { data: work, isLoading: isLoadingWork } = useGetUserWorkInfoQuery();
  const { data: education, isLoading: isLoadingEdu } =
    useGetUserEducationInfoQuery();

  return (
    <St.Wrapper isLoading={isLoadingUser || isLoadingWork || isLoadingEdu}>
      <AppBar />
      <St.LogoWrapper direction="vertical">
        <AvatarUpload />
        <p>
          {user?.first_name} {user?.last_name}
        </p>
      </St.LogoWrapper>
      <St.FreelancerInfo>
        <Row>
          <Col span={6}>
            <St.Label>{t('description.profileQp2.category')}</St.Label>
          </Col>
          <Col span={18}>
            <St.StCol>{user?.category.name}</St.StCol>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <St.Label>{t('description.profileQp1.hR')}</St.Label>
          </Col>
          <Col span={18}>
            <St.StCol>
              <St.Hr>{user?.hourly_rate} $</St.Hr>
            </St.StCol>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <St.Label>{t('description.profileQp1.descr')}</St.Label>
          </Col>
          <Col span={18}>
            <St.StCol>
              <St.BigBox>{user?.description}</St.BigBox>
            </St.StCol>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <St.Label>{t('description.profileQp1.pos')}</St.Label>
          </Col>
          <Col span={18}>
            <St.StCol>
              <St.MediuBox>{user?.position}</St.MediuBox>
            </St.StCol>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <St.Label>{t('description.profileQp1.avTime')}</St.Label>
          </Col>
          <Col span={18}>
            <St.StCol>
              <St.MediuBox>{user?.available_time}</St.MediuBox>
            </St.StCol>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <St.Label>{t('description.profileQp1.edu')}</St.Label>
          </Col>
          <Col span={18}>
            {education?.map(el => (
              <St.FlexWrapper key={el.id}>
                <St.EduData>{el.education_descr}</St.EduData>
                <St.EduTime>{el.education_from}</St.EduTime>
                <St.WorkTime>{el.education_to}</St.WorkTime>
              </St.FlexWrapper>
            ))}
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <St.Label>{t('description.profileQp1.workH')}</St.Label>
          </Col>
          <Col span={18}>
            {work?.map(el => (
              <St.FlexWrapper key={el.id}>
                <St.WorkData>{el.work_history_descr}</St.WorkData>
                <St.WorkTime>{el.work_history_from}</St.WorkTime>
                <St.WorkTime>{el.work_history_to}</St.WorkTime>
              </St.FlexWrapper>
            ))}
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <St.Label>{t('description.profileQp2.skills_top')}</St.Label>
          </Col>
          <Col span={18}>
            <St.FlexWrapper>
              {user?.skills.map(el => (
                <St.Skill key={el.id}>{el.name}</St.Skill>
              ))}
            </St.FlexWrapper>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <St.Label>{t('description.profileQp2.english_level')}</St.Label>
          </Col>
          <Col span={18}>
            <St.StCol>{user?.english_level}</St.StCol>
          </Col>
        </Row>
      </St.FreelancerInfo>
      <InterviewModal
        freelancerId={mockUserData.id}
        open={open}
        setOpen={setOpen}
      />
      <St.ButtonWrapper>
        <St.StyledButton onClick={() => navigate('/')}>
          {t('description.freelancerPageInfo.sendOffer')}
        </St.StyledButton>
        <St.StyledButton onClick={showModal}>
          {t('description.freelancerPageInfo.inviteInterview')}
        </St.StyledButton>
      </St.ButtonWrapper>
    </St.Wrapper>
  );
};

export default FreelancerPageInfo;
