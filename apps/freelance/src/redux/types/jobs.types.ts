import { Property } from './properties.types';
import { User } from './user.types';

export interface Job {
  id: number;
  title?: string;
  description?: string;
  hourly_rate?: number;
  available_time?: string;
  english_level?: string;
  duration_amount?: string[];
  owner: User;
  status: JobStatus;
  created_at: string;
  category?: Property;
  skills?: Property[];
  conversations: object[];
}

export enum JobStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'InProgress',
  FINISHED = 'Finished',
}

export interface GetJobParams {
  limit?: number;
  offset?: number;
  skills?: number[];
  categories?: number[];
  hourly_rate_start?: number;
  hourly_rate_end?: number;
  available_time?: string;
  english_level?: string;
  search?: string;
}

export interface FindJobsResponse {
  jobs: Job[];
  meta: {
    totalCount: number;
  };
}

export interface Proposal {
  id: number;
  hourly_rate: number;
  cover_letter: string;
  user?: User;
}

export interface GetJobProposalsResponse {
  job: Job;
  proposals: Proposal[];
}

export interface IJobProposal {
  job: number;
  hourly_rate: number;
  cover_letter: string;
}

export interface GetJobResponse {
  job: Job;
}

export interface GetPostedJobsResponse {
  id: number;
  title: string;
  description: string;
  hourly_rate: number;
  available_time: string;
  english_level: string;
  status: JobStatus;
  created_at: string;
  category: Property;
  proposalsCount: number;
}

export interface FrelancerPayload {
  id?: number;
}
