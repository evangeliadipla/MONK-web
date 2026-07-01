# MONK Coffee & Brunch - Official Website

Ένα πλήρως responsive, premium, one-page website για την καφετέρια **MONK Coffee & Brunch** στο Αγρίνιο. Κατασκευασμένο με **React + Vite** και **Tailwind CSS**, σχεδιασμένο με mobile-first λογική και premium urban αισθητική.

---

## 🛠️ Τεχνολογίες

- **React + Vite**: Για αστραπιαία ταχύτητα φόρτωσης και HMR (Hot Module Replacement) κατά την ανάπτυξη.
- **Tailwind CSS (v4)**: Για ευέλικτο, modern design, curated color palette (MONK deep blue `#181391`, gold `#D6A85C`) και micro-animations.
- **Lucide Icons**: Για minimal και καθαρή εικονογράφηση.
- **Google Fonts**: Ενσωμάτωση των γραμματοσειρών **Outfit** (για premium επικεφαλίδες) και **Inter** (για ευανάγνωστο κείμενο).

---

## 🚀 Οδηγίες Εγκατάστασης & Ανάπτυξης

### 1. Εγκατάσταση Dependencies
Τρέξε την παρακάτω εντολή για να εγκαταστήσεις όλα τα πακέτα:
```bash
npm install
```

### 2. Εκκίνηση Τοπικού Server (Development)
Για να τρέξεις το site τοπικά στο browser σου σε περιβάλλον ανάπτυξης:
```bash
npm run dev
```
Ο server θα τρέχει συνήθως στο: `http://localhost:5173/`

### 3. Production Build
Για να δημιουργήσεις τον βελτιστοποιημένο φάκελο παραγωγής (`dist/`) έτοιμο για deploy:
```bash
npm run build
```

---

## ⚙️ Διαχείριση Περιεχομένου (Data-Driven)

Όλα τα στοιχεία που αλλάζουν συχνά βρίσκονται συγκεντρωμένα στον φάκελο `src/data/` ώστε να μην χρειάζεται να πειράξεις τον κώδικα των components:

### 1. Στοιχεία Επιχείρησης & Links (`src/data/businessInfo.js`)
Από εδώ αλλάζεις:
- **Όνομα / Tagline / Περιγραφή**: `businessName`, `tagline`, `description`.
- **Επικοινωνία & Διεύθυνση**: `address`, `phoneDisplay`, `phoneHref` (tel link), `email`.
- **Social Media Links**: `instagramUrl`, `facebookUrl`, `tiktokUrl`.
- **Google Maps & Directions**:
  - `googleMapsUrl`: Link για αναζήτηση της τοποθεσίας.
  - `googleMapsDirectionsUrl`: Link για λήψη οδηγιών πλοήγησης.
  - `googleMapsEmbedUrl`: Το URL `src` από το iframe διαμοιρασμού του Google Maps (για τον ενσωματωμένο χάρτη).
- **Google Reviews**:
  - `googleReviewsUrl`: Link για την ανάγνωση όλων των κριτικών.
  - `googleReviewWriteUrl`: Link που οδηγεί απευθείας στο παράθυρο συγγραφής κριτικής για το κατάστημα.
- **Ωράριο**: `openingHours`.

### 2. Μενού Καταστήματος (`src/data/menu.js`)
Περιέχει τις κατηγορίες και τα προϊόντα του καταστήματος:
- `menuCategories`: Οι καρτέλες/κατηγορίες (Coffee, Brunch, Snacks, κλπ.).
- `menuItems`: Τα προϊόντα ανά κατηγορία με `id`, `name`, `description`, `price` και προαιρετικό `badge` (π.χ., "Popular", "New", "Must Try").

### 3. Εποχιακές Προτάσεις / MONK Picks (`src/data/offers.js`)
Διαχειρίσου τις 3 κάρτες προτάσεων της εβδομάδας (π.χ., Καφές της ημέρας, Brunch pick, Sweet moment) αλλάζοντας τις τιμές, περιγραφές και badges στο `monkPicks`.

### 4. Φωτογραφίες Gallery (`src/data/gallery.js`)
Διαχειρίσου το asymmetric grid των φωτογραφιών. Για κάθε φωτογραφία ορίζεις:
- `imageUrl`: Το link της εικόνας (μπορεί να είναι local path π.χ. `/images/brunch.jpg` ή remote URL).
- `fallbackGradient`: Custom CSS gradient που εμφανίζεται αυτόματα σε περίπτωση που η εικόνα αποτύχει να φορτώσει (π.χ. offline).
- `alt`: Περιγραφικό alt text για SEO και accessibility.

### 5. Κριτικές Πελατών (`src/data/reviews.js`)
Περιέχει τις 4 κάρτες αξιολογήσεων πελατών. Κάθε review έχει `name`, `stars` (1-5), `comment` και `date`.

---

## 🌐 Οδηγίες Deployment (Ανέβασμα στο Web)

Το build output του Vite (`dist/`) είναι έτοιμο για άμεσο deployment σε οποιαδήποτε δωρεάν πλατφόρμα στατικού hosting:

### Vercel
1. Σύνδεσε το GitHub repository σου στο [Vercel](https://vercel.com).
2. Επίλεξε **Vite** ως Framework Preset.
3. Το Vercel θα αναγνωρίσει αυτόματα τις εντολές build και θα κάνει deploy το site σε λιγότερο από 1 λεπτό!

### Netlify
1. Σύνδεσε το project σου στο [Netlify](https://netlify.com).
2. Όρισε ως Build Command: `npm run build`
3. Όρισε ως Publish Directory: `dist`
4. Πάτα **Deploy**!

---

## 🎨 Σχεδιαστικές Λεπτομέρειες (Branding)
- **Primary Color**: Deep Blue (`#181391`) - Κυριαρχεί σε Hero, CTA buttons, links και branded sections.
- **Accent Color**: Gold/Beige (`#D6A85C`) - Χρησιμοποιείται διακριτικά για highlights, badges και διακοσμητικά lines.
- **Backgrounds & Spaces**: Άφθονο καθαρό λευκό spacing για minimal, premium και urban καφέ/brunch αισθητική.
