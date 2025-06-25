
import React from 'react';

export const MedSusLogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center ${className}`}>
    <img 
      src="/images/logo.png" 
      alt="MedSUS Logo" 
      className="h-8 w-auto mr-2" 
    />
    <span className="font-bold text-xl md:text-2xl text-black">MedSUS</span>
  </div>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      clipRule="evenodd"
    />
  </svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
    <path d="M12 2.03998C6.48 2.03998 2 6.51998 2 12.03C2 17.05 5.66 21.21 10.44 21.9L10.44 14.88H7.89998V12.03H10.44V9.83998C10.44 7.30998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18L13.56 12.03H16.34L15.89 14.88H13.56L13.56 21.9C18.34 21.21 22 17.05 22 12.03C22 6.51998 17.52 2.03998 12 2.03998Z"/>
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.052 1.805.248 2.227.42a3.532 3.532 0 011.262.748c.348.348.596.72.748 1.262.172.422.368 1.055.42 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.052 1.172-.248 1.805-.42 2.227a3.532 3.532 0 01-.748 1.262 3.532 3.532 0 01-1.262.748c-.422.172-1.055.368-2.227.42-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.172-.052-1.805-.248-2.227-.42a3.532 3.532 0 01-1.262-.748 3.532 3.532 0 01-.748-1.262c-.172-.422-.368-1.055-.42-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.052-1.172.248-1.805.42-2.227.172-.422.368-1.055.42-2.227.058-1.266.07-1.646.07-4.85zm0 1.441c-3.141 0-3.503.012-4.717.068-1.096.048-1.65.232-1.998.378-.42.172-.733.372-1.025.664a2.09 2.09 0 00-.664 1.025c-.146.348-.33.902-.378 1.998C2.175 8.497 2.163 8.86 2.163 12s.012 3.503.068 4.717c.048 1.096.232 1.65.378 1.998.172.42.372.733.664 1.025.292.292.605.492 1.025.664.348.146.902.33 1.998.378 1.214.056 1.576.068 4.717.068s3.503-.012 4.717-.068c1.096-.048 1.65-.232 1.998-.378.42-.172.733-.372 1.025-.664a2.09 2.09 0 00.664-1.025c.146-.348.33-.902.378-1.998.056-1.214.068-1.576.068-4.717s-.012-3.503-.068-4.717c-.048-1.096-.232-1.65-.378-1.998a2.09 2.09 0 00-.664-1.025 2.09 2.09 0 00-1.025-.664c-.348-.146-.902-.33-1.998-.378C15.503 3.615 15.141 3.604 12 3.604zm0 4.269a4.127 4.127 0 100 8.254 4.127 4.127 0 000-8.254zm0 6.812a2.685 2.685 0 110-5.37 2.685 2.685 0 010 5.37zM16.95 6.307a.975.975 0 100 1.95.975.975 0 000-1.95z"/>
  </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
    <path d="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.78.86-2.79 1.07A4.64 4.64 0 0016.5 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.94.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.01-.06A12.074 12.074 0 008.06 20c7.64 0 11.77-6.33 11.77-11.77 0-.18 0-.35-.01-.53.81-.59 1.51-1.32 2.07-2.16z"/>
  </svg>
);

export const BLOOD_TYPES = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-", "Não sabe"];
export const PREFERRED_UNITS = ["UBS - Centro", "Hospital Regional Leste", "Clínica Saúde Vital", "Posto de Saúde Bairro Novo"];
export const PREFERRED_TIMES = ["Manhã (08:00 - 12:00)", "Tarde (13:00 - 18:00)", "Noite (18:00 - 21:00)", "Qualquer Horário"];
export const REMINDER_OPTIONS = ["Não lembrar", "1 hora antes", "12 horas antes", "24 horas antes", "2 dias antes"];
