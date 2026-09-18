// Generates a referral code for a new lead the moment they submit the quote
// form, in the exact format the business-manager app uses for client
// referral codes (see generateReferralCode in casefiles/src/utils/starterData.ts)
// so codes line up if/when this person becomes a client there — e.g.
// SARAH-928, CARLOS-410.
export function generateLeadReferralCode(name: string, phone?: string): string {
  const cleanName = (name || '')
    .trim()
    .replace(/[^a-zA-Z]/g, '')
    .toUpperCase();
  const prefix = cleanName.slice(0, 5) || 'CLEAN';
  const phoneSuffix = phone ? phone.replace(/\D/g, '').slice(-3) : '';
  const randomSuffix = Math.floor(100 + Math.random() * 900).toString();
  const suffix = phoneSuffix || randomSuffix;
  return `${prefix}-${suffix}`;
}
