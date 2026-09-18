import { slugify } from "@/lib/slug";

// Association members shown in the directory. Phone numbers, addresses and
// hours are placeholder values until each member confirms them.

export type MemberCategoryId =
  | "bakery"
  | "taverna"
  | "stay"
  | "health"
  | "home"
  | "cloth"
  | "pro"
  | "auto"
  | "beach";

export type MemberCategory = { id: MemberCategoryId; el: string; en: string };

export type Member = {
  id: string;
  /**
   * The member's address on the site (/members/<slug>). Left out, it is made
   * from the Greek name. Set it to keep a link stable if the name changes.
   */
  slug?: string;
  cat: MemberCategoryId;
  el: string;
  en: string;
  dEl: string;
  dEn: string;
  tel: string;
  /** Open days as digits, 0 = Sunday … 6 = Saturday. */
  d: string;
  /** Opening hours as "HH:MM-HH:MM"; "00:00-23:59" means around the clock. */
  h: string;
};

export type MemberDetail = {
  /** "lat,lng" */
  ll: string;
  el: string;
  en: string;
  svcEl: string[];
  svcEn: string[];
  addr: string;
};

export const MEMBER_CATS: MemberCategory[] = [
  { id: 'bakery', el: 'Αρτοποιεία & τρόφιμα', en: 'Bakeries & food' },
  { id: 'taverna', el: 'Ταβέρνες & καφέ', en: 'Tavernas & cafés' },
  { id: 'stay', el: 'Διαμονή', en: 'Accommodation' },
  { id: 'health', el: 'Υγεία & φαρμακείο', en: 'Health & pharmacy' },
  { id: 'home', el: 'Σπίτι & κήπος', en: 'Home & garden' },
  { id: 'cloth', el: 'Ένδυση', en: 'Clothing' },
  { id: 'pro', el: 'Επαγγελματικές υπηρεσίες', en: 'Professional services' },
  { id: 'auto', el: 'Αυτοκίνητο & καύσιμα', en: 'Auto & fuel' },
  { id: 'beach', el: 'Άθληση & παραλία', en: 'Sports & beach' }
];

