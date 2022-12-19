import { FC } from 'react';
import { Avatar, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { UserOutlined } from '@ant-design/icons';
import { InformationSticker } from '@freelance/components';
import { User } from 'src/redux/types/user.types';
import { getFileUrl } from 'src/utils/api';
import { getSizedText } from 'src/utils/text';

import { avatarSize, coverLetterMaxLength } from './constants';
import {
  CoverLetterText,
  CoverLetterVisibility,
  FreelancerDetailsContainer,
  FreelancerInfoContainer,
  HourlyRateContainer,
  StyledBottom,
  StyledFreelancerName,
  StyledHourlyRate,
  StyledTop,
  StyledTopLeftSide,
  StyledTopRightSide,
  Wrapper,
} from './styles';
import useProposalCard from './useProposalCard';

interface ProposalCardProps {
  onClick?: () => void;
  user?: User;
  hourlyRate: number;
  availableTime?: string;
  coverLetter: string;
}

export const ProposalCard: FC<ProposalCardProps> = ({
  onClick,
  user,
  hourlyRate,
  availableTime,
  coverLetter,
}) => {
  const { t } = useTranslation();
  const { coverLetterVisibility, coverLetterVisibilityHandler } =
    useProposalCard();

  return (
    <Wrapper onClick={onClick}>
      <StyledTop>
        <StyledTopLeftSide>
          <Avatar
            icon={<UserOutlined />}
            size={avatarSize}
            src={getFileUrl(user?.profile_image)}
          />
          <FreelancerInfoContainer>
            <StyledFreelancerName>
              {`${user?.first_name} ${user?.last_name}`}
            </StyledFreelancerName>
            <FreelancerDetailsContainer>
              {user?.position && (
                <InformationSticker>{user?.position}</InformationSticker>
              )}
              {user?.skills?.map(skill => (
                <InformationSticker key={skill.id}>
                  {skill.name}
                </InformationSticker>
              ))}
            </FreelancerDetailsContainer>
          </FreelancerInfoContainer>
        </StyledTopLeftSide>

        <StyledTopRightSide>
          <HourlyRateContainer>
            <StyledHourlyRate>
              {t('proposalsList.hourly_rate', { rate: hourlyRate })}
            </StyledHourlyRate>
            {availableTime && (
              <InformationSticker>{availableTime}</InformationSticker>
            )}
          </HourlyRateContainer>
          <Button>{t('proposalsList.start_chat')}</Button>
        </StyledTopRightSide>
      </StyledTop>

      <StyledBottom>
        {coverLetter && (
          <CoverLetterText>
            <div>
              {coverLetterVisibility
                ? coverLetter
                : getSizedText(coverLetter, coverLetterMaxLength)}
            </div>
            {coverLetter.length > coverLetterMaxLength && (
              <CoverLetterVisibility onClick={coverLetterVisibilityHandler}>
                {t(
                  coverLetterVisibility
                    ? 'textVisibility.hide'
                    : 'textVisibility.show',
                )}
              </CoverLetterVisibility>
            )}
          </CoverLetterText>
        )}
      </StyledBottom>
    </Wrapper>
  );
};
