import React, {useEffect} from "react";
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
