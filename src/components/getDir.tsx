export function getDirection(str: string) {
  // Arabic Unicode range: 0600–06FF (basic Arabic block)
  // plus 0750–077F (Arabic Supplement), 08A0–08FF, and others if needed
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;

  return arabicRegex.test(str) ? "rtl" : "ltr";
}
