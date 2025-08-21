import { Facebook, Globe, Instagram, Linkedin, Youtube } from "lucide-react";

export const ApplyLink:string="https://sis.rst.edu.eg/UI/Adm/AdmMod_ApplicantForm.aspx";


export const campus ={  
    name: "Alryada university",
    addressLink:"https://maps.app.goo.gl/gwcqhhr8xy5UP6mh7",
    address: "El Sadat City, ElMehwar ElMarkazy-2, Cairo - Alex desert RD K92",
    Hotline: "16504",
    Phone: ["01552966678", "01552966679", "01552966680"],
    email: "info@rst.edu.eg",
    DirectionsLink: "https://maps.app.goo.gl/TLCeZ8TH6viMfxZe6",
  };
 
  export const Faculties: string[] = [
    "Faculty_of_Computers_and_Artificial_Intelligence",
 
  ];

   export interface SocialMediaLink {
                name: string;
                url: string;
                color: string;
                icon: React.ComponentType<{ size?: number ,className?:string,style?: React.CSSProperties}>;
              }
  export  const socialMediaLinks:SocialMediaLink[] = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/Alryada.Univerity/',
      color: '#1877F2'
    },
    {
      name: 'Alryada university',
      icon: Globe,
      url: 'https://rst.edu.eg/',
      color: '#6b7280'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/p/C9eo_5UC69W/',
      color: '#dd2a7b'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/alryada-university/posts/?feedView=all',
      color: '#0A66C2'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/channel/UCLE3susZZNOcNlFIfK_YtHw',
      color: '#FF0000'
    }
  ];
