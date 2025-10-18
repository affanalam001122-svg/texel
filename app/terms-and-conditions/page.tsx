import dynamic from 'next/dynamic';
import { Navigation } from "@/components/navigation";
import { PageWrapper } from "@/components/page-wrapper";

const TermsAndConditions = dynamic(() => import('@/components/terms-and-conditions').then(mod => mod.TermsAndConditions));

export const metadata = {
  title: 'Terms and Conditions - Texel',
  description: 'Terms and Conditions for Texel.',
  alternates: {
    canonical: 'https://texel.com/terms-and-conditions',
  },
}

export default function TermsAndConditionsPage() {
  return (
    <PageWrapper>
      <Navigation />
      <TermsAndConditions />
    </PageWrapper>
  );
}
