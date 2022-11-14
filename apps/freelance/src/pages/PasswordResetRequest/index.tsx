import { useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input } from 'antd';
import { usePasswordResetRequestMutation } from 'redux/services/user';

import { emailName, errorMessages } from './constants';
import { StyledEmail, StyledError, StyledInfo, Wrapper } from './styles';

type Inputs = {
  email: string;
};

const PasswordResetRequest = () => {
  const { t } = useTranslation();
  const { handleSubmit, control } = useForm<Inputs>();
  const email = useRef<string>('');
  const [passwordResetRequest, { isLoading, isSuccess, isError, error }] =
    usePasswordResetRequestMutation();

  const onSubmit: SubmitHandler<Inputs> = data => {
    email.current = data.email;
    passwordResetRequest(data.email);
  };

  return (
    <Wrapper>
      {!isSuccess && (
        <Form onFinish={handleSubmit(onSubmit)}>
          <h3>{t('resetPassword.title.passwordReset')}</h3>
          <Controller
            name={emailName}
            control={control}
            render={({ field }) => (
              <Form.Item
                rules={[
                  {
                    type: 'email',
                    message: `${t('resetPassword.validation.emailError')}`,
                  },
                  {
                    required: true,
                    message: `${t('resetPassword.validation.emailError')}`,
                  },
                ]}
                {...field}
              >
                <Input placeholder={t('resetPassword.placeholder.email')} />
              </Form.Item>
            )}
          />
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              {t('resetPassword.buttonText')}
            </Button>
            {isError && (
              <StyledError>
                {t(
                  errorMessages.find(
                    obj =>
                      obj.error ===
                      JSON.parse(JSON.stringify(error))?.data?.message,
                  )?.message || 'resetPassword.errors.unexpected',
                )}
              </StyledError>
            )}
          </Form.Item>
        </Form>
      )}
      {isSuccess && (
        <>
          <StyledInfo>{t('resetPassword.sentText')}</StyledInfo>
          <StyledEmail>{email.current}</StyledEmail>
        </>
      )}
    </Wrapper>
  );
};

export default PasswordResetRequest;