export const MEMBERS: Member[] = [
  { id: 'b1', cat: 'bakery', el: 'Αρτοποιείον Δημητρίου', en: 'Dimitriou Bakery', dEl: 'Ξυλόφουρνος από το 1978 — χωριάτικο, κουλούρια, τσουρέκι.', dEn: 'Wood-fired oven since 1978 — village loaves, koulouria, tsoureki.', tel: '22940 61 2xx', d: '123456', h: '06:30-14:30' },
  { id: 'b2', cat: 'bakery', el: 'Μελισσοκομία Σχινιά', en: 'Schinias Apiary', dEl: 'Θυμαρίσιο και πευκόμελο από τα μελίσσια του δάσους.', dEn: 'Thyme and pine honey from hives in the forest.', tel: '22940 62 1xx', d: '12345', h: '09:00-17:00' },
  { id: 'b3', cat: 'bakery', el: 'Οπωροπωλείο «Η Γη του Μαραθώνα»', en: '\u201cMarathon Earth\u201d Greengrocer', dEl: 'Λαχανικά του κάμπου, πατάτα Μαραθώνα, τυριά Αττικής.', dEn: 'Produce from the plain, Marathon potatoes, Attic cheeses.', tel: '22940 63 4xx', d: '123456', h: '08:00-20:00' },
  { id: 'b4', cat: 'taverna', el: 'Ταβέρνα «Ο Τύμβος»', en: 'Taverna O Tymvos', dEl: 'Μαγειρευτά και ψητά κάτω από τον πλάτανο, όλο τον χρόνο.', dEn: 'Home cooking and grills under the plane tree, year round.', tel: '22940 55 3xx', d: '0123456', h: '12:00-23:30' },
  { id: 'b5', cat: 'taverna', el: 'Ψαροταβέρνα «Κύμα»', en: 'Kyma Fish Taverna', dEl: 'Φρέσκο ψάρι στην παραλία Σχινιά, με τραπέζια στην άμμο.', dEn: 'Fresh fish on Schinias beach, tables on the sand.', tel: '22940 55 9xx', d: '034560', h: '12:00-00:00' },
  { id: 'b6', cat: 'taverna', el: 'Καφέ «Πλάτανος»', en: 'Cafe Platanos', dEl: 'Καφές, γλυκά του κουταλιού και εφημερίδες στην πλατεία.', dEn: 'Coffee, spoon sweets and newspapers on the square.', tel: '22940 56 2xx', d: '0123456', h: '07:00-22:00' },
  { id: 'b7', cat: 'taverna', el: 'Ουζερί Βρανά', en: 'Vrana Ouzeri', dEl: 'Μεζέδες και τσίπουρο, δέκα τραπέζια, χωρίς κατάλογο.', dEn: 'Mezedes and tsipouro, ten tables, no printed menu.', tel: '22940 57 8xx', d: '23456', h: '18:00-01:00' },
  { id: 'b8', cat: 'stay', el: 'Πευκιάς Rooms & Studios', en: 'Pefkias Rooms & Studios', dEl: 'Οκτώ στούντιο στο πευκοδάσος, 400 μ. από την παραλία.', dEn: 'Eight studios in the pines, 400 m from the beach.', tel: '22940 58 1xx', d: '0123456', h: '08:00-22:00' },
  { id: 'b9', cat: 'stay', el: 'Ξενώνας Βρανά', en: 'Vrana Guesthouse', dEl: 'Πέντε δωμάτια σε πέτρινο κτίσμα, πρωινό με τοπικά προϊόντα.', dEn: 'Five rooms in a stone building, breakfast from local producers.', tel: '22940 58 7xx', d: '0123456', h: '09:00-21:00' },
  { id: 'b10', cat: 'health', el: 'Φαρμακείο Παπαδάκη', en: 'Papadaki Pharmacy', dEl: 'Συνταγογράφηση, εμβόλια ταξιδιού, είδη παραλίας.', dEn: 'Prescriptions, travel vaccines, beach essentials.', tel: '22940 51 2xx', d: '123456', h: '08:00-14:00' },
  { id: 'b11', cat: 'health', el: 'Οδοντιατρείο Λ. Στεφανίδη', en: 'L. Stefanidis Dental Surgery', dEl: 'Γενική οδοντιατρική, επείγοντα ραντεβού την ίδια μέρα.', dEn: 'General dentistry, same-day emergency appointments.', tel: '22940 52 6xx', d: '12345', h: '09:00-19:00' },
  { id: 'b12', cat: 'health', el: 'Φυσιοθεραπεία Μαραθώνος', en: 'Marathon Physiotherapy', dEl: 'Αποκατάσταση και αθλητικές κακώσεις — δρομείς καλοδεχούμενοι.', dEn: 'Rehab and sports injuries — runners welcome.', tel: '22940 53 3xx', d: '12345', h: '08:00-20:00' },
  { id: 'b13', cat: 'home', el: 'Φυτώριο «Ελαιώνας»', en: '\u201cEleonas\u201d Plant Nursery', dEl: 'Ελιές, εσπεριδοειδή και φυτά αντοχής στη ξηρασία, χονδρική & λιανική.', dEn: 'Olives, citrus and drought-hardy planting, trade & retail.', tel: '22940 64 5xx', d: '123456', h: '08:00-18:00' },
  { id: 'b14', cat: 'home', el: 'Υδραυλικά Κ. Ρήγας', en: 'K. Rigas Plumbing', dEl: 'Υδραυλικές εγκαταστάσεις, θερμοσίφωνες, βλάβες αυθημερόν.', dEn: 'Installations, water heaters, same-day callouts.', tel: '22940 65 1xx', d: '123456', h: '07:30-17:00' },
  { id: 'b15', cat: 'home', el: 'Χρώματα & Σιδηρικά Μαραθώνος', en: 'Marathon Paint & Hardware', dEl: 'Χρώματα, εργαλεία, μικροϋλικά και κλειδιά.', dEn: 'Paint, tools, fixings and key cutting.', tel: '22940 66 8xx', d: '123456', h: '07:30-15:00' },
  { id: 'b16', cat: 'cloth', el: 'Boutique «Θάλασσα»', en: 'Thalassa Boutique', dEl: 'Λινά, μαγιό και ψάθες — γυναικεία και παιδικά.', dEn: 'Linen, swimwear and straw hats — women\u2019s and children\u2019s.', tel: '22940 67 2xx', d: '123456', h: '10:00-14:00' },
  { id: 'b17', cat: 'cloth', el: 'Υποδήματα Λεμονιά', en: 'Lemonia Shoes', dEl: 'Παπούτσια εργασίας, σανδάλια, επιδιορθώσεις.', dEn: 'Workwear shoes, sandals, repairs.', tel: '22940 68 4xx', d: '12345', h: '09:30-14:00' },
  { id: 'b18', cat: 'pro', el: 'Λογιστικό Γραφείο Ν. Βασιλείου', en: 'N. Vasileiou Accountants', dEl: 'Φορολογικά, μισθοδοσία και σύσταση επιχειρήσεων.', dEn: 'Tax, payroll and company formation.', tel: '22940 71 3xx', d: '12345', h: '09:00-17:00' },
  { id: 'b19', cat: 'pro', el: 'Ασφάλειες Μαραθώνος', en: 'Marathon Insurance', dEl: 'Αυτοκίνητο, κατοικία, επιχείρηση — ανεξάρτητος πράκτορας.', dEn: 'Motor, home and business — independent broker.', tel: '22940 72 9xx', d: '12345', h: '09:00-16:30' },
  { id: 'b20', cat: 'pro', el: 'Δικηγορικό Γραφείο Α. Κοντού', en: 'A. Kontou Law Office', dEl: 'Κτηματολόγιο, συμβόλαια, κληρονομικά.', dEn: 'Land registry, contracts, inheritance.', tel: '22940 73 1xx', d: '12345', h: '09:00-18:00' },
  { id: 'b21', cat: 'auto', el: 'Συνεργείο Αυτοκινήτων Ζαχαρίας', en: 'Zacharias Auto Repair', dEl: 'Service, διάγνωση, ΚΤΕΟ προετοιμασία.', dEn: 'Servicing, diagnostics, roadworthiness prep.', tel: '22940 74 6xx', d: '123456', h: '08:00-17:00' },
  { id: 'b22', cat: 'auto', el: 'Πρατήριο Καυσίμων Σχινιά', en: 'Schinias Fuel Station', dEl: 'Αμόλυβδη, diesel, πλυντήριο και αέρας — 24 ώρες.', dEn: 'Unleaded, diesel, car wash and air — 24 hours.', tel: '22940 75 2xx', d: '0123456', h: '00:00-23:59' },
  { id: 'b23', cat: 'auto', el: 'Ελαστικά Μαραθώνος', en: 'Marathon Tyres', dEl: 'Ελαστικά, ζυγοστάθμιση, ευθυγράμμιση.', dEn: 'Tyres, balancing, wheel alignment.', tel: '22940 76 5xx', d: '123456', h: '08:30-18:00' },
  { id: 'b24', cat: 'beach', el: 'Θαλάσσια Σπορ Σχινιά', en: 'Schinias Watersports', dEl: 'Windsurf, kite και SUP — σχολή, ενοικίαση, φύλαξη εξοπλισμού.', dEn: 'Windsurf, kite and SUP — school, rental, board storage.', tel: '22940 77 1xx', d: '0123456', h: '09:00-19:00' },
  { id: 'b25', cat: 'beach', el: 'Ποδηλατάδικο Μαραθώνος', en: 'Marathon Cycles', dEl: 'Ενοικίαση ποδηλάτων, service και διαδρομές στον κάμπο.', dEn: 'Bike rental, service and routes across the plain.', tel: '22940 78 3xx', d: '123456', h: '09:00-18:00' }
];

