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
  /** "lat,lng" of the place itself. */
  ll: string;
  /** Straight-line distance from the centre of Marathon, in km — worked out from `ll`. */
  km: number;
  /** Photo-pending caption, shown while a place has no photograph. */
  ph: string;
  img?: string;
  gallery?: string[];
  /** Confirmed visiting details; when absent the page shows placeholders. */
  visit?: { addr: string; phone: string; hoursEl: string; hoursEn: string; admEl?: string; admEn?: string };
};

/** The centre of Marathon, which every distance on the site is measured from. */
export const MARATHON_CENTRE = "38.158757395888,23.95892339463003";

/** Straight-line distance between two "lat,lng" points, in km to one decimal. */
export function kmBetween(a: string, b: string): number {
  const [lat1, lng1] = a.split(",").map(Number);
  const [lat2, lng2] = b.split(",").map(Number);
  const rad = Math.PI / 180;
  const h =
    Math.sin(((lat2 - lat1) * rad) / 2) ** 2 +
    Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(((lng2 - lng1) * rad) / 2) ** 2;
  return Math.round(2 * 6371 * Math.asin(Math.sqrt(h)) * 10) / 10;
}

const PANORAMA = "/images/tymbos-panorama.jpg";

export const HERO_IMAGE = PANORAMA;

export const SEE_CATS: SeeCategory[] = [
  { id: 'arch', el: 'Αρχαιολογία', en: 'Archaeology' },
  { id: 'museum', el: 'Μουσεία', en: 'Museums' },
  { id: 'nature', el: 'Φύση & παραλίες', en: 'Nature & beaches' },
  { id: 'church', el: 'Εκκλησίες & μονές', en: 'Churches & monasteries' },
  { id: 'sport', el: 'Αθλητισμός', en: 'Sports' }
];

