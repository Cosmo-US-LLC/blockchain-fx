import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CookieManagement() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="max-w-[1100px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[84%] w-[84%] space-y-[30px] mx-auto py-[50px]">
      <div className="space-y-[10px]">
        <h3 className="2xl:text-[30px] pb-[10px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] font-[700] leading-[130%]">
          Blockchainfx Cookie Management Policy
        </h3>
        <h5 className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
          <span className="font-[600]">Effective Date:</span> January 1, 2025
        </h5>
        <h3 className="2xl:text-[20px] pb-[10px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] font-[700] leading-[130%]">
          1. Introduction
        </h3>
        <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
          BlockchainFX ("Company," "we," "us," or "our") uses cookies and
          similar tracking technologies on its website and platform. This Cookie
          Management Policy explains how and why we use cookies and your rights
          to control their usage.
        </p>
        <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
          By using our website and services, you consent to the use of cookies
          as described in this policy. If you do not agree, you may adjust your
          browser settings to disable cookies; however, this may affect the
          functionality of our website.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        2. What Are Cookies?
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        Cookies are small text files stored on your device (computer, tablet, or mobile) when you
visit a website. They help websites recognize your device and remember information about
your visit to enhance user experience.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        3. Types of Cookies We Use
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        We use the following types of cookies:
        </p>
        <ul className=" space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          3.1. <span className="font-[600]">Essential Cookies:</span>
            These are necessary for the website to function properly and
            cannot be disabled. They include security and authentication cookies.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          3.2. <span className="font-[600]">TPerformance Cookies:</span>
            These help us analyze website traffic and improve
performance.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          3.3. <span className="font-[600]">Functional Cookies:</span>
            These enhance user experience by remembering preferences
            and settings.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          3.4.  <span className="font-[600]">Marketing Cookies:</span>
            These are used to personalize ads and track user interactions for
targeted advertising.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        4. How We Use Cookies
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        We use cookies to:
        </p>
        <ul className="list-disc pl-8  space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Ensure website security and functionality.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Improve user experience by remembering preferences.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Analyze site traffic and enhance performance.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Provide personalized content and targeted advertisements.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Comply with regulatory and security measures.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        5. Third-Party Cookies
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        We may allow third-party service providers to place cookies on our website for analytics,
advertising, and security purposes. These third parties are responsible for their own cookie
policies. We recommend reviewing their privacy policies for more information.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        6. Managing Cookies
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        You can control or delete cookies through your browser settings. Here’s how:
        </p>
        <ul className="list-disc pl-8 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            <span className="font-[600]">Google Chrome:</span> {'Settings > Privacy and Security > Cookies and Other Site Data.'}
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            <span className="font-[600]">Mozilla Firefox:</span> {'Preferences > Privacy & Security > Cookies and Site Data.'}
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            <span className="font-[600]">Safari:</span> {"Preferences > Privacy > Cookies and Website Data."}
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            <span className="font-[600]">Microsoft Edge:</span> {"Settings > Privacy, Search, and Services > Cookies and Site Permissions."}
          </li>
        </ul>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        Disabling cookies may affect the functionality of the website and services.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        7. Updates to This Policy
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        We may update this Cookie Management Policy periodically. Any changes will be posted on
our website, and continued use of our services constitutes acceptance of the updated policy.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        8. Contact Information
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        For any questions regarding this policy, contact us at:
        </p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Support@blockchainfx.com</p>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">By using BlockchainFX services, you acknowledge that you have read, understood, and
agreed to this Cookie Management Policy.
</p>
      </div>
    </div>
  );
}

export default CookieManagement;
