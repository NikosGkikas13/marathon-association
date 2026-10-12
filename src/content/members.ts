import { slugify } from "@/lib/slug";

// Association members shown in the directory. Phone numbers, addresses and
// hours are placeholder values until each member confirms them.

export type MemberCategoryId =
  | "bakery"
  | "food"
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
  /** Days whose hours differ from `h`, keyed by day digit (0 = Sunday). */
  hDay?: Partial<Record<number, string>>;
};

export type MemberDetail = {
  /** "lat,lng" */
  ll: string;
  el: string;
  en: string;
  svcEl: string[];
  svcEn: string[];
  addr: string;
  email?: string;
  /** Full URL, including https:// or http://. */
  web?: string;
  /** Photographs in /public/images: the first is the hero, the rest fill the gallery. */
  photos?: string[];
};

export const MEMBER_CATS: MemberCategory[] = [
  { id: 'bakery', el: 'Αρτοποιεία & ζαχαροπλαστεία', en: 'Bakeries & pastry shops' },
  { id: 'food', el: 'Αγορά τροφίμων', en: 'Food market' },
  { id: 'taverna', el: 'Εστιατόρια & καφέ', en: 'Restaurants & cafés' },
  { id: 'stay', el: 'Διαμονή', en: 'Accommodation' },
  { id: 'health', el: 'Υγεία & φαρμακείο', en: 'Health & pharmacy' },
  { id: 'home', el: 'Σπίτι & κήπος', en: 'Home & garden' },
  { id: 'cloth', el: 'Ένδυση', en: 'Clothing' },
  { id: 'pro', el: 'Επαγγελματικές υπηρεσίες', en: 'Professional services' },
  { id: 'auto', el: 'Αυτοκίνητο & καύσιμα', en: 'Auto & fuel' },
  { id: 'beach', el: 'Άθληση & παραλία', en: 'Sports & beach' }
];

export const MEMBERS: Member[] = [
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
  { id: 'b21', cat: 'auto', el: 'Συνεργείο Αυτοκινήτων Ζαχαρίας', en: 'Zacharias Auto Repair', dEl: 'Service, διάγνωση, ΚΤΕΟ προετοιμασία.', dEn: 'Servicing, diagnostics, roadworthiness prep.', tel: '22940 74 6xx', d: '123456', h: '08:00-17:00' },
  { id: 'b22', cat: 'auto', el: 'Πρατήριο Καυσίμων Σχινιά', en: 'Schinias Fuel Station', dEl: 'Αμόλυβδη, diesel, πλυντήριο και αέρας — 24 ώρες.', dEn: 'Unleaded, diesel, car wash and air — 24 hours.', tel: '22940 75 2xx', d: '0123456', h: '00:00-23:59' },
  { id: 'b23', cat: 'auto', el: 'Ελαστικά Μαραθώνος', en: 'Marathon Tyres', dEl: 'Ελαστικά, ζυγοστάθμιση, ευθυγράμμιση.', dEn: 'Tyres, balancing, wheel alignment.', tel: '22940 76 5xx', d: '123456', h: '08:30-18:00' },
  { id: 'b24', cat: 'beach', el: 'Θαλάσσια Σπορ Σχινιά', en: 'Schinias Watersports', dEl: 'Windsurf, kite και SUP — σχολή, ενοικίαση, φύλαξη εξοπλισμού.', dEn: 'Windsurf, kite and SUP — school, rental, board storage.', tel: '22940 77 1xx', d: '0123456', h: '09:00-19:00' },
  { id: 'b25', cat: 'beach', el: 'Ποδηλατάδικο Μαραθώνος', en: 'Marathon Cycles', dEl: 'Ενοικίαση ποδηλάτων, service και διαδρομές στον κάμπο.', dEn: 'Bike rental, service and routes across the plain.', tel: '22940 78 3xx', d: '123456', h: '09:00-18:00' },
  { id: 'b26', cat: 'bakery', el: 'Φούρνος Γκίκα', en: 'Gkikas Bakery', dEl: 'Χειροποίητες πίτες, ζυμωτό ψωμί και γλυκά από το 1994.', dEn: 'Handmade pies, kneaded bread and pastries since 1994.', tel: '22940 67557', d: '0123456', h: '06:00-20:30' },
  // Hours are placeholders until the shop confirms them.
  { id: 'b27', cat: 'food', el: 'Κρεοπωλείο «Η Εύβοια»', en: 'Evia Butcher Shop', dEl: 'Ελληνικά κρέατα, φρέσκα κάθε μέρα, από το 1981.', dEn: 'Greek meat, fresh every day, since 1981.', tel: '22940 66743', d: '123456', h: '08:00-15:00' },
  { id: 'b29', cat: 'pro', el: 'Οίκος Τελετών Γκινοσάτης', en: 'Gkinosatis Funeral Home', dEl: 'Τελετές, μνημόσυνα, αποτεφρώσεις και επαναπατρισμοί — 15 χρόνια στην Ανατολική Αττική.', dEn: 'Funerals, memorials, cremations and repatriation — 15 years in East Attica.', tel: '22940 99861', d: '0123456', h: '00:00-23:59' },
  { id: 'b30', cat: 'taverna', el: 'Marathon Village', en: 'Marathon Village', dEl: 'Καφέ, εστιατόριο, beach bar και οργανωμένη παραλία πάνω στο κύμα, με parking 300 θέσεων.', dEn: 'Café, restaurant, beach bar and organised beach right on the water, with 300-space parking.', tel: '22940 57685', d: '0123456', h: '08:00-02:00' },
  { id: 'b31', cat: 'food', el: 'Σούπερ Μάρκετ Κρητικός', en: 'Kritikos Supermarket', dEl: 'Το σούπερ μάρκετ της γειτονιάς: τρόφιμα, κατεψυγμένα, κρασιά και ποτά.', dEn: 'The neighbourhood supermarket: groceries, frozen food, wine and spirits.', tel: '22940 66374', d: '0123456', h: '08:00-21:00', hDay: { 6: '08:00-20:00', 0: '08:00-14:00' } },
  { id: 'b32', cat: 'food', el: 'Φρουτεμπορική Χρυσίνας', en: 'Chrysinas Greengrocer', dEl: 'Φρέσκα ελληνικά φρούτα και λαχανικά, τοπικό μέλι και παραδοσιακά προϊόντα, από το 1955.', dEn: 'Fresh Greek fruit and vegetables, local honey and traditional products, since 1955.', tel: '22940 66374', d: '0123456', h: '08:00-21:00', hDay: { 0: '08:00-14:00' } }
];

