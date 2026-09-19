import React, { useState } from 'react';
import { 
  Phone, 
  ChevronRight, 
  Globe, 
  Menu, 
  X, 
  Copy, 
  Check, 
  MessageSquare, 
  ArrowRight,
  CheckCircle2,
  MapPin,
  ExternalLink,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react';
import { 
  SERVICES_LIST, 
  COMMERCIAL_CONTACT, 
  GlassService, 
  PhoneNumberInfo 
} from './data/companyData';
import { RZLogo } from './components/RZLogo';
import { ServiceCardBadge } from './components/ServiceCardBadge';
import { FacebookBadge, GoogleMapsPin } from './components/SocialIcons';

export default function App() {
  const [activePhoneContact, setActivePhoneContact] = useState<PhoneNumberInfo | null>(null);
  const [selectedService, setSelectedService] = useState<GlassService | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const handleCopyNumber = (text: string, label: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    navigator.clipboard.writeText(text);
    setCopiedNotification(label);
    setTimeout(() => setCopiedNotification(null), 2200);
  };

  const openContactChoice = (phone: PhoneNumberInfo, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setActivePhoneContact(phone);
  };

  return (
    <div className="min-h-screen bg-[#020b18] text-slate-100 antialiased font-sans selection:bg-sky-500/30 selection:text-sky-200 relative overflow-x-hidden flex justify-center">
      
      {/* Background Ambience: Subtle Geometric Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-sky-500/10 via-blue-700/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-cyan-600/10 via-blue-900/10 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Toast Notification */}
      {copiedNotification && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-[#061428]/95 text-white border border-cyan-400/50 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_8px_25px_rgba(0,180,255,0.4)] backdrop-blur-md flex items-center gap-2.5 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <span>{copiedNotification} copié !</span>
        </div>
      )}

      {/* Main Single-Screen Mobile/Tablet/Desktop Container */}
      <div className="relative z-10 w-full max-w-[460px] sm:max-w-[490px] md:max-w-[530px] min-h-screen flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.8)] border-x border-sky-950/40 bg-[#020b18]">
        
        <div>
          
          {/* ========================================================================= */}
          {/* 1. HERO SECTION: Architectural Glass Villa + RZ Glass Logo + Menu          */}
          {/* ========================================================================= */}
          <div className="relative w-full aspect-[4/3.3] sm:aspect-[4/3] overflow-hidden">
            
            {/* Real Architectural Glass Villa Image */}
            <img 
              src={COMMERCIAL_CONTACT.heroImage} 
              alt="RZ Glass Architecture Villa" 
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('hero_glass_villa.jpg')) {
                  target.src = '/images/hero_glass_villa.jpg';
                }
              }}
              className="w-full h-full object-cover object-center scale-[1.02]" 
            />

            {/* Dark Gradient Overlays for high-contrast readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020b18]/85 via-transparent to-[#020b18] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b18] via-[#020b18]/50 to-transparent pointer-events-none" />

            {/* Top Bar: Official RZ Glass Logo (from X2.png) */}
            <header className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
              <RZLogo className="h-8 sm:h-9" variant="badge" />
            </header>

            {/* Bottom-Left Hero Typography */}
            <div className="absolute bottom-3 left-4 right-4 z-20 text-left">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-sky-200/90 uppercase leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] block">
                LE VERRE,
              </span>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight uppercase leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mt-0.5">
                <span className="text-white">NOTRE </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
                  SPÉCIALITÉ
                </span>
              </h1>

              {/* Tagline: Qualité • Sécurité • Durabilité */}
              <div className="flex items-center gap-2 mt-1.5 text-xs sm:text-[13px] font-semibold text-slate-200 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                <span>Qualité</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00e5ff]" />
                <span>Sécurité</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00e5ff]" />
                <span>Durabilité</span>
              </div>
            </div>

          </div>


          {/* ========================================================================= */}
          {/* 2. ACTION BUTTONS: Facebook, Maps, Website                                */}
          {/* ========================================================================= */}
          <div className="px-3.5 sm:px-4 pt-3.5 pb-2 space-y-2.5">
            
            {/* ROW 1: Facebook & Google Maps */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              
              {/* Facebook Button */}
              <a
                id="facebook-btn"
                href={COMMERCIAL_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 sm:p-3 rounded-2xl bg-[#041122]/90 border border-cyan-500/50 hover:border-cyan-300 shadow-[0_0_14px_rgba(0,180,255,0.18)] hover:shadow-[0_0_20px_rgba(0,180,255,0.3)] transition-all duration-200 flex items-center justify-between active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <FacebookBadge className="w-8 h-8 sm:w-9 sm:h-9" />
                  <div className="text-left leading-tight">
                    <span className="block text-[11px] sm:text-xs font-bold text-white group-hover:text-cyan-200 transition-colors">
                      Notre page
                    </span>
                    <span className="block text-[11px] sm:text-xs font-bold text-white group-hover:text-cyan-200 transition-colors">
                      Facebook
                    </span>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-cyan-300 stroke-[2.5] group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              {/* Google Maps / Localisation Button */}
              <a
                id="maps-btn"
                href={COMMERCIAL_CONTACT.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 sm:p-3 rounded-2xl bg-[#041122]/90 border border-cyan-500/50 hover:border-cyan-300 shadow-[0_0_14px_rgba(0,180,255,0.18)] hover:shadow-[0_0_20px_rgba(0,180,255,0.3)] transition-all duration-200 flex items-center justify-between active:scale-[0.98]"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <GoogleMapsPin className="w-8 h-8 sm:w-9 sm:h-9" />
                  <div className="text-left leading-tight">
                    <span className="block text-[11px] sm:text-xs font-bold text-white group-hover:text-cyan-200 transition-colors">
                      Notre
                    </span>
                    <span className="block text-[11px] sm:text-xs font-bold text-white group-hover:text-cyan-200 transition-colors">
                      localisation
                    </span>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-cyan-300 stroke-[2.5] group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

            </div>

            {/* ROW 2: Full-Width Website Button */}
            <button
              id="website-btn"
              onClick={() => setIsMenuOpen(true)}
              className="w-full py-3 px-4 rounded-2xl bg-[#041122]/90 border border-cyan-500/50 hover:border-cyan-300 shadow-[0_0_14px_rgba(0,180,255,0.18)] hover:shadow-[0_0_20px_rgba(0,180,255,0.3)] transition-all duration-200 flex items-center justify-between active:scale-[0.98] cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all shrink-0">
                  <Globe className="w-4.5 h-4.5 stroke-[2.3]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-cyan-200 transition-colors">
                  Notre site web
                </span>
              </div>

              <ChevronRight className="w-4 h-4 text-cyan-300 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
            </button>

          </div>


          {/* ========================================================================= */}
          {/* 3. SECTION DIVIDER: —— NOS SERVICES ——                                    */}
          {/* ========================================================================= */}
          <div className="flex items-center justify-center gap-3 my-5 px-4">
            <div className="h-[2px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-cyan-400 shadow-[0_0_8px_#00e5ff]" />
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider flex items-center gap-2 select-none">
              <span className="text-white drop-shadow-md">NOS</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.7)] font-black">
                SERVICES
              </span>
            </h2>
            <div className="h-[2px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-cyan-400 shadow-[0_0_8px_#00e5ff]" />
          </div>


          {/* ========================================================================= */}
          {/* 4. THE 5 SERVICES CARDS: Exact Reference Layout (3 Top + 2 Bottom)        */}
          {/* ========================================================================= */}
          <div className="space-y-3 px-3.5 sm:px-4">
            
            {/* ROW 1: 3 Cards (Vente d'accessoires, Transformation verre plat, Double vitrage) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {SERVICES_LIST.slice(0, 3).map((service) => (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="group rounded-2xl bg-[#030e1d] border border-cyan-500/40 hover:border-cyan-300 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_4px_25px_rgba(0,180,255,0.25)] transition-all duration-300 flex flex-col justify-between cursor-pointer active:scale-[0.98]"
                >
                  {/* Service Photo with Aspect Ratio */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-950">
                    <img 
                      src={service.imageSrc} 
                      alt={service.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030e1d] via-transparent to-transparent opacity-70" />
                  </div>

                  {/* Overlapping Royal Blue Round Badge */}
                  <div className="relative -mt-5 ml-2.5 z-10">
                    <ServiceCardBadge iconType={service.iconType} className="w-10 h-10 sm:w-11 sm:h-11" />
                  </div>

                  {/* Card Content: Title & Cyan Underline */}
                  <div className="p-2.5 pt-1.5 flex flex-col flex-1 justify-between text-left">
                    <h3 className="text-[11px] sm:text-xs font-bold text-white leading-snug group-hover:text-cyan-200 transition-colors line-clamp-3 min-h-[44px]">
                      {service.title}
                    </h3>
                    
                    {/* Small Cyan Indicator Bar */}
                    <div className="w-7 h-[3px] bg-cyan-400 rounded-full mt-2 shadow-[0_0_8px_#00e5ff]" />
                  </div>
                </div>
              ))}
            </div>

            {/* ROW 2: 2 Cards (Verre feuilleté, Façonnage vitrines et cabines de douches) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {SERVICES_LIST.slice(3, 5).map((service) => (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="group rounded-2xl bg-[#030e1d] border border-cyan-500/40 hover:border-cyan-300 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_4px_25px_rgba(0,180,255,0.25)] transition-all duration-300 flex flex-col justify-between cursor-pointer active:scale-[0.98]"
                >
                  {/* Service Photo with Aspect Ratio */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
                    <img 
                      src={service.imageSrc} 
                      alt={service.title} 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallbackMap: Record<string, string> = {
                          'accessoires': '/images/glass_accessories.jpg',
                          'transformation': '/images/flat_glass_sheets.jpg',
                          'double-vitrage': '/images/double_glazing_unit.jpg',
                          'verre-feuillete': '/images/laminated_glass.jpg',
                          'vitrines-douches': '/images/shower_cabin_glass.jpg',
                        };
                        const fallback = fallbackMap[service.id];
                        if (fallback && !target.src.includes(fallback)) {
                          target.src = fallback;
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030e1d] via-transparent to-transparent opacity-70" />
                  </div>

                  {/* Overlapping Royal Blue Round Badge */}
                  <div className="relative -mt-5 ml-2.5 z-10">
                    <ServiceCardBadge iconType={service.iconType} className="w-10 h-10 sm:w-11 sm:h-11" />
                  </div>

                  {/* Card Content: Title & Cyan Underline */}
                  <div className="p-2.5 pt-1.5 flex flex-col flex-1 justify-between text-left">
                    <h3 className="text-xs font-bold text-white leading-snug group-hover:text-cyan-200 transition-colors line-clamp-2 min-h-[34px]">
                      {service.title}
                    </h3>
                    
                    {/* Small Cyan Indicator Bar */}
                    <div className="w-7 h-[3px] bg-cyan-400 rounded-full mt-2 shadow-[0_0_8px_#00e5ff]" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>


        {/* ========================================================================= */}
        {/* 5. FOOTER: Divider with 3D Glass Icon + Cursive Slogan                    */}
        {/* ========================================================================= */}
        <footer className="relative mt-8 pt-4 pb-6 px-4 text-center overflow-hidden">
          
          {/* Subtle Bottom Sapphire Refractions */}
          <div className="absolute bottom-0 left-0 w-32 h-20 bg-gradient-to-tr from-sky-600/20 to-transparent pointer-events-none blur-xl" />
          <div className="absolute bottom-0 right-0 w-32 h-20 bg-gradient-to-tl from-cyan-500/20 to-transparent pointer-events-none blur-xl" />

          {/* Central Glass Divider */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-cyan-400/70" />
            
            {/* 3D Glass Sheet Emblem in center */}
            <div className="w-6 h-6 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]">
                <polygon points="15,30 40,15 50,75 25,90" fill="#0284c7" stroke="#38bdf8" strokeWidth="3" />
                <polygon points="35,20 60,5 70,65 45,80" fill="#38bdf8" stroke="#ffffff" strokeWidth="2.5" />
              </svg>
            </div>

            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-cyan-500/50 to-cyan-400/70" />
          </div>

          {/* Cursive Handwriting Slogan: La transparence en toute confiance */}
          <p className="font-calligraphy text-2xl sm:text-3xl text-slate-100 tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            La transparence
            <br />
            en toute confiance
          </p>

          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-3">
            RZ Glass • Tous droits réservés
          </p>
        </footer>

      </div>


      {/* ========================================================================= */}
      {/* DIALOG: PHONE ACTIONS MODAL (Appel, WhatsApp, Copier)                     */}
      {/* ========================================================================= */}
      {activePhoneContact && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActivePhoneContact(null)}
        >
          <div 
            className="bg-[#08152a] border border-cyan-400/50 rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-[0_0_50px_rgba(0,180,255,0.3)] animate-in zoom-in-95 duration-200 text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="close-contact-modal"
              onClick={() => setActivePhoneContact(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Dialog Header */}
            <div className="text-center pb-4 border-b border-white/10">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 uppercase inline-block mb-2">
                {activePhoneContact.label}
              </span>
              <h3 className="text-2xl font-bold font-mono tracking-wider text-white">
                {activePhoneContact.formatted}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {activePhoneContact.role}
              </p>
            </div>

            {/* Actions List */}
            <div className="py-4 space-y-3">
              
              {/* Option 1: Direct Phone Call */}
              <a
                id="modal-direct-call"
                href={activePhoneContact.telUrl}
                className="group w-full p-3.5 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white flex items-center justify-between shadow-lg shadow-sky-600/30 transition-all active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    <Phone className="w-5 h-5 fill-white stroke-[2.2]" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm">
                      Appel Téléphonique
                    </div>
                    <div className="text-[11px] text-sky-100/80">
                      Composer le numéro directement
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/90 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Option 2: WhatsApp */}
              <a
                id="modal-whatsapp"
                href={activePhoneContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full p-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white flex items-center justify-between shadow-lg shadow-emerald-600/30 transition-all active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    <MessageSquare className="w-5 h-5 fill-white stroke-[2.2]" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm">
                      Message WhatsApp
                    </div>
                    <div className="text-[11px] text-emerald-100/80">
                      Envoyer plans, photos ou devis
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/90 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Option 3: Copy */}
              <button
                id="modal-copy"
                onClick={() => handleCopyNumber(activePhoneContact.raw, activePhoneContact.label)}
                className="w-full p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copier le numéro ({activePhoneContact.raw})</span>
              </button>

            </div>

            <div className="text-center pt-1">
              <button
                onClick={() => setActivePhoneContact(null)}
                className="text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}


      {/* ========================================================================= */}
      {/* DIALOG: SERVICE DETAILS MODAL (Exact Specifications & Quote Request)      */}
      {/* ========================================================================= */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-[#08152a] border border-cyan-400/50 rounded-3xl max-w-lg w-full overflow-hidden shadow-[0_0_50px_rgba(0,180,255,0.35)] animate-in zoom-in-95 duration-200 text-white relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative w-full h-48 overflow-hidden bg-slate-950">
              <img 
                src={selectedService.imageSrc} 
                alt={selectedService.title} 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallbackMap: Record<string, string> = {
                    'accessoires': '/images/glass_accessories.jpg',
                    'transformation': '/images/flat_glass_sheets.jpg',
                    'double-vitrage': '/images/double_glazing_unit.jpg',
                    'verre-feuillete': '/images/laminated_glass.jpg',
                    'vitrines-douches': '/images/shower_cabin_glass.jpg',
                  };
                  const fallback = fallbackMap[selectedService.id];
                  if (fallback && !target.src.includes(fallback)) {
                    target.src = fallback;
                  }
                }}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08152a] via-[#08152a]/40 to-transparent" />

              {/* Close Button */}
              <button
                id="close-service-modal"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-black/50 hover:bg-black/70 text-white transition-colors cursor-pointer z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Badges on bottom of header */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3">
                <ServiceCardBadge iconType={selectedService.iconType} className="w-12 h-12 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-400/30 uppercase">
                    Service #{selectedService.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-1">
                  Description technique
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Spécifications & Avantages
                </h4>
                <div className="space-y-2">
                  {selectedService.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote CTA Button */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Besoin d'un devis rapide ?
                </span>
                <a
                  id="modal-request-quote"
                  href={COMMERCIAL_CONTACT.phoneNumbers[0]?.whatsappUrl || COMMERCIAL_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Demander un devis</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* ========================================================================= */}
      {/* DIALOG: COMPANY OVERVIEW & WEB MODAL (Opened via "Notre site web")        */}
      {/* ========================================================================= */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-[#071427] border border-cyan-400/50 rounded-3xl p-5 sm:p-6 shadow-[0_0_50px_rgba(0,180,255,0.35)] flex flex-col justify-between overflow-y-auto animate-in zoom-in-95 duration-200 text-white relative max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Modal Top */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <RZLogo className="h-8" variant="badge" />
                <button
                  id="close-drawer-btn"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Company Info */}
              <div className="py-4 space-y-3">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>À propos de RZ Glass</span>
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                    Spécialiste de la transformation du verre plat, double vitrage thermique, verre feuilleté sécurit et façonnage haut de gamme pour l'habitat et le commerce.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Horaires d'ouverture</span>
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-300">
                    Samedi — Jeudi : 08h00 - 17h30
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
                    Vendredi : Fermé (Urgences sur WhatsApp)
                  </p>
                </div>

                {/* Quick Navigation Links */}
                <div className="space-y-2.5 pt-1">
                  <a
                    href={COMMERCIAL_CONTACT.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-3 rounded-2xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-xs font-semibold flex items-center justify-between text-blue-200 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <FacebookBadge className="w-6 h-6" />
                      <span>Page Facebook officielle</span>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={COMMERCIAL_CONTACT.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-3 rounded-2xl bg-rose-600/20 hover:bg-rose-600/30 border border-rose-500/40 text-xs font-semibold flex items-center justify-between text-rose-200 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-rose-400" />
                      <span>Itinéraire Google Maps</span>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Bottom */}
            <div className="pt-4 border-t border-white/10 text-center">
              <p className="font-calligraphy text-2xl text-sky-200">
                La transparence en toute confiance
              </p>
              <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-semibold">
                RZ Glass • Safety Glass Technology
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
