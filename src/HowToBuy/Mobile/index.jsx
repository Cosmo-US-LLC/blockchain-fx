import React, {useEffect} from "react";

import { setCanonical } from "../../utils/setCanonical";

import HowToBuyHeroMobile from "./HowToBuyHeroMobile";
import StepOneWalletSetupSectionMobile from "./StepOneWalletSetupSectionMobile";
import StepThreeTransactionSectionMobile from "./StepThreeTransactionSectionMobile";
import StepFourViewCoinsSectionMobile from "./StepFourViewCoinsSectionMobile";
import StepFiveClaimSectionMobile from "./StepFiveClaimSectionMobile";
import StepSixLaunchSectionMobile from "./StepSixLaunchSectionMobile";
import StepTwoPaymentCardMobile from "./paymentCardMobile"

function HowToBuyMobile() {

useEffect(() => {
    setCanonical("https://blockchainfx.com/how-to-buy");
  }, []);

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-[#000]">
      <HowToBuyHeroMobile />
      <StepOneWalletSetupSectionMobile />
      <StepTwoPaymentCardMobile />
      <StepThreeTransactionSectionMobile />
      <StepFourViewCoinsSectionMobile />
      <StepFiveClaimSectionMobile />
      <StepSixLaunchSectionMobile />
    </div>
  );
}

export default HowToBuyMobile;