// Per-member detail copy. Addresses are placeholder street numbers.
export const MEMBER_DETAILS: Record<string, MemberDetail> = {
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
  b21: { ll: '38.1496,23.9712', el: 'Συνεργείο για όλες τις μάρκες, με διαγνωστικό έλεγχο και προετοιμασία για ΚΤΕΟ.', en: 'A garage for all makes, with diagnostics and roadworthiness-test preparation.', svcEl: ['Service και διάγνωση', 'Προετοιμασία ΚΤΕΟ', 'Οδική βοήθεια κατόπιν κλήσης'], svcEn: ['Servicing and diagnostics', 'Roadworthiness prep', 'Recovery on call'], addr: 'Λεωφ. Μαραθώνος 91' },
  b22: { ll: '38.1478,24.0038', el: 'Πρατήριο στον δρόμο προς τον Σχινιά, ανοιχτό όλο το εικοσιτετράωρο, με πλυντήριο και αέρα.', en: 'A filling station on the Schinias road, open around the clock, with car wash and air.', svcEl: ['Αμόλυβδη και diesel', 'Πλυντήριο', 'Αέρας και νερό'], svcEn: ['Unleaded and diesel', 'Car wash', 'Air and water'], addr: 'Λεωφ. Σχινιά 3' },
  b23: { ll: '38.1489,23.9724', el: 'Ελαστικά για επιβατικά και επαγγελματικά οχήματα, με ζυγοστάθμιση και ευθυγράμμιση.', en: 'Tyres for cars and light commercials, with balancing and wheel alignment.', svcEl: ['Ελαστικά όλων των τύπων', 'Ζυγοστάθμιση', 'Φύλαξη χειμερινών'], svcEn: ['Tyres of every type', 'Balancing', 'Winter tyre storage'], addr: 'Λεωφ. Μαραθώνος 103' },
  b24: { ll: '38.1425,24.0196', el: 'Σχολή και κέντρο ενοικίασης για windsurf, kite και SUP στον Σχινιά, όπου ο απογευματινός βοριάς είναι σταθερός.', en: 'A school and rental centre for windsurf, kite and SUP at Schinias, where the afternoon north wind is reliable.', svcEl: ['Μαθήματα για αρχάριους', 'Ενοικίαση εξοπλισμού', 'Φύλαξη σανίδων'], svcEn: ['Beginner lessons', 'Equipment rental', 'Board storage'], addr: 'Παραλία Σχινιά, τμήμα Β' },
  b25: { ll: '38.1568,23.9631', el: 'Ενοικίαση και service ποδηλάτων, με προτεινόμενες διαδρομές στον κάμπο και προς τη λίμνη.', en: 'Bicycle rental and service, with suggested routes across the plain and up to the lake.', svcEl: ['Ενοικίαση ποδηλάτων', 'Service και επισκευές', 'Χάρτες διαδρομών'], svcEn: ['Bike rental', 'Service and repairs', 'Route maps'], addr: 'Οδός Μαραθωνομάχων 19' },
  b26: { ll: '', el: 'Ο Φούρνος Γκίκα βρίσκεται στο κέντρο του Μαραθώνα και είναι σημείο αναφοράς για αρτοσκευάσματα και γλυκίσματα, με φρέσκα προϊόντα κάθε μέρα από το 1994. Έμφαση στην παραδοσιακή αρτοποιία και τη χειροποίητη παρασκευή: το ψωμί και οι χειροποίητες πίτες είναι οι πιο αγαπημένες επιλογές της γειτονιάς. Οικογενειακός χαρακτήρας, αγνά υλικά και φιλική εξυπηρέτηση.', en: 'Gkikas Bakery sits in the centre of Marathon and is a local reference point for bread and pastries, with fresh products every day since 1994. The focus is traditional baking and handmade preparation: the bread and the handmade pies are the neighbourhood favourites. A family-run shop with honest ingredients and friendly service.', svcEl: ['Ψωμί και ζυμωτό', 'Χειροποίητες πίτες', 'Γλυκά και κουλουράκια'], svcEn: ['Bread and kneaded loaves', 'Handmade pies', 'Sweets and biscuits'], addr: 'Δημοκρατίας 41', photos: ['/images/gkikas-storefront.jpg', '/images/gkikas-building.jpg', '/images/gkikas-shop-biscuits.jpg', '/images/gkikas-shop-sweets.jpg'] },
  b27: { ll: '', el: 'Το κρεοπωλείο «Η Εύβοια» σερβίρει το τραπέζι των κατοίκων του Μαραθώνα από το 1981, με ελληνικά κρέατα φρέσκα κάθε μέρα: αρνί, κατσίκι, χοιρινό, κοτόπουλο και σπιτικά λουκάνικα. Απλή δουλειά, καθαρό κρέας και κόψιμο όπως το θέλετε.', en: 'Evia Butcher Shop has been putting Greek meat on Marathon tables since 1981, fresh every day: lamb, goat, pork, chicken and homemade sausages. Simple work, good meat, cut the way you want it.', svcEl: ['Ελληνικά κρέατα', 'Κοτόπουλα και λουκάνικα', 'Κόψιμο κατά παραγγελία'], svcEn: ['Greek meat', 'Chicken and sausages', 'Cut to order'], addr: 'Λεωφ. Μαραθώνος 118', photos: ['/images/evia-storefront-night.jpg', '/images/evia-storefront.jpg', '/images/evia-counter.jpg', '/images/evia-counter-portrait.jpg'] },
  b29: { ll: '', el: 'Γέννημα-θρέμμα παιδί του Μαραθώνα, ο Μανώλης Γκινοσάτης διατηρεί τα τελευταία 15 χρόνια οίκο τελετών στην Ανατολική Αττική. Στη δύσκολη στιγμή στέκεται δίπλα στην οικογένεια με διακριτικότητα και πραγματικό ενδιαφέρον, και αναλαμβάνει κάθε λεπτομέρεια: την οργάνωση της τελετής, τον στολισμό, τα μνημόσυνα και τις αποτεφρώσεις. Φροντίζει επίσης μεταφορές και επαναπατρισμούς από και προς το εξωτερικό, ώστε κανείς να μη χρειαστεί να τα διαχειριστεί μόνος του.', en: 'Born and raised in Marathon, Manolis Gkinosatis has run a funeral home in East Attica for the past 15 years. At a difficult time he stands beside the family with discretion and genuine care, and takes on every detail: arranging the service, the floral decoration, memorials and cremations. He also handles transfers and repatriations to and from abroad, so that no one has to manage them alone.', svcEl: ['Τελετές και στολισμοί', 'Μνημόσυνα', 'Αποτεφρώσεις', 'Μεταφορές και επαναπατρισμοί (International Funerals)'], svcEn: ['Funeral services and floral decoration', 'Memorial services', 'Cremations', 'Transfers and repatriation (international funerals)'], addr: 'Αθ. Χρυσίνα 42', email: 'teletesgkinosatis@gmail.com', web: 'http://www.teletesgkinosatis.gr/', photos: ['/images/gkinosatis-banner.jpg', '/images/gkinosatis-logo.jpg'] },
  b30: { ll: '', el: 'Πολυχώρος στην Παραλία Μαραθώνα, κυριολεκτικά πάνω στο κύμα, με εύκολη πρόσβαση από τη Λεωφόρο Μαραθώνος και ιδιόκτητο parking 300 θέσεων (τρεις για ΑμεΑ). Η μέρα ξεκινά στις 8 με ελληνικό καφέ ψημένο στο γκαζάκι στο Marathon Village Cafe, που λειτουργεί χειμώνα καλοκαίρι. Ως τη δύση του ηλίου, το ήσυχο beach bar —χωρίς μουσική— και η οργανωμένη παραλία περιμένουν με ξαπλώστρες, club sandwich και βάφλες Δωδώνη. Από το μεσημέρι ως τα μεσάνυχτα, το εστιατόριο μαγειρεύει ελληνικές και διεθνείς γεύσεις με διαλεχτά υλικά από ντόπιους παραγωγούς, συνοδευμένες από ντόπιο κρασί. Το βράδυ, ένα ποτό δίπλα στο κύμα. Ο χώρος φιλοξενεί επίσης γάμους, βαφτίσεις, πάρτι, εταιρικές εκδηλώσεις και εκδηλώσεις συλλόγων, από 20 έως 350 άτομα.', en: 'A multi-venue on Marathon Beach, literally at the water’s edge, with easy access from Leoforos Marathonos and a private 300-space car park (three accessible spaces). The day starts at 8 with Greek coffee brewed over the flame at the Marathon Village Cafe, open winter and summer. Until sunset, the quiet beach bar — no music — and the organised beach offer sunbeds, a club sandwich and Dodoni waffles. From noon to midnight the restaurant cooks Greek and international dishes from carefully chosen, locally sourced ingredients, with local wine. In the evening, a drink by the waves. The venue also hosts weddings, christenings, parties, and corporate and association events for 20 to 350 guests.', svcEl: ['Καφέ από τις 8 το πρωί, όλο τον χρόνο', 'Εστιατόριο 12:00–00:00', 'Beach bar και οργανωμένη παραλία', 'Παγωτό και γλυκά Δωδώνη', 'Εκδηλώσεις 20–350 ατόμων', 'Parking 300 θέσεων'], svcEn: ['Café from 8 am, all year', 'Restaurant 12:00–00:00', 'Beach bar and organised beach', 'Dodoni ice cream and sweets', 'Events for 20–350 guests', '300-space parking'], addr: 'Φειδιππίδου 94, Παραλία Μαραθώνα', web: 'https://www.marathonvillage.gr/', photos: ['/images/marathon-village-night-beach.jpg', '/images/marathon-village-beach.jpg', '/images/marathon-village-restaurant.jpg', '/images/marathon-village-umbrellas.jpg', '/images/marathon-village-night-trees.jpg', '/images/marathon-village-lawn.jpg', '/images/marathon-village-parking.jpg'] },
  b31: { ll: '', el: 'Το Κρητικός topmarket στη γωνία της Λεωφόρου Λίμνης με την Καραϊσκάκη είναι το σούπερ μάρκετ της γειτονιάς, για τα ψώνια της ημέρας και της εβδομάδας. Στους διαδρόμους του θα βρείτε τρόφιμα και είδη παντοπωλείου, φρεσκοκατεψυγμένα, αναψυκτικά και νερά, είδη καθαριότητας και προσωπικής φροντίδας. Ξεχωρίζει η κάβα, με μεγάλη ποικιλία από ελληνικά κρασιά, ούζα, τσίπουρα και ποτά. Βολική πρόσβαση, καρότσια στην είσοδο και φιλική εξυπηρέτηση.', en: 'Kritikos topmarket, on the corner of Leoforos Limnis and Karaiskaki, is the neighbourhood supermarket for the daily and the weekly shop. Its aisles carry groceries and pantry staples, frozen food, soft drinks and water, household and personal-care products. The wine and spirits corner stands out, with a wide range of Greek wines, ouzo, tsipouro and spirits. Easy access, trolleys at the door and friendly service.', svcEl: ['Τρόφιμα και είδη παντοπωλείου', 'Φρεσκοκατεψυγμένα', 'Αναψυκτικά και νερά', 'Κάβα: κρασιά, ούζα και ποτά', 'Είδη καθαριότητας και προσωπικής φροντίδας'], svcEn: ['Groceries and pantry staples', 'Frozen food', 'Soft drinks and water', 'Wine and spirits', 'Household and personal care'], addr: 'Λεωφ. Λίμνης 8 & Καραϊσκάκη', photos: ['/images/kritikos-storefront.jpg', '/images/kritikos-aisle.jpg', '/images/kritikos-wine.jpg', '/images/kritikos-spirits.jpg', '/images/kritikos-drinks.jpg'] },
  b32: { ll: '38.1612767071802,23.95948399857454', el: 'Η Φρουτεμπορική Χρυσίνας εξυπηρετεί τον Μαραθώνα από το 1955, με φρέσκα φρούτα και λαχανικά ελληνικής παραγωγής κάθε μέρα στον πάγκο: εποχιακά φρούτα, πατάτες, κρεμμύδια και σκόρδα, χόρτα και καρπούζια το καλοκαίρι. Στα ράφια θα βρείτε και τοπικό μέλι Μαραθώνα, καθώς και επιλεγμένα παραδοσιακά προϊόντα, όπως παξιμάδια Κρήτης, γλυκά του κουταλιού και μαρμελάδες. Το μαγαζί βρίσκεται στη Λεωφόρο Λίμνης Μαραθώνος: ψωνίστε στο κατάστημα, παραλάβετε την παραγγελία σας ή ζητήστε διανομή.', en: 'Chrysinas Greengrocer has served Marathon since 1955, with fresh Greek-grown fruit and vegetables on the stall every day: seasonal fruit, potatoes, onions and garlic, leafy greens, and watermelons in summer. On the shelves you will also find local Marathon honey and a selection of traditional products such as Cretan rusks, spoon sweets and jams. The shop is on Leoforos Limnis Marathonos: shop in store, collect your order, or ask for delivery.', svcEl: ['Φρέσκα φρούτα και λαχανικά ελληνικής παραγωγής', 'Τοπικό μέλι Μαραθώνα', 'Παξιμάδια Κρήτης, γλυκά του κουταλιού και μαρμελάδες', 'Αγορές εντός καταστήματος', 'Παραλαβή από το κατάστημα', 'Διανομή (delivery)'], svcEn: ['Fresh Greek-grown fruit and vegetables', 'Local Marathon honey', 'Cretan rusks, spoon sweets and jams', 'Shopping in store', 'Collection from the shop', 'Home delivery'], addr: 'Λεωφ. Λίμνης Μαραθώνος', photos: ['/images/chrysinas-storefront.jpg', '/images/chrysinas-sign.jpg', '/images/chrysinas-fruit.jpg', '/images/chrysinas-watermelons.jpg', '/images/chrysinas-fridge.jpg', '/images/chrysinas-pantry.jpg'] }
};

/** The categories in alphabetical order for the given language. */
export function memberCats(lang: "el" | "en"): MemberCategory[] {
  return [...MEMBER_CATS].sort((a, b) => a[lang].localeCompare(b[lang], lang));
}

/** The member's lead photograph, if it has one. */
export function memberPhoto(m: Member): string | undefined {
  return MEMBER_DETAILS[m.id]?.photos?.[0];
}

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
