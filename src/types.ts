export interface GlassService {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  keyPoints: string[];
}

export interface CommercialPhoneNumber {
  raw: string;
  formatted: string;
  telUrl: string;
  whatsappUrl: string;
}
