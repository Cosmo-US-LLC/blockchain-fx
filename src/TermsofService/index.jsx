import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TermsofService() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
    
    return (
    <div className='max-w-[1100px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[84%] w-[84%] space-y-[30px] mx-auto py-[50px]'>
        <div className='space-y-[10px]'>
            <h3 className='2xl:text-[30px] pb-[10px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] font-[700] leading-[130%]'>Terms Of Service</h3>
            <h5 className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'><span className='font-[600]'>Effective Date:</span> January 1, 2025</h5>
            <p className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>Welcome to BlockchainFX. These Terms of Service ("Terms") govern your use of the
BlockchainFX platform, including participation in the BFX Token Distribution Event and
any related services provided by BlockchainFX ("Company," "we," "us," or "our"). By
accessing or using our services, you agree to be bound by these Terms. If you do not agree,
you should discontinue use of our services.</p>
        </div>
        <div className=''>
          <ul className=' pl-5 space-y-[20px]'>
            <li className='2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]'>
            1. Eligibility <br />
                <ul className=' space-y-[5px]'>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    1.1.  You must be at least 18 years old to use the platform.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    1.2.  You must not be a citizen or resident of any jurisdiction where participation in
                    cryptocurrency transactions is prohibited.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    1.3.  You confirm that you are not classified as a Prohibited Participant under the
                    Company’s policies.</li>
                </ul>
            </li>
            <li className='2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]'>
            2. Use of Services <br />
                <ul className='space-y-[5px]'>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    2.1.  You may use the BlockchainFX platform solely for lawful purposes.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    2.2.  You agree not to use the platform for fraudulent, illegal, or abusive activities.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    2.3. You acknowledge that BlockchainFX does not provide investment, tax, or financial
                    advice.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    2.4. The Company reserves the right to suspend or terminate your access if you violate
                    these Terms.</li>
                </ul>
            </li>
            <li className='2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]'>
            3. Token Distribution Event <br />
                <ul className='space-y-[5px]'>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    3.1.  Participation in the BFX Token Distribution Event does not grant ownership,
                    dividends, or voting rights in the Company.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    3.2.   Tokens are utility-based and intended for use within the BlockchainFX platform.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    3.3.  Tokens are non-refundable, except as required by applicable laws.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    3.4.   The Company reserves the right to refuse or cancel participation in the Token
                    Distribution Event at its sole discretion.</li>
                </ul>
            </li>
            <li className='2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]'>
            4. Account Registration and Security <br />
                <ul className='space-y-[5px]'>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    4.1.   You may need to create an account to access certain services.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    4.2.  You agree to provide accurate and complete information during registration.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    4.3.  You are responsible for maintaining the confidentiality of your account credentials.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    4.4.  You must notify us immediately of any unauthorized access or security breaches.</li>
                </ul>
            </li>
            <li className='2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]'>
            5. Transactions and Payments <br />
                <ul className='space-y-[5px]'>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    5.1.  You acknowledge that cryptocurrency transactions are irreversible.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    5.2.   BlockchainFX is not responsible for transaction errors caused by incorrect wallet
                    addresses or third-party services.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    5.3.   You are solely responsible for any applicable taxes arising from cryptocurrency
                    transactions.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    5.4.   The Company reserves the right to impose limits or restrictions on transactions.</li>
                </ul>
            </li>
            <li className='2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]'>
            6. Risks and Disclaimers <br />
                <ul className=' space-y-[5px]'>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    6.1.   The value of BFX Tokens and other cryptocurrencies is highly volatile and may result
                    in significant financial loss.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    6.2.   BlockchainFX does not guarantee any return on investment, token performance, or
                    market value.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    6.3.  The platform and its services are provided "as is" without warranties of any kind.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    6.4.   The Company is not responsible for security breaches, hacks, or force majeure events
                    beyond its control.</li>
                </ul>
            </li>
             <li className='2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]'>
             7. Compliance and Legal Obligations <br />
                <ul className='space-y-[5px]'>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    7.1.  You agree to comply with all applicable laws, regulations, and tax requirements.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    7.2.  BlockchainFX may require identity verification to comply with Know Your Customer
                    (KYC) and Anti-Money Laundering (AML) regulations.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    7.3.  The platform and its services are provided "as is" without warranties of any kind.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    7.4.   The Company reserves the right to suspend or terminate accounts that violate
                    compliance requirements.</li>
                </ul>
            </li>
             <li className='2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]'>
             8. Termination <br />
                <ul className='space-y-[5px]'>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    8.1.  The Company may suspend or terminate your access to services at any time for
                    violating these Terms.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    8.2.  You may discontinue use of the platform at any time by closing your account.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    8.3.   Any outstanding obligations under these Terms shall survive termination.
                    </li>
                </ul>
            </li>
            <li className='2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]'>
            9. Limitation of Liability <br />
                <ul className='space-y-[5px]'>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    9.1.  BlockchainFX shall not be liable for any direct, indirect, incidental, or consequential
                    damages arising from your use of the platform.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    9.2.   The Company is not responsible for financial losses due to third-party services, hacks,
                    or market volatility.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    9.3.   Your sole remedy for dissatisfaction with the services is to discontinue use of the
                    platform.
                    </li>
                </ul>
            </li>
            <li className='2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]'>
            10. Amendments to Terms<br />
                <ul className='space-y-[5px]'>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    10.1.  BlockchainFX reserves the right to modify these Terms at any time.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    10.2.  Any updates will be posted on our website, and continued use of services constitutes
                    acceptance of the revised Terms.</li>
                </ul>
            </li>
            <li className='2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]'>
            11.  Governing Law and Dispute Resolution<br />
                <ul className='space-y-[5px]'>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    11.1.   These Terms are governed by applicable blockchain-related laws and regulations.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    11.2.  Any disputes shall be resolved through arbitration or the courts of competent
                    jurisdiction.</li>
                    <li className='text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]'>
                    11.3.   You agree to waive any class-action rights in disputes with BlockchainFX.</li>
                </ul>
            </li>
            <li className='2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]'>
            Contact Information<br />
            <div className='space-y-[5px]'>
                <p className='text-[16px] 2x4ptext-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] space-y-[15px]'>For any questions regarding these Terms, please contact us at:</p>
                <p className='text-[16px] 2x4ptext-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] space-y-[15px]'>
                Support@blockchainfx.com
                </p>
                <p className='text-[16px] 2x4ptext-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] space-y-[15px]'>By using BlockchainFX services, you acknowledge that you have read, understood, and
                agreed to these Terms.</p>
            </div>
                
            </li>
          </ul>
         
        </div>
      </div>
    );
  }
  
  export default TermsofService;
  