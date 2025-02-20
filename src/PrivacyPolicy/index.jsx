import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PrivacyPolicy() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="max-w-[1100px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[84%] w-[84%] space-y-[30px] mx-auto py-[50px]">
      <div className="space-y-[10px]">
        <h3 className="2xl:text-[30px] pb-[25px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] font-[700] leading-[130%]">
          Privacy Policy
        </h3>
        <h5 className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
          <span className="font-[600]">Effective Date:</span> January 1, 2025
        </h5>
        <h3 className="2xl:text-[20px] pb-[10px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[18px] font-[700] leading-[130%]">
          1. Introduction
        </h3>
        <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
          This Privacy Policy explains how BlockchainFX
          ("Company," "we," "us," or "our") collects, uses, discloses, and
          protects personal information of users ("you" or "Participants") when
          interacting with our website, platform, and Token Distribution Event.
        </p>
        <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
          By accessing or using our services, you consent to the terms outlined
          in this Privacy Policy. If you do not agree with this policy, please
          discontinue use of our services.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          2. Information We Collect
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
          We may collect the following types of personal information:
        </p>
        <ul className="list-disc pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            <span className="font-[600]">Identity Information:</span>
            Name, email address, social media usernames, phone number, and
            wallet address.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            <span className="font-[600]">Transaction Information:</span>
            Name, email address, social media usernames, phone number, and
            wallet address.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            <span className="font-[600]">Technical Information:</span>
            IP address, browser type, device identifiers, operating system, and
            site usage data.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
            <span className="font-[600]">Compliance Information:</span>
            Documentation required to comply with legal and regulatory
            requirements, including Know Your Customer (KYC) and Anti- Money
            Laundering (AML) obligations.
          </li>
        </ul>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">We do not collect unnecessary personal information beyond what is required to provide our
        services and meet regulatory obligations.</p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          3. How We Use Your Information
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        We use collected information for the following purposes:
        </p>
        <ul className="list-disc pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">To facilitate the Token Distribution Event and related transactions.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">To verify user identity and comply with legal requirements.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">To improve and enhance our platform and services.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">To provide customer support and respond to inquiries.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">To detect, prevent, and address fraud, security breaches, or other illegal
          activities.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">To comply with regulatory obligations, including AML and KYC requirements.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">To send administrative communications, including policy updates and service
          changes.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          4. How We Share Your Information
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        We do not sell or rent your personal information. However, we may share information in the
following cases:
        </p>
        <ul className="list-disc pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> <span className="font-[600]">Legal Compliance:</span> To facilitate the Token Distribution Event and related transactions.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> <span className="font-[600]">Service Providers:</span> With trusted third-party partners who assist in providing
          services such as security, KYC verification, and transaction processing.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> <span className="font-[600]">Business Transactions:</span> In connection with mergers, acquisitions, financing, or
          the sale of assets where personal data may be transferred as part of the business.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> <span className="font-[600]">Fraud Prevention:</span> To investigate, prevent, or take action regarding potential
          fraud, security threats, or legal violations.
          </li>
        </ul>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        5. Data Retention
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        We retain personal data only as long as necessary to fulfill the purposes outlined in this
policy, comply with legal obligations, resolve disputes, and enforce our agreements. If you
close your account, we may retain certain information as required by law.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        6. Security Measures
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        We implement industry-standard security measures to protect your personal information from
unauthorized access, alteration, disclosure, or destruction. These include:
        </p>
        <ul className="list-disc pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> Encryption of sensitive data.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Secure storage of transaction and compliance information.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> Regular security audits and risk assessments.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> Restricted access to personal data is limited to authorized personnel only.
          </li>
        </ul>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Despite our efforts, no data transmission or storage method is completely secure. Users
        should exercise caution when sharing personal information online.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
          7. Your Rights and Choices
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
        Depending on your jurisdiction, you may have the following rights:
        </p>
        <ul className="list-disc pl-5 space-y-[15px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> <span className="font-[600]">Access and Correction:</span> Request access to your personal data and request
          necessary corrections.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> <span className="font-[600]">Erasure:</span> Request deletion of your personal information under certain
          circumstances.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> <span className="font-[600]">Restriction of Processing:</span> Limit how your data is used in certain cases.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> <span className="font-[600]">Data Portability:</span>  Obtain a copy of your personal data in a structured format.
          </li>
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] "> <span className="font-[600]">Objection to Processing:</span>  Object to processing based on legitimate interests or
          direct marketing.
          </li>
        </ul>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">To exercise these rights, contact us at [Insert Contact Email]. We may require identity
        verification before processing your request.
</p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        8. Cookies and Tracking Technologies
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">We use cookies and similar tracking technologies to enhance user experience, analyze traffic,
and personalize content. You can manage cookie preferences through your browser settings.

        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        9. International Data Transfers
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Your information may be transferred and stored in jurisdictions with different data protection
laws. By using our services, you consent to such transfers, provided adequate safeguards are
in place to protect your data.

        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        10. Compliance with Local Regulations
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">BlockchainFX operates in compliance with applicable data protection laws. Our services are
not intended for use in jurisdictions where they violate local regulations. Users are
responsible for ensuring their participation complies with relevant laws.

        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        11. Third-Party Links
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">Our platform may contain links to third-party websites. We are not responsible for the
privacy practices or content of external sites. Please review their privacy policies before
interacting with them.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        12. Changes to this Privacy Policy
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">We may update this Privacy Policy periodically to reflect changes in laws, regulations, or our
business practices. Any updates will be posted on our website, and continued use of our
services constitutes acceptance of the revised policy.
        </p>
      </div>
      <div className="space-y-[15px]">
        <h4 className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] ">
        13. Contact Information
        </h4>
        <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] ">
For questions or concerns about this Privacy Policy, you may contact us at: <br />
Support@BlockchainFX.com <br /><br />
By using BlockchainFX services, you acknowledge that you have read, understood, and
agreed to this Privacy Policy.

        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
