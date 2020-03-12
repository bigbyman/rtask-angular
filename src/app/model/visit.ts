import {Patient} from './patient';

export class Visit {
  id: number;
  interviewExamination: string;
  physicalExamination: string;
  diagnosis: string;
  treatment: string;
  localDate: string;
  patient: Patient;
}
