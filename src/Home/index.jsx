import React from 'react';
import Herosection from './Herosection';
import WalletSec from './WalletSec';
// import TradeOverSec from './TradeOverSec';
import OneAppSec from './OneAppSec';
import HowDoesItSec from './HowDoesItSec';
import ExclusiveBenefitsSec from './ExclusiveBenefitsSec';
import PremiumSec from './PremiumSec';
import LessThanSec from './LessThanSec';
import StandoutSec from './StandoutSec';
// import HyperGrowthSec from './HyperGrowthSec';
import GatewaySec from './GatewaySec';
// import WallStreetSec from './WallStreetSec';
// import TradeLikeSec from './TradeLikeSec';
// import TopAssetsSec from './TopAssetsSec';
// import SecurityBuiltSec from './SecurityBuiltSec';
// import StreamlinedSec from './StreamlinedSec';
// import WhatIsSec from './WhatIsSec';
import TokenAllocationSec from './TokenAllocationSec';
import TokenDetailsSec from './TokenDetailsSec';
import RoadmapSec from './RoadmapSec';
import OurAwardSec from './OurAwardSec';
import PressMediaSec from './PressMediaSec';
import TraderReviewsSec from './TraderReviewsSec';
import FaqSec from './FAQSec';
import TheUltimateSec from './TheUltimateSec';
import FeaturedSec from './FeaturedSec';
import Whitepaper from './Whitepaper';
import SwapSection from './SwapSection';
import Roadmap from './Roadmap';
import MultiAward from './MultiAward';



import ExpertSaysSec from './ExpertSaysSec';
import BlockchainFXDemo from './BlockchainFXDemo';
import CreditCard from './CreditCard';
import KYCVerified from './KYCVerified';
// import LivePresale from '../compunents/LivePresale';
import InsideSec from './InsideSec';
import CryptoExchangeSec from './CryptoExchangeSec';
import CommunitySec from './CommunitySec';
import BiggestBuy from './BiggestBuy';


function Home() {
    return (
      <div className="">
        <Herosection />
        <FeaturedSec />
        <InsideSec />
        <WalletSec />
        <KYCVerified />
        <ExpertSaysSec />
        <CryptoExchangeSec />
        <BlockchainFXDemo />
         <SwapSection />
        {/* <TradeOverSec/> */}
        <OneAppSec />
        <CommunitySec />
        <HowDoesItSec />
        <CreditCard />
        <ExclusiveBenefitsSec/>
        <PremiumSec />
        <BiggestBuy/>
        <LessThanSec />
        <GatewaySec />
        {/* <HyperGrowthSec />  */}
        <StandoutSec/> 

       
        {/* <WhatIsSec /> */}
        {/* <SecurityBuiltSec /> */}
        <Whitepaper/> 
         <TokenAllocationSec /> 
         <Roadmap/> 
         <MultiAward/> 
         <PressMediaSec /> 
         <TraderReviewsSec /> 
         <FaqSec />
        <TheUltimateSec />
        {/*<LivePresale /> */}
      </div>
    );
  }
  
  export default Home;
  