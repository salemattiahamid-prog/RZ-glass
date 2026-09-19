import React from 'react';

export const FacebookBadge: React.FC<{ className?: string }> = ({ className = "w-9 h-9" }) => {
  return (
    <div className={`rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md shrink-0 ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 translate-y-[1px]">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </div>
  );
};

export const GoogleMapsPin: React.FC<{ className?: string }> = ({ className = "w-9 h-9" }) => {
  return (
    <div className={`rounded-full bg-slate-900/60 p-1 flex items-center justify-center shrink-0 ${className}`}>
      <svg viewBox="0 0 92 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-8 drop-shadow-sm">
        {/* Google Maps Pin official shape & colors */}
        <path d="M46 0C20.59 0 0 20.59 0 46C0 80.5 46 130 46 130C46 130 92 80.5 92 46C92 20.59 71.41 0 46 0Z" fill="#EA4335" />
        <path d="M46 130C46 130 20 88 10 65C3 48 24 10 46 0V130Z" fill="#4285F4" fillOpacity="0.85" />
        <path d="M46 0C68 10 89 48 82 65C72 88 46 130 46 130V0Z" fill="#34A853" fillOpacity="0.85" />
        <path d="M46 70C59.2548 70 70 59.2548 70 46C70 32.7452 59.2548 22 46 22C32.7452 22 22 32.7452 22 46C22 59.2548 32.7452 70 46 70Z" fill="#FBBC04" />
        <circle cx="46" cy="46" r="16" fill="#1A73E8" />
      </svg>
    </div>
  );
};

export const WhatsAppBadge: React.FC<{ className?: string }> = ({ className = "w-9 h-9" }) => {
  return (
    <div className={`rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md shrink-0 ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.055-1.135-.084-.285-.091-.65-.213-1.222-.462-1.921-.837-3.167-2.822-3.262-2.951-.096-.13-.778-1.036-.778-1.975 0-.939.493-1.401.669-1.593.175-.192.383-.24.511-.24.128 0 .256 0 .368.006.118.006.276-.045.431.328.16.386.544 1.328.592 1.425.048.096.08.208.016.335-.064.128-.096.208-.192.32-.096.112-.202.25-.288.336-.096.096-.197.2-.085.392.112.192.499.824 1.07 1.334.735.657 1.355.861 1.547.957.192.096.304.08.416-.048.112-.128.48-.56.608-.752.128-.192.256-.16.432-.096.176.064 1.12.528 1.312.624.192.096.32.144.368.224.048.08.048.464-.096.869z" />
      </svg>
    </div>
  );
};

