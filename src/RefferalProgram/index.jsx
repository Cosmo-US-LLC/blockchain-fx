import React, {useEffect} from 'react';


import HerosectionReferral from './Herosectionreferral';
import TopBFXReferral from './topbfxReferral';
import EarnWithReferral from './referralEarn';



function RefferalProgram() {


useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <div className="">
        <HerosectionReferral />
        <TopBFXReferral />
        <EarnWithReferral />
        
      </div>
    );
  }
  
  export default RefferalProgram;
