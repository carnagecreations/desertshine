import type { Metadata } from 'next';
import PartnerProgramPage from '@/components/PartnerProgramPage';
import { getPartnerCategory } from '@/lib/partnerProgram';
import { SITE } from '@/lib/site';

const category = getPartnerCategory('realtors')!;

export const metadata: Metadata = {
  title: category.title,
  description: category.tagline,
  alternates: { canonical: `${SITE.url}/partners/realtors` },
};

export default function Page() {
  return <PartnerProgramPage category={category} />;
}
