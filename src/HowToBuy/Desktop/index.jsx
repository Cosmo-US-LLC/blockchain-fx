import React from "react";
import HowToBuyHero from "./HowToBuyHero";
import StepSixLaunchSection from "./StepSixLaunchSection";
import StepFiveClaimSection from "./StepFiveClaimSection";
import StepFourViewCoinsSection from "./StepFourViewCoinsSection";
import StepThreeTransactionSection from "./StepThreeTransactionSection";
import StepTwoPaymentCard from "./paymentCard";
import StepOneWalletSetupSection from "./StepOneWalletSetupSection";

function  HowToBuyDesktop() {
  return (
    <>
      <HowToBuyHero />
      <StepOneWalletSetupSection/>
      <StepTwoPaymentCard/>
      <StepThreeTransactionSection/>
      <StepFourViewCoinsSection/>
      <StepFiveClaimSection />
      <StepSixLaunchSection />
    </>
  );
}

export default HowToBuyDesktop;
