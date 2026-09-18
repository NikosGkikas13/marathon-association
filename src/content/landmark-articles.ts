// Long-form copy for each place's detail page. A line starting with "## "
// is a subheading; every other line is a paragraph. Opening hours and
// admission are still placeholders on every entry (see the detail page).

export type LandmarkArticle = {
  el: string[];
  en: string[];
  quote?: { el: string; en: string; src: string };
};

export const LANDMARK_ARTICLES: Record<string, LandmarkArticle> = {
  tymbos: {
    el: [
      'Στο μέσο της πεδιάδας του Μαραθώνα, μέσα σε ελαιώνα, υψώνεται ένας χαμηλός λόφος από χώμα. Κάτω από αυτόν βρίσκονται οι στάχτες των 192 Αθηναίων οπλιτών που σκοτώθηκαν στη μάχη του 490 π.Χ. — ο μόνος τάφος του είδους του που σώζεται από εκείνον τον πόλεμο.',
      '## Η μάχη',
      'Το καλοκαίρι του 490 π.Χ. ο περσικός στόλος αποβιβάστηκε στον κόλπο του Μαραθώνα, με σκοπό να βαδίσει στην Αθήνα. Απέναντι παρατάχθηκαν περίπου δέκα χιλιάδες Αθηναίοι και χίλιοι σύμμαχοι από την Πλάταια της Βοιωτίας — μια μικρή πόλη που έστειλε ό,τι διέθετε.',
      'Ο Μιλτιάδης επέλεξε να αραιώσει το κέντρο της φάλαγγας και να ενισχύσει τα δύο άκρα. Το κέντρο υποχώρησε, τα κέρατα κύκλωσαν τον περσικό στρατό, και η ήττα ήταν ολοκληρωτική. Οι Έλληνες έχασαν, κατά τον Ηρόδοτο, 192 άνδρες· οι Πέρσες χιλιάδες.',
      'Ήταν η πρώτη από τη σειρά των μαχών με τις οποίες οι ελληνικές πόλεις ανέκοψαν την περσική προέλαση προς τα δυτικά — και το γεγονός που, περισσότερο από κάθε άλλο, καθόρισε την εικόνα που είχε η Αθήνα για τον εαυτό της τον επόμενο αιώνα.',
      '## Γιατί θάφτηκαν εδώ',
      'Κατά το αθηναϊκό έθιμο, οι νεκροί του πολέμου μεταφέρονταν στο Δημόσιο Σήμα, στον σημερινό Κεραμεικό, και θάβονταν δημοσία δαπάνη έξω από τα τείχη. Για τους νεκρούς του Μαραθώνα έγινε εξαίρεση: η ανδρεία τους κρίθηκε τέτοια που τους έθαψαν στο πεδίο της μάχης. Ο Θουκυδίδης καταγράφει την εξαίρεση ρητά.',
      'Οι οικογένειες ήρθαν στον τόπο της μάχης και φρόντισαν την καύση κάθε νεκρού χωριστά, κλείνοντας την τελετή με το νεκρόδειπνο. Έπειτα συγκέντρωσαν τα λείψανα και τις στάχτες στο ίδιο σημείο, πρόσφεραν αγγεία, και τα κάλυψαν με χώμα. Στην κορυφή στήθηκαν στήλες με τα ονόματα των πεσόντων, καταγραμμένα κατά φυλές.',
      '## Τι βλέπετε σήμερα',
      'Ο λόφος έχει ύψος περίπου εννέα μέτρων και περίμετρο 185 μέτρων. Στη βάση του στέκει αντίγραφο της επιτύμβιας στήλης του Αριστίωνα, έργο του Αριστοκλή· το πρωτότυπο βρίσκεται στο Εθνικό Αρχαιολογικό Μουσείο. Τα αγγεία των προσφορών εκτίθενται στο μουσείο του Βρανά, δύο χιλιόμετρα πιο μέσα.',
      'Ο χώρος είναι επίπεδος, σκιερός και ήσυχος· η επίσκεψη διαρκεί είκοσι λεπτά. Δεν υπάρχει άνοδος στον τύμβο — ο περίπατος γίνεται γύρω από τη βάση του.'
    ],
    en: [
      'In the middle of the Marathon plain, inside an olive grove, a low mound of earth rises from flat ground. Beneath it lie the ashes of the 192 Athenian hoplites killed in the battle of 490 BC — the only grave of its kind surviving from that war.',
      '## The battle',
      'In the summer of 490 BC the Persian fleet landed in the bay of Marathon, intending to march on Athens. Drawn up against it were some ten thousand Athenians and a thousand allies from Plataea in Boeotia — a small city that sent everything it had.',
      'Miltiades chose to thin the centre of the phalanx and weight both wings. The centre gave ground, the wings closed around the Persian line, and the defeat was total. Herodotus records 192 Greek dead; the Persians lost thousands.',
      'It was the first of the battles by which the Greek cities halted the Persian advance westward — and the event that, more than any other, shaped how Athens saw itself for the next century.',
      '## Why they were buried here',
      'Athenian custom carried the war dead back to the Demosion Sema, in what is now the Kerameikos, for public burial outside the walls. The Marathon dead were the exception: their courage was judged so extraordinary that they were buried on the field itself. Thucydides notes the exception explicitly.',
      'The families came out to the battlefield and saw to the cremation of each man separately, closing the rites with the funeral meal. They then gathered the remains and ashes at this one spot, left offerings of pottery, and covered them with earth. Stelae bearing the names of the fallen, listed by tribe, were set on the summit.',
      '## What you see today',
      'The mound stands about nine metres high, some 185 metres around. At its foot is a cast of the funerary stele of Aristion, carved by Aristokles; the original is in the National Archaeological Museum. The offering vessels are displayed at the Vrana museum, two kilometres inland.',
      'The site is level, shaded and quiet; twenty minutes covers it. You do not climb the mound — the path goes around its base.'
    ],
    quote: {
      el: 'Όλοι οι πεσόντες στους πολέμους θάβονται στο Δημόσιο Σήμα — εκτός από τους νεκρούς του Μαραθώνα, που τιμήθηκαν με τάφο στο πεδίο της μάχης.',
      en: 'All who fall in war are buried in the Demosion Sema — except the Marathon dead, who were honoured with a grave on the battlefield itself.',
      src: 'Θουκυδίδης II.34 · Thucydides II.34'
    }
  },
  museum: {
    el: [
      'Το Αρχαιολογικό Μουσείο Μαραθώνα βρίσκεται στον Βρανά, δύο χιλιόμετρα από τον Τύμβο, και καλύπτει ολόκληρη την ιστορία της πεδιάδας — από τη νεολιθική εποχή έως τα ρωμαϊκά χρόνια.',
      '## Οι συλλογές',
      'Στις αίθουσες εκτίθενται ευρήματα από τη σπηλιά του Πάνα, αγγεία και ειδώλια από τους πρωτοελλαδικούς και μυκηναϊκούς τάφους της περιοχής, και τα αγγεία των προσφορών που βρέθηκαν στον Τύμβο των Αθηναίων.',
      'Ξεχωρίζουν τα κολοσσιαία αιγυπτιάζοντα αγάλματα από το ιερό της Βρεξίζας, καθώς και γλυπτά και επιγραφές από τον Ραμνούντα και το κτήμα του Ηρώδη του Αττικού, που είχε τη βάση του εδώ.',
      '## Ο υπαίθριος χώρος',
      'Ο περιφραγμένος χώρος γύρω από το μουσείο είναι μέρος της επίσκεψης: περιλαμβάνει τους μυκηναϊκούς θολωτούς τάφους του Βρανά, τον τύμβο της μέσης εποχής του χαλκού και το ταφικό περίβολο που αποδίδεται στους Πλαταιείς νεκρούς της μάχης.',
      'Υπολογίστε μία ώρα για το μουσείο και τον περίβολο μαζί. Ο χώρος συνδυάζεται φυσικά με τον Τύμβο, λίγα λεπτά μακριά με αυτοκίνητο.'
    ],
    en: [
      'The Archaeological Museum of Marathon sits at Vrana, two kilometres from the Tymbos, and covers the whole history of the plain — from the neolithic to the Roman period.',
      '## The collections',
      'The galleries hold finds from the Cave of Pan, pottery and figurines from the area\u2019s Early Helladic and Mycenaean graves, and the offering vessels recovered from the Tomb of the Athenians.',
      'The outstanding pieces are the colossal Egyptianising statues from the Brexiza sanctuary, together with sculpture and inscriptions from Ramnous and from the estate of Herodes Atticus, who was based here.',
      '## The open-air site',
      'The fenced ground around the museum is part of the visit: the Mycenaean tholos tombs of Vrana, a Middle Bronze Age tumulus, and the grave enclosure attributed to the Plataean dead of the battle.',
      'Allow an hour for museum and enclosure together. It pairs naturally with the Tymbos, a few minutes away by car.'
    ]
  },
  runmuseum: {
    el: [
      'Το Μουσείο Μαραθωνίου Δρόμου βρίσκεται στο κέντρο του Μαραθώνα, κοντά στην αφετηρία της κλασικής διαδρομής, και είναι αφιερωμένο σε ένα αγώνισμα που πήρε το όνομά του από τον τόπο.',
      '## Από τον θρύλο στον αγώνα',
      'Η ιστορία του αγγελιαφόρου που έτρεξε από τον Μαραθώνα στην Αθήνα για να αναγγείλει τη νίκη δεν υπάρχει στον Ηρόδοτο· εμφανίζεται αιώνες αργότερα. Στα νεότερα χρόνια ενέπνευσε τον Μισέλ Μπρεάλ να προτείνει έναν αγώνα δρόμου για τους πρώτους σύγχρονους Ολυμπιακούς Αγώνες.',
      'Το 1896 ο Σπυρίδων Λούης έτρεξε τη διαδρομή από εδώ ως το Παναθηναϊκό Στάδιο. Το αγώνισμα διαδόθηκε σε όλο τον κόσμο και η απόσταση σταθεροποιήθηκε αργότερα στα 42,195 χιλιόμετρα.',
      '## Η συλλογή',
      'Μετάλλια, αριθμοί συμμετοχής, παπούτσια, αφίσες και δωρεές δρομέων από δεκάδες χώρες, μαζί με υλικό για τον Αυθεντικό Μαραθώνιο που εκκινεί κάθε Νοέμβριο από την πόλη. Αρκεί μισή ώρα.'
    ],
    en: [
      'The Marathon Run Museum stands in the centre of the town, near the start of the classic course, and is devoted to a race that took its name from this place.',
      '## From legend to race',
      'The story of the messenger who ran from Marathon to Athens with news of the victory does not appear in Herodotus; it surfaces centuries later. In modern times it prompted Michel Bréal to propose a long-distance race for the first modern Olympics.',
      'In 1896 Spyridon Louis ran the course from here to the Panathenaic Stadium. The event spread worldwide, and the distance was later fixed at 42.195 kilometres.',
      '## The collection',
      'Medals, race numbers, shoes, posters and runners\u2019 donations from dozens of countries, along with material on the Authentic Marathon that starts from the town each November. Half an hour is enough.'
    ]
  },
  schinias: {
    el: [
      'Ο Σχινιάς είναι από τις λίγες ακτές της Αττικής όπου το πευκοδάσος κατεβαίνει ως την άμμο. Δάσος, υγρότοπος και παραλία προστατεύονται μαζί ως Εθνικό Πάρκο.',
      '## Το δάσος και ο υγρότοπος',
      'Το δάσος της κουκουναριάς αναπτύσσεται πάνω σε αμμώδη υπόστρωμα, ένα σπάνιο οικοσύστημα για τη χώρα. Πίσω του απλώνεται ο έλος του Μεγάλου Βάλτου — ο υγρότοπος που στην αρχαιότητα κάλυπτε το βόρειο άκρο του πεδίου της μάχης και, κατά τις πηγές, στοίχισε στους Πέρσες μεγάλο μέρος των απωλειών τους στην υποχώρηση.',
      'Η περιοχή είναι σταθμός για μεταναστευτικά πουλιά και φιλοξενεί ενδημικά είδη· η κίνηση εκτός μονοπατιών και η κατασκήνωση απαγορεύονται.',
      '## Η παραλία',
      'Η ακτή είναι μακριά και ρηχή, με λεπτή άμμο. Ένα μέρος της είναι οργανωμένο με ξαπλώστρες και καντίνες· το υπόλοιπο μένει ελεύθερο, με σκιά από τα πεύκα.',
      'Το απόγευμα σηκώνεται σταθερός βόρειος άνεμος, γι\u2019 αυτό ο Σχινιάς είναι γνωστός στους windsurfers και στους ιστιοπλόους. Με τον ίδιο άνεμο, τα στρώματα και τα SUP παρασύρονται γρήγορα ανοιχτά — ναυαγοσώστης υπάρχει μόνο στα οργανωμένα τμήματα και μόνο τους θερινούς μήνες.'
    ],
    en: [
      'Schinias is one of the few stretches of coast in Attica where pine forest runs right down to the sand. Forest, wetland and beach are protected together as a National Park.',
      '## Forest and wetland',
      'The stone-pine forest grows on sand, a rare ecosystem in Greece. Behind it lies the Great Marsh — the wetland that in antiquity closed off the northern end of the battlefield and, according to the sources, cost the Persians heavily during their retreat.',
      'The area is a staging post for migratory birds and holds endemic species; walking off the paths and camping are both prohibited.',
      '## The beach',
      'The shore is long and shallow, with fine sand. Part of it is organised, with loungers and canteens; the rest is left open, shaded by the pines.',
      'A steady north wind rises in the afternoon, which is why Schinias is known to windsurfers and sailors. That same wind carries inflatables and SUP boards offshore quickly — lifeguards cover only the organised sections, and only in summer.'
    ]
  },
  rowing: {
    el: [
      'Το Ολυμπιακό Κέντρο Κωπηλασίας και Κανόε-Καγιάκ κατασκευάστηκε για τους Αγώνες της Αθήνας του 2004, στο δυτικό άκρο του υγρότοπου του Σχινιά.',
      '## Το έργο',
      'Η επιλογή της θέσης συζητήθηκε έντονα, καθώς το έργο γειτνιάζει με προστατευόμενο υγρότοπο· ο σχεδιασμός αναδιατυπώθηκε ώστε οι στίβοι να τροφοδοτούνται χωριστά από το οικοσύστημα του Μεγάλου Βάλτου.',
      'Οι εγκαταστάσεις περιλαμβάνουν στίβους διεθνών προδιαγραφών μήκους 2.000 μέτρων, εξέδρες και λιμενίσκο σκαφών.',
      '## Σήμερα',
      'Το κέντρο παραμένει ενεργό: προπονήσεις εθνικών ομάδων, σχολικοί και διεθνείς αγώνες. Η είσοδος στις εγκαταστάσεις εξαρτάται από το πρόγραμμα της ημέρας — αξίζει να ρωτήσετε πριν πάτε.'
    ],
    en: [
      'The Olympic Rowing and Canoe-Kayak Centre was built for the Athens 2004 Games, at the western edge of the Schinias wetland.',
      '## The project',
      'The choice of site was heavily debated, sitting as it does beside a protected wetland; the design was reworked so that the course draws water separately from the Great Marsh ecosystem.',
      'The facility has full international 2,000-metre lanes, grandstands and a boat harbour.',
      '## Today',
      'The centre is still in use: national-team training, school and international regattas. Access depends on the day\u2019s programme — worth calling ahead.'
    ]
  },
  ramnous: {
    el: [
      'Ο Ραμνούς ήταν οχυρωμένος αρχαίος δήμος στη βορειοανατολική ακτή της Αττικής. Το λιμάνι του φύλαγε το στενό πέρασμα προς τον Ευβοϊκό — κρίσιμο για τον εφοδιασμό της Αθήνας με σιτάρι.',
      '## Τα ιερά',
      'Το ιερό στην είσοδο του χώρου ήταν αφιερωμένο στη Νέμεση, τη θεά της θείας ανταπόδοσης, και στη Θέμιδα. Σώζονται δύο ναοί δίπλα-δίπλα: ο μεγάλος δωρικός ναός της Νέμεσης του 5ου αιώνα π.Χ. και ο μικρότερος, παλαιότερος ναός της Θέμιδος.',
      'Το λατρευτικό άγαλμα της Νέμεσης ήταν έργο του Αγορακρίτου, μαθητή του Φειδία· θραύσματά του σώζονται και η βάση του έχει αποκατασταθεί. Κατά την παράδοση, το μάρμαρο είχε φερθεί από τους Πέρσες για το τρόπαιο της νίκης που δεν κέρδισαν ποτέ.',
      '## Η οχύρωση και η διαδρομή',
      'Κάτω από τα ιερά, ένα μονοπάτι κατεβαίνει στην οχυρωμένη πόλη με τα τείχη, τις πύλες, το θέατρο και τα σπίτια, ως το μικρό λιμάνι.',
      'Ο χώρος είναι εκτεταμένος και ανοιχτός, με ανηφορικά τμήματα — υπολογίστε μία ώρα και φέρτε νερό και καπέλο. Η θέα πάνω από τη θάλασσα είναι από τις ωραιότερες της Αττικής.'
    ],
    en: [
      'Ramnous was a fortified ancient deme on the north-east coast of Attica. Its harbour watched the narrow passage into the Euboean gulf — critical to Athens\u2019 grain supply.',
      '## The sanctuaries',
      'The sanctuary at the entrance was dedicated to Nemesis, goddess of retribution, and to Themis. Two temples stand side by side: the large fifth-century Doric temple of Nemesis and the smaller, earlier temple of Themis.',
      'The cult statue of Nemesis was the work of Agorakritos, a pupil of Pheidias; fragments survive and its base has been reassembled. Tradition held that its marble had been brought by the Persians for the victory monument they never won.',
      '## The fortress and the walk',
      'Below the sanctuaries a path drops down into the walled town — circuit walls, gates, theatre and houses — and on to the small harbour.',
      'The site is large and exposed, with some climbing; allow an hour, and bring water and a hat. The view over the sea is among the finest in Attica.'
    ]
  },
  brexiza: {
    el: [
      'Στη Βρεξίζα, στο έλος κοντά στην ακτή της Νέας Μάκρης, βρίσκονται τα ερείπια ενός από τα πιο παράξενα μνημεία της Αττικής: ιερό αιγυπτιακών θεοτήτων, ιδρυμένο στα μέσα του 2ου αιώνα μ.Χ.',
      '## Ο Ηρώδης ο Αττικός',
      'Ο Ηρώδης ο Αττικός, ο πλουσιότερος Αθηναίος της εποχής του και χορηγός του Ωδείου κάτω από την Ακρόπολη, είχε το κτήμα του στον Μαραθώνα. Το ιερό αποτελούσε μέρος αυτού του κτήματος.',
      'Η λατρεία της Ίσιδας και του Σαράπιδος είχε εξαπλωθεί σε όλη τη Μεσόγειο· εδώ αποδόθηκε με αρχιτεκτονική τετράπυλου συγκροτήματος, με πύλες στα τέσσερα σημεία και δεξαμενές νερού στο κέντρο.',
      '## Ο χώρος',
      'Στις γωνίες των πυλών στέκονταν κολοσσιαία αγάλματα σε αιγυπτιάζοντα ρυθμό — ζεύγη θεοτήτων λαξευμένα σε ελληνικό μάρμαρο με αιγυπτιακή στάση. Τα περισσότερα εκτίθενται σήμερα στο μουσείο του Βρανά.',
      'Το έδαφος είναι υγρό και συχνά πλημμυρίζει τον χειμώνα· η επίσκεψη είναι σύντομη και βολεύει σε συνδυασμό με το μουσείο, όπου βρίσκονται τα γλυπτά.'
    ],
    en: [
      'At Brexiza, in the marsh near the shore at Nea Makri, lie the remains of one of the strangest monuments in Attica: a sanctuary of Egyptian deities, founded in the mid second century AD.',
      '## Herodes Atticus',
      'Herodes Atticus — the richest Athenian of his day, and the patron of the odeon below the Acropolis — had his estate at Marathon. The sanctuary formed part of it.',
      'The cult of Isis and Sarapis had spread across the Mediterranean; here it was given a four-gated precinct, with entrances at the cardinal points and water basins at the centre.',
      '## The site',
      'Colossal statues in Egyptianising style flanked the gates — pairs of deities cut in Greek marble but standing in Egyptian pose. Most are now displayed at the Vrana museum.',
      'The ground is wet and often floods in winter; the visit is short, and works best paired with the museum where the sculpture now stands.'
    ]
  },
  dam: {
    el: [
      'Το φράγμα του Μαραθώνα κατασκευάστηκε μεταξύ 1926 και 1929 για να λύσει το πρόβλημα ύδρευσης της Αθήνας, που έως τότε στηριζόταν στο Αδριάνειο υδραγωγείο και σε πηγάδια.',
      '## Το έργο',
      'Το φράγμα κλείνει το φαράγγι στη συμβολή των χειμάρρων Χάραδρου και Βαρνάβα, δημιουργώντας τεχνητή λίμνη. Το νερό οδηγείται στην Αθήνα μέσω σήραγγας μήκους δεκατριών χιλιομέτρων.',
      'Η όψη του είναι επενδυμένη με πεντελικό μάρμαρο — το ίδιο υλικό με τον Παρθενώνα — γεγονός που το καθιστά το μόνο μαρμαρόστρωτο φράγμα στον κόσμο. Στη δεξιά όχθη στέκει αντίγραφο του ναού των Αθηναίων στους Δελφούς.',
      '## Η επίσκεψη',
      'Ο δρόμος περνά πάνω από τη στέψη και επιτρέπει θέα στη λίμνη και στο φαράγγι. Η λεκάνη είναι ζώνη υδροληψίας: η κολύμβηση, η αλιεία και η πρόσβαση στην όχθη απαγορεύονται.',
      'Στο Μουσείο Ύδρευσης της ΕΥΔΑΠ, δίπλα στο φράγμα, παρουσιάζεται η ιστορία του έργου. Η διαδρομή από τον Μαραθώνα περνά από ελατοδάσος και είναι ωραία με το αυτοκίνητο ή το ποδήλατο.'
    ],
    en: [
      'The Marathon dam was built between 1926 and 1929 to solve Athens\u2019 water supply, which until then depended on the Hadrianic aqueduct and on wells.',
      '## The works',
      'The dam closes the gorge where the Charadros and Varnavas torrents meet, creating an artificial lake. Water reaches Athens through a tunnel thirteen kilometres long.',
      'Its face is clad in Pentelic marble — the same stone as the Parthenon — making it the only marble-faced dam in the world. On the right bank stands a replica of the Athenian Treasury at Delphi.',
      '## Visiting',
      'The road crosses the crest and gives views over the lake and the gorge. The reservoir is a water-catchment zone: swimming, fishing and access to the shoreline are all prohibited.',
      'The water museum beside the dam covers the history of the works. The drive up from Marathon passes through fir forest and is a good run by car or bicycle.'
    ]
  },
  pan: {
    el: [
      'Στην πλαγιά πάνω από την Οινόη ανοίγει ένα σπήλαιο με πέντε θαλάμους, που ταυτίζεται με το λατρευτικό σπήλαιο του Πάνα στον Μαραθώνα.',
      '## Ο θεός και η μάχη',
      'Κατά τον Ηρόδοτο, ο Αθηναίος ημεροδρόμος Φειδιππίδης, καθώς έτρεχε στη Σπάρτη για βοήθεια πριν τη μάχη, συνάντησε στα βουνά της Αρκαδίας τον Πάνα, ο οποίος παραπονέθηκε ότι οι Αθηναίοι τον παραμελούν και υποσχέθηκε τη βοήθειά του.',
      'Μετά τη νίκη, οι Αθηναίοι καθιέρωσαν τη λατρεία του θεού — ένα ιερό στην Ακρόπολη και, όπως δείχνουν τα ευρήματα, λατρεία εδώ, στο σπήλαιο του πεδίου της μάχης.',
      '## Τα ευρήματα και η πρόσβαση',
      'Οι ανασκαφές έφεραν στο φως νεολιθική χρήση του σπηλαίου και, στα κλασικά χρόνια, πλήθος αναθημάτων: λυχνάρια, αγγεία και ειδώλια. Εκτίθενται στο μουσείο του Βρανά.',
      'Η πρόσβαση γίνεται με τα πόδια σε ανηφορικό μονοπάτι και απαιτεί κατάλληλα υποδήματα· το εσωτερικό δεν είναι πάντα επισκέψιμο.'
    ],
    en: [
      'On the hillside above Oinoi a cave of five chambers opens up, identified as the cult cave of Pan at Marathon.',
      '## The god and the battle',
      'According to Herodotus, the Athenian runner Pheidippides met Pan in the Arcadian mountains while running to Sparta for help before the battle; the god complained that the Athenians neglected him, and promised his aid.',
      'After the victory the Athenians established his cult — a shrine on the Acropolis and, as the finds show, worship here, in the cave on the battlefield.',
      '## Finds and access',
      'Excavation revealed neolithic use of the cave and, in classical times, a mass of dedications: lamps, vessels and figurines. They are displayed at the Vrana museum.',
      'Access is on foot up a steep path and needs proper shoes; the interior is not always open.'
    ]
  },
  efraim: {
    el: [
      'Η Μονή του Αγίου Εφραίμ στη Νέα Μάκρη, στην πλαγιά του Αμώμονος όρους, είναι ένα από τα πιο πολυσύχναστα προσκυνήματα της Αττικής.',
      '## Ιστορία',
      'Στη θέση υπήρχε βυζαντινή μονή του Ευαγγελισμού της Θεοτόκου, που καταστράφηκε στα μέσα του 15ου αιώνα. Το μοναστήρι αναβίωσε στον 20ό αιώνα ως γυναικεία μονή.',
      'Η λατρεία του Αγίου Εφραίμ αναπτύχθηκε μετά την ανεύρεση λειψάνων στον χώρο το 1950, και η μονή έγινε γρήγορα τόπος μαζικού προσκυνήματος.',
      '## Η επίσκεψη',
      'Ο περίβολος με τους κήπους και τα κυπαρίσσια είναι ανοιχτός στο κοινό. Ισχύει ενδυματολογικός κώδικας. Στις 5 Μαΐου και τις ημέρες εορτών η προσέλευση είναι πολύ μεγάλη και η στάθμευση δύσκολη.'
    ],
    en: [
      'The Monastery of Agios Efraim at Nea Makri, on the slope of Mount Amomon, is one of the most visited pilgrimage sites in Attica.',
      '## History',
      'A Byzantine monastery of the Annunciation stood here until it was destroyed in the mid fifteenth century. The site was revived in the twentieth century as a women\u2019s monastery.',
      'The veneration of Saint Efraim grew after relics were found here in 1950, and the monastery quickly became a place of mass pilgrimage.',
      '## Visiting',
      'The walled gardens and cypresses are open to visitors. A dress code applies. On 5 May and other feast days the crowds are very large and parking is difficult.'
    ]
  }
};
