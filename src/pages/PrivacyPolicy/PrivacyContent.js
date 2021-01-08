import React from "react";
import {
  data1,
  data2,
  data3,
  whatInfoExtra,
  howDoWeUseInfo,
  doWeShareInfo,
  canIUpdateCreate,
  governingLaw,
  advertising,
  thirdPartyServices,
  trackingTechnologies,
  personalData,
} from "./data";

const PrivacyContent = () => {
  return (
    <>
      <section className="privacy-banner">
        <div className="container">
          <div className="main-heading spark-head text-center">
            <h1 className="mb-0">Privacy Policy</h1>
          </div>
        </div>
      </section>

      <section className="faq-priacy">
        <div className="container">
          <div className="privacy-content">
            {data1.map((data) => (
              <div key={data.id}>
                <p> {data.content} </p>
              </div>
            ))}
            {/* Definitions and key terms */}
            <div>
              <h5 className="mb-0">Definitions and key terms</h5>
              <p>
                To help explain things as clearly as possible in this Privacy
                Policy, every time any of these terms are referenced, are
                strictly defined as:
              </p>

              <ul className="navbar-nav">
                {data2.map(({ content, id }) => (
                  <li className="nav-item" key={id}>
                    <p className="mb-1">
                      <span className="font-weight-bolder">&bull; </span>
                      {content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* What Information Do We Collect? */}
            <div className="mt-5">
              <h5 className="mb-0">What Information Do We Collect?</h5>
              <p className="mb-2">
                We collect information from you when you visit our website/app,
                register on our site, place an order, subscribe to our
                newsletter, respond to a survey or fill out a form.
              </p>

              <ul className="navbar-nav">
                {data3.map(({ content, id }) => (
                  <li className="nav-item" key={id}>
                    <p className="mb-1">
                      <span className="font-weight-bolder">&bull; </span>{" "}
                      {content}
                    </p>
                  </li>
                ))}

                <div className="mt-3">
                  <p className="mb-2">
                    We also collect information from mobile devices for a better
                    user experience, although these features are completely
                    optional:
                  </p>

                  {whatInfoExtra.map(({ content, id }) => (
                    <li className="nav-item" key={id}>
                      <p className="mb-1">
                        <span className="font-weight-bolder">&bull;</span>{" "}
                        {content}
                      </p>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
            {/* How Do We Use The Information We Collect? */}
            <div className="mt-5">
              <h5 className="mb-0">
                How Do We Use The Information We Collect?
              </h5>
              <p className="mb-2">
                Any of the information we collect from you may be used in one of
                the following ways:
              </p>

              <ul className="navbar-nav">
                {howDoWeUseInfo.map(({ content, id }) => (
                  <li className="nav-item" key={id}>
                    <p className="mb-1">
                      <span className="font-weight-bolder">&bull; </span>{" "}
                      {content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* When does LMiTS use end user information from third parties? */}
            <div className="mt-5">
              <h5 className="mb-1">
                When does LMiTS use end user information from third parties?
              </h5>
              <p className="mb-2">
                <span className="font-weight-bolder">&bull;</span> LMiTS will
                collect End User Data necessary to provide the LMiTS services to
                our customers.
              </p>

              <p className="mb-2">
                <span className="font-weight-bolder">&bull;</span> End users may
                voluntarily provide us with information they have made available
                on social media websites. If you provide us with any such
                information, we may collect publicly available information from
                the social media websites you have indicated. You can control
                how much of your information social media websites make public
                by visiting these websites and changing your privacy settings.
              </p>
            </div>
            {/* When does LMiTS use customer information from third parties? */}
            <div className="mt-5">
              <h5 className="mb-0">
                When does LMiTS use customer information from third parties?
              </h5>
              <p className="mb-2">
                <span className="font-weight-bolder">&bull;</span> We receive
                some information from the third parties when you contact us. For
                example, when you submit your email address to us to show
                interest in becoming a LMiTS customer, we receive information
                from a third party that provides automated fraud detection
                services to LMiTS. We also occasionally collect information that
                is made publicly available on social media websites. You can
                control how much of your information social media websites make
                public by visiting these websites and changing your privacy
                settings.
              </p>

              <p className="mb-2">
                <span className="font-weight-bolder">&bull;</span> End users may
                voluntarily provide us with information they have made available
                on social media websites. If you provide us with any such
                information, we may collect publicly available information from
                the social media websites you have indicated. You can control
                how much of your information social media websites make public
                by visiting these websites and changing your privacy settings.
              </p>
            </div>
            {/* Do we share the information we collect with third parties? */}
            <div className="mt-5">
              <h5 className="mb-1">
                Do we share the information we collect with third parties?
              </h5>

              <ul className="navbar-nav">
                {doWeShareInfo.map(({ content, id }) => (
                  <li className="nav-item" key={id}>
                    <p className="mb-2">
                      <span className="font-weight-bolder">&bull; </span>{" "}
                      {content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Where and when is information collected from customers and end users? */}
            <div className="mt-5">
              <h5 className="mb-1">
                Where and when is information collected from customers and end
                users?
              </h5>
              <p className="mb-0">
                <span className="font-weight-bolder">&bull;</span> LMiTS will
                collect personal information that you submit to us. We may also
                receive personal information about you from third parties as
                described above.
              </p>
            </div>
            {/* How Do We Use Your Email Address? */}
            <div className="mt-5">
              <h5 className="mb-1">How Do We Use Your Email Address?</h5>
              <p className="mb-2">
                By submitting your email address on this website/app, you agree
                to receive emails from us. You can cancel your participation in
                any of these email lists at any time by clicking on the opt-out
                link or other unsubscribe option that is included in the
                respective email. We only send emails to people who have
                authorized us to contact them, either directly, or through a
                third party. We do not send unsolicited commercial emails,
                because we hate spam as much as you do. By submitting your email
                address, you also agree to allow us to use your email address
                for customer audience targeting on sites like Facebook, where we
                display custom advertising to specific people who have opted-in
                to receive communications from us. Email addresses submitted
                only through the order processing page will be used for the sole
                purpose of sending you information and updates pertaining to
                your order. If, however, you have provided the same email to us
                through another method, we may use it for any of the purposes
                stated in this Policy. Note: If at any time you would like to
                unsubscribe from receiving future emails, we include detailed
                unsubscribe instructions at the bottom of each email.
              </p>
            </div>
            {/* How Long Do We Keep Your Information? */}
            <div className="mt-5">
              <h5 className="mb-1">How Long Do We Keep Your Information?</h5>
              <p className="mb-0">
                We keep your information only so long as we need it to provide
                LMiTS to you and fulfill the purposes described in this policy.
                This is also the case for anyone that we share your information
                with and who carries out services on our behalf. When we no
                longer need to use your information and there is no need for us
                to keep it to comply with our legal or regulatory obligations,
                we’ll either remove it from our systems or depersonalize it so
                that we can't identify you.
              </p>
            </div>
            {/* How Do We Protect Your Information? */}
            <div className="mt-5">
              <h5 className="mb-1">How Do We Protect Your Information?</h5>
              <p className="mb-0">
                We implement a variety of security measures to maintain the
                safety of your personal information when you place an order or
                enter, submit, or access your personal information. We offer the
                use of a secure server. All supplied sensitive/credit
                information is transmitted via Secure Socket Layer (SSL)
                technology and then encrypted into our Payment gateway providers
                database only to be accessible by those authorized with special
                access rights to such systems, and are required to keep the
                information confidential. After a transaction, your private
                information (credit cards, social security numbers, financials,
                etc.) is never kept on file. We cannot, however, ensure or
                warrant the absolute security of any information you transmit to
                LMiTS or guarantee that your information on the Service may not
                be accessed, disclosed, altered, or destroyed by a breach of any
                of our physical, technical, or managerial safeguards.
              </p>
            </div>
            {/* Could my information be transferred to other countries? */}
            <div className="mt-5">
              <h5 className="mb-1">
                Could my information be transferred to other countries?
              </h5>
              <p className="mb-0">
                LMiTS is incorporated in IN. Information collected via our
                website, through direct interactions with you, or from use of
                our help services may be transferred from time to time to our
                offices or personnel, or to third parties, located throughout
                the world, and may be viewed and hosted anywhere in the world,
                including countries that may not have laws of general
                applicability regulating the use and transfer of such data. To
                the fullest extent allowed by applicable law, by using any of
                the above, you voluntarily consent to the trans-border transfer
                and hosting of such information.
              </p>
            </div>
            {/* Is the information collected through the LMiTS Service secure? */}
            <div className="mt-5">
              <h5 className="mb-1">
                Is the information collected through the LMiTS Service secure?
              </h5>
              <p className="mb-0">
                We take precautions to protect the security of your information.
                We have physical, electronic, and managerial procedures to help
                safeguard, prevent unauthorized access, maintain data security,
                and correctly use your information. However, neither people nor
                security systems are foolproof, including encryption systems. In
                addition, people can commit intentional crimes, make mistakes or
                fail to follow policies. Therefore, while we use reasonable
                efforts to protect your personal information, we cannot
                guarantee its absolute security. If applicable law imposes any
                non-disclaimable duty to protect your personal information, you
                agree that intentional misconduct will be the standards used to
                measure our compliance with that duty.
              </p>
            </div>
            {/* Can I update or correct my information? */}
            <div className="mt-5">
              <h5 className="mb-1">
                Is the information collected through the LMiTS Service secure?
              </h5>

              <ul className="navbar-nav">
                {canIUpdateCreate.map(({ content, id }) => (
                  <li className="nav-item" key={id}>
                    <p className="mb-2">
                      <span className="font-weight-bolder">&bull; </span>{" "}
                      {content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Personnel */}
            <div className="mt-5">
              <h5 className="mb-1">Personnel</h5>
              <p className="mb-1">
                If you are a LMiTS worker or applicant, we collect information
                you voluntarily provide to us. We use the information collected
                for Human Resources purposes in order to administer benefits to
                workers and screen applicants.
              </p>

              <p className="mb-1">
                You may contact us in order to (1) update or correct your
                information, (2) change your preferences with respect to
                communications and other information you receive from us, or (3)
                receive a record of the information we have relating to you.
                Such updates, corrections, changes and deletions will have no
                effect on other information that we maintain, or information
                that we have provided to third parties in accordance with this
                Privacy Policy prior to such update, correction, change or
                deletion.
              </p>
            </div>
            {/* Sale of Business */}
            <div className="mt-5">
              <h5 className="mb-1">Sale of Business</h5>
              <p className="mb-1">
                We reserve the right to transfer information to a third party in
                the event of a sale, merger or other transfer of all or
                substantially all of the assets of LMiTS or any of its Corporate
                Affiliates (as defined herein), or that portion of LMiTS or any
                of its Corporate Affiliates to which the Service relates, or in
                the event that we discontinue our business or file a petition or
                have filed against us a petition in bankruptcy, reorganization
                or similar proceeding, provided that the third party agrees to
                adhere to the terms of this Privacy Policy.
              </p>
            </div>
            {/* Affiliates */}
            <div className="mt-5">
              <h5 className="mb-1">Affiliates</h5>
              <p className="mb-1">
                We may disclose information (including personal information)
                about you to our Corporate Affiliates. For purposes of this
                Privacy Policy, "Corporate Affiliate" means any person or entity
                which directly or indirectly controls, is controlled by or is
                under common control with LMiTS, whether by ownership or
                otherwise. Any information relating to you that we provide to
                our Corporate Affiliates will be treated by those Corporate
                Affiliates in accordance with the terms of this Privacy Policy.
              </p>

              <p className="mb-1">
                You may contact us in order to (1) update or correct your
                information, (2) change your preferences with respect to
                communications and other information you receive from us, or (3)
                receive a record of the information we have relating to you.
                Such updates, corrections, changes and deletions will have no
                effect on other information that we maintain, or information
                that we have provided to third parties in accordance with this
                Privacy Policy prior to such update, correction, change or
                deletion.
              </p>
            </div>
            {/* Governing Law */}
            <div className="mt-5">
              <h5 className="mb-1">Governing Law</h5>

              <ul className="navbar-nav">
                {governingLaw.map(({ content, id }) => (
                  <li className="nav-item" key={id}>
                    <p className="mb-2">
                      <span className="font-weight-bolder">&bull; </span>{" "}
                      {content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Your Consent */}
            <div className="mt-5">
              <h5 className="mb-1">Your Consent</h5>
              <p className="mb-1">
                We've updated our Privacy Policy to provide you with complete
                transparency into what is being set when you visit our site and
                how it's being used. By using our website/app, registering an
                account, or making a purchase, you hereby consent to our Privacy
                Policy and agree to its terms.
              </p>
            </div>
            {/* Links to Other Websites */}
            <div className="mt-5">
              <h5 className="mb-1">Links to Other Websites</h5>
              <p className="mb-1">
                This Privacy Policy applies only to the Services. The Services
                may contain links to other websites not operated or controlled
                by LMiTS. We are not responsible for the content, accuracy or
                opinions expressed in such websites, and such websites are not
                investigated, monitored or checked for accuracy or completeness
                by us. Please remember that when you use a link to go from the
                Services to another website, our Privacy Policy is no longer in
                effect. Your browsing and interaction on any other website,
                including those that have a link on our platform, is subject to
                that website’s own rules and policies. Such third parties may
                use their own cookies or other methods to collect information
                about you.
              </p>
            </div>
            {/* Advertising */}
            <div className="mt-5">
              <h5 className="mb-1">Advertising</h5>

              <ul className="navbar-nav">
                {advertising.map(({ content, id }) => (
                  <li className="nav-item" key={id}>
                    <p className="mb-2">
                      <span className="font-weight-bolder">&bull; </span>{" "}
                      {content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Cookies for Advertising */}
            <div className="mt-5">
              <h5 className="mb-1">Cookies for Advertising</h5>
              <p className="mb-1">
                These cookies collect information over time about your online
                activity on the website/app and other online services to make
                online advertisements more relevant and effective to you. This
                is known as interest-based advertising. They also perform
                functions like preventing the same ad from continuously
                reappearing and ensuring that ads are properly displayed for
                advertisers. Without cookies, it’s really hard for an advertiser
                to reach its audience, or to know how many ads were shown and
                how many clicks they received.
              </p>
            </div>
            {/* Cookies */}
            <div className="mt-5">
              <h5 className="mb-1">Cookies</h5>
              <p className="mb-1">
                LMiTS uses "Cookies" to identify the areas of our website that
                you have visited. A Cookie is a small piece of data stored on
                your computer or mobile device by your web browser. We use
                Cookies to enhance the performance and functionality of our
                website/app but are non-essential to their use. However, without
                these cookies, certain functionality like videos may become
                unavailable or you would be required to enter your login details
                every time you visit the website/app as we would not be able to
                remember that you had logged in previously. Most web browsers
                can be set to disable the use of Cookies. However, if you
                disable Cookies, you may not be able to access functionality on
                our website correctly or at all. We never place Personally
                Identifiable Information in Cookies.
              </p>
            </div>
            {/* Blocking and disabling cookies and similar technologies */}
            <div className="mt-5">
              <h5 className="mb-1">
                Blocking and disabling cookies and similar technologies
              </h5>
              <p className="mb-1">
                Wherever you're located you may also set your browser to block
                cookies and similar technologies, but this action may block our
                essential cookies and prevent our website from functioning
                properly, and you may not be able to fully utilize all of its
                features and services. You should also be aware that you may
                also lose some saved information (e.g. saved login details, site
                preferences) if you block cookies on your browser. Different
                browsers make different controls available to you. Disabling a
                cookie or category of cookie does not delete the cookie from
                your browser, you will need to do this yourself from within your
                browser, you should visit your browser's help menu for more
                information.
              </p>
            </div>
            {/* Remarketing Services */}
            <div className="mt-5">
              <h5 className="mb-1">Remarketing Services</h5>
              <p className="mb-1">
                We use remarketing services. What Is Remarketing? In digital
                marketing, remarketing (or retargeting) is the practice of
                serving ads across the internet to people who have already
                visited your website. It allows your company to seem like
                they're “following” people around the internet by serving ads on
                the websites and platforms they use most.
              </p>
            </div>
            {/* Payment Details */}
            <div className="mt-5">
              <h5 className="mb-1">Payment Details</h5>
              <p className="mb-1">
                In respect to any credit card or other payment processing
                details you have provided us, we commit that this confidential
                information will be stored in the most secure manner possible.
              </p>
            </div>
            {/* Kid's Privacy */}
            <div className="mt-5">
              <h5 className="mb-1">Kid's Privacy</h5>
              <p className="mb-1">
                We collect information from kids under the age of 13 just to
                better our services. If You are a parent or guardian and You are
                aware that Your child has provided Us with Personal Data without
                your permission, please contact Us. If We become aware that We
                have collected Personal Data from anyone under the age of 13
                without verification of parental consent, We take steps to
                remove that information from Our servers.
              </p>
            </div>
            {/* Changes To Our Privacy Policy */}
            <div className="mt-5">
              <h5 className="mb-1">Changes To Our Privacy Policy</h5>
              <p className="mb-1">
                We may change our Service and policies, and we may need to make
                changes to this Privacy Policy so that they accurately reflect
                our Service and policies. Unless otherwise required by law, we
                will notify you (for example, through our Service) before we
                make changes to this Privacy Policy and give you an opportunity
                to review them before they go into effect. Then, if you continue
                to use the Service, you will be bound by the updated Privacy
                Policy. If you do not want to agree to this or any updated
                Privacy Policy, you can delete your account.
              </p>
            </div>
            {/* Third-Party Services */}
            <div className="mt-5">
              <h5 className="mb-1">Third-Party Services</h5>

              <ul className="navbar-nav">
                {thirdPartyServices.map(({ content, id }) => (
                  <li className="nav-item" key={id}>
                    <p className="mb-2">
                      <span className="font-weight-bolder">&bull; </span>{" "}
                      {content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Facebook Pixel */}
            <div className="mt-5">
              <h5 className="mb-1">Facebook Pixel</h5>
              <p className="mb-1">
                Facebook pixel is an analytics tool that allows you to measure
                the effectiveness of your advertising by understanding the
                actions people take on your website. You can use the pixel to:
                Make sure your ads are shown to the right people. Facebook pixel
                may collect information from your device when you use the
                service. Facebook pixel collects information that is held in
                accordance with its Privacy Policy.
              </p>
            </div>
            {/* Tracking Technologies */}
            <div className="mt-5">
              <h5 className="mb-2">Tracking Technologies</h5>

              <ul className="navbar-nav">
                {trackingTechnologies.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <h6 className="font-weight-bold mb-2">
                      {item.heading.title}
                    </h6>
                    {item.heading.content.map((content, index) => (
                      <p className="mb-2" key={index}>
                        <span className="font-weight-bolder">&bull; </span>{" "}
                        {content.description}
                      </p>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
            {/* Information about General Data Protection Regulation (GDPR) */}
            <div className="mt-5">
              <h5 className="mb-1">
                Information about General Data Protection Regulation (GDPR)
              </h5>
              <p className="mb-1">
                We may be collecting and using information from you if you are
                from the European Economic Area (EEA), and in this section of
                our Privacy Policy we are going to explain exactly how and why
                is this data collected, and how we maintain this data under
                protection from being replicated or used in the wrong way.
              </p>
            </div>
            {/* What is GDPR? */}
            <div className="mt-5">
              <h5 className="mb-1">What is GDPR?</h5>
              <p className="mb-1">
                GDPR is an EU-wide privacy and data protection law that
                regulates how EU residents' data is protected by companies and
                enhances the control the EU residents have, over their personal
                data. The GDPR is relevant to any globally operating company and
                not just the EU-based businesses and EU residents. Our
                customers’ data is important irrespective of where they are
                located, which is why we have implemented GDPR controls as our
                baseline standard for all our operations worldwide.
              </p>
            </div>
            {/* What is personal data? */}
            <div className="mt-5">
              <h5 className="mb-1">What is personal data?</h5>
              <p className="mb-3">
                Any data that relates to an identifiable or identified
                individual. GDPR covers a broad spectrum of information that
                could be used on its own, or in combination with other pieces of
                information, to identify a person. Personal data extends beyond
                a person’s name or email address. Some examples include
                financial information, political opinions, genetic data,
                biometric data, IP addresses, physical address, sexual
                orientation, and ethnicity.
              </p>

              <p className="mb-1">
                The Data Protection Principles include requirements such as:
              </p>
              <ul className="navbar-nav">
                {personalData.map(({ content, id }) => (
                  <li className="nav-item" key={id}>
                    <p className="mb-2">
                      <span className="font-weight-bolder">&bull; </span>{" "}
                      {content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Why is GDPR important? */}
            <div className="mt-5">
              <h5 className="mb-1">Why is GDPR important?</h5>
              <p className="mb-1">
                GDPR adds some new requirements regarding how companies should
                protect individuals' personal data that they collect and
                process. It also raises the stakes for compliance by increasing
                enforcement and imposing greater fines for breach. Beyond these
                facts it's simply the right thing to do. At LMiTS we strongly
                believe that your data privacy is very important and we already
                have solid security and privacy practices in place that go
                beyond the requirements of this new regulation.
              </p>
            </div>
            {/* Individual Data Subject's Rights - Data Access, Portability and Deletion */}
            <div className="mt-5">
              <h5 className="mb-1">
                Individual Data Subject's Rights - Data Access, Portability and
                Deletion
              </h5>
              <p className="mb-1">
                We are committed to helping our customers meet the data subject
                rights requirements of GDPR. LMiTS processes or stores all
                personal data in fully vetted, DPA compliant vendors. We do
                store all conversation and personal data for up to 6 years
                unless your account is deleted. In which case, we dispose of all
                data in accordance with our Terms of Service and Privacy Policy,
                but we will not hold it longer than 60 days.
              </p>

              <p className="mb-1">
                We are aware that if you are working with EU customers, you need
                to be able to provide them with the ability to access, update,
                retrieve and remove personal data. We got you! We've been set up
                as self service from the start and have always given you access
                to your data and your customers data. Our customer support team
                is here for you to answer any questions you might have about
                working with the API.
              </p>
            </div>
            {/* Contact Us */}
            <div className="mt-5">
              <h5 className="mb-1">Contact Us</h5>
              <p className="mb-1">
                Don't hesitate to contact us if you have any questions.
              </p>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <p className="mb-2">
                    <span className="font-weight-bolder">
                      &bull; Via Email:
                    </span>{" "}
                    support@lmits.in
                  </p>
                </li>

                <li className="nav-item">
                  <p className="mb-2">
                    <span className="font-weight-bolder">
                      &bull; Via Phone Number:
                    </span>{" "}
                    +91 86200 87300
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyContent;
