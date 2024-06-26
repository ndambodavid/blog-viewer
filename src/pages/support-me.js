import { useRouter } from 'next/router';
import { Analytics, SEO } from '@/common/utils';
import { BreadcrumbSchemaMarkup } from '@/common/utils/schemaMarkup';
import siteConfig from '../../config/site.config';
import Navbar from '@/common/components/navbar/Navbar';
import SupportMePage from '@/components/supportMe/SupportMePage';
import { Newsletter } from '@/common/components/misc';
import Footer from '@/common/components/footer/Footer';

const SupportMe = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <SEO
        title={siteConfig.seo.pages.supportMe.title}
        description={siteConfig.seo.pages.supportMe.description}
        image={siteConfig.seo.pages.supportMe.image}
        altText={siteConfig.seo.pages.supportMe.title}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
      />
      <BreadcrumbSchemaMarkup
        items={[
          {
            position: 1,
            name: 'Home',
            item: process.env.NEXT_PUBLIC_SITE_URL
          },
          {
            position: 2,
            name: 'Support Me',
            item: `${process.env.NEXT_PUBLIC_SITE_URL}/support-me`
          }
        ]}
      />
      <Analytics />

      <Navbar />

      <main>
        <SupportMePage />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export default SupportMe;
