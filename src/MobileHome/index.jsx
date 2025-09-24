import React, { useEffect, lazy, Suspense } from "react";
import { setCanonical } from "../utils/setCanonical";

import MobileHero from "./MobileHero";

const MobileWalletSec = lazy(() => import("./MobileWalletSec"));
const KYCVerifiedMob = lazy(() => import("./KYCVerifiedMob"));
const YoutubeSec = lazy(() => import("./YoutubeSec"));
const CryptoExchangemobSec = lazy(() => import("./CryptoExchangemobSec"));
const DemoSec = lazy(() => import("./DemoSec"));
const SwapSectionMob = lazy(() => import("./SwapSectionMob"));
const MobileOneAppSec = lazy(() => import("./MobileOneAppSec"));
const MobHowDoesItSec = lazy(() => import("./MobHowDoesItSec"));
const CreditCardMob = lazy(() => import("./CreditCardMob"));
const MobExclusiveSec = lazy(() => import("./MobExclusiveSec"));
const MobilePremiumSec = lazy(() => import("./MobilePremiumSec"));
const BiggestbuyMobSec = lazy(() => import("./BiggestbuyMobSec"));
const MobileLessThanSec = lazy(() => import("./MobileLessThanSec"));
const MobileGatewaySec = lazy(() => import("./MobileGatewaySec"));
const MobStandoutSec = lazy(() => import("./MobStandoutSec"));
const WhitepaperMob = lazy(() => import("./WhitepaperMob"));
const MobTokenDetailsSec = lazy(() => import("./MobTokenDetailsSec"));
const MobRoadmapSec = lazy(() => import("./MobRoadmapSec"));
const MobOurAwardSec = lazy(() => import("./MobOurAwardSec"));
const MobPressMediaSec = lazy(() => import("./MobPressMediaSec"));
const MobTraderReviewsSec = lazy(() => import("./MobTraderReviewsSec"));
const MobFaqSec = lazy(() => import("./MobFaqSec"));
const MobTheUltimateSec = lazy(() => import("./MobTheUltimateSec"));
const LivePresale = lazy(() => import("../compunents/LivePresale"));

// Loading fallback
const LoadingFallback = () => (
  <div className="bg-[#020B10] w-full">
    <div className="w-full h-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-100"></div>
    </div>
  </div>
);

function MobileHome() {

  return (
    <div className="bg-[#020B10] w-full">
      <MobileHero />

      <Suspense fallback={<LoadingFallback />}>
        <MobileWalletSec />
        <KYCVerifiedMob />
        <YoutubeSec />
        <CryptoExchangemobSec />
        <DemoSec />
        <SwapSectionMob />
        <MobileOneAppSec />
        <MobHowDoesItSec />
        <CreditCardMob />
        <MobExclusiveSec />
        <MobilePremiumSec />
        <BiggestbuyMobSec />
        <MobileLessThanSec />
        <MobileGatewaySec />
        <MobStandoutSec />
        <WhitepaperMob />
        <MobTokenDetailsSec />
        <MobRoadmapSec />
        <MobOurAwardSec />
        <MobPressMediaSec />
        <MobTraderReviewsSec />
        <MobFaqSec />
        <MobTheUltimateSec />
        <LivePresale />
      </Suspense>
    </div>
  );
}

export default MobileHome;
