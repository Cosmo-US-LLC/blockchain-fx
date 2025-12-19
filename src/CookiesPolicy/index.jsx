import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setCanonical } from "../utils/setCanonical";



function CookiesPolicy() {

 useEffect(() => {
    setCanonical("https://blockchainfx.com/cookies-policy");
  }, []);


  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);


  return (
    <div className="max-w-[1100px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[84%] w-[84%] space-y-[30px] mx-auto py-[50px]">
      <div className="space-y-[10px]">
        <h1 className="2xl:text-[30px] pb-[10px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] font-[700] leading-[130%]">
         Cookies Policy
        </h1>
        <h5 className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] !normal-case">
          Last updated: September 15, 2025
        </h5>
        <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
         This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
        </p>
        <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.</p>
         <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</p>
        
      </div>
<div className="space-y-[20px]">
  <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600]">Interpretation and Definitions</p>
   <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
</div>

      <div className="space-y-[20px]">
        <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600]">Definitions</p>
        <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">For the purposes of this Cookies Policy</p>
          <ul className="space-y-[20px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] space-y-[15px]">
          <span className="font-[500]">Company</span> (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to Aureum Echelon S.R.L., Calle 39, Los Yoses, San José, 10101, Costa Rica. <br />
            <ul className="list-decimal pl-8 space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
             <span className="font-[500]">Cookies</span> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              <span className="font-[500]">Website</span> refers to BlockchainFX, accessible from <a href={`${process.env.SITE_URL}/referral`} className="underline text-[#D99A26]">https://blockchainfx.com/</a>
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
               <span className="font-[500]">You</span> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.
              </li>
             
            </ul>
            <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600]">The use of the Cookies</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[500] italien">Type of Cookies We Use</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[500] "> Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</p>
               <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[500] "> We use both session and persistent Cookies for the purposes set out below:</p>
             
            
          </li>
          
         
          </ul>
      
      </div>
      <div>
          <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600]">Necessary / Essential Cookies</p>
          <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Type: Session Cookies</p>
          <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Administered by: Us</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
             <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] pt-2">Cookies Policy / Notice Acceptance Cookies</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Type: Persistent Cookies</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Administered by: Us</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
             <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] pt-2">Functionality Cookies</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Type: Persistent Cookies</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Administered by: Us</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
              <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] pt-2">Tracking and Performance Cookies</p>
              <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Type: Persistent Cookies</p>
              <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Administered by: Third-Parties</p>
              <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new advertisements, pages, features or new functionality of the Website to see how our users react to them.</p>
              <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] pt-2 ">Targeting and Advertising Cookies</p>
              <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Type: Persistent Cookies</p>
              <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Administered by: Third-Parties</p>
               <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">Purpose: These Cookies track your browsing habits to enable Us to show advertising which is more likely to be of interest to You. These Cookies use information about your browsing history to group You with other users who have similar interests. Based on that information, and with Our permission, third party advertisers can place Cookies to enable them to show adverts which We think will be relevant to your interests while You are on third party websites.</p>
      </div>
       <div>
          <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">Your Choices Regarding Cookies</p>
          <p className="text-[14px] pb-2 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.</p>
          <p className="text-[14px] pb-2 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</p>
             <p className="text-[14px] pb-2 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.</p>
            <div className="py-2 space-y-[5px] pl-6">
               <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">For the Chrome web browser, please visit this page from Google:</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">https://support.google.com/accounts/answer/32050</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">For the Internet Explorer web browser, please visit this page from Microsoft:</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">http://support.microsoft.com/kb/278835</p>
              <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">For the Firefox web browser, please visit this page from Mozilla:</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</p>
              <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">For the Safari web browser, please visit this page from Apple:</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</p>
            </div>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">For any other web browser, please visit your web browser's official web pages.</p>
             <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] pt-2">More Information about Cookie</p>
             <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">You can learn more about cookies: Cookies: What Do They Do?.</p>
             <p className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] pt-2">Contact Us</p>
              <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">If you have any questions about this Cookies Policy, You can contact us:</p>
              <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] ">By email: support@blockchainfx.com</p>
              
      </div>
    </div>
  );
}

export default CookiesPolicy;
