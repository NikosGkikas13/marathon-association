// Places in "What to see". Copy is taken verbatim from the Marathon design.

export type SeeCategoryId = "arch" | "museum" | "nature" | "church" | "sport";

export type SeeCategory = { id: SeeCategoryId; el: string; en: string };

export type Landmark = {
  id: string;
  cat: SeeCategoryId;
  el: string;
  en: string;
  dEl: string;
  dEn: string;
  /** Distance from Marathon square, in km. */
  km: number;
  /** Photo-pending caption, shown while a place has no photograph. */
  ph: string;
  img?: string;
  gallery?: string[];
};

const PANORAMA = "/images/tymbos-panorama.jpg";

export const HERO_IMAGE = PANORAMA;

export const SEE_CATS: SeeCategory[] = [
  { id: 'arch', el: 'Αρχαιολογία', en: 'Archaeology' },
  { id: 'museum', el: 'Μουσεία', en: 'Museums' },
  { id: 'nature', el: 'Φύση & παραλίες', en: 'Nature & beaches' },
  { id: 'church', el: 'Εκκλησίες & μονές', en: 'Churches & monasteries' },
  { id: 'sport', el: 'Αθλητισμός', en: 'Sports' }
];

export const LANDMARKS: Landmark[] = [
  { id: 'tymbos', cat: 'arch', el: 'Τύμβος Μαραθώνα', en: 'Tomb of the Athenians', dEl: 'Ο ταφικός λόφος των 192 Αθηναίων της μάχης, μέσα σε ελαιώνα.', dEn: 'The burial mound of the 192 Athenians who fell in the battle.', km: 1.4, ph: 'Tymbos burial mound at golden hour', img: '/images/tymbos-mound.jpg', gallery: [PANORAMA, '/images/tymbos-aerial.jpg'] },
  { id: 'museum', cat: 'museum', el: 'Αρχαιολογικό Μουσείο Μαραθώνα', en: 'Archaeological Museum of Marathon', dEl: 'Στον Βρανά, δίπλα στους μυκηναϊκούς τύμβους και το ταφικό περίβολο.', dEn: 'At Vrana, beside the Mycenaean tumuli and the grave enclosure.', km: 3.2, ph: 'Museum at Vrana' },
  { id: 'runmuseum', cat: 'museum', el: 'Μουσείο Μαραθωνίου Δρόμου', en: 'Marathon Run Museum', dEl: 'Η διαδρομή του 1896 και οι αθλητές της, σε ένα μικρό μουσείο.', dEn: 'The 1896 course and its runners, in one compact museum.', km: 0.6, ph: 'Marathon Run Museum' },
  { id: 'schinias', cat: 'nature', el: 'Εθνικό Πάρκο & Παραλία Σχινιά', en: 'Schinias National Park & Beach', dEl: 'Το πευκοδάσος κατεβαίνει ως την άμμο — προστατευόμενος υγρότοπος.', dEn: 'Pine forest running down to the sand — a protected wetland.', km: 7.8, ph: 'Schinias pine forest meeting the sea' },
  { id: 'rowing', cat: 'sport', el: 'Ολυμπιακό Κέντρο Κωπηλασίας', en: 'Olympic Rowing Centre', dEl: 'Οι στίβοι του 2004, ακόμη ενεργοί για προπονήσεις και αγώνες.', dEn: 'The 2004 lanes, still in use for training and regattas.', km: 6.1, ph: 'Rowing centre lanes' },
  { id: 'ramnous', cat: 'arch', el: 'Ραμνούς & Ναός Νεμέσεως', en: 'Ramnous & Temple of Nemesis', dEl: 'Οχυρωμένος δήμος πάνω από τη θάλασσα, με τον ναό της Νέμεσης.', dEn: 'A fortified deme above the sea, with the temple of Nemesis.', km: 13.5, ph: 'Ramnous ruins above the sea' },
  { id: 'brexiza', cat: 'arch', el: 'Βρεξίζα — ιερό Αιγυπτίων θεών', en: 'Brexiza — sanctuary of the Egyptian gods', dEl: 'Το ιερό του Ηρώδη του Αττικού, με τα κολοσσιαία αγάλματα.', dEn: 'Herodes Atticus\u2019 sanctuary, with its colossal statues.', km: 4.5, ph: 'Brexiza sanctuary columns' },
  { id: 'dam', cat: 'nature', el: 'Φράγμα & Λίμνη Μαραθώνα', en: 'Marathon Dam & Lake', dEl: 'Μαρμαρόστρωτο φράγμα του 1929 και η λίμνη πίσω του.', dEn: 'A marble-clad 1929 dam and the lake held behind it.', km: 9.2, ph: 'Marathon dam marble face' },
  { id: 'pan', cat: 'nature', el: 'Σπηλιά του Πάνα', en: 'Cave of Pan', dEl: 'Λατρευτικό σπήλαιο στην Οινόη — ο θεός που βοήθησε στη μάχη.', dEn: 'A cult cave at Oinoi — the god said to have aided the battle.', km: 5.4, ph: 'Cave of Pan entrance' },
  { id: 'efraim', cat: 'church', el: 'Μονή Αγίου Εφραίμ', en: 'Agios Efraim Monastery', dEl: 'Προσκύνημα στη Νέα Μάκρη, με κήπους και θέα στον κάμπο.', dEn: 'A pilgrimage site at Nea Makri, with gardens over the plain.', km: 8.6, ph: 'Agios Efraim monastery courtyard' }
];

export function getLandmark(id: string): Landmark | undefined {
  return LANDMARKS.find((l) => l.id === id);
}
