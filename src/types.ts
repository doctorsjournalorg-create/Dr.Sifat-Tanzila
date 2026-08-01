export type Language = 'en' | 'bn';

export interface Qualification {
  id: string;
  degree: string;
  fullTitle: string;
  institution: string;
  location: string;
  badge: string;
  description: string;
  year?: string;
}

export interface Training {
  id: string;
  title: string;
  institution: string;
  location: string;
  highlights: string[];
  tag: string;
}

export interface Procedure {
  id: string;
  category: 'laparoscopic' | 'laser' | 'colorectal' | 'breast' | 'general';
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  benefits: string[];
  recoveryTime: string;
  iconName: string;
}

export interface Chamber {
  id: string;
  name: string;
  nameBn: string;
  centerType: string;
  address: string;
  addressBn: string;
  visitingDays: string;
  visitingDaysBn: string;
  visitingHours: string;
  visitingHoursBn: string;
  phone: string;
  mapUrl: string;
  mapEmbedQuery: string;
  landmark: string;
  isPrimary?: boolean;
}

export interface AppointmentData {
  chamberId: string;
  patientName: string;
  phone: string;
  age: string;
  gender: string;
  appointmentDate: string;
  timeSlot: string;
  symptoms: string;
}

export interface FAQ {
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
  category: string;
}

export interface Publication {
  id: string;
  title: string;
  titleBn?: string;
  authors: string;
  journal: string;
  journalBn?: string;
  year: string;
  volumeIssue?: string;
  indexedIn: ('PubMed' | 'Scopus' | 'Google Scholar' | 'ResearchGate' | 'Index Medicus')[];
  category: 'Laparoscopy' | 'Laser Proctology' | 'Breast Surgery' | 'Colorectal' | 'General Surgery';
  categoryBn?: string;
  doi?: string;
  pmid?: string;
  scopusId?: string;
  url: string;
  abstract: string;
  abstractBn?: string;
  keyFindings: string[];
  keyFindingsBn?: string[];
  citationsCount?: number;
  featured?: boolean;
}

