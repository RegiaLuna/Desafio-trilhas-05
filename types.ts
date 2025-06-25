
export enum ActiveTab {
  PERSONAL = 'personal',
  MEDICAL = 'medical',
  PREFERENCES = 'preferences',
}

export interface PersonalData {
  fullName: string;
  email: string;
  phone: string;
  cpf: string;
  birthDate: string;
  cep: string;
  address: string;
  city: string;
  state: string;
}

export interface MedicalHistory {
  bloodType: string;
  emergencyContact: string;
  allergies: string;
  medications: string;
  chronicConditions: string;
  medicalObservations: string;
}

export interface PreferencesData {
  preferredUnit: string;
  preferredTime: string;
  appointmentReminder: string;
  emailNotifications: boolean;
  whatsappNotifications: boolean;
  preferenceObservations: string;
}
