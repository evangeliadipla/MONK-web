/**
 * MONK Coffee & Brunch - Business Info Data
 * 
 * DEVELOPER INSTRUCTIONS:
 * Update the placeholders below with the actual production URLs, phone numbers,
 * and addresses when deploying the website for the cafe owner.
 */

export const businessInfo = {
  // Brand details
  businessName: "MONK Coffee & Brunch",
  tagline: "Coffee, brunch & more",
  description: "Ο αγαπημένος σου καθημερινός προορισμός για premium καφέ, λαχταριστό brunch και χαλαρές στιγμές στο κέντρο της πόλης.",
  
  // Contact details (Update with actual store phone and address)
  address: "Χαριλάου Τρικούπη 26, Αγρίνιο 301 31", // Replace with real physical address
  phoneDisplay: "26410 00000",                     // Replace with real phone number
  phoneHref: "tel:+302641000000",                  // Replace with real tel link
  email: "hello@monkcoffee.gr",                    // Replace with real store email
  emailHref: "mailto:hello@monkcoffee.gr",
  
  // Social media profiles (Add links or set to null/empty string to disable buttons automatically)
  instagramUrl: "https://www.instagram.com/monkcoffeebrunch",
  facebookUrl: "https://www.facebook.com/people/MONK-coffee-brunch/100092305541991/", // Fallback or real FB link
  tiktokUrl: "", // Leave empty if not available, UI will automatically handle it gracefully
  
  // Maps & Location
  // Fallback Google Maps search link:
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MONK%20coffee%20brunch%20Agrinio",
  // Google Maps navigation link:
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=MONK%20coffee%20brunch%20Agrinio",
  // Embedded map iframe source (Update with iframe src from Google Maps share panel):
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.9632832864696!2d21.40871147648352!3d38.62473479198642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e5d4cb0bb6ff9%3A0xc3f58ea96fe52f36!2sMONK%20Coffee%20%26%20Brunch!5e0!3m2!1sel!2sgr!4v1700000000000!5m2!1sel!2sgr",
  
  // Google Reviews
  // URL to view reviews:
  googleReviewsUrl: "https://www.google.com/maps/place/MONK+Coffee+%26+Brunch/@38.6247348,21.4089931,17z/data=!4m8!3m7!1s0x135e5d4cb0bb6ff9:0xc3f58ea96fe52f36!8m2!3d38.6247348!4d21.4089931!9m1!1b1",
  // URL to directly write a new review:
  googleReviewWriteUrl: "https://search.google.com/local/writereview?placeid=ChIJ-W-7sEtdXhMRNi_lL6mO9cM",
  
  // Online / QR ordering
  menuUrl: "#menu",
  qrMenuUrl: "", // If empty, the QR code component will dynamically generate a link to current origin + "/#menu"
  
  // Opening hours
  openingHours: "Δευτέρα - Κυριακή: 08:00 - 22:00"
};
