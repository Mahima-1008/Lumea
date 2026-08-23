import Hero from '../components/home/Hero.jsx';
import CategorySection from '../components/home/CategorySection.jsx';
import ProductCarousel from '../components/home/ProductCarousel.jsx';
import EditorialBanner from '../components/home/EditorialBanner.jsx';
import TrendingSection from '../components/home/TrendingSection.jsx';
import ConcernSection from '../components/home/ConcernSection.jsx';
import BrandSection from '../components/home/BrandSection.jsx';
import OfferBanner from '../components/home/OfferBanner.jsx';
import BeautyJournal from '../components/home/BeautyJournal.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import InstagramSection from '../components/home/InstagramSection.jsx';
import Newsletter from '../components/home/Newsletter.jsx';
import { products } from '../data/products.js';

export default function Home() {
  const newArrivals = products.filter((p) => p.isNew).concat(products.filter((p) => !p.isNew)).slice(0, 8);
  const bestsellers = products.filter((p) => p.isBestseller).concat(products.filter((p) => !p.isBestseller)).slice(0, 8);

  return (
    <>
      <Hero />
      <CategorySection />
      <ProductCarousel eyebrow="Just in" title="New arrivals" viewAll="/shop" products={newArrivals} />
      <EditorialBanner />
      <TrendingSection />
      <ProductCarousel eyebrow="Loved" title="Bestsellers" viewAll="/shop" products={bestsellers} />
      <ConcernSection />
      <BrandSection />
      <OfferBanner />
      <BeautyJournal />
      <Testimonials />
      <InstagramSection />
      <Newsletter />
    </>
  );
}
