/**
 * MONK Coffee & Brunch - Menu Data
 * 
 * DEVELOPER INSTRUCTIONS:
 * Update items, descriptions, prices, and badges below.
 * The price should be formatted as a string or number.
 */

export const menuCategories = [
  { id: "coffee", name: "Coffee" },
  { id: "brunch", name: "Brunch" },
  { id: "snacks", name: "Snacks" },
  { id: "drinks", name: "Drinks" },
  { id: "smoothies", name: "Smoothies & Juices" },
  { id: "desserts", name: "Desserts" },
  { id: "offers", name: "Offers" }
];

export const menuItems = {
  coffee: [
    {
      id: "c1",
      name: "Espresso",
      description: "Διπλός espresso από 100% specialty κόκκους Arabica με πλούσια κρέμα.",
      price: "2.00",
      badge: "Classic"
    },
    {
      id: "c2",
      name: "Freddo Espresso",
      description: "Ο αγαπημένος παγωμένος καφές, χτυπημένος με πάγο στην ιδανική θερμοκρασία.",
      price: "2.20",
      badge: "Popular"
    },
    {
      id: "c3",
      name: "Cappuccino",
      description: "Espresso διπλός με βελούδινο ζεστό αφρόγαλα.",
      price: "2.40"
    },
    {
      id: "c4",
      name: "Freddo Cappuccino",
      description: "Παγωμένος espresso με πλούσια στρώση από κρύο αφρόγαλα.",
      price: "2.60",
      badge: "Popular"
    },
    {
      id: "c5",
      name: "Latte",
      description: "Ζεστό ρόφημα espresso με άφθονο ζεστό γάλα και λεπτή στρώση αφρού.",
      price: "2.50"
    },
    {
      id: "c6",
      name: "Iced Latte",
      description: "Παγωμένος καφές latte με φρέσκο γάλα και διπλή δόση espresso.",
      price: "2.70"
    }
  ],
  brunch: [
    {
      id: "b1",
      name: "Avocado Toast",
      description: "Φρυγανισμένο ψωμί ζέας, κρέμα αβοκάντο, αυγό ποσέ, ντοματίνια, φέτα και σπόροι chia.",
      price: "6.50",
      badge: "Must Try"
    },
    {
      id: "b2",
      name: "Pancakes Chocolate & Banana",
      description: "Τρία αφράτα pancakes με πραλίνα φουντουκιού, μπανάνα, μπισκότο και τριμμένο καρύδι.",
      price: "5.80",
      badge: "Popular"
    },
    {
      id: "b3",
      name: "Croque Madame",
      description: "Ψωμί brioche με καπνιστό χοιρινό, τυρί gouda, μπεσαμέλ και ένα τηγανητό αυγό στην κορυφή.",
      price: "6.90"
    },
    {
      id: "b4",
      name: "Club Sandwich Classic",
      description: "Τριπλό toasted ψωμί με γαλοπούλα, τυρί, ντομάτα, μαρούλι, bacon και μαγιονέζα. Συνοδεύεται από πατάτες τηγανητές.",
      price: "6.20"
    },
    {
      id: "b5",
      name: "Omelette Special",
      description: "Με 3 αυγά, bacon, μανιτάρια, πιπεριές, gouda και φρέσκια σαλάτα.",
      price: "5.50"
    },
    {
      id: "b6",
      name: "Yogurt Bowl Healthy",
      description: "Ελληνικό γιαούρτι με μέλι, granola, φρέσκα φρούτα εποχής και σπόρους κολοκύθας.",
      price: "4.80",
      badge: "Healthy"
    }
  ],
  snacks: [
    {
      id: "s1",
      name: "Toast Classic",
      description: "Φρυγανισμένο ψωμί με τυρί gouda και καπνιστή γαλοπούλα.",
      price: "2.20"
    },
    {
      id: "s2",
      name: "Bagel Salmon",
      description: "Αφράτο bagel με καπνιστό σολομό, cream cheese, αγγούρι και άνηθο.",
      price: "4.90",
      badge: "Popular"
    },
    {
      id: "s3",
      name: "Sandwich Ημέρας",
      description: "Μπαγκέτα πολύσπορη με προσούτο, μοτσαρέλα, ντομάτα και πέστο βασιλικού.",
      price: "3.80"
    },
    {
      id: "s4",
      name: "Tortilla Chicken",
      description: "Με ψητό κοτόπουλο, καλαμπόκι, gouda, μαρούλι και σως μουστάρδας-μελιού.",
      price: "4.20"
    }
  ],
  drinks: [
    {
      id: "d1",
      name: "Iced Tea Peach or Lemon",
      description: "Κρύο τσάι με γεύση ροδάκινο ή λεμόνι.",
      price: "3.00"
    },
    {
      id: "d2",
      name: "Homemade Lemonade",
      description: "Σπιτική λεμονάδα με τζίντζερ και φρέσκο δυόσμο.",
      price: "3.50",
      badge: "New"
    },
    {
      id: "d3",
      name: "Sparkling Water",
      description: "Ανθρακούχο φυσικό μεταλλικό νερό 250ml.",
      price: "2.00"
    },
    {
      id: "d4",
      name: "Soft Drink 330ml",
      description: "Coca Cola, Fanta, Sprite ή Σόδα.",
      price: "2.00"
    }
  ],
  smoothies: [
    {
      id: "sm1",
      name: "Fresh Orange Juice",
      description: "Φρεσκοστυμμένος χυμός από γλυκά ελληνικά πορτοκάλια.",
      price: "3.00"
    },
    {
      id: "sm2",
      name: "Green Detox Smoothie",
      description: "Σπανάκι, πράσινο μήλο, μπανάνα, τζίντζερ και χυμός λεμονιού.",
      price: "4.50",
      badge: "Healthy"
    },
    {
      id: "sm3",
      name: "Super Berry Smoothie",
      description: "Μούρα, φράουλα, γιαούρτι, γάλα αμυγδάλου και σιρόπι σφενδάμου.",
      price: "4.80",
      badge: "Popular"
    }
  ],
  desserts: [
    {
      id: "de1",
      name: "Chocolate Brownie",
      description: "Υγρό σοκολατένιο brownie. Συνοδεύεται προαιρετικά με παγωτό βανίλια.",
      price: "3.50"
    },
    {
      id: "de2",
      name: "Strawberry Cheesecake",
      description: "Κλασικό cheesecake με τραγανή βάση και πλούσια σάλτσα φράουλας.",
      price: "4.20",
      badge: "Popular"
    },
    {
      id: "de3",
      name: "Pancake Bites Sweet",
      description: "Μπουκίτσες pancake με πραλίνα σοκολάτας, λευκή σοκολάτα και τριμμένο oreo.",
      price: "4.00"
    },
    {
      id: "de4",
      name: "Soft Cookie Chocolate Chip",
      description: "Μαλακό cookie με κομμάτια σοκολάτας γάλακτος και υγείας.",
      price: "2.00"
    }
  ],
  offers: [
    {
      id: "o1",
      name: "Coffee + Butter Croissant",
      description: "Οποιοσδήποτε μονός ή διπλός καφές μαζί με ένα φρέσκο, γαλλικό κρουασάν βουτύρου.",
      price: "3.50",
      badge: "Daily Deal"
    },
    {
      id: "o2",
      name: "Brunch Combo for Two",
      description: "2 Καφέδες της επιλογής σας, 1 Avocado Toast και 1 Pancakes Chocolate & Banana.",
      price: "15.00",
      badge: "Weekend Pick"
    },
    {
      id: "o3",
      name: "Take Away Specialty Deal",
      description: "Διπλός Freddo Espresso / Freddo Cappuccino + 1 Club Sandwich To-Go.",
      price: "7.50",
      badge: "Best Seller"
    }
  ]
};
