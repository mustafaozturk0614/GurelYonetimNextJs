export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  details?: string[];
  pricing?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export interface CompanyStats {
  number: string;
  label: string;
}

export interface FeaturedService {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}