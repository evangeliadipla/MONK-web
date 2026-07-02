/**
 * MONK Coffee & Brunch Corner - Business Info Data
 * 
 * DEVELOPER/OWNER NOTE:
 * Η διεύθυνση/τηλέφωνο/ωράριο έχουν μπει από δημόσιες καταχωρήσεις και πρέπει να 
 * επιβεβαιωθούν από τον ιδιοκτήτη πριν την τελική παράδοση.
 */

export const businessInfo = {
  // Brand details
  businessName: "MONK Coffee & Brunch Corner",
  shortName: "MONK",
  tagline: "Coffee, brunch & more",
  description: "Ο αγαπημένος σου καθημερινός προορισμός για premium specialty καφέ, λαχταριστό brunch και μοναδικές γλυκές γεύσεις στο κέντρο του Αγρινίου.",
  
  // Contact details
  address: "Καραϊσκάκη 10, Αγρίνιο 30131",
  phoneDisplay: "26410 22440",
  phoneHref: "tel:+302641022440",
  email: "Δεν έχει προστεθεί email",
  emailHref: "",
  
  // Delivery Platforms
  woltUrl: "https://wolt.com/el/grc/agrinio/restaurant/monk-karais",
  efoodUrl: "https://www.e-food.gr/delivery/agrinio/monk-coffee-kai-brunch-corner-7947077",
  
  // Social media profiles
  instagramUrl: "https://www.instagram.com/monkcoffeebrunch",
  facebookUrl: "https://www.facebook.com/p/MONK-coffee-brunch-corner-61573746793198/",
  tiktokUrl: "", // Leave empty since there is no TikTok account
  
  // Maps & Location
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MONK%20coffee%20brunch%20corner%20Karaiskaki%2010%20Agrinio",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=MONK%20coffee%20brunch%20corner%20Karaiskaki%2010%20Agrinio",
  // Map iframe source pointing to Karaiskaki 10 area
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.8718911762035!2d21.4089931!3d38.6247348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e5d4cb0bb6ff9%3A0xc3f58ea96fe52f36!2sMONK%20Coffee%20%26%20Brunch!5e0!3m2!1sel!2sgr!4v1700000000000!5m2!1sel!2sgr",
  
  // Google Reviews (Temporary fallback to maps search link)
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=MONK%20coffee%20brunch%20corner%20Karaiskaki%2010%20Agrinio",
  googleReviewWriteUrl: "https://www.google.com/maps/search/?api=1&query=MONK%20coffee%20brunch%20corner%20Karaiskaki%2010%20Agrinio",
  
  // Online / QR ordering
  menuUrl: "#qr-menu",
  qrMenuUrl: "", // If empty, defaults dynamically to window.location.origin + "/#qr-menu"
  
  // Opening hours
  openingHours: "Δευτέρα - Κυριακή: 08:15 - 20:30"
};
