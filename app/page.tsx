import FeaturedProducts from "./components/landing-page/featured-product";
import HeroSection from "./components/landing-page/hero";
import RecentlyLaunchedProducts from "./components/landing-page/recently-launched-product";



export default function Home() {
  return (
    <>
    <HeroSection />
    <FeaturedProducts />
    <RecentlyLaunchedProducts />
    </>
  );
}

