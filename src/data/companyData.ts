import heroGlassVilla from '../assets/images/hero_glass_villa.jpg';
import glassAccessories from '../assets/images/glass_accessories.jpg';
import flatGlassSheets from '../assets/images/flat_glass_sheets.jpg';
import doubleGlazingUnit from '../assets/images/double_glazing_unit.jpg';
import laminatedGlass from '../assets/images/laminated_glass.jpg';
import showerCabinGlass from '../assets/images/shower_cabin_glass.jpg';

export interface GlassService {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  iconType: 'smartphone' | 'layers' | 'window' | 'shield' | 'shower';
  imageSrc: string;
  keyPoints: string[];
}

export const SERVICES_LIST: GlassService[] = [
  {
    id: 'accessoires',
    number: '01',
    category: 'Accessoires & Quincaillerie',
    title: "Vente d'accessoires pour verre trempé et verre feuilleté",
    description: "Quincaillerie spécialisée, ferrures, pinces, profils aluminium, serrures, gonds et systèmes coulissants pour verre sécurit et feuilleté.",
    iconType: 'smartphone',
    imageSrc: glassAccessories,
    keyPoints: [
      "Charnières & pinces inox haute résistance",
      "Profils de maintien en aluminium",
      "Serrures, poignées & accessoires de fixation",
      "Systèmes pour portes battantes et coulissantes"
    ]
  },
  {
    id: 'transformation',
    number: '02',
    category: 'Usinage & Découpe',
    title: "Transformation du verre plat",
    description: "Usinage et façonnage sur mesure : découpe de précision, polissage joint plat poli (JPP), biseautage, perçages et encoches techniques.",
    iconType: 'layers',
    imageSrc: flatGlassSheets,
    keyPoints: [
      "Découpe rectiligne et en forme",
      "Joint Plat Poli (JPP) et arêtes abattues",
      "Biseautage décoratif de précision",
      "Perçages et encoches pour ferrures"
    ]
  },
  {
    id: 'double-vitrage',
    number: '03',
    category: 'Isolation Thermique & Phonique',
    title: "Double vitrage",
    description: "Fabrication de vitrages isolants thermiques et acoustiques avec intercalaires étanches pour fenêtres, baies et façades.",
    iconType: 'window',
    imageSrc: doubleGlazingUnit,
    keyPoints: [
      "Isolation thermique renforcée (confort été/hiver)",
      "Affaiblissement acoustique contre les bruits extérieurs",
      "Double barrière d'étanchéité hermétique",
      "Compositions adaptées à vos menuiseries"
    ]
  },
  {
    id: 'verre-feuillete',
    number: '04',
    category: 'Sécurité & Protection',
    title: "Verre feuilleté",
    description: "Assemblage de vitrages de sécurité avec films PVB pour la protection des personnes, garde-corps, verrières et retard à l'effraction.",
    iconType: 'shield',
    imageSrc: laminatedGlass,
    keyPoints: [
      "Protection contre les risques de chute et blessures",
      "Sécurité anti-effraction et retardateur d'intrusion",
      "Adapté aux garde-corps, balcons et toitures vitrées",
      "Filtration élevée des rayons ultraviolets (UV)"
    ]
  },
  {
    id: 'vitrines-douches',
    number: '05',
    category: 'Aménagement & Sanitaire',
    title: "Façonnage vitrines et cabines de douches",
    description: "Conception et façonnage sur mesure de vitrines commerciales panoramiques, cloisons vitrées et parois de douches en verre trempé sécurit.",
    iconType: 'shower',
    imageSrc: showerCabinGlass,
    keyPoints: [
      "Vitrines de magasins & devantures commerciales",
      "Cabines et parois de douche sur mesure en verre trempé",
      "Solutions fixes, battantes ou coulissantes",
      "Étanchéité et finitions soignées"
    ]
  }
];

export interface PhoneNumberInfo {
  raw: string;
  formatted: string;
  label: string;
  role: string;
  badge: string;
  telUrl: string;
  whatsappUrl: string;
}

export const COMMERCIAL_CONTACT = {
  brandName: "RZ Glass",
  brandSubtitle: "SAFETY GLASS TECHNOLOGY",
  heroImage: heroGlassVilla,
  label: "Service Commercial",
  phoneNumbers: [
    {
      raw: "0652274793",
      formatted: "0652 27 47 93",
      label: "Ligne 1",
      role: "Service Commercial",
      badge: "Appel & WhatsApp",
      telUrl: "tel:0652274793",
      whatsappUrl: "https://wa.me/213652274793"
    },
    {
      raw: "0652274792",
      formatted: "0652 27 47 92",
      label: "Ligne 2",
      role: "Service Commercial",
      badge: "Appel & WhatsApp",
      telUrl: "tel:0652274792",
      whatsappUrl: "https://wa.me/213652274792"
    },
    {
      raw: "0540864281",
      formatted: "0540 86 42 81",
      label: "Ligne 3",
      role: "Service Commercial",
      badge: "Ligne Directe",
      telUrl: "tel:0540864281",
      whatsappUrl: "https://wa.me/213540864281"
    }
  ] as PhoneNumberInfo[],
  locationUrl: "https://share.google/PXDtOBb3sY0gNgYK6",
  facebookUrl: "https://www.facebook.com/share/1cffF2PHoX/?mibextid=wwXIfr",
  websiteUrl: "https://rzglass.dz"
};
