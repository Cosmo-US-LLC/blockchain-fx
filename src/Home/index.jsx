import React, { useEffect, lazy, Suspense } from 'react';

// Components that should load immediately (above the fold)
import Herosection from './Herosection';
import FeaturedSec from './FeaturedSec';
// import WalletSec from './WalletSec';
// import LaunchPopup from '../compunents/LaunchPopup';

// Lazy loaded components
const KYCVerified = lazy(() => import('./KYCVerified'));
// const ExpertSaysSec = lazy(() => import('./ExpertSaysSec'));
const CryptoExchangeSec = lazy(() => import('./CryptoExchangeSec'));
const BlockchainFXDemo = lazy(() => import('./BlockchainFXDemo'));
// const OneAppSec = lazy(() => import('./OneAppSec'));
// const HowDoesItSec = lazy(() => import('./HowDoesItSec'));
// const CreditCard = lazy(() => import('./CreditCard'));
// const ExclusiveBenefitsSec = lazy(() => import('./ExclusiveBenefitsSec'));
// const PremiumSec = lazy(() => import('./PremiumSec'));
// const BiggestBuy = lazy(() => import('./BiggestBuy'));
const LessThanSec = lazy(() => import('./LessThanSec'));
// const GatewaySec = lazy(() => import('./GatewaySec'));
// const StandoutSec = lazy(() => import('./StandoutSec'));
const Whitepaper = lazy(() => import('./Whitepaper'));
// const TokenAllocationSec = lazy(() => import('./TokenAllocationSec'));
// const Roadmap = lazy(() => import('./Roadmap'));
const MultiAward = lazy(() => import('./MultiAward'));
const PressMediaSec = lazy(() => import('./PressMediaSec'));
const TraderReviewsSec = lazy(() => import('./TraderReviewsSec'));
// const FaqSec = lazy(() => import('./FAQSec'));
const TheUltimateSec = lazy(() => import('./TheUltimateSec'));
const CookiePolicyPopup = lazy(() => import('../compunents/CookiePolicyPopup'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="bg-[#020B10] w-[100%]">
    <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-100 "></div>
  </div>
  </div>
);

function Home() {
 
  return (
    <div className="">
      {/* LaunchPopup banner removed from the site per request; keep the import/markup for easy restoration
      <Suspense fallback={null}>
        <LaunchPopup />
      </Suspense>
      */}
      <Herosection />
      <FeaturedSec />

      <Suspense fallback={<LoadingFallback />}>
      {/* BFX Presale section hidden from the site per request; keep the markup for easy restoration
      <WalletSec />
      */}
        <KYCVerified />
        {/* "What Experts Say About BFX" section hidden from the site per request; keep the markup for easy restoration
        <ExpertSaysSec />
        */}
        <CryptoExchangeSec />
        <BlockchainFXDemo />
        {/* Daily Staking Rewards, How It Works, Visa Card, Benefits, Bonuses, Buy-In Competition,
        Token Details and Roadmap sections hidden from the site per request; keep the markup for easy restoration
        <OneAppSec />
        <HowDoesItSec />
        <CreditCard />
        <ExclusiveBenefitsSec />
        <PremiumSec />
        <BiggestBuy />
        */}
        <LessThanSec />
        {/* "The First Crypto Exchange That Pays Its Holders" comparison section hidden from the site per request; keep the markup for easy restoration
        <GatewaySec />
        */}
        {/* "Standout Features" comparison table hidden from the site per request; keep the markup for easy restoration
        <StandoutSec />
        */}
        <Whitepaper />
        {/*
        <TokenAllocationSec />
        <Roadmap />
        */}
        <MultiAward />
        <PressMediaSec />
        <TraderReviewsSec />
        {/* FAQs section hidden from the site per request; keep the markup for easy restoration
        <FaqSec />
        */}
        <TheUltimateSec />
        <CookiePolicyPopup />
      </Suspense>
    </div>
  );
}

export default Home;