// Per-member detail copy. Addresses are placeholder street numbers.
export const MEMBER_DETAILS: Record<string, MemberDetail> = {
  b1: { ll: '38.1556,23.9641', el: 'Ο φούρνος δουλεύει με ξυλόφουρνο από το 1978, στην ίδια γωνία της πλατείας. Το ζυμάρι είναι με προζύμι και ο χωριάτικος άρτος βγαίνει δύο φορές την ημέρα.', en: 'The bakery has worked its wood oven since 1978, on the same corner of the square. The dough is sourdough and the village loaf comes out twice a day.', svcEl: ['Ψωμί με προζύμι', 'Παραγγελίες για εκδηλώσεις', 'Καφές σε πακέτο'], svcEn: ['Sourdough bread', 'Orders for events', 'Coffee to take away'], addr: 'Πλατεία Μαραθώνα 4' },
  b2: { ll: '38.1489,24.0062', el: 'Οικογενειακή μελισσοκομία με μελίσσια μέσα στο πευκοδάσος του Σχινιά. Η παραγωγή είναι μικρή και εποχική.', en: 'A family apiary with hives inside the Schinias pine forest. Production is small and seasonal.', svcEl: ['Θυμαρίσιο & πευκόμελο', 'Κερί και γύρη', 'Επίσκεψη στα μελίσσια κατόπιν συνεννόησης'], svcEn: ['Thyme & pine honey', 'Wax and pollen', 'Hive visits by arrangement'], addr: 'Λεωφ. Σχινιά 18' },
  b3: { ll: '38.1561,23.9628', el: 'Λαχανικά από τον κάμπο του Μαραθώνα, με έμφαση στην τοπική πατάτα, και τυριά από μικρούς παραγωγούς της Αττικής.', en: 'Vegetables from the Marathon plain, the local potato above all, and cheeses from small Attic producers.', svcEl: ['Προϊόντα του κάμπου', 'Τυριά Αττικής', 'Διανομή στην περιοχή'], svcEn: ['Produce from the plain', 'Attic cheeses', 'Local delivery'], addr: 'Οδός Μαραθωνομάχων 22' },
  b4: { ll: '38.1551,23.9648', el: 'Ταβέρνα με μαγειρευτά της ημέρας και ψητά στα κάρβουνα, κάτω από τον πλάτανο. Ανοιχτά όλο τον χρόνο, με σόμπα τον χειμώνα.', en: 'Cooked dishes of the day and charcoal grills, under the plane tree. Open all year, with a stove in winter.', svcEl: ['Μαγειρευτά ημέρας', 'Ψητά στα κάρβουνα', 'Τραπέζια για γιορτές'], svcEn: ['Daily cooked dishes', 'Charcoal grills', 'Tables for celebrations'], addr: 'Πλατεία Μαραθώνα 9' },
  b5: { ll: '38.1432,24.0184', el: 'Ψαροταβέρνα πάνω στην παραλία του Σχινιά, με τραπέζια στην άμμο και ψάρι ανάλογα με το τι έφερε η μέρα.', en: 'A fish taverna on Schinias beach, tables on the sand and whatever the day\u2019s catch allows.', svcEl: ['Ψάρι ημέρας', 'Τραπέζια στην άμμο', 'Κρατήσεις το καλοκαίρι'], svcEn: ['Catch of the day', 'Tables on the sand', 'Summer reservations'], addr: 'Παραλία Σχινιά' },
  b6: { ll: '38.1554,23.9636', el: 'Καφενείο της πλατείας: καφές, γλυκά του κουταλιού, εφημερίδες και τάβλι. Ανοίγει νωρίς.', en: 'The café on the square: coffee, spoon sweets, newspapers and backgammon. Opens early.', svcEl: ['Καφές και γλυκά', 'Εφημερίδες', 'Wi-Fi'], svcEn: ['Coffee and sweets', 'Newspapers', 'Wi-Fi'], addr: 'Πλατεία Μαραθώνα 2' },
  b7: { ll: '38.1402,23.9451', el: 'Μικρό ουζερί με δέκα τραπέζια. Δεν υπάρχει κατάλογος — οι μεζέδες λέγονται στο τραπέζι.', en: 'A small ouzeri with ten tables. There is no menu — the mezedes are recited at the table.', svcEl: ['Μεζέδες ημέρας', 'Τσίπουρο και ούζο', 'Μόνο βραδινά'], svcEn: ['Mezedes of the day', 'Tsipouro and ouzo', 'Evenings only'], addr: 'Βρανάς, οδός Πλαταιών 5' },
  b8: { ll: '38.1461,24.0121', el: 'Οκτώ αυτόνομα στούντιο σε κήπο με πεύκα, τετρακόσια μέτρα από την παραλία. Λειτουργεί από τον Απρίλιο ως τον Οκτώβριο.', en: 'Eight self-contained studios in a pine garden, four hundred metres from the beach. Open April to October.', svcEl: ['Στούντιο με κουζίνα', 'Δωρεάν στάθμευση', 'Φύλαξη εξοπλισμού θαλάσσης'], svcEn: ['Studios with kitchenette', 'Free parking', 'Watersports equipment storage'], addr: 'Λεωφ. Σχινιά 44' },
  b9: { ll: '38.1398,23.9463', el: 'Πέντε δωμάτια σε πέτρινο κτίσμα στον Βρανά, με πρωινό από τοπικούς παραγωγούς. Ανοιχτά όλο τον χρόνο.', en: 'Five rooms in a stone building at Vrana, with breakfast from local producers. Open all year.', svcEl: ['Πρωινό με τοπικά προϊόντα', 'Κήπος και αυλή', 'Κατάλληλο για οικογένειες'], svcEn: ['Breakfast from local producers', 'Garden and courtyard', 'Family friendly'], addr: 'Βρανάς, οδός Μιλτιάδου 11' },
  b10: { ll: '38.1559,23.9633', el: 'Φαρμακείο στο κέντρο, με συνταγογράφηση, εμβόλια ταξιδιού και είδη παραλίας. Συμμετέχει στην εφημερία της περιοχής.', en: 'A pharmacy in the centre, with prescriptions, travel vaccines and beach essentials. Takes part in the local duty rota.', svcEl: ['Ηλεκτρονική συνταγογράφηση', 'Μέτρηση πίεσης', 'Εφημερία κατά σειρά'], svcEn: ['Electronic prescriptions', 'Blood pressure checks', 'Duty rota'], addr: 'Οδός Μαραθωνομάχων 8' },
  b11: { ll: '38.1547,23.9652', el: 'Γενική οδοντιατρική για ενήλικες και παιδιά, με δυνατότητα επείγοντος ραντεβού την ίδια ημέρα.', en: 'General dentistry for adults and children, with same-day emergency appointments where possible.', svcEl: ['Προληπτικός έλεγχος', 'Επείγοντα αυθημερόν', 'Παιδοδοντία'], svcEn: ['Check-ups', 'Same-day emergencies', 'Children\u2019s dentistry'], addr: 'Οδός Ηρώδου 3' },
  b12: { ll: '38.1508,23.9701', el: 'Φυσιοθεραπευτήριο με έμφαση στις αθλητικές κακώσεις — χρήσιμο για δρομείς που ετοιμάζονται για τον Αυθεντικό Μαραθώνιο.', en: 'A physiotherapy practice focused on sports injuries — useful for runners preparing for the Authentic Marathon.', svcEl: ['Αποκατάσταση τραυματισμών', 'Θεραπευτική άσκηση', 'Αξιολόγηση δρομέων'], svcEn: ['Injury rehabilitation', 'Therapeutic exercise', 'Runner assessment'], addr: 'Λεωφ. Μαραθώνος 130' },
  b13: { ll: '38.1483,23.9689', el: 'Φυτώριο με ελιές, εσπεριδοειδή και φυτά αντοχής στη ξηρασία, κατάλληλα για τον κάμπο και για παραθαλάσσιους κήπους.', en: 'A nursery of olives, citrus and drought-hardy planting, suited to the plain and to seaside gardens.', svcEl: ['Χονδρική και λιανική', 'Συμβουλές φύτευσης', 'Μεταφορά στην περιοχή'], svcEn: ['Trade and retail', 'Planting advice', 'Local delivery'], addr: 'Λεωφ. Μαραθώνος 76' },
  b14: { ll: '38.1572,23.9619', el: 'Υδραυλικές εγκαταστάσεις και επισκευές, με ανταπόκριση σε βλάβες αυθημερόν στην περιοχή Μαραθώνα και Σχινιά.', en: 'Plumbing installation and repair, with same-day callouts across Marathon and Schinias.', svcEl: ['Βλάβες αυθημερόν', 'Θερμοσίφωνες και λέβητες', 'Εγκαταστάσεις νέων κατοικιών'], svcEn: ['Same-day callouts', 'Water heaters and boilers', 'New-build installation'], addr: 'Οδός Κυνεγείρου 14' },
  b15: { ll: '38.1565,23.9624', el: 'Χρώματα, εργαλεία, μικροϋλικά και κλειδιά — το κατάστημα που καλύπτει τις μικρές δουλειές του σπιτιού.', en: 'Paint, tools, fixings and key cutting — the shop that covers the small jobs around the house.', svcEl: ['Ανάμειξη χρωμάτων', 'Κοπή κλειδιών', 'Ενοικίαση εργαλείων'], svcEn: ['Paint mixing', 'Key cutting', 'Tool hire'], addr: 'Οδός Μαραθωνομάχων 31' },
  b16: { ll: '38.1553,23.9644', el: 'Γυναικεία και παιδικά ρούχα με έμφαση στα λινά, στα μαγιό και στα καλοκαιρινά αξεσουάρ.', en: 'Women\u2019s and children\u2019s clothing, with an emphasis on linen, swimwear and summer accessories.', svcEl: ['Λινά και μαγιό', 'Μεταποιήσεις', 'Εποχιακές εκπτώσεις'], svcEn: ['Linen and swimwear', 'Alterations', 'Seasonal sales'], addr: 'Πλατεία Μαραθώνα 6' },
  b17: { ll: '38.1544,23.9657', el: 'Υποδήματα εργασίας, σανδάλια και καθημερινά παπούτσια, με επιδιορθώσεις στο κατάστημα.', en: 'Workwear boots, sandals and everyday shoes, with repairs done in the shop.', svcEl: ['Υποδήματα εργασίας', 'Επιδιορθώσεις', 'Παραγγελίες νούμερων'], svcEn: ['Workwear footwear', 'Repairs', 'Special size orders'], addr: 'Οδός Μιλτιάδου 27' },
  b18: { ll: '38.1521,23.9678', el: 'Λογιστικό γραφείο για ελεύθερους επαγγελματίες και μικρές επιχειρήσεις της περιοχής.', en: 'An accountancy office for sole traders and small businesses in the area.', svcEl: ['Φορολογικές δηλώσεις', 'Μισθοδοσία', 'Σύσταση επιχειρήσεων'], svcEn: ['Tax returns', 'Payroll', 'Company formation'], addr: 'Λεωφ. Μαραθώνος 54, 1ος όροφος' },
  b19: { ll: '38.1521,23.9676', el: 'Ανεξάρτητος ασφαλιστικός πράκτορας που συνεργάζεται με περισσότερες από μία εταιρείες.', en: 'An independent insurance broker working with more than one company.', svcEl: ['Ασφάλιση οχημάτων', 'Κατοικίας και επιχείρησης', 'Αναθεώρηση συμβολαίων'], svcEn: ['Motor insurance', 'Home and business', 'Policy reviews'], addr: 'Λεωφ. Μαραθώνος 54' },
  b20: { ll: '38.1549,23.9659', el: 'Δικηγορικό γραφείο με αντικείμενο κυρίως το κτηματολόγιο, τα συμβόλαια και τις κληρονομικές υποθέσεις.', en: 'A law office working mainly on land registry, contracts and inheritance matters.', svcEl: ['Κτηματολόγιο', 'Αγοραπωλησίες', 'Κληρονομικά'], svcEn: ['Land registry', 'Property transfers', 'Inheritance'], addr: 'Οδός Ηρώδου 12' },
  b21: { ll: '38.1496,23.9712', el: 'Συνεργείο για όλες τις μάρκες, με διαγνωστικό έλεγχο και προετοιμασία για ΚΤΕΟ.', en: 'A garage for all makes, with diagnostics and roadworthiness-test preparation.', svcEl: ['Service και διάγνωση', 'Προετοιμασία ΚΤΕΟ', 'Οδική βοήθεια κατόπιν κλήσης'], svcEn: ['Servicing and diagnostics', 'Roadworthiness prep', 'Recovery on call'], addr: 'Λεωφ. Μαραθώνος 91' },
  b22: { ll: '38.1478,24.0038', el: 'Πρατήριο στον δρόμο προς τον Σχινιά, ανοιχτό όλο το εικοσιτετράωρο, με πλυντήριο και αέρα.', en: 'A filling station on the Schinias road, open around the clock, with car wash and air.', svcEl: ['Αμόλυβδη και diesel', 'Πλυντήριο', 'Αέρας και νερό'], svcEn: ['Unleaded and diesel', 'Car wash', 'Air and water'], addr: 'Λεωφ. Σχινιά 3' },
  b23: { ll: '38.1489,23.9724', el: 'Ελαστικά για επιβατικά και επαγγελματικά οχήματα, με ζυγοστάθμιση και ευθυγράμμιση.', en: 'Tyres for cars and light commercials, with balancing and wheel alignment.', svcEl: ['Ελαστικά όλων των τύπων', 'Ζυγοστάθμιση', 'Φύλαξη χειμερινών'], svcEn: ['Tyres of every type', 'Balancing', 'Winter tyre storage'], addr: 'Λεωφ. Μαραθώνος 103' },
  b24: { ll: '38.1425,24.0196', el: 'Σχολή και κέντρο ενοικίασης για windsurf, kite και SUP στον Σχινιά, όπου ο απογευματινός βοριάς είναι σταθερός.', en: 'A school and rental centre for windsurf, kite and SUP at Schinias, where the afternoon north wind is reliable.', svcEl: ['Μαθήματα για αρχάριους', 'Ενοικίαση εξοπλισμού', 'Φύλαξη σανίδων'], svcEn: ['Beginner lessons', 'Equipment rental', 'Board storage'], addr: 'Παραλία Σχινιά, τμήμα Β' },
  b25: { ll: '38.1568,23.9631', el: 'Ενοικίαση και service ποδηλάτων, με προτεινόμενες διαδρομές στον κάμπο και προς τη λίμνη.', en: 'Bicycle rental and service, with suggested routes across the plain and up to the lake.', svcEl: ['Ενοικίαση ποδηλάτων', 'Service και επισκευές', 'Χάρτες διαδρομών'], svcEn: ['Bike rental', 'Service and repairs', 'Route maps'], addr: 'Οδός Μαραθωνομάχων 19' }
};

export function getMember(id: string): Member | undefined {
  return MEMBERS.find((m) => m.id === id);
}

export function memberSlug(m: Member): string {
  return m.slug ?? slugify(m.el);
}

const BY_SLUG = new Map<string, Member>();
for (const m of MEMBERS) {
  const slug = memberSlug(m);
  // Two members with the same address would hide one of them — fail the build instead.
  const taken = BY_SLUG.get(slug);
  if (taken) throw new Error(`Members ${taken.id} and ${m.id} share the URL slug "${slug}". Give one a \`slug\`.`);
  BY_SLUG.set(slug, m);
}

export function getMemberBySlug(slug: string): Member | undefined {
  return BY_SLUG.get(slug);
}
