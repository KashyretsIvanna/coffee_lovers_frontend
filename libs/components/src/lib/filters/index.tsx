import { FC } from 'react';
import { Button, Form, InputNumber, message, Select } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { MinusOutlined } from '@ant-design/icons';
import useProperties from 'src/hooks/useProperties';

import {
  categoriesName,
  englishLevelName,
  hrlyRateEndName,
  hrlyRateStartName,
  inputNumberMin,
  inputNumberRegExp,
  skillsName,
  timeName,
  timeOptions,
} from './constants';
import {
  ButtonsContainer,
  Container,
  HorizontalContainer,
  HourlyRateContainer,
  ItemContainer,
  StyledClose,
  StyledFilterTitle,
  StyledTitle,
  Wrapper,
} from './styles';
import { FiltersProps, FormItems } from './types';

export const Filters: FC<FiltersProps> = ({
  visibility,
  closeHandler,
  top,
  left,
  right,
  bottom,
}) => {
  const { t } = useTranslation();
  const { handleSubmit, control } = useForm<FormItems>();
  const {
    categories,
    skills,
    englishLevels,
    getOptionsForSelectWithId,
    getOptionsForSelectString,
  } = useProperties();

  const onSubmit: SubmitHandler<FormItems> = data => {
    if (data[hrlyRateStartName] > data[hrlyRateEndName]) {
      message.error(t('filters.errors.hourly_rate'));
    }
  };

  return (
    <Wrapper
      visibility={visibility}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    >
      <StyledClose onClick={() => closeHandler()} />
      <StyledTitle>{t('filters.title')}</StyledTitle>

      <Form onFinish={handleSubmit(onSubmit)}>
        <Container>
          <ItemContainer>
            <StyledFilterTitle>{t('filters.skills')}</StyledFilterTitle>
            <Controller
              name={skillsName}
              control={control}
              render={({ field }) => (
                <Select
                  mode="multiple"
                  allowClear
                  placeholder={t('filters.skills_placeholder')}
                  options={getOptionsForSelectWithId(skills)}
                  {...field}
                />
              )}
            />
          </ItemContainer>

          <ItemContainer>
            <StyledFilterTitle>{t('filters.category')}</StyledFilterTitle>
            <Controller
              name={categoriesName}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  mode="multiple"
                  allowClear
                  placeholder={t('filters.category_placeholder')}
                  options={getOptionsForSelectWithId(categories)}
                />
              )}
            />
          </ItemContainer>

          <ItemContainer>
            <StyledFilterTitle>{t('filters.hrly_rate')}</StyledFilterTitle>
            <HourlyRateContainer>
              <Controller
                name={hrlyRateStartName}
                control={control}
                render={({ field }) => (
                  <InputNumber
                    formatter={value =>
                      `$ ${value}`.replace(inputNumberRegExp, ',')
                    }
                    min={inputNumberMin}
                    {...field}
                  />
                )}
              />
              <MinusOutlined />
              <Controller
                name={hrlyRateEndName}
                control={control}
                render={({ field }) => (
                  <InputNumber
                    formatter={value =>
                      `$ ${value}`.replace(inputNumberRegExp, ',')
                    }
                    min={inputNumberMin}
                    {...field}
                  />
                )}
              />
            </HourlyRateContainer>
          </ItemContainer>

          <ItemContainer>
            <HorizontalContainer>
              <StyledFilterTitle>{t('filters.time')}</StyledFilterTitle>
              <Controller
                name={timeName}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    defaultValue={t('filters.time_placeholder')}
                    options={timeOptions}
                    allowClear
                  />
                )}
              />
            </HorizontalContainer>
          </ItemContainer>

          <ItemContainer>
            <HorizontalContainer>
              <StyledFilterTitle>
                {t('filters.english_level')}
              </StyledFilterTitle>
              <Controller
                name={englishLevelName}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    defaultValue={t('filters.english_level_placeholder')}
                    options={getOptionsForSelectString(englishLevels)}
                    allowClear
                  />
                )}
              />
            </HorizontalContainer>
          </ItemContainer>
          <ButtonsContainer>
            <Button>{t('filters.buttons.clear')}</Button>
            <Button htmlType="submit" type="primary">
              {t('filters.buttons.apply')}
            </Button>
          </ButtonsContainer>
        </Container>
      </Form>
    </Wrapper>
  );
};