import { Dispatch, SetStateAction } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import {
  Control,
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from 'react-hook-form';
import { NotificationType } from '@freelance/constants';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { NotificationInstance } from 'antd/es/notification/interface';

export interface Props {
  hourly_rate?: number;
  id?: number;
  description?: string;
  open: boolean;
  setOpen: (op: boolean) => void;
}

export interface FreelancerId {
  id: number;
}

export interface sendOfferHookDto {
  api: NotificationInstance;
  setConfirmLoading: Dispatch<SetStateAction<boolean>>;
  setOpen: (op: boolean) => void;
  hourly_rate?: number;
  error: FetchBaseQueryError | SerializedError | undefined;
  isError: boolean;
  isSuccess: boolean;
}

export interface sendOfferHookReturnDto {
  handleSubmit: UseFormHandleSubmit<{
    select: null;
    rate: number | undefined;
    start: dayjs.Dayjs;
  }>;
  handleCancel: () => void;
  handleOk: () => void;

  control: Control<
    { select: null; rate: number | undefined; start: Dayjs },
    unknown
  >;
  reset: UseFormReset<{ select: null; rate: number | undefined; start: Dayjs }>;
  register: UseFormRegister<{
    select: null;
    rate: number | undefined;
    start: Dayjs;
  }>;
  errors: Partial<
    FieldErrorsImpl<{
      select: never;
      rate: number;
      start: object;
    }>
  >;
  openNotificationWithIcon: (
    type: NotificationType,
    message: string,
    description: string,
  ) => void;
}
