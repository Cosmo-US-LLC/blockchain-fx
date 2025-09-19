import React, {useEffect} from "react";

import { setCanonical } from "../../utils/setCanonical";

import HowToBuyHero from "./HowToBuyHero";
import StepSixLaunchSection from "./StepSixLaunchSection";
import StepFiveClaimSection from "./StepFiveClaimSection";
import StepFourViewCoinsSection from "./StepFourViewCoinsSection";
import StepThreeTransactionSection from "./StepThreeTransactionSection";
import StepTwoPaymentCard from "./paymentCard";
import StepOneWalletSetupSection from "./StepOneWalletSetupSection";
import HowToBuyFooter from "../../compunents/HowToBuyFooter";

function  HowToBuyDesktop() {

 useEffect(() => {
    setCanonical("https://blockchainfx.com/how-to-buy");
  }, []);

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <HowToBuyHero />
      <StepOneWalletSetupSection/>
      <StepTwoPaymentCard/>
      <StepThreeTransactionSection/>
      <StepFourViewCoinsSection/>
      <StepFiveClaimSection />
      <StepSixLaunchSection />
      {/* <HowToBuyFooter/> */}
    </>
  );
}

export default HowToBuyDesktop;
