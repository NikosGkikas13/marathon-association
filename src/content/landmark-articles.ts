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
      'Το Αρχαιολογικό Μουσείο Μαραθώνα βρίσκεται στον Βρανά, δύο χιλιόμετρα από τον Τύμβο. Η ιδέα ήταν του αρχαιολόγου Σπυρίδωνα Μαρινάτου· το κτήριο χτίστηκε με δωρεά του ομογενούς Ευγένιου Παναγόπουλου, ξεκίνησε το 1973 και εγκαινιάστηκε τον Ιούλιο του 1975. Το 2025 συμπλήρωσε πενήντα χρόνια λειτουργίας.',
      '## Πενήντα χρόνια ευρημάτων',
      'Το 2004, στο πλαίσιο των Ολυμπιακών Αγώνων, το κτήριο συντηρήθηκε, η έκθεση ανανεώθηκε εξ ολοκλήρου και ο χώρος των τύμβων απέκτησε νέο στέγαστρο. Στα εργαστήρια και τις αποθήκες του μουσείου έχουν καταλήξει, όλα αυτά τα χρόνια, ευρήματα από πολλές σωστικές και συστηματικές ανασκαφές της ευρύτερης περιοχής.',
      'Η μόνιμη έκθεση ακολουθεί τη συνεχή παρουσία του ανθρώπου στην ανατολική ακτή της Αττικής: τη νεολιθική κατοίκηση στη σπηλιά του Πάνα και στη Νέα Μάκρη, το προϊστορικό νεκροταφείο στο Τσέπι, τους τύμβους του Βρανά, τα εκτεταμένα γεωμετρικά και κλασικά νεκροταφεία, και τα ρωμαϊκά κτίσματα — τα περισσότερα δεμένα με τον Ηρώδη Αττικό, Μαραθωνίτη συγκλητικό, και την οικογένειά του. Ξεχωριστή θέση έχουν τα ευρήματα της μάχης του 490 π.Χ.: το Τρόπαιο της Νίκης και τα κτερίσματα από τον Τύμβο των Μαραθωνομάχων.',
      '## Οι αίθουσες',
      'Η πρώτη αίθουσα ανήκει στη σπηλιά του Πάνα, με ευρήματα από το 5300 ως το 3200 π.Χ. και αργότερα· στα κλασικά χρόνια το σπήλαιο ήταν τόπος λατρείας του θεού, που σύμφωνα με τον Ηρόδοτο βοήθησε τους Αθηναίους στη μάχη. Η δεύτερη φιλοξενεί τα προϊστορικά ευρήματα του νεκροταφείου στο Τσέπι και του οικισμού στη Μπόριζα: πήλινα σκεύη και ειδώλια, λίθινα εργαλεία, αγγεία.',
      'Η τρίτη αίθουσα καλύπτει τη γεωμετρική, την αρχαϊκή και την κλασική περίοδο, με υλικό από την Τετράπολη του Μαραθώνα — τον Μαραθώνα, την Τρικόρυνθο, την Προβάλινθο και την Οινόη: αγγεία, κύπελλα, πυξίδες, ως και σκεύη με μυθολογικές παραστάσεις. Η τέταρτη είναι αφιερωμένη στον Ηρώδη Αττικό και την εποχή του, με αγάλματα του ίδιου και της συζύγου του και άλλα ρωμαϊκά και υστερορωμαϊκά ευρήματα.',
      'Η πέμπτη στεγάζει το ρωμαϊκό ιερό των Αιγυπτίων θεών, που ίδρυσε ο Ηρώδης ο Αττικός τον 2ο αιώνα μ.Χ., με πλήθος αγαλμάτων αιγυπτιακών θεοτήτων. Η αίθουσα του Τροπαίου κρατά μέρος της τιμητικής στήλης για τη νίκη επί των Περσών. Υπάρχει και στεγασμένο αίθριο.',
      '## Τρία εκθέματα για τα πενήντα χρόνια',
      'Για την επέτειο, η έκθεση εμπλουτίστηκε με επιλεγμένα κομμάτια από τις αποθήκες. Το πρώτο είναι ένα σκεύος σε σχήμα τηγανιού από το Τσέπι, της Πρώιμης εποχής του Χαλκού (2800–2500 π.Χ.), με λαβή που σχηματίζει ανθρώπινα πόδια — ένα εύρημα που ρίχνει νέο φως στα παράξενα αυτά προϊστορικά αντικείμενα.',
      'Το δεύτερο είναι μια πρόχους της Γεωμετρικής εποχής από τη Νέα Μάκρη, του 8ου αιώνα π.Χ., σε υπερμεγέθη μορφή ενός σκεύους της καθημερινότητας. Βρέθηκε στο αρχαίο νεκροταφείο μπροστά από το Πνευματικό Κέντρο Μαραθώνα και συνδέεται με τα ταφικά έθιμα για κορίτσια που πέθαιναν ανύπαντρα.',
      'Το τρίτο είναι μαρμάρινη προτομή του Πολυδευκίωνα, μαθητή του Ηρώδη Αττικού, από τον 2ο αιώνα μ.Χ. Βρέθηκε στο ιερό της Βρεξίζας, όπου τοποθετείται η πολυτελής έπαυλη του πλούσιου συγκλητικού, και δείχνει με ζωντανή τέχνη το κύρος του Ηρώδη στον τόπο που γεννήθηκε.',
      '## Ο υπαίθριος χώρος',
      'Ο προστατευμένος χώρος έξω από το μουσείο ανήκει στην επίσκεψη: το νεκροταφείο των τύμβων της Μέσης εποχής του Χαλκού (2000–1600 π.Χ.), κάτω από στέγαστρο, και ο λεγόμενος τύμβος των Πλαταιέων του 5ου αιώνα π.Χ.',
      'Υπολογίστε μία ώρα για το μουσείο και τον περίβολο μαζί. Ο χώρος συνδυάζεται φυσικά με τον Τύμβο, λίγα λεπτά μακριά με αυτοκίνητο.'
    ],
    en: [
      'The Archaeological Museum of Marathon stands at Vrana, two kilometres from the Tymbos. It was the idea of the archaeologist Spyros Marinatos; the building was paid for by the expatriate benefactor Eugenios Panagopoulos, begun in 1973 and opened in July 1975. In 2025 it marked fifty years of operation.',
      '## Fifty years of finds',
      'In 2004, ahead of the Olympic Games, the building was restored, the display was redone from scratch and the tumulus area received a new roof. Over the decades the museum\u2019s conservation labs and storerooms have taken in finds from many rescue and systematic excavations across the wider Marathon area.',
      'The permanent display follows continuous human presence on Attica\u2019s eastern coast: neolithic settlement at the Cave of Pan and Nea Makri, the prehistoric cemetery at Tsepi, the tumuli of Vrana, extensive Geometric and Classical cemeteries, and Roman buildings — most of them tied to Herodes Atticus, the senator from Marathon, and his family. The finds from the battle of 490 BC have a place of their own: the Trophy of Victory and the grave goods from the Tomb of the Marathon fighters.',
      '## The rooms',
      'The first room belongs to the Cave of Pan, with finds from 5300 to 3200 BC and later; in Classical times the cave was a cult place of the god who, according to Herodotus, helped the Athenians in the battle. The second holds the prehistoric finds from the Tsepi cemetery and the Boriza settlement: clay vessels and figurines, stone tools, pots.',
      'The third covers the Geometric, Archaic and Classical periods, with material from the Marathonian Tetrapolis — Marathon, Trikorynthos, Probalinthos and Oinoe: pottery, cups, pyxides, and vessels with mythological scenes. The fourth is devoted to Herodes Atticus and his age, with statues of him and his wife and other Roman and Late Roman finds.',
      'The fifth houses the Roman sanctuary of the Egyptian gods that Herodes Atticus founded in the 2nd century AD, with many statues of Egyptian deities. The Trophy room keeps part of the commemorative stele for the victory over the Persians. There is also a covered atrium.',
      '## Three pieces added for the anniversary',
      'For the anniversary the display was enriched with selected pieces from storage. The first is a pan-shaped vessel from Tsepi, of the Early Bronze Age (2800\u20132500 BC), whose handle is modelled as human legs — a find that gives these puzzling prehistoric objects a new reading.',
      'The second is a Geometric oinochoe from Nea Makri, of the 8th century BC, an enlarged version of an everyday vessel. It came from the ancient cemetery in front of the Marathon Cultural Centre and is linked to burial customs for young girls who died unmarried.',
      'The third is a marble bust of Polydeukion, a pupil of Herodes Atticus, from the 2nd century AD. It was found in the Brexiza sanctuary, where the wealthy senator\u2019s luxurious villa is placed, and shows in expressive craft the standing Herodes held in his home town.',
      '## The open-air site',
      'The protected ground outside the museum is part of the visit: the roofed cemetery of Middle Bronze Age tumuli (2000\u20131600 BC) and the so-called tumulus of the Plataeans, of the 5th century BC.',
      'Allow an hour for museum and enclosure together. It pairs naturally with the Tymbos, a few minutes away by car.'
    ]
  },
  runmuseum: {
    el: [
      'Το Μουσείο Μαραθωνίου Δρόμου στεγάζεται σε ένα προσεγμένο, καλοδιατηρημένο κτήριο στο κέντρο του Μαραθώνα, κοντά στην αφετηρία της κλασικής διαδρομής. Είναι αφιερωμένο σε ένα αγώνισμα που δανείστηκε το όνομά του από τον τόπο, και μαζεύει πάνω από 4.000 εκθέματα για την ιστορία του από το 1896 ως σήμερα.',
      '## Από τον θρύλο στον αγώνα',
      'Σύμφωνα με την παράδοση, ο ημεροδρόμος Φειδιππίδης έτρεξε από τον Μαραθώνα στην Αθήνα για να αναγγείλει τη νίκη επί των Περσών και έπεσε νεκρός από την εξάντληση, αφού πρόλαβε να πει «Νενικήκαμεν». Η ιστορία δεν υπάρχει στον Ηρόδοτο· εμφανίζεται πολύ αργότερα, και ενέπνευσε ποιητές και ζωγράφους.',
      'Το 1894 ο Γάλλος φιλόλογος και φιλέλληνας Μισέλ Μπρεάλ πρότεινε στον Πιερ ντε Κουμπερτέν, που προσπαθούσε να αναβιώσει τους Ολυμπιακούς Αγώνες, να συμπεριλάβει τη διαδρομή του Φειδιππίδη στους πρώτους σύγχρονους Αγώνες του 1896. Ο Μπρεάλ έφτιαξε και το ασημένιο κύπελλο για τον νικητή. Στο Παναθηναϊκό Στάδιο μπήκε πρώτος ο Σπύρος Λούης, νεαρός νερουλάς από το Μαρούσι, και ο ενθουσιασμός του κόσμου έδωσε στους Αγώνες την πιο ιδανική κατάληξη.',
      '## Πώς είναι οργανωμένη η έκθεση',
      'Η μόνιμη έκθεση καλύπτει τους Ολυμπιακούς Μαραθωνίους από το 1896 ως το 2000 και χωρίζεται σε δύο ενότητες. Η πρώτη, στην είσοδο, τιμά δύο ονόματα: τον Σπύρο Λούη και τον Στέλιο Κυριακίδη, νικητή του Μαραθωνίου της Βοστώνης το 1946, με το πρώτο στον κόσμο φιλανθρωπικό τρέξιμο.',
      'Η δεύτερη ενότητα ακολουθεί τον χρόνο, διάδρομος με το Παρίσι του 1900 και την Αθήνα του 1896 σε πρώτο πλάνο, και συνεχίζει με τους αγώνες κάθε διοργάνωσης, όπως το Λος Άντζελες του 1932 και η Σεούλ του 1988. Κάθε πίνακας δίνει ημερομηνία, απόσταση και καιρικές συνθήκες, μαζί με λίστα συμμετεχόντων και χρόνων.',
      '## Τα κειμήλια',
      'Ανάμεσα στα εκθέματα βρίσκονται προσωπικά αντικείμενα μεγάλων δρομέων — μετάλλια, παπούτσια — όπως των Ρον Χιλ, Βαντερλέι ντε Λίμα και Μιζούκι Νογκούτσι. Η συλλογή περιλαμβάνει επίσης αντικείμενα του Χαρίλαου Βασιλάκου, πρώτου Πανελληνιονίκη του Μαραθωνίου και δεύτερου στον Ολυμπιακό αγώνα του 1896, και κειμήλια του βουλευτή, Βαλκανιονίκη και ειρηνιστή Γρηγόρη Λαμπράκη.',
      'Στο πωλητήριο θα βρείτε βιβλία για την ιστορία του τόπου και έργα καλλιτεχνών, όπως της ζωγράφου Βαρβάρας Γεροδήμου. Υπολογίστε μία ώρα για μια πλήρη επίσκεψη.'
    ],
    en: [
      'The Marathon Run Museum occupies a handsome, well-kept building in the centre of the town, near the start of the classic course. It is devoted to a race that took its name from this place, and holds more than 4,000 items on its history from 1896 to today.',
      '## From legend to race',
      'By tradition the day-runner Pheidippides ran from Marathon to Athens with news of the victory over the Persians and collapsed, having managed the word \u201cnenikekamen\u201d \u2014 we have won. The story does not appear in Herodotus; it surfaces much later, and went on to inspire poets and painters.',
      'In 1894 the French philologist and philhellene Michel Br\u00e9al suggested to Pierre de Coubertin, then struggling to revive the Olympic Games, that Pheidippides\u2019 route be included in the first modern Games of 1896. Br\u00e9al also made the silver cup for the winner. It was Spyridon Louis, a young water-carrier from Maroussi, who entered the Panathenaic Stadium first, and the crowd\u2019s joy gave those Games their perfect ending.',
      '## How the display is arranged',
      'The permanent display covers the Olympic marathons from 1896 to 2000 and falls into two parts. The first, at the entrance, honours two names: Spyridon Louis, and Stylianos Kyriakides, who won the Boston Marathon in 1946 and was the first runner in the world to run for charity.',
      'The second part follows the calendar. A corridor with Paris 1900 and Athens 1896 in the foreground leads on through each Games in turn, including Los Angeles 1932 and Seoul 1988. Every panel gives the date, distance and weather, alongside a list of entrants and their times.',
      '## The keepsakes',
      'Among the exhibits are personal items from leading runners \u2014 medals, shoes \u2014 such as those of Ron Hill, Vanderlei de Lima and Mizuki Noguchi. The collection also holds belongings of Charilaos Vasilakos, the first Panhellenic marathon champion and runner-up at the 1896 Games, and mementos of Grigoris Lambrakis, the MP, Balkan champion and peace campaigner.',
      'The shop sells books on the history of the area and works by artists, among them the painter Varvara Gerodimou. Allow an hour for a full visit.'
    ]
  },
  schinias: {
    el: [
      'Περίπου σαράντα χιλιόμετρα βορειοανατολικά της Αθήνας, στην άκρη της πεδιάδας του Μαραθώνα, ο Σχινιάς είναι το σημαντικότερο παράκτιο οικοσύστημα της Αττικής. Το Εθνικό Πάρκο Σχινιά–Μαραθώνα ιδρύθηκε το 2000 για να προστατεύσει ένα τοπίο με μεγάλη περιβαλλοντική, ιστορική και πολιτιστική αξία, παρά τη μικρή του έκταση: 13,84 τετραγωνικά χιλιόμετρα, με τη θάλασσα μέσα.',
      '## Τι περιλαμβάνει',
      'Το πάρκο ενώνει πέντε διαφορετικά περιβάλλοντα: το παραθαλάσσιο δάσος κουκουναριάς και χαλεπίου πεύκης, το Μέγα Έλος, τη χερσόνησο της Κυνοσούρας, την αμμώδη ακτή και τη θαλάσσια ζώνη του όρμου, με λιβάδια ποσειδωνίας στον βυθό. Το πευκοδάσος της κουκουναριάς είναι ένα από τα ελάχιστα που απομένουν στην Ελλάδα και στη Μεσόγειο. Στην Κυνοσούρα η βλάστηση — θάμνοι, φρύγανα, πόες — έχει μείνει σχεδόν ανέγγιχτη από τον άνθρωπο.',
      'Ο υγρότοπος είναι ο μεγαλύτερος της Αττικής, με γλυκό, υφάλμυρο και αλμυρό νερό, καλαμιώνες και αλμυρίκια. Έχουν καταγραφεί πάνω από 240 είδη πουλιών, και το μέρος είναι κρίσιμος σταθμός στη μετανάστευσή τους κάθε άνοιξη και φθινόπωρο. Στη Μακαρία Πηγή, δύο λιμνοπηγές με νερό που αναβλύζει όλο τον χρόνο, ζουν χέλια, νεροχελώνες και ένα ενδημικό ψάρι, η ντάσκα. Στο πάρκο ανήκει και το Ολυμπιακό Κωπηλατοδρόμιο.',
      '## Μια θέση στην ιστορία',
      'Ο χώρος ταυτίζεται με το πεδίο της μάχης του 490 π.Χ. και συγκεκριμένα με το στρατόπεδο των Περσών, ενώ το Τρόπαιο βρίσκεται λίγο πιο πέρα. Στα νεότερα χρόνια μέρος του ήταν σταθμός επικοινωνιών των ΗΠΑ, και η αμερικανική βάση της Νέας Μάκρης και του Κάτω Σουλίου λειτούργησε ως τις αρχές της δεκαετίας του 1990.',
      '## Η παραλία και η επίσκεψη',
      'Ο όρμος έχει μακριά αμμώδη ακτή, ιδανική για κολύμπι και θαλάσσια σπορ, και το πευκοδάσος ξεκινά σχεδόν πάνω στην άμμο. Κάθε χρόνο έρχονται χιλιάδες επισκέπτες, και το καλοκαίρι η πίεση στο δάσος και στην ακτή ξεπερνά τη χωρητικότητά τους. Αξίζει να φροντίσετε τον χώρο: η φωτιά είναι ο μεγαλύτερος κίνδυνος, και ο υγρότοπος εξαρτάται από μια λεπτή ισορροπία του νερού.'
    ],
    en: [
      'About forty kilometres north-east of Athens, at the edge of the Marathon plain, Schinias is the most important coastal ecosystem in Attica. The Schinias\u2013Marathon National Park was founded in 2000 to protect a landscape of real environmental, historical and cultural value, in spite of its small size: 13.84 square kilometres, sea included.',
      '## What it holds',
      'The park joins five different environments: the coastal forest of stone pine and Aleppo pine, the Great Marsh, the Kynosoura peninsula, the sandy shore, and the marine zone of the bay, with posidonia meadows on the seabed. The stone-pine forest is one of very few left in Greece and the Mediterranean. On Kynosoura the vegetation \u2014 shrubs, scrub, herbs \u2014 has been left almost untouched by people.',
      'The wetland is the largest in Attica, with fresh, brackish and salt water, reed beds and tamarisk. More than 240 bird species have been recorded, and it is a key stop on their migration each spring and autumn. At the Makaria Spring, two pools fed by water that wells up all year, live eels, freshwater turtles and an endemic fish, the daska. The Olympic Rowing Centre belongs to the park as well.',
      '## A place in history',
      'The site is identified with the field of the battle of 490 BC \u2014 specifically the Persian camp \u2014 and the Trophy stands a short way off. In more recent times part of it was a US communications station, and the American base at Nea Makri and Kato Souli ran until the early 1990s.',
      '## The beach and the visit',
      'The bay has a long sandy shore, good for swimming and water sports, with pines that begin almost at the sand. Thousands of visitors come each year, and in summer the pressure on forest and shore goes beyond what they can carry. Take care of the place: fire is the greatest risk, and the wetland depends on a delicate water balance.'
    ]
  },
  rowing: {
    el: [
      'Το Ολυμπιακό Κωπηλατοδρόμιο του Σχινιά χτίστηκε για να φιλοξενήσει την κωπηλασία και το κανό σπριντ στους Ολυμπιακούς Αγώνες της Αθήνας το 2004. Είναι η βορειότερη αθλητική εγκατάσταση εκείνων των Αγώνων και βρίσκεται ανατολικά του Μαραθώνα, μέσα στο Εθνικό Πάρκο Σχινιά.',
      '## Ο χώρος',
      'Δύο μακριές παράλληλες λωρίδες νερού απλώνονται σε έκταση 1,24 τετραγωνικών χιλιομέτρων, με ένα κέντρο εγκαταστάσεων ανάμεσά τους, στη γλώσσα ξηράς που τις χωρίζει, και κερκίδες για 14.000 θεατές. Όταν η Αθήνα ανέλαβε τους Αγώνες, το πρόγραμμα των έργων ήθελε για το κωπηλατοδρόμιο μια μεγάλη, σχετικά επίπεδη έκταση κοντά σε νερό, και ο Σχινιάς είχε ακριβώς αυτά.',
      '## Μια αμφιλεγόμενη επιλογή',
      'Το πρόβλημα ήταν η θέση: η έκταση ανήκει στο προστατευόμενο Εθνικό Πάρκο Σχινιά–Μαραθώνα, και για να χτιστεί το έργο καταλήφθηκε σχεδόν το μισό του υγροβιότοπου. Ακολούθησαν αντιδράσεις, ακόμη και διεθνείς, για πιθανή περιβαλλοντική καταστροφή. Το έργο ωστόσο ολοκληρώθηκε και παραδόθηκε εγκαίρως για τους Αγώνες.',
      '## Από το 2003 ως σήμερα',
      'Πρώτη επιτυχημένη διοργάνωση ήταν το Παγκόσμιο Πρωτάθλημα Κωπηλασίας Εφήβων και Νεανίδων, τον Αύγουστο του 2003, πριν ολοκληρωθεί πλήρως ο χώρος. Οι θυελλώδεις άνεμοι γέμισαν νερό πολλά σκάφη, και οι περισσότεροι τελικοί έγιναν σε συντομευμένη διαδρομή, για να αποφευχθούν τα κύματα στο δεύτερο μισό των 2 χιλιομέτρων της λίμνης.',
      'Μετά τους Αγώνες η εγκατάσταση ανακατασκευάστηκε πλήρως από τη γερμανική εταιρεία Hochtief. Είναι ένα από τα τρία μόνο κωπηλατοδρόμια που έχει εγκρίνει η Διεθνής Ομοσπονδία Κωπηλασίας ως προπονητικά κέντρα, μαζί με το Μόναχο και τη Σεβίλλη. Φιλοξενεί πανελλήνια πρωταθλήματα κωπηλασίας και κανό, και το Ευρωπαϊκό Πρωτάθλημα Κωπηλασίας τον Σεπτέμβριο του 2008.'
    ],
    en: [
      'The Schinias Olympic Rowing Centre was built to host rowing and sprint canoeing at the 2004 Athens Olympic Games. It is the northernmost venue of those Games and lies east of Marathon, inside the Schinias National Park.',
      '## The site',
      'Two long parallel strips of water stretch across 1.24 square kilometres, with the facilities centre between them on the spit that divides them, and stands for 14,000 spectators. When Athens took on the Games, the building programme called for a large, fairly flat area close to water for the rowing venue, and Schinias had exactly that.',
      '## A contested choice',
      'The problem was the location: the ground lies inside the protected Schinias–Marathon National Park, and building the venue took up nearly half of the wetland. Protests followed, even international ones, over possible environmental damage. The project went ahead all the same and was delivered on time for the Games.',
      '## From 2003 to today',
      'The first successful event was the World Junior Rowing Championships in August 2003, before the site was fully finished. Stormy winds filled many boats with water, and most finals were rowed on a shortened course to avoid the waves in the second half of the 2-kilometre lake.',
      'After the Games the venue was completely rebuilt by the German company Hochtief. It is one of only three rowing centres approved by the international rowing federation as a training centre, along with Munich and Seville. It hosts Greek rowing and canoe championships, and held the European Rowing Championships in September 2008.'
    ]
  },
  authentic: {
    el: [
      'Ο Μαραθώνιος Αθήνας. Ο Αυθεντικός (Athens Marathon. The Authentic) είναι ο σημαντικότερος αγώνας δρόμου στην Ελλάδα και ένας από τους μεγαλύτερους της Ευρώπης. Τον οργανώνει κάθε χρόνο ο ΣΕΓΑΣ, σε συνεργασία με την Περιφέρεια Αττικής, την Ελληνική Ολυμπιακή Επιτροπή και άλλους κρατικούς φορείς. Η εκκίνηση δίνεται στον Μαραθώνα, κοντά στον Τύμβο των Μαραθωνομάχων, και ο τερματισμός γίνεται στο Παναθηναϊκό Στάδιο, όπου έγιναν οι πρώτοι σύγχρονοι Ολυμπιακοί Αγώνες το 1896.',
      '## Η αφετηρία',
      'Η αφετηρία είναι ένας ανοιχτός χώρος στην άκρη της πόλης, με φαρδιά λεωφόρο, σκαλοπάτια και ένα μεγάλο πέρασμα που γεμίζει δρομείς την ημέρα του αγώνα. Τις υπόλοιπες μέρες ο χώρος είναι ήσυχος και πολύ φωτογενής, και αξίζει μια στάση για όποιον περνά από τον Τύμβο. Στην τελετή που προηγείται του αγώνα ανάβει η φλόγα στο καζάνι της αφετηρίας.',
      '## Από το 1896 στον σημερινό αγώνα',
      'Ο πρώτος αγώνας στην κλασική διαδρομή έγινε την Κυριακή 10 Μαρτίου 1896 (με το παλιό ημερολόγιο), ένας προκριματικός που κέρδισε ο 19χρονος Χαρίλαος Βασιλάκος σε 3 ώρες και 18 λεπτά. Στον Ολυμπιακό αγώνα, την Παρασκευή 29 Μαρτίου, θριάμβευσε ο Σπύρος Λούης με 2:58:50.',
      'Ο Διεθνής Μαραθώνιος Αθηνών διοργανώθηκε για πρώτη φορά στις 2 Οκτωβρίου 1955 και επαναλαμβανόταν κάθε δύο χρόνια ως το 1967. Από τότε έγινε ετήσιος, με σταθερή ημερομηνία την 6η Απριλίου, για την ημέρα του Ολυμπισμού, και μετρούσε ταυτόχρονα ως πανελλήνιο πρωτάθλημα.',
      'Το 1972 ο ΣΕΓΑΣ έδωσε στον αγώνα λαϊκό χαρακτήρα και τον άνοιξε σε δρομείς που δεν αγωνίζονταν συστηματικά. Ως το 1980 γίνονταν δύο διεθνείς μαραθώνιοι στην κλασική διαδρομή: ένας τον Απρίλιο και ένας τον Οκτώβριο, ο «λαϊκός», πρόδρομος του σημερινού αγώνα. Στις 19 Οκτωβρίου 1974 δέχθηκε για πρώτη φορά γυναίκες, και ταχύτερη Ελληνίδα ήταν η πρωτοπόρος Ζωζώ Χριστοδούλου, με 5:01:20. Από τον Οκτώβριο του 1983 ξεκίνησε η ισχύουσα αρίθμηση, όταν ο Κλασικός Μαραθώνιος Αθήνας πήρε το όνομα του Γρηγόρη Λαμπράκη, Βαλκανιονίκη, ειρηνιστή και γιατρού. Το πανελλήνιο πρωτάθλημα επέστρεψε μέσα στον αγώνα το 1990.',
      '## Ένας δύσκολος μαραθώνιος',
      'Ο Κλασικός Μαραθώνιος θεωρείται από τους δυσκολότερους του κόσμου. Από το 11ο χιλιόμετρο, καθώς οι δρομείς βγαίνουν από τη Νέα Μάκρη, ως το 28ο στο στάδιο της Παλλήνης, η διαδρομή ανηφορίζει συνεχώς για 17 χιλιόμετρα.'
    ],
    en: [
      'The Athens Marathon. The Authentic is the most important road race in Greece and one of the biggest in Europe. It is organised each year by SEGAS, together with the Attica Region, the Hellenic Olympic Committee and other state bodies. The start is at Marathon, near the Tomb of the Marathon fighters, and the finish is in the Panathenaic Stadium, where the first modern Olympic Games were held in 1896.',
      '## The start line',
      'The start is an open area at the edge of the town, with a wide avenue, steps and a large gateway that fills with runners on race day. On other days it is quiet and very photogenic, and worth a stop for anyone visiting the Tymbos. At the ceremony before the race a flame is lit in the cauldron at the start.',
      '## From 1896 to today’s race',
      'The first race on the classic course took place on Sunday 10 March 1896 (old calendar), a qualifier won by 19-year-old Charilaos Vasilakos in 3 hours 18 minutes. In the Olympic race, on Friday 29 March, Spyridon Louis triumphed in 2:58:50.',
      'The International Athens Marathon was first held on 2 October 1955 and repeated every two years until 1967. From then on it became annual, on a fixed date of 6 April, for Olympic Day, and counted as the Panhellenic championship at the same time.',
      'In 1972 SEGAS gave the race a popular character and opened it to runners who did not compete regularly. Until 1980 two international marathons ran on the classic course: one in April and one in October, the “people’s” race, forerunner of today’s event. On 19 October 1974 women were admitted for the first time, and the fastest Greek woman was the pioneer Zozo Christodoulou, in 5:01:20. In October 1983 the current numbering began, when the Classic Athens Marathon took the name of Grigoris Lambrakis, Balkan champion, peace campaigner and doctor. The Panhellenic championship returned within the race in 1990.',
      '## A hard marathon',
      'The Classic Marathon is reckoned one of the hardest in the world. From kilometre 11, as runners leave Nea Makri, to kilometre 28 at the Pallini stadium, the course climbs continuously for 17 kilometres.'
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
      'Η Λίμνη του Μαραθώνα είναι τεχνητή και φτιάχτηκε για να ποτίζει την Αθήνα. Σχηματίστηκε όταν χτίστηκε το φράγμα στο σημείο όπου ενώνονται οι χείμαρροι Χάραδρος (ή Οινόη) και Βαρνάβας, λίγα χιλιόμετρα από την πόλη του Μαραθώνα, και είναι σήμερα ένα από τα πιο γαλήνια σημεία της βορειοανατολικής Αττικής.',
      '## Το φράγμα',
      'Το έργο ανέλαβε η αμερικανική εταιρεία ULEN, που το έχτισε από το 1926 ως το 1929. Με βάση τη σύμβαση, η εταιρεία κράτησε την ιδιοκτησία της εταιρείας ύδρευσης της πρωτεύουσας ως το 1974. Η στέψη βρίσκεται σε υψόμετρο 227 μέτρων και η βάση στα 173, ενώ ο υπερχειλιστής, στα 223, δείχνει και την ανώτατη στάθμη της λίμνης· μπορεί να διοχετεύσει 520 κυβικά μέτρα το δευτερόλεπτο. Η ελαφριά καμπύλη του τοίχου και η πολυγωνική λιθοδομή του είναι το πιο αναγνωρίσιμο κομμάτι του τοπίου.',
      '## Μια λίμνη που τάιζε μια πρωτεύουσα',
      'Από το 1931, όταν άρχισε να δίνει νερό, ως το 1959 η λίμνη ήταν η βασική πηγή ύδρευσης της Αθήνας. Το 1959 προστέθηκε παροχή από την Υλίκη και από το 1981 το μεγαλύτερο μέρος του νερού έρχεται από τον Μόρνο. Σήμερα η ΕΥΔΑΠ τη χρησιμοποιεί ως βοηθητική πηγή· όλο της το νερό θα κάλυπτε την Αθήνα μόνο για λίγες ημέρες.',
      'Η επιφάνεια φτάνει περίπου 2,5 τετραγωνικά χιλιόμετρα και το βάθος τα 54 μέτρα. Συλλέγει νερό από λεκάνη 118 τετραγωνικών χιλιομέτρων, με μέση ετήσια βροχόπτωση 580 χιλιοστά, και χωρά έως 41 εκατομμύρια κυβικά μέτρα, από τα οποία μπορούν να αντληθούν τα 34.',
      '## Φύση και προστασία',
      'Εκτός από αποθήκη νερού, η λίμνη προστατεύει από πλημμύρες τις περιοχές κάτω από το φράγμα, βελτιώνει το τοπικό μικροκλίμα και είναι πόλος αναψυχής. Στις όχθες φυτρώνουν καλαμιώνες, και πιο πάνω πυκνή θαμνώδης βλάστηση με πουρνάρι, κουμαριά, σχίνο, ασφάκα και κιστούς, μαζί με φυτεμένους πλατάνους και ευκαλύπτους. Έχει χαρακτηριστεί υγρότοπος Α΄ προτεραιότητας. Επειδή το νερό του χρησιμοποιείται για ύδρευση, η λεκάνη προστατεύεται από ρύπανση και ένα μεγάλο κομμάτι της ανήκει στις ζώνες προστασίας της Πεντέλης.',
      '## Η επίσκεψη',
      'Στη βάση του φράγματος στέκει ομοίωμα του Θησαυρού των Αθηναίων, από πεντελικό μάρμαρο· φτάνετε εκεί με πεζοπορία από τον Πύργο της Οινόης. Ο δρόμος περνά πάνω από τη στέψη και δίνει θέα στη λίμνη και στο φαράγγι από κάτω. Οι καλύτερες ώρες είναι το ξημέρωμα και το ηλιοβασίλεμα, όταν η επιφάνεια του νερού γίνεται καθρέφτης. Γύρω από τη λίμνη υπάρχουν αγροτικές και κτηνοτροφικές δραστηριότητες.'
    ],
    en: [
      'Lake Marathon is artificial, made to supply Athens with water. It formed when the dam was built where the Charadros (or Oinoe) and Varnavas torrents meet, a few kilometres from the town of Marathon, and it is today one of the calmest spots in north-east Attica.',
      '## The dam',
      'The work was taken on by the American company ULEN, which built it between 1926 and 1929. Under the contract the company kept ownership of the capital\u2019s water company until 1974. The crest stands at 227 metres above sea level and the base at 173; the spillway, at 223, also marks the lake\u2019s highest level and can pass 520 cubic metres a second. The gentle curve of the wall and its polygonal stonework are the most recognisable part of the view.',
      '## A lake that fed a capital',
      'From 1931, when it began to deliver water, until 1959 the lake was Athens\u2019 main supply. In 1959 a feed from Yliki was added, and since 1981 most of the water has come from Mornos. Today EYDAP uses it as an auxiliary source; all its water would cover Athens for only a few days.',
      'The surface measures about 2.5 square kilometres and the depth reaches 54 metres. It gathers water from a catchment of 118 square kilometres, with average annual rainfall of 580 millimetres, and holds up to 41 million cubic metres, of which 34 million can be drawn.',
      '## Nature and protection',
      'Besides storing water, the lake protects the areas below the dam from floods, improves the local microclimate and is a place for recreation. Reeds grow along parts of the shore, and above them dense scrub of kermes oak, strawberry tree, spiny broom, mastic and rockrose, along with planted plane trees and eucalyptus. It is classed as a first-priority wetland. Because the water is used for supply, the basin is protected from pollution, and a large part of it lies within the Penteli protection zones.',
      '## The visit',
      'At the foot of the dam stands a replica of the Athenian Treasury in Pentelic marble, reached on foot from the Tower of Oinoi. The road crosses the crest and looks over the lake and the gorge below. The best hours are dawn and sunset, when the water turns to a mirror. Farming and livestock keeping go on around the lake.'
    ]
  },
  oinoi: {
    el: [
      'Στην άκρη του κάμπου, εκεί που ο Χάραδρος βγαίνει από το φαράγγι του, στέκει ένας από τους πιο απρόσμενους πύργους της Αττικής: ο Πύργος της Οινόης. Είναι το σημείο εκκίνησης μιας εύκολης πεζοπορίας που καταλήγει στη βάση του φράγματος της λίμνης του Μαραθώνα.',
      '## Ο πύργος',
      'Ο Πύργος χτίστηκε γύρω στο 1250 με εντολή του Γκυ Α΄ ντε Λα Ρος, τότε δούκα των Αθηνών. Το Δουκάτο των Αθηνών ήταν ένα από τα κρατίδια που έστησαν οι Σταυροφόροι μετά την άλωση της Κωνσταντινούπολης το 1204, και κράτησε ως το 1456. Πιθανότατα ο πύργος υπήρχε για να επιτηρεί τον κάμπο του Μαραθώνα. Είναι καλοδιατηρημένος, ψηλός και επιβλητικός, με πολεμίστρες στην κορυφή — κάτι που δύσκολα περιμένει κανείς να συναντήσει στην Αττική. Η είσοδος είναι κλειστή και για λόγους ασφαλείας δεν πρέπει να επιχειρήσετε να μπείτε.',
      '## Δύο μονοπάτια',
      'Ένα σήμα, εκατό μέτρα από τον πύργο, εξηγεί τις δύο διαδρομές προς το φαράγγι. Το αριστερό μονοπάτι ξεκινά ελαφρώς ανηφορικά και έχει μήκος κάτι λιγότερο από 4 χιλιόμετρα. Το δεξιό είναι ημικυκλικό και μικρότερο, γύρω στα 2,5 χιλιόμετρα, αλλά δύσβατο και δυσδιάκριτο, και δεν ταιριάζει σε άπειρους πεζοπόρους.',
      'Πολύ κοντά στην αφετηρία, προς τη μεριά του δεύτερου μονοπατιού, υπάρχουν δύο ακόμη στάσεις. Η πρώτη είναι ό,τι έχει απομείνει από τον ναό του Απόλλωνα Πυθίου: λίγα κομμάτια πέτρας και μαρμάρου μέσα στη βλάστηση. Η δεύτερη είναι το εκκλησάκι των Αγίων Αποστόλων, χτισμένο στη θέση μεσαιωνικού φράγκικου ναού και περιτριγυρισμένο από δέντρα, με πλακόστρωτη αυλή σε σχήμα μικρού θεάτρου.',
      '## Το φαράγγι',
      'Μετά από περίπου δέκα λεπτά βρίσκεστε μέσα στο φαράγγι του Χάραδρου και το τοπίο αλλάζει: πλατάνια, τρεχούμενο νερό (λιγότερο το καλοκαίρι), βατράχια, πεταλούδες κάτω από τα φύλλα. Ακόμη και σε πολύ ζεστή μέρα η θερμοκρασία εδώ είναι πιο δροσερή. Στη διαδρομή περνάτε από λιβάδια, παλιά κτίσματα του υδραγωγείου και τη θέση δύο νερόμυλων· ένα κομμάτι της πορείας πατά στον αρχαίο λιθόστρωτο δρόμο των λατομείων, δίπλα στη σπηλιά του Πάνα.',
      'Όσο πλησιάζετε, το φράγμα αποκαλύπτεται σιγά σιγά μπροστά σας — ύψος 54 μέτρα, μήκος 285, πλάτος βάσης 28. Στη βάση του υπάρχει ένα ομοίωμα του Θησαυρού των Αθηναίων, του ναΐσκου που είχαν αφιερώσει οι Αθηναίοι στους Δελφούς μετά τη μάχη του Μαραθώνα. Χτίστηκε από λευκό πεντελικό μάρμαρο, σε ανάμνηση του τέλους των εργασιών και της ελληνοαμερικανικής συνεργασίας. Η πύλη της περίφραξης στη βάση του φράγματος είναι κλειστή.',
      'Στα σκαλιά του φράγματος γυρίστηκε μία από τις πιο γνωστές σκηνές της ταινίας «Υπολοχαγός Νατάσα»: ο Ορέστης, που τον υποδύεται ο Δημήτρης Παπαμιχαήλ, πέφτει από τις σφαίρες των Γερμανών και η Αλίκη Βουγιουκλάκη τον θρηνεί.',
      '## Πρακτικά',
      'Η διαδρομή στο φαράγγι, με την επιστροφή, είναι λίγο κάτω από 8 χιλιόμετρα και ζητά 3–4 ώρες, ανάλογα με τις στάσεις. Είναι εύκολη και κατάλληλη για αρχάριους. Ο πύργος απέχει 43 χιλιόμετρα από το κέντρο της Αθήνας· από τον αυτοκινητόδρομο Αθηνών–Θεσσαλονίκης βγαίνετε στην έξοδο Κρυονερίου–Αγίου Στεφάνου.',
      'Στην επιστροφή αξίζει μια μεγάλη στάση στους Αγίους Αποστόλους: η αυλή μοιάζει με μικρό θέατρο, με σκιά από μεγάλα πλατάνια και μια πηγή, και είναι ιδανική για πικνίκ. Αν θέλετε βουτιά μετά, η παραλία του Μαραθώνα απέχει περίπου είκοσι λεπτά με το αυτοκίνητο.'
    ],
    en: [
      'At the edge of the plain, where the Charadros leaves its gorge, stands one of the most unexpected towers in Attica: the Tower of Oinoi. It is the starting point of an easy hike that ends at the foot of the Marathon lake dam.',
      '## The tower',
      'The tower was built around 1250 on the orders of Guy I de la Roche, then Duke of Athens. The Duchy of Athens was one of the states the Crusaders set up after taking Constantinople in 1204, and it lasted until 1456. The tower most likely stood to keep watch over the Marathon plain. It is well preserved, tall and imposing, with crenellations along the top \u2014 not something you expect to meet in Attica. The entrance is closed, and for safety you should not try to get in.',
      '## Two paths',
      'A sign a hundred metres from the tower explains the two routes to the gorge. The left-hand path starts gently uphill and runs a little under 4 kilometres. The right-hand one is semicircular and shorter, about 2.5 kilometres, but rough and hard to make out, and not for inexperienced walkers.',
      'Very close to the start, on the side of the second path, are two more stops. The first is what remains of the temple of Apollo Pythios: a few pieces of stone and marble among the undergrowth. The second is the small church of the Holy Apostles, built on the site of a medieval Frankish church and ringed by trees, with a paved courtyard shaped like a little theatre.',
      '## The gorge',
      'After about ten minutes you are inside the gorge of the Charadros and the landscape changes: plane trees, running water (less in summer), frogs, butterflies under the leaves. Even on a very hot day it is noticeably cooler here. On the way you pass meadows, old buildings of the water supply line and the sites of two watermills; one stretch follows the ancient paved road that served the quarries, next to the Cave of Pan.',
      'As you near the dam it gradually reveals its size \u2014 54 metres high, 285 long, 28 wide at the base. At its foot stands a replica of the Athenian Treasury, the small temple the Athenians dedicated at Delphi after the battle of Marathon. It is built of white Pentelic marble, in memory of the completion of the works and of the happy Greek\u2013American collaboration. The gate of the fence around the dam\u2019s base is closed.',
      'On the steps of the dam one of the best-known scenes of the film \u201cLieutenant Natasha\u201d was shot: Orestis, played by Dimitris Papamichail, falls to German bullets and Aliki Vougiouklaki mourns beside him.',
      '## Practicalities',
      'The gorge route, there and back, is a little under 8 kilometres and takes 3\u20134 hours depending on stops. It is easy and suits beginners. The tower is 43 kilometres from central Athens; leave the Athens\u2013Thessaloniki motorway at the Kryoneri\u2013Agios Stefanos exit.',
      'On the way back it is worth a long stop at the Holy Apostles: the courtyard is like a small theatre, shaded by big plane trees and with a spring, and good for a picnic. If you want a swim afterwards, Marathon beach is about twenty minutes by car.'
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
