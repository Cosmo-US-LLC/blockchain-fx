import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TokenSale() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);


  return (
    <div className="max-w-[1100px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[84%] w-[84%] space-y-[30px] mx-auto py-[50px]">
      <div className="space-y-[10px]">
        <h3 className="2xl:text-[30px] pb-[10px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] font-[700] leading-[130%]">
         Token Sale Agreement
        </h3>
        <h5 className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400] !normal-case">
          This Document Is Not A Solicitation For Investment And Does Not
          Constitute An Offer Of Digital Currency, Commodity, Security, Or Any
          Other Form Of Investment. It Does Not Require Registration Or Approval
          From Any Regulatory Authority.
        </h5>
        <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
          This Agreement governs the terms and conditions of the decentralized
          BFX Token Distribution Event, outlining the rights and obligations of
          the Company and Participants. BFX Tokens are not securities and do not
          carry rights typically associated with securities. This Agreement, its
          Annexes, and other related documents do not constitute a public
          securities offering.
        </p>
        <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">The regulatory status of cryptocurrencies varies by jurisdiction. The value of BFX Tokens
and other digital assets is subject to significant market volatility, which may result in gains or
losses. Any profits realized from transactions involving BFX Tokens may be subject to
capital gains or other applicable taxes, depending on the Participant’s jurisdiction.</p>
         <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">Nothing in this Agreement, the Website, or any associated documents shall be construed as
an offer, solicitation, recommendation, or financial advice to buy, sell, or engage in
transactions involving BFX Tokens or any other digital asset. Participants are solely
responsible for assessing whether such transactions align with their financial circumstances,
investment objectives, and risk tolerance. The Company strongly recommends consulting
independent and qualified legal, tax, or financial professionals before participating in the
Token Distribution Event.</p>
         <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">The trading and holding of cryptocurrencies involve significant risks, including the potential
for partial or total loss of funds. Participants should conduct thorough research before
engaging in any transactions. BlockchainFX does not make any representations or warranties
regarding the performance, future value, or return of capital related to BFX Tokens. The
Company disclaims liability for any financial losses incurred due to the use of this platform
or participation in the Token Distribution Event.</p>
         <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">By using this platform, Participants agree to be bound by this Agreement, the Terms of
Service, the Privacy Policy, the Cookie Policy, and any other applicable policies governing
the use of BFX Tokens. The content provided herein is not intended for use in jurisdictions
where its distribution or utilization would contravene applicable laws or regulatory
requirements.</p>
      </div>
      <div className="space-y-[20px]">
          <ul className="space-y-[20px]">
          <li className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[14px] font-[400] space-y-[15px]">
          If you purchase BFX Tokens, you must not interpret them as: <br />
            <ul className="list-decimal pl-8 space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              Currencies;
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              Bonds or stocks;
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              Securities or derivatives, including collective investment schemes;
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              Rights under contracts guaranteeing returns or avoiding losses;
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              Rights, options, or derivatives related to bonds and stocks.
              </li>
            </ul>
            <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">THIS TOKEN SALE AGREEMENT (the “Agreement” and/or “Token Distribution Event”)
is entered into by Digital Smart Marketing Ltd, operating through Blockchainfx.com (the
“Company”), and any person (natural or juridical) participating in this decentralized, reward-
based Token Distribution Event (the “Participant”). Collectively, they are referred to as the
“Parties.”</p>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          PREAMBLE <br />
            <ul className="space-y-[8px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              WHEREAS, the Company will facilitate contributions through a decentralized Token
Distribution Event in exchange for Tokens, up to the Maximum Token Amount, during the
Token Distribution Event Period.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              WHEREAS, funds raised will support the development of a Replatform (the “Platform”) that
              facilitates payments and other services.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              WHEREAS, the terms of the Token Distribution Event, Token details, and the Project are
              outlined on the Website and in the Whitepaper.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              WHEREAS, the Company has exercised due diligence to ensure the accuracy of the
              information in this Agreement and on the Website.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              WHEREAS, the decentralized nature of the Distribution Event applies only to Participants
              who confirm they are not Prohibited Participants.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              WHEREAS, the Company will accept only the designated Coins or Tokens unless it decides
              otherwise at its discretion.
              </li>
               <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
               WHEREAS, the Company and the Participant acknowledge that Tokens are solely utility-
based, linked to Platform usage, and do not represent shares, securities, ownership rights, or
profit expectations.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              NOW, THEREFORE, in consideration of the mutual agreements herein contained, the Parties
agree as follows:
              </li>
            </ul>
          </li>
          </ul>
        <ul className="space-y-[20px] pl-5">
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          1. Definitions and Interpretation<br />
            <ul className="pl-0 space-y-[10px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]"> 
              1.1.  <span className="font-[600]">BFX Token:</span> The token created and issued by Digital Smart Marketing Ltd
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              1.2. <span className="font-[600]">Platform:</span> TA Crypto-native platform owned and operated by the Company.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              1.3.  <span className="font-[600]">Dissolution Event:</span> An event requiring Company dissolution or liquidation.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              1.4. <span className="font-[600]">Exchange Rate:</span> The conversion rate applied to contributions, determined using multiple
              independent sources.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              1.5.  <span className="font-[600]">Maximum Token Amount:</span> The total number of Tokens available during the Distribution
              Event, not exceeding 2,275,000,000 BFX.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              1.6.  <span className="font-[600]">Minimum Contribution:</span> There is no minimum contribution requirement, though the
              Company may introduce one at a later stage.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              1.7.  <span className="font-[600]">Participant:</span> Any natural or juridical person participating in the Token Distribution Event.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              1.8.  <span className="font-[600]">Participation Amount:</span> The amount contributed in USDT, ETH, BNB or other accepted
              currency.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              1.9. <span className="font-[600]">Price:</span> The Token Distribution Event price ranges between 0.002 and 0.01 USD per BFX,
