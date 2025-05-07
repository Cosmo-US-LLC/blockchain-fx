import React from "react";
import HowToBuyHeroMobile from "./HowToBuyHeroMobile";
import StepOneWalletSetupSectionMobile from "./StepOneWalletSetupSectionMobile";
import StepThreeTransactionSectionMobile from "./StepThreeTransactionSectionMobile";
import StepFourViewCoinsSectionMobile from "./StepFourViewCoinsSectionMobile";
import StepFiveClaimSectionMobile from "./StepFiveClaimSectionMobile";
import StepSixLaunchSectionMobile from "./StepSixLaunchSectionMobile";
 

function HowToBuyMobile() {
  return (
    <>
      <HowToBuyHeroMobile />
      <StepOneWalletSetupSectionMobile/>
      <StepThreeTransactionSectionMobile/>
      <StepFourViewCoinsSectionMobile/>
      <StepFiveClaimSectionMobile/>
      <StepSixLaunchSectionMobile/>
    </>
  );
}

export default HowToBuyMobile;
