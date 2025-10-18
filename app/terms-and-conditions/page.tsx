import { PageWrapper } from "@/components/page-wrapper";
import { Navigation } from "@/components/navigation";

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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">Last updated: October 26, 2023</p>
        <p className="mb-4">Please read these terms and conditions carefully before using Our Service.</p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Interpretation and Definitions</h2>
        <h3 className="text-xl font-bold mt-4 mb-2">Interpretation</h3>
        <p className="mb-4">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
        {/* Add more placeholder content as needed */}
      </div>
    </PageWrapper>
  );
}