depending on the stage of the event. The final launch price of BFX is set at 0.01 USD per
token.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              1.10. <span className="font-[600]">Prohibited Participant:</span>  A person or entity from a jurisdiction where participation or the use
              of Tokens is prohibited.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              1.11.  <span className="font-[600]">Project:</span> The initiative driving the Token Distribution Event to develop and expand the
              Platform.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              1.12. <span className="font-[600]">Token Distribution Event:</span> A decentralized, reward-based marketing and fundraising
              campaign designed to further the development of the Project and enhance brand awareness.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              1.13.  <span className="font-[600]">Total Token Supply:</span> 3,500,000,000 BFX Tokens, with 1,750,000,000, including up to
              525,000,000 additional bonus tokens, available for sale in the Community Event.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              1.14.  <span className="font-[600]">Wallet:</span> A digital Ethereum-based decentralized wallet required for holding and transacting
              BFX Tokens.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
         2. Participation Terms <br />
            <ul className="space-y-[5px]">
            <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              Participation in the Token Distribution Event does not grant ownership, dividends, or
              voting rights in the Company.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              Tokens are non-refundable and have no intrinsic value outside the Platform.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              The Company retains full discretion over Platform development and token
              distribution.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              Tokens are solely for use within the Platform and should not be considered as
              financial instruments.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              The Company reserves the right to introduce new policies or adjustments to Token
functionality based on market and regulatory requirements.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] leading-[130%] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          3. Token Distribution and Transfer <br />
         <div>
             <span className="text-[14px] font-[400] !leading-[110%]">
          All Tokens allocated from the Company are final, and there are no refunds or cancellations
except as may be required by applicable law, decree, regulation, treaty, or administrative act
and/or as set forth in Clause 4 of this Agreement. The Company reserves the right to refuse or
cancel the acquisition of Tokens at any time at its sole discretion.
          </span>
         </div>
            <ul className="pl-0 space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              3.1. Tokens will be distributed only after completion of the Token Distribution Event.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              3.2. Participants must provide a valid Ethereum-compatible wallet address.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              3.3. The Company is not responsible for lost or misdirected Tokens due to incorrect wallet
addresses.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              3.4. Tokens will not be transferable until the official Token Distribution Event concludes.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          4. Dissolution Event <br />
            <ul className="space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              4.1. In the event of company dissolution, Participants may receive refunds subject to the
              Company’s discretion and obligations.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              4.2. Any refunds will be proportionate to available assets and subject to legal regulations.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          5. Termination<br />
            <ul className="space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              5.1. This Agreement terminates when Tokens are distributed or if the Company refunds
              the Participant.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              5.2. The Company reserves the right to terminate the Agreement in case of legal or
              regulatory complications.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          6. Company Representations and Warranties <br />
            <ul className="space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              6.1. The Company is a legally registered entity.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              6.2. The Company has full authority to execute this Agreement.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              6.3. The Agreement does not violate any applicable laws or regulations.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          7. Participant Representations and Warranties <br />
            <ul className="space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              7.1. The Participant confirms they are not a Prohibited Participant.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              7.2. The Participant understands Tokens are not investments.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              7.3. The Participant has the necessary experience to evaluate risks associated with
              blockchain-based assets.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          8. Taxes and Indemnity
            <br />
            <ul className="space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              8.1. The Participant is responsible for any taxes associated with Token acquisition.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              8.2.  The Company is not liable for any tax obligations incurred by the Participant.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          9. Limitation of Liability
            <br />
            <ul className="space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              9.1.  The Company is not liable for any loss of Tokens due to technical issues or
              Participant errors.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              9.2.  The Platform is provided "as is" without warranties of any kind.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          10. Privacy Policy
            <br />
            <ul className="space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              10.1. The Company will not collect unnecessary personal information.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              10.2.  The Company may request additional documentation to comply with legal
              obligations.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          11. Security Risks
            <br />
            <ul className="space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              11.1.  Participants acknowledge risks associated with blockchain technology, including
              potential hacks and technical failures.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              11.2. The Company is not responsible for security vulnerabilities inherent to blockchain
              technology.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          12. Miscellaneous
            <br />
            <ul className="space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              12.1.  The Company reserves the right to amend this Agreement.
              </li>
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              12.2. Notices shall be sent via email or published on the official website.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          13. Amendments
            <br />
            <ul className="space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              13.1. Any amendments must be documented and agreed upon by both Parties.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          14. Validity
            <br />
            <ul className=" space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              14.1. If any provision of this Agreement is deemed invalid, the remaining provisions will
              remain in force.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          15. Applicable Law and Jurisdiction
            <br />
            <ul className="space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              15.1. This Agreement is governed by applicable blockchain-related laws and regulations.
              </li>
            </ul>
          </li>
          <li className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] font-[600] space-y-[15px]">
          16. Entire Agreement
            <br />
            <ul className="space-y-[5px]">
              <li className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">
              16.1.  This Agreement constitutes the entire understanding between the Parties and
              supersedes all prior agreements.
              </li>
            </ul>
            <p className="text-[14px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px]  font-[400]">IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective
            Date.</p>
          </li>
      
        </ul>
      </div>
    </div>
  );
}

export default TokenSale;
