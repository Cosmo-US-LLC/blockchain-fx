import { useStore } from "@nanostores/react";
import { map } from "nanostores";

export const defaultModalStore = {
  connectWalletModalOpen: false,
};

export const $modalState = map({ ...defaultModalStore });
export const useModalState = () => useStore($modalState);

export const showConnectWalletModal = () => {
  $modalState.setKey("connectWalletModalOpen", true);
};

export const hideConnectWalletModal = () => {
  $modalState.setKey("connectWalletModalOpen", false);
};
