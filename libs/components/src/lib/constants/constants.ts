export const prBarStrColor = '#021691';
export const prBarTrailColor = '#B0C4DE';

declare let process: {
  env: {
    NX_API_URL: string;
  };
};
export const baseUrl: string = (process.env.NX_API_URL as string) || '';

export const profileQ1 = {
  prBarProfileQ1Per: 20,
  profileQ1Form: 'profile_questions_1',
  profileQ1HR: 'hourly_rate',
  profileQ1Descr: 'description',
  profileQ1Pos: 'position',
  profileQ1AvTime: 'available_time',
  profileQ1PartTime: 'Part-Time',
  profileQ1FullTime: 'Full-Time',
  profileQ1Edu: 'education',
  profileQ1EduInfo: 'information_about_education',
  profileQ1EduForm: 'education_from',
  profileQ1EduTo: 'education_to',
  profileQ1WorkHistoryWrapper: 'work_history_wrapper',
  profileQ1WorkHistory: 'work_history',
  profileQ1WorkFrom: 'work_from',
  profileQ1WorkTo: 'work_to',
  profileQ1HRMin: 0,
  profileQ1FormatYear: 'YYYY',
  formItemLayout: {
    labelCol: {
      sm: { span: 2 },
    },
    wrapperCol: {
      sm: { span: 4 },
    },
  },
};

export const prBarProfileQ2Per = 50;

export const validation = {
  atLeastThree: 'Enter at least 3 skills',
  required: 'This field is required',
};