const PLACES: Omit<Landmark, "km">[] = [
  { id: 'tymbos', cat: 'arch', ll: '38.1183,23.9781', el: 'Τύμβος Μαραθώνα', en: 'Tomb of the Athenians', dEl: 'Ο ταφικός λόφος των 192 Αθηναίων της μάχης, μέσα σε ελαιώνα.', dEn: 'The burial mound of the 192 Athenians who fell in the battle.', ph: 'Tymbos burial mound at golden hour', img: '/images/tymbos-mound.jpg', gallery: [PANORAMA, '/images/tymbos-aerial.jpg', '/images/tymbos-hillside.jpg'] },
  { id: 'museum', cat: 'museum', ll: '38.1404,23.9437', el: 'Αρχαιολογικό Μουσείο Μαραθώνα', en: 'Archaeological Museum of Marathon', dEl: 'Στον Βρανά, δίπλα στους μυκηναϊκούς τύμβους και το ταφικό περίβολο.', dEn: 'At Vrana, beside the Mycenaean tumuli and the grave enclosure.', ph: 'Museum at Vrana', img: '/images/museum-pottery-hall.jpg', gallery: ['/images/museum-egyptian-hall.jpg', '/images/museum-bust-stele.jpg', '/images/museum-geometric-oinochoe.jpg', '/images/museum-pan-vessel.jpg', '/images/museum-kore.jpg', '/images/museum-stelae-hall.jpg'], visit: { addr: 'Πλαταιών 114, Βρανάς', phone: '+30 22940 55155', hoursEl: 'Καθημερινά 8:30–15:30, κλειστό Τρίτη', hoursEn: 'Daily 8:30–15:30, closed Tuesday' } },
  { id: 'runmuseum', cat: 'museum', ll: '38.1542,23.9636', el: 'Μουσείο Μαραθωνίου Δρόμου', en: 'Marathon Run Museum', dEl: 'Η διαδρομή του 1896 και οι αθλητές της, σε ένα μικρό μουσείο.', dEn: 'The 1896 course and its runners, in one compact museum.', ph: 'Marathon Run Museum', img: '/images/runmuseum-exterior.jpg', gallery: ['/images/runmuseum-olympic-room.jpg', '/images/runmuseum-corridor.jpg', '/images/runmuseum-kyriakides.jpg', '/images/runmuseum-los-angeles.jpg', '/images/runmuseum-seoul.jpg'], visit: { addr: 'Λ. Μαραθώνος & 25ης Μαρτίου', phone: '22940 67617', hoursEl: 'Τρίτη–Παρασκευή 9:00–15:00\nΣάββατο–Κυριακή 10:00–14:00\nΔευτέρα κλειστά', hoursEn: 'Tuesday–Friday 9:00–15:00\nSaturday–Sunday 10:00–14:00\nClosed Monday', admEl: '2 € · μαθητές/φοιτητές 1 €', admEn: '€2 · students €1' } },
  { id: 'schinias', cat: 'nature', ll: '38.1400,24.0270', el: 'Εθνικό Πάρκο & Παραλία Σχινιά', en: 'Schinias National Park & Beach', dEl: 'Το πευκοδάσος κατεβαίνει ως την άμμο — προστατευόμενος υγρότοπος.', dEn: 'Pine forest running down to the sand — a protected wetland.', ph: 'Schinias pine forest meeting the sea', img: '/images/schinias-pines.jpg', gallery: ['/images/schinias-bay.jpg', '/images/schinias-aerial.jpg', '/images/schinias-beach.jpg', '/images/schinias-kynosoura.jpg'] },
  { id: 'rowing', cat: 'sport', ll: '38.1500,24.0000', el: 'Ολυμπιακό Κέντρο Κωπηλασίας', en: 'Olympic Rowing Centre', dEl: 'Οι στίβοι του 2004, ακόμη ενεργοί για προπονήσεις και αγώνες.', dEn: 'The 2004 lanes, still in use for training and regattas.', ph: 'Rowing centre lanes', img: '/images/rowing-aerial.jpg', gallery: ['/images/rowing-2004.jpg', '/images/rowing-boathouse.jpg'] },
  { id: 'authentic', cat: 'sport', ll: '38.1207,23.9707', el: 'Μαραθώνιος Αθήνας. Ο Αυθεντικός', en: 'Athens Marathon. The Authentic', dEl: 'Η αφετηρία του κλασικού αγώνα, δίπλα στον Τύμβο των Μαραθωνομάχων.', dEn: 'The start of the classic race, beside the Tomb of the Marathon fighters.', ph: 'Athens Marathon start line', img: '/images/authentic-start.jpg', gallery: ['/images/authentic-flame.jpg', '/images/authentic-start-area.jpg', '/images/authentic-avenue.jpg'] },
  { id: 'ramnous', cat: 'arch', ll: '38.2176,24.0263', el: 'Ραμνούς & Ναός Νεμέσεως', en: 'Ramnous & Temple of Nemesis', dEl: 'Οχυρωμένος δήμος πάνω από τη θάλασσα, με τον ναό της Νέμεσης.', dEn: 'A fortified deme above the sea, with the temple of Nemesis.', ph: 'Ramnous ruins above the sea' },
  { id: 'brexiza', cat: 'arch', ll: '38.1133,23.9905', el: 'Βρεξίζα — ιερό Αιγυπτίων θεών', en: 'Brexiza — sanctuary of the Egyptian gods', dEl: 'Το ιερό του Ηρώδη του Αττικού, με τα κολοσσιαία αγάλματα.', dEn: 'Herodes Atticus’ sanctuary, with its colossal statues.', ph: 'Brexiza sanctuary columns' },
  { id: 'dam', cat: 'nature', ll: '38.1662,23.9022', el: 'Φράγμα & Λίμνη Μαραθώνα', en: 'Marathon Dam & Lake', dEl: 'Μαρμαρόστρωτο φράγμα του 1929 και η λίμνη πίσω του.', dEn: 'A marble-clad 1929 dam and the lake held behind it.', ph: 'Marathon dam marble face', img: '/images/dam-wall.jpg', gallery: ['/images/dam-lake-view.jpg', '/images/dam-face.jpg', '/images/dam-lake-dusk.jpg', '/images/dam-sunset.jpg'] },
  { id: 'pan', cat: 'nature', ll: '38.1609,23.9297', el: 'Σπηλιά του Πάνα', en: 'Cave of Pan', dEl: 'Λατρευτικό σπήλαιο στην Οινόη — ο θεός που βοήθησε στη μάχη.', dEn: 'A cult cave at Oinoi — the god said to have aided the battle.', ph: 'Cave of Pan entrance' },
  { id: 'oinoi', cat: 'arch', ll: '38.1550,23.9250', el: 'Πύργος & Φαράγγι Οινόης', en: 'Oinoi Tower & Gorge', dEl: 'Μεσαιωνικός πύργος και εύκολη πεζοπορία ως τη βάση του φράγματος.', dEn: 'A medieval tower and an easy hike to the foot of the dam.', ph: 'Oinoi tower above the plain', img: '/images/oinoi-tower.jpg', gallery: ['/images/oinoi-stream.jpg', '/images/oinoi-treasury.jpg', '/images/oinoi-courtyard.jpg', '/images/oinoi-tower-flowers.jpg', '/images/oinoi-dam-face.jpg'] },
  { id: 'efraim', cat: 'church', ll: '38.1007,23.9565', el: 'Μονή Αγίου Εφραίμ', en: 'Agios Efraim Monastery', dEl: 'Προσκύνημα στη Νέα Μάκρη, με κήπους και θέα στον κάμπο.', dEn: 'A pilgrimage site at Nea Makri, with gardens over the plain.', ph: 'Agios Efraim monastery courtyard' }
];

export const LANDMARKS: Landmark[] = PLACES.map((p) => ({ ...p, km: kmBetween(MARATHON_CENTRE, p.ll) }));

export function getLandmark(id: string): Landmark | undefined {
  return LANDMARKS.find((l) => l.id === id);
}
