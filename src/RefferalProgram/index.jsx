import React, {useEffect} from 'react';

import { setCanonical } from "../utils/setCanonical";

import HerosectionReferral from './Herosectionreferral';
import TopBFXReferral from './topbfxReferral';
import EarnWithReferral from './referralEarn';
import LivePresale from '../compunents/LivePresale';



function RefferalProgram() {

 useEffect(() => {
    setCanonical("https://blockchainfx.com/refferal");
  }, []);


useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <div className="">
        {/* <LivePresale /> */}
        <HerosectionReferral />
        <TopBFXReferral />
        <EarnWithReferral />
        
      </div>
    );
  }
  
  export default RefferalProgram;
  