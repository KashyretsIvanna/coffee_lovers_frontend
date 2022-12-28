import { Job } from './jobs.types';
import { User } from './user.types';

export enum OfferStatus {
  ACCEPTED = 'Accepted',
  DECLINED = 'Declined',
  PENDING = 'Pending',
}

export interface Offer {
  id: number;
  job: Job;
  job_owner: User;
  freelancer: User;
  hourly_rate: number;
  status: OfferStatus;
  created_at: string;
}

export interface Interview {
  id: number;
  job: Job;
  job_owner: User;
  hourly_rate: number;
}

export interface GetOffersResponse {
  id: number;
  hourly_rate: number;
  status: OfferStatus;
  created_at: string;
  job: Job;
  job_owner: User;
}

export interface GetInterviewsResponse {
  id: number;
  hourly_rate: number;
  created_at: string;
  job: Job;
  job_owner: User;
}
