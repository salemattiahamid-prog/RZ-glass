import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Facebook, 
  Copy, 
  Check, 
  MessageSquare, 
  ExternalLink, 
  Layers, 
  ChevronRight, 
  X, 
  CheckCircle2,
  Smartphone,
  AppWindow,
  Shield,
  Bath,
  Award,
  ShieldCheck,
  Clock,
  Handshake,
  ArrowRight
} from 'lucide-react';
import { 
  SERVICES_LIST, 
  COMMERCIAL_CONTACT, 
  GlassService, 
  PhoneNumberInfo 
} from './data/companyData';

export default function App() {
  const [activePhoneContact, setActivePhoneContact] = useState<PhoneNumberInfo | null>(null);
  const [selectedService, setSelectedService] = useState<GlassService | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const handleCopyNumber = (text: string, label: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    navigator.clipboard.writeText(text);
    setCopiedNotification(label);
    setTimeout(() => setCopiedNotification(null), 2400);
  };

  const openContactChoice = (phone: PhoneNumberInfo, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setActivePhoneContact(phone);
  };

  const renderServiceIcon = (type: GlassService['iconType'], size: 'md' | 'lg' = 'md') => {
    const iconClass = size === 'lg' ? "w-7 h-7" : "w-5 h-5";
    switch (type) {
      case 'smartphone':
        return <Smartphone className={`${iconClass} text-sky-400 stroke-[2]`} />;
      case 'layers':
        return <Layers className={`${iconClass} text-sky-400 stroke-[2]`} />;
      case 'window':
        return <AppWindow className={`${iconClass} text-sky-400 stroke-[2]`} />;
      case 'shield':
        return <Shield className={`${iconClass} text-sky-400 stroke-[2]`} />;
      case 'shower':
        return <Bath className={`${iconClass} text-sky-400 stroke-[2]`} />;
      default:
        return <Layers className={`${iconClass} text-sky-400 stroke-[2]`} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070e1b] text-slate-100 antialiased font-sans selection:bg-sky-500/30 selection:text-sky-200 relative overflow-x-hidden">
      
      {/* Background Ambience: Subtle Geometric Lighting (No Photos) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-b from-sky-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-t from-cyan-600/10 to-transparent rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Toast Notification */}
      {copiedNotification && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 text-white border border-sky-400/40 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_8px_25px_rgba(0,163,255,0.3)] backdrop-blur-md flex items-center gap-2.5 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="w-4 h-4 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <span>{copiedNotification} copié !</span>
        </div>
      )}

      {/* Main Corporate Container */}
      <div className="relative z-10 max-w-xl mx-auto px-4 py-8 sm:py-12 flex flex-col justify-between min-h-screen">
        
        <div className="space-y-7">
          
          {/* ========================================================================= */}
          {/* 1. CORPORATE HEADER                                                       */}
          {/* ========================================================================= */}
          <header className="text-center pt-2">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/25 text-sky-300 text-[11px] sm:text-xs font-semibold tracking-wide shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Service commercial disponible • Devis & Conseils</span>
            </div>

            {/* Architectural Glass Emblem (Pure Vector SVG, No Images) */}
            <div className="flex justify-center mb-3">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 p-[1.5px] border border-sky-400/35 shadow-[0_4px_30px_rgba(14,165,233,0.25)]">
                <div className="w-full h-full rounded-[14px] bg-[#09152b] flex items-center justify-center overflow-hidden relative">
                  <div className="absolute -top-6 -right-6 w-14 h-14 bg-sky-400/25 rounded-full blur-md" />
                  
                  {/* Modern 3D Window SVG */}
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12">
                    <rect x="15" y="15" width="70" height="70" rx="6" stroke="#00A3FF" strokeWidth="4" fill="#081b38" />
                    <path d="M22 22L47 26V74L22 78V22Z" fill="#0284c7" fillOpacity="0.8" stroke="#38bdf8" strokeWidth="2" />
                    <path d="M53 26L78 22V78L53 74V26Z" fill="#0369a1" fillOpacity="0.8" stroke="#38bdf8" strokeWidth="2" />
                    <line x1="28" y1="28" x2="41" y2="71" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Brand Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase leading-none">
              VITRERIE
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 uppercase mt-0.5">
              VERRE & ALUMINIUM
            </h2>

            {/* Catchphrase */}
            <p className="font-script text-sky-200/90 text-lg sm:text-xl tracking-wide mt-1.5">
              « Le verre, notre spécialité »
            </p>

            <div className="flex items-center justify-center gap-2 mt-2 text-[11px] text-slate-400 font-medium uppercase tracking-wider">
              <span>Transformation</span>
              <span className="w-1 h-1 rounded-full bg-sky-400" />
              <span>Vitrages isolants</span>
              <span className="w-1 h-1 rounded-full bg-sky-400" />
              <span>Accessoires</span>
            </div>
          </header>


          {/* ========================================================================= */}
          {/* 2. PHONE LINES SECTION: Click opens choice (Phone vs WhatsApp)            */}
          {/* ========================================================================= */}
          <section className="space-y-2.5">
            
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sky-400" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
                  Lignes Téléphoniques Directes
                </h3>
              </div>
              <span className="text-[11px] text-sky-400 font-medium">
                Appel ou WhatsApp
              </span>
            </div>

            {/* The 3 Phone Line Cards */}
            <div className="space-y-2.5">
              {COMMERCIAL_CONTACT.phoneNumbers.map((phone) => (
                <div
                  key={phone.raw}
                  onClick={() => openContactChoice(phone)}
                  className="group relative rounded-2xl p-4 sm:p-4.5 bg-gradient-to-r from-[#0e1c33] via-[#0b172a] to-[#0f203a] border border-slate-700/70 hover:border-sky-400/80 shadow-md hover:shadow-[0_4px_25px_rgba(14,165,233,0.2)] transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 active:scale-[0.99]"
                >
                  {/* Left: Phone Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 group-hover:border-sky-400 group-hover:text-sky-300 transition-all">
                    <Phone className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Middle: Details & Number */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                        {phone.label}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/5 border border-white/10 text-slate-300">
                        {phone.badge}
                      </span>
                    </div>

                    <div className="text-base sm:text-lg font-bold font-mono text-white tracking-wide group-hover:text-sky-200 transition-colors">
                      {phone.formatted}
                    </div>

                    <p className="text-[11px] text-slate-400 truncate mt-0.5">
                      {phone.role}
                    </p>
                  </div>

                  {/* Right: Quick Copy + Arrow */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={(e) => handleCopyNumber(phone.raw, phone.label, e)}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border border-white/5 transition-colors"
                      title="Copier le numéro"
                    >
                      <Copy className="w-4 h-4" />
                    </button>

                    <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-[11px] text-slate-400 pt-1">
              Cliquez sur un numéro pour choisir entre un <strong className="text-slate-200">Appel direct</strong> ou <strong className="text-slate-200">WhatsApp</strong>.
            </p>

          </section>


          {/* ========================================================================= */}
          {/* 3. CANAUX OFFICIELS: Maps & Facebook                                      */}
          {/* ========================================================================= */}
          <section className="grid grid-cols-2 gap-3">

            {/* Google Maps / Localisation */}
            <a
              href={COMMERCIAL_CONTACT.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-3.5 sm:p-4 bg-[#0a1322] border border-slate-700/60 hover:border-rose-500/60 transition-all duration-300 shadow-md flex items-center gap-3 active:scale-[0.99]"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 group-hover:scale-105 transition-all">
                <MapPin className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold tracking-wider text-rose-400 uppercase block">
                  Atelier
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-rose-200 transition-colors truncate">
                  Google Maps
                </h4>
                <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <span>Itinéraire GPS</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                </span>
              </div>
            </a>

            {/* Facebook Page */}
            <a
              href={COMMERCIAL_CONTACT.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-3.5 sm:p-4 bg-[#0a1322] border border-slate-700/60 hover:border-blue-500/60 transition-all duration-300 shadow-md flex items-center gap-3 active:scale-[0.99]"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-all">
                <Facebook className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold tracking-wider text-blue-400 uppercase block">
                  Page Officielle
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-200 transition-colors truncate">
                  Facebook Page
                </h4>
                <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <span>Réalisations</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                </span>
              </div>
            </a>

          </section>


          {/* ========================================================================= */}
          {/* 4. NOS 5 PRESTATIONS (Pure Technical Vector Cards - Zero Photos)          */}
          {/* ========================================================================= */}
          <section className="space-y-3 pt-1">
            
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
                  Nos 5 Prestations & Savoir-Faire
                </h3>
              </div>
              <span className="text-[11px] text-slate-400">
                Spécifications & Devis
              </span>
            </div>

            {/* The 5 Prestations List */}
            <div className="space-y-2.5">
              {SERVICES_LIST.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="group rounded-2xl bg-[#091324] border border-slate-700/60 hover:border-sky-400/60 p-4 transition-all duration-300 cursor-pointer shadow-md hover:shadow-[0_4px_25px_rgba(14,165,233,0.15)] flex items-center justify-between gap-3.5"
                >
                  {/* Left: Vector Icon Box + Number */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/15 to-blue-600/10 border border-sky-400/25 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:border-sky-400/50 transition-all">
                      {renderServiceIcon(service.iconType)}
                    </div>
                  </div>

                  {/* Middle: Service Title & Category */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-400/20">
                        #{service.number}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider truncate">
                        {service.category}
                      </span>
                    </div>

                    <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                      {service.title}
                    </h4>

                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 leading-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Right: Technical Details Arrow */}
                  <div className="flex items-center gap-1 text-sky-400 shrink-0">
                    <span className="text-[11px] font-semibold hidden sm:inline group-hover:underline">
                      Détails
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

          </section>


          {/* ========================================================================= */}
          {/* 5. QUALITY GUARANTEES & ENGAGEMENTS                                       */}
          {/* ========================================================================= */}
          <section className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              
              <div className="flex flex-col items-center gap-1.5 p-1">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-200">
                  Produits de qualité
                </span>
                <span className="text-[10px] text-slate-400">
                  Normes certifiées
                </span>
              </div>

              <div className="flex flex-col items-center gap-1.5 p-1 border-l border-white/5">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-200">
                  Travail soigné
                </span>
                <span className="text-[10px] text-slate-400">
                  Finition de précision
                </span>
              </div>

              <div className="flex flex-col items-center gap-1.5 p-1 sm:border-l border-white/5">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-200">
                  Respect des délais
                </span>
                <span className="text-[10px] text-slate-400">
                  Livraison ponctuelle
                </span>
              </div>

              <div className="flex flex-col items-center gap-1.5 p-1 border-l border-white/5">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                  <Handshake className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-200">
                  Votre satisfaction
                </span>
                <span className="text-[10px] text-slate-400">
                  Notre priorité
                </span>
              </div>

            </div>
          </section>

        </div>


        {/* ========================================================================= */}
        {/* FOOTER                                                                    */}
        {/* ========================================================================= */}
        <footer className="text-center pt-8 pb-4 border-t border-slate-800/80 mt-8">
          <p className="font-script text-slate-300 text-lg sm:text-xl tracking-wide">
            Le verre, notre spécialité
          </p>
          <p className="text-[11px] text-slate-500 font-medium mt-1">
            Solutions Vitrerie, Verre Plat & Aluminium — Tous droits réservés
          </p>
        </footer>

      </div>


      {/* ========================================================================= */}
      {/* DIALOG: CONTACT MODE SELECTION (Phone Call vs. WhatsApp vs. Copy)         */}
      {/* ========================================================================= */}
      {activePhoneContact && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActivePhoneContact(null)}
        >
          <div 
            className="bg-[#0b1527] border border-sky-500/30 rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-[0_10px_50px_rgba(0,163,255,0.25)] animate-in zoom-in-95 duration-200 text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoneContact(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Dialog Header */}
            <div className="text-center pb-5 border-b border-white/10">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-sky-500/15 border border-sky-400/30 text-sky-300 uppercase inline-block mb-2">
                {activePhoneContact.label}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-wider text-white">
                {activePhoneContact.formatted}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {activePhoneContact.role}
              </p>
            </div>

            {/* Contact Options */}
            <div className="py-5 space-y-3">
              
              {/* Option 1: Direct Phone Call */}
              <a
                href={activePhoneContact.telUrl}
                className="group w-full p-4 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white flex items-center justify-between shadow-lg shadow-sky-600/25 transition-all duration-200 active:scale-[0.98]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 stroke-[2.5]" />
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
                <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Option 2: WhatsApp Chat */}
              <a
                href={activePhoneContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white flex items-center justify-between shadow-lg shadow-emerald-600/25 transition-all duration-200 active:scale-[0.98]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm">
                      Message WhatsApp
                    </div>
                    <div className="text-[11px] text-emerald-100/80">
                      Discuter, envoyer photos ou plans
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Option 3: Copy Number */}
              <button
                onClick={() => handleCopyNumber(activePhoneContact.raw, activePhoneContact.label)}
                className="w-full p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copier le numéro ({activePhoneContact.raw})</span>
              </button>

            </div>

            {/* Dialog Footer */}
            <div className="text-center pt-1">
              <button
                onClick={() => setActivePhoneContact(null)}
                className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}


      {/* ========================================================================= */}
      {/* DIALOG: SERVICE DETAIL MODAL (Clean Vector Header - Zero Photos)          */}
      {/* ========================================================================= */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-[#0b1527] border border-sky-400/40 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 text-white relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Technical Vector Badge (Zero Photos) */}
            <div className="p-6 border-b border-white/10 bg-gradient-to-br from-[#0e1d35] to-[#09152b] relative">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-600/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0">
                  {renderServiceIcon(selectedService.iconType, 'lg')}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                      Prestation #{selectedService.number}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      {selectedService.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div>
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Description technique
                </h5>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              <div>
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-sky-400 mb-2.5">
                  Points forts & Spécifications
                </h5>
                <div className="space-y-2">
                  {selectedService.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action: Demander un Devis */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Un projet ou une commande ?
                </span>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    openContactChoice(COMMERCIAL_CONTACT.phoneNumbers[0]);
                  }}
                  className="py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Demander un devis</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
