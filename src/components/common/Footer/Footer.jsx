/* ============================================
   Footer Component - GNRC Medishop
   Multi-column footer with links, contact info,
   social media, and legal modals
   ============================================ */

import React, { useState } from "react";
import { Container, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import styles from "./Footer.module.css";

const SITE_REF = "www.gnrcmedishopfranchise.com / franchise.gnrcmedishop.com";

// Privacy Policy Content Component
const PrivacyPolicyContent = () => (
  <div className={styles.legalContent}>
    <section className={styles.legalSection}>
      <h3>Introduction</h3>
      <p>
        GNRC Medishop presents this Privacy Policy to make users aware of how and
        through which means we may collect and process user data through our
        website, applications, and other platforms, while ensuring the protection
        and privacy of users' data. The policy provides insight into the type of
        sensitive personal data that we obtain, use for our service, and reassure
        users with what information is not required or sought from them. We aim at
        satisfying the curiosity of our users regarding their data usage and at
        respecting privacy.
      </p>
      <p>
        Accessing or using {SITE_REF} constitutes your acceptance that you have
        read, understood, and agreed to abide by the terms of this Privacy Policy
        as well as the Website Terms and Conditions.
      </p>
      <p>
        Notwithstanding anything contained herein, if the expression 'mobile
        application' is omitted in any portion, sub-portion or clause of this
        agreement, it shall not be construed that the terms and conditions laid
        down in those portions, sub-portions or clauses do not apply to access
        through mobile applications. This agreement shall also be binding on
        access through mobile applications.
      </p>
      <p>
        You also agree and consent to our collecting, storing, processing,
        transferring, and sharing information (including sensitive personal
        information) relating to you with third parties or service providers for
        the purposes set out in this Privacy Policy.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Language of the Terms</h3>
      <p>
        The terms are adopted herein in the English language, and this site does
        not provide a translation of the English version of the Terms. In any
        inconsistency between the English version and a translation, the English
        version shall prevail.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Changes to Privacy Policy</h3>
      <p>
        {SITE_REF} reserves the right to alter the current Privacy Policy at any
        time that becomes necessary without any obligation whatsoever for prior
        notice to all those concerned. Changes which would appear here shall
        become operative upon posting to {SITE_REF}. We request that you drop by
        this page quite frequently, as we will extend to you the courtesy of
        informing you of any new policy, rules and guidelines of {SITE_REF} at the
        time of accessing our site. Your entry upon our site after such a notice
        shall be treated as acceptance and agreement of your consent to the new
        Privacy Policy.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Types of Information Collected and Uses of Collected Information</h3>
      <p>
        We collect and store your personal information, including sensitive
        personal details you provide from time to time while using {SITE_REF}.
        This information is essential to ensure a safe, secure, efficient, and
        personalized shopping experience.
      </p>
      <p>
        The personal information collected is used solely for purposes directly
        related to the data subject, including but not limited to: Order
        Fulfillment and Customer Support; Personalized Healthcare Services;
        Account and Service Management; Promotions, Offers, and Notifications;
        Operational and Delivery Optimization; Fraud Prevention and Regulatory
        Compliance; and Data Analytics and Product Improvement. Consent for such
        use is obtained through appropriate means, including but not limited to
        electronic mail (email), short message service (SMS), or telephonic
        communication, in accordance with applicable laws and regulations.
      </p>
      <p>
        You do not need to provide personal details for being able to log in and
        navigate our website and mobile application. If you wish to register as a
        user, you will have to provide the relevant personal details in the
        course of the registration process.
      </p>
      <p>
        We will use the information you provide in operating our website and our
        mobile application. We may also use it in developing products and services
        tailored according to your choices so as to provide you with the best.
        Moreover, in countries where applicable law provides an option for you,
        with your consent, we shall also use information about you for direct
        marketing purposes on behalf of ourselves and other group companies,
        partners and agents of us.
      </p>
      <p>
        We collect information when you make transactions on our website and
        mobile application, including your contact details and purchase
        information. We also collect data about your preferences based on your
        interactions with our platform. We also collect device and technical
        information when you use our website or mobile application.
      </p>
      <p>
        During the payment process, users are required to indicate their
        acceptance of these Terms and Conditions by selecting the designated
        checkbox. This action constitutes express consent to the terms set forth
        herein, including authorization for the processing of personal data
        necessary to complete the transaction. Users may exercise their right to
        delete their accounts at any time in accordance with the Sensitive Data
        Protection Rules. Requests for account deletion or inquiries regarding
        personal data may be submitted to our support team via email. Account
        deletion will be deemed a withdrawal of consent for further processing of
        personal data, and the Company shall cease such processing except where
        retention is mandated by applicable laws or regulations.
      </p>
      <p>
        GNRC Medishop will retain Customer Data for no longer than is necessary to
        achieve the purposes of collection, and also for as long as reasonably
        necessary to comply with any legal, business, accounting, or reporting
        requirements. We consider several factors in trying to determine the right
        period for retaining personal data: the amount, nature, and sensitivity of
        the data, the risks posed by unauthorized use or disclosure, the purposes
        for processing, and whether those purposes could be achieved through other
        means without processing the data. Where there are legal requirements
        relevant to the determination of retention periods, we consider these as
        well.
      </p>
      <p>
        We will ensure that user data is retained for at least 180 days after
        cancellation or withdrawal of registration. After that period, the data
        will be deleted. If it takes longer to delete, we will get in touch with
        the user.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Data Sharing and Privacy Policy</h3>
      <ul>
        <li>
          <strong>Information Sharing with Laboratory Partners:</strong> When
          partners book diagnostic tests on customers' behalf, we securely share
          essential personal and health information—such as name, contact details,
          test type, and appointment details—with authorized labs and platforms
          (e.g., ITDose) solely to schedule, conduct, and deliver the services.
        </li>
        <li>
          <strong>Smart Report Generation via Authorized Providers:</strong> To
          enhance report quality and accuracy, ITDose may securely share test data
          with authorized providers (e.g., Niroggyan) solely for generating
          structured reports; these providers are contractually barred from
          storing or using the data for any other purpose.
        </li>
        <li>
          <strong>Delivery of Test Results:</strong> Test results are securely
          transmitted back to our systems and made available to our partners for
          download. In addition, results may be directly shared with customers
          through secure communication channels such as WhatsApp or SMS, ensuring
          timely and convenient access.
        </li>
        <li>
          <strong>Data Protection and Compliance:</strong> All third-party service
          providers involved in the handling or processing of diagnostic data
          operate under strict data protection agreements. These agreements
          mandate adherence to applicable privacy laws and security standards to
          safeguard the confidentiality and integrity of customer data at all
          stages of processing and transmission.
        </li>
      </ul>
      <p>
        We hope this policy clarifies the different types of personal data we may
        collect on this website and how that data may be handled or used by us.
        Here, you can find various types of information we gather from customers
        regarding details pertaining to GNRC Medishop Private Limited.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Personally Identifiable Information</h3>
      <p>
        Personally Identifiable Information ("PII") means any information that can
        be reasonably used to identify a specific End User. This identification,
        along with the input of data, is directly related to your various
        undertakings on {SITE_REF} through creating an account, order placement,
        giving feedback, or recommending a product. Although you may discontinue
        these undertakings, once enrolled, obtaining the necessary information is
        obligatory.
      </p>
      <p>Some of the information that we collect includes:</p>
      <ul>
        <li>Name</li>
        <li>Gender</li>
        <li>Mobile Numbers</li>
        <li>Email ID</li>
        <li>Date of Birth</li>
        <li>Mailing Address</li>
      </ul>
      <p>
        Any additional personal information that you provide or that is collected
        about you over time will be handled in accordance with applicable local
        legislation.
      </p>
      <p>
        We try to limit the situations under which we collect sensitive personal
        data. However, in certain situations, such collection can occur due to
        specific requests from you from time to time. Depending on your activities
        on {SITE_REF}, certain information requested by us may be obligatory, and
        the rest are not obligatory. Also, please note that should you fail to
        provide obligatory information for doing certain activities, you may not be
        able to do those certain activities.
      </p>
      <p>
        The various purposes for which we need this information include, but are
        not limited to:
      </p>
      <ul>
        <li>Verifying you as a legitimate user.</li>
        <li>Allowing you to place orders for products and services.</li>
        <li>Payment Process.</li>
        <li>Informing you about order status.</li>
        <li>Delivering Reports by Service Providers.</li>
      </ul>
    </section>

    <section className={styles.legalSection}>
      <h3>Technical Data</h3>
      <p>
        For the purposes of this privacy policy statement, 'Customer Data' includes
        both Personal Data and Technical Data. The latter includes device and
        technical information you provide in the process of using our website or
        mobile application, for example, IP addresses, and other unique identifiers
        such as mobile carrier, operating system, and platform.
      </p>
      <p>
        This information may be utilized to analyze website usage, enhance our
        services, improve our marketing and promotional activities, administer our
        website effectively, and better cater to your shopping preferences.
      </p>
      <p>
        We use the Personally Identifiable Information to resolve disputes, enforce
        our agreements with you including the Website Terms of Use and this Privacy
        Policy, compliance with applicable laws and to assist law enforcement
        activities. All your personally identifiable information remains private
        and confidential on {SITE_REF}. We do not sell, rent or lease your
        information to third parties without your explicit permission.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Data Security</h3>
      <p>
        Sensitive personal data is protected using the highest standards of
        security and is disclosed only when necessary and lawful. We are committed
        to ensuring that such data is not published or shared without the data
        subject's explicit and informed consent, except where disclosure is
        required under applicable laws or by regulatory authorities. However, we
        may disclose such information: (i) to comply with legal obligations,
        including responding to lawful requests from public authorities for
        national security or law enforcement purposes; (ii) to detect, investigate,
        prevent, or take action against fraud, unauthorized activities, suspected
        violations of our Terms and Conditions, or as otherwise required by law;
        and (iii) to protect the rights, property, or safety of GNRC Medishop, its
        users, or others, in accordance with applicable legal provisions. Any such
        disclosure is carried out with appropriate safeguards in place to ensure
        the confidentiality, integrity, and security of the personal data.
      </p>
      <p>
        We use reasonable technology and security measures to protect your personal
        information, including sensitive data. However, absolute confidentiality
        over the Internet cannot be guaranteed, and you agree that sharing your
        information is at your own risk. Unauthorized use may lead to unsolicited
        messages, and we are not liable for any damages arising from information
        shared with us. Access to customer information is limited to our employees
        who have been qualified and trained in how to handle it properly. We may
        disclose customer data to legal advisors for the purposes of legal
        proceedings as provided by law or in protection of the safety and security
        of individuals or GNRC Medishop. We also share data for investigating
        suspected illegal activities, such as fraud and privacy violations.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Updating Personally Identifiable Information</h3>
      <p>
        All users can access, update, and delete their Personally Identifiable
        Information (PII) on our website. We encourage users to periodically review
        and update their PII. To update your information, please follow the steps
        below:
      </p>
      <ol>
        <li>Login to the account.</li>
        <li>Click on 'My Account'.</li>
        <li>
          On the Dashboard click on 'Update your Profile' and make the necessary
          changes.
        </li>
        <li>
          On the Dashboard click on 'Address Book' to change your address(s).
        </li>
      </ol>
    </section>

    <section className={styles.legalSection}>
      <h3>Data Tracking</h3>
      <ul>
        <li>
          <strong>Cookies –</strong> Cookies are data gathering devices that we put
          on your hard drive when you access certain pages of {SITE_REF}, so we can
          analyze our webpage flow, measure the effectiveness of our promotions,
          and to enhance trust and safety. Most cookies are "session cookies,"
          which means they automatically are removed from your hard drive once you
          log off or close your browser. You can clear our cookies in your browser
          settings, but you will probably not be able to use some features on the
          website. Cookies collect absolutely no sensitive personal information,
          though.
        </li>
        <li>
          <strong>Some of the features which cookies support –</strong> We also
          track the performance of websites, services, content and ads through
          cookies, for remembering your individual preferences or buying behaviors
          in such ways, we get you all information which suited most in your
          interested area, in order to help you. Anytime, if you post something,
          either at our forums or in a chat room, or when you give feedback then,
          we will get it all. We retain this information as necessary to resolve
          disputes, provide customer support and to troubleshoot problems as
          permitted by law. In addition, if you send us personal correspondence
          (such as emails or letters), or if other people contact us about your
          activities or communications on the website, we may collect and store a
          file about you. Please note that we cannot control third parties' use of
          cookies, so please check the appropriate third-party's cookie policy for
          more information.
        </li>
        <li>
          <strong>Beacons –</strong> A web beacon is an electronic image embedded
          in the code of a web page. We use web beacons to monitor user traffic
          patterns from one page to another and to enhance site performance.
        </li>
      </ul>
    </section>

    <section className={styles.legalSection}>
      <h3>Sharing Data with WebEngage</h3>
      <p>
        To enhance our customer experience and optimize our communication
        strategies, {SITE_REF} shares specific customer data with WebEngage, a
        customer engagement and retention platform. This data may include basic
        customer information, user behavior on our website or app, and transaction
        history. As a data processor acting on our behalf, WebEngage is
        contractually bound to process the data exclusively in accordance with our
        instructions and in compliance with relevant data protection laws.
      </p>
      <p>We use WebEngage to:</p>
      <ul>
        <li>
          Send customized notifications, promotions, and communications,
          personalized alerts, messages, and deals.
        </li>
        <li>
          Analyze customer interactions and engagement patterns to gain valuable
          insights into user preferences.
        </li>
        <li>
          Utilize user behavior analytics to improve services, enhance customer
          engagement, and drive strategic growth.
        </li>
      </ul>
    </section>

    <section className={styles.legalSection}>
      <h3>Security of Personally Identifiable Information</h3>
      <p>
        {SITE_REF} takes strict measures to prevent loss, misuse, alteration, or
        unauthorized access by anyone to your Personally Identifiable Information
        or sensitive personal data. We have a secure server that can only be
        accessed by selected personnel and contractors, so we can track all access
        and changes made to accounts. However, note that no data transmission over
        the Internet can be guaranteed as 100% secure. We would request you not to
        share your user ID, password, or other information with any other party. No
        one in our {SITE_REF} customer care would ask for your password.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Advertisement</h3>
      <p>
        Advertising revenue may support some services. To help serve such ads as
        may be of most interest to you, advertisements presented on our website may
        appear alongside third-party advertisers who deliver ads to our website and
        to other Internet web sites. Such advertising or links may take you to an
        advertisement of its web site to have involved the merchandise and/or
        service offered to you which may include cookies for collecting elements to
        allow the advertisers in some methods in establishing if one is click on
        the adverts where through such adverts then went ahead to lead a customer
        or user to that respective web site that its advertising's, too will begin
        collecting information relating to its visiting in such particular's advert
        web site relevant in having those adverts you also got to view.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Other Content</h3>
      <p>
        All other links are for information purposes only and are provided as a
        convenience to you. You acknowledge and agree that this site is not
        responsible for the availability of, or any content, advertising or
        products on or available from those Internet sites or resources, nor for
        any damage, loss or consequence of any sort which may be caused to your
        computer system or the internet connection, for access to sites or
        resources related to this site.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Miscellaneous Privacy Policy</h3>
      <p>
        As outlined in our Terms & Conditions, no minor is allowed to register at
        or avail of the services of {SITE_REF}. We do not plan to sell our services
        and products to them, neither do we want to gather or retain information
        from anybody known to be under the age of 18. No part of the website,{" "}
        {SITE_REF}, is meant to attract anybody under the age of 18 years. If you
        are a minor but still wish to purchase a product, you are free to do so by a
        parent or guardian who is a member of {SITE_REF}. Our prime concern would be
        to protect the privacy of children. Therefore, we will not knowingly collect
        or maintain Data on our website from those who are under 18 years of age. If
        a minor has provided us with personal information, the parent or guardian
        may e-mail us, and we will remove the information and unsubscribe the child
        from any promotional contact opportunities.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Mindfulness and Compliance with Company Policies</h3>
      <p>
        Our e-mail distributions will be in accordance with our existing Privacy
        Policy. Information about various products, services, promotional and
        special offers from us that may work to get the best deals for our web
        users will be given by e-mail. We might associate any information you give
        us about yourself with information we receive from cookies that we collect
        in connection with your use of this website to present to you relevant
        information about a wide variety of products and services available on this
        website that may be of interest to you.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Public Areas</h3>
      <p>
        Some aspects of our {SITE_REF} website allow you to publicly contribute
        comments or reviews on those pages. Remember that such information is public
        and can be viewed by other customers or businesses. It might be reproduced
        on other websites or search results, making it that much easier for others
        to aggregate or obtain your information.
      </p>
      <p>
        In case you do not want to receive promotional emails or marketing
        information from us, then please contact us at{" "}
        <a href="mailto:care@gnrcmedishop.com">care@gnrcmedishop.com</a>. We will
        take care of your request as soon as possible.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Data Subject Rights</h3>
      <p>
        You agree that if you provide your cell phone number at the time of signing
        up, we can contact you by phone, SMS, WhatsApp, or in any other way. We may,
        at our own discretion and wherever it is permissible by law, recover a
        reasonable administrative fee charged for this facility. We reserve the
        right to withhold or withdraw your access to our customer information and we
        will give an explanation in cases where this is mandated under applicable
        law.
      </p>
      <p>
        If you have any issues or feedback or complaints related to how your
        customer data has been used or shared, please contact us at{" "}
        <a href="mailto:care@gnrcmedishop.com">care@gnrcmedishop.com</a>.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Jurisdiction</h3>
      <p>
        The Terms, and your use of this website shall be governed by and construed
        in accordance with the applicable laws of India. Its conflict of law
        provisions are also applicable here. This website and you, accept the
        exclusive jurisdiction of the courts located in Kolkata, West Bengal, India.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Precautions You Can Take</h3>
      <p>
        Passwords should be complex, not disclosed to anyone, changed periodically,
        and not written on any paper. All activities carried out under an account
        are the responsibility of users. Keep your computer protected with
        up-to-date antivirus software and the latest version of the browser but
        watch out for phishing e-mails that might ask you to give them some private
        or sensitive information by sending you an e-mail and using your e-mail
        address.
      </p>
      <p>
        {SITE_REF} and its representatives never request you to mail to us any
        personal or sensitive information through e-mails. In case you ever get a
        request like that, just relax; it is not from us.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Others</h3>
      <p>
        You agree that the submission of your personal information, including your
        sensitive data, is at your sole discretion. We have no obligation to verify
        the source of any information you provide regarding your identity; it shall
        be accepted as submitted by you. If you suspect that you have provided any
        information in error, it is your responsibility to let us know within
        fifteen days to sort out the situation. We may use technology or other means
        to safeguard our services and customers, such as filtering out spam or
        enhancing security controls. Such measures may affect your ability to use
        the service.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Contact Us</h3>
      <p>
        For further details or to resolve queries or grievances, please contact the
        Grievance Officer:
      </p>
      <ul>
        <li>
          <strong>Grievance Officer:</strong> Firoj Khan
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:firoj.khan@gnrcmedishop.com">
            firoj.khan@gnrcmedishop.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong> <a href="tel:7002189744">7002189744</a>
        </li>
      </ul>
      <p>
        {SITE_REF} will make all possible endeavours to resolve your grievance
        within 15 days from the date of receipt. By proceeding you acknowledge that
        you accept all the conditions stated above voluntarily and with consent.
      </p>
    </section>

    <p className={styles.lastUpdated}>Last Updated: June 2026</p>
  </div>
);

// Terms & Conditions Content Component
const TermsConditionsContent = () => (
  <div className={styles.legalContent}>
    <section className={styles.legalSection}>
      <h3>Terms and Conditions</h3>
      <p>
        The Terms and Conditions in policy making establish the rules and
        guidelines for implementing and enforcing a policy, clarifying
        expectations for all parties involved. Key components include the policy's
        scope, compliance requirements, methods of enforcement, and penalties for
        violations.
      </p>
      <p>
        This document is an electronic record created according to the provisions
        of the Information Technology Act, 2000. Amendments to various statutes
        regarding electronic records will align with updates to the Information
        Technology Act, 2000.
      </p>
      <p>
        This notice complies with Rule 3(1) of the Information Technology
        (Intermediaries Guidelines) Rules, 2011, which requires GNRC Medishop to
        make all rules, regulations, privacy policies, and Terms of Use easily
        accessible for users. Users—defined as any individual or entity that
        visits, browses, accesses, uses, or makes a purchase on the platform—are
        responsible for reviewing the terms and conditions before using the
        platform, as these may be updated periodically. GNRC Medishop allows users
        to browse and make purchases without requiring registration. The terms
        "We," "Us," and "Our" refer to GNRC Medishop.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Acknowledgement of Terms</h3>
      <p>
        By accessing this website or mobile application, you acknowledge that you
        have read and understood the terms and conditions outlined below. Your
        access to this website or mobile application depends on these provisions.
        If you do not agree with the terms and conditions, please exit the website
        or mobile application immediately.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Definition</h3>
      <p>
        <strong>GNRC Medishop:</strong> GNRC Medishop is a digital healthcare
        platform that includes the website {SITE_REF} and mobile applications.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Language of the Terms</h3>
      <p>
        The Terms are provided in English, and GNRC Medishop does not offer a
        translation. If there is a contradiction between the English version and
        any translation, the English version will take precedence.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>General Information</h3>
      <p>
        GNRC Medishop serves as a communication medium connecting users,
        pharmacies, and other service providers.
      </p>
      <p>
        The Pharmacy accepts and fulfills all orders, contingent upon verifying a
        valid prescription. The Pharmacy provides any exhibits or promotional
        offers for sale through the GNRC Medishop platform.
      </p>
      <p>
        We aim to enhance the healthcare experience by facilitating smooth
        interactions between users and vendors while delivering trustworthy
        information and high-quality products. When you sign up as a user on GNRC
        Medishop and share your personal identification details, you accept the
        terms and conditions that govern the services provided by GNRC Medishop
        Private Limited, ensuring the integrity and functionality of the website.
      </p>
      <p>
        GNRC Medishop does not endorse specific products, procedures, treatments,
        opinions, or other information on this website or linked from it. Users
        should seek advice from qualified professionals about their individual
        circumstances before relying on the information presented here.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Privacy</h3>
      <p>
        We prioritize your privacy and confidentiality at our company. By providing
        your mobile number during registration, you consent to receive
        communications via phone, SMS, WhatsApp, and other methods. For more
        details, please visit our Privacy Policy at {SITE_REF}.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Consumer Protection Compliance</h3>
      <p>
        We ensure transparency and accountability in all our operations in
        accordance with the Consumer Protection (E-Commerce) Rules, 2020. Here are
        the details required under the regulations:
      </p>
      <ul>
        <li>
          <strong>Legal Name of the E-Commerce Entity:</strong> GNRC Medishop
          Private Limited
        </li>
        <li>
          <strong>Registered Office:</strong> GNRC Complex, Dispur Supermarket,
          Guwahati – 781006, Assam, India.
        </li>
        <li>
          <strong>Name of Website:</strong> {SITE_REF}
        </li>
      </ul>
      <p>
        <strong>Contact Details of Customer Care:</strong> For any query or
        complaint you are requested to contact our customer care by calling{" "}
        <a href="tel:9864646246">98 6464 6246</a> or sending an email at{" "}
        <a href="mailto:care@gnrcmedishop.com">care@gnrcmedishop.com</a>.
      </p>
      <p>
        <strong>Contact Details of Grievance Officer:</strong>
      </p>
      <ul>
        <li>
          <strong>Name:</strong> Firoj Khan
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:firoj.khan@gnrcmedishop.com">
            firoj.khan@gnrcmedishop.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong> <a href="tel:7002189744">7002189744</a>
        </li>
        <li>
          <strong>Address:</strong> GNRC Medishop, Hengerabari Road, Near L P
          School, Opposite City Public School, Guwahati – 781036, Assam, India.
        </li>
      </ul>
      <p>
        <strong>Contact Details of Nodal Officer:</strong>
      </p>
      <ul>
        <li>
          <strong>Name:</strong> Amar Jyoti Kalita
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:ops@gnrcmedishop.com">ops@gnrcmedishop.com</a>
        </li>
        <li>
          <strong>Phone:</strong> <a href="tel:6000902026">6000902026</a>
        </li>
        <li>
          <strong>Address:</strong> GNRC Medishop, Hengerabari Road, Near L P
          School, Opposite City Public School, Guwahati – 781036, Assam, India.
        </li>
      </ul>
    </section>

    <section className={styles.legalSection}>
      <h3>Account and Registration</h3>
      <p>
        To register as a user with GNRC Medishop, treat your password and account
        information as confidential and do not share it with anyone, as you are
        responsible for all activities under your account or password, whether
        authorized or unauthorized; we are not liable for any unauthorized use. If
        you suspect suspicious activity, notify us immediately at{" "}
        <a href="tel:9864646246">98 6464 6246</a> or{" "}
        <a href="mailto:care@gnrcmedishop.com">care@gnrcmedishop.com</a>. We may
        require you to change your password or disable your account without prior
        notice if we have reasonable grounds to believe there is a security breach
        or misuse of the website.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>You Also Agree To</h3>
      <p>
        When you register as a new user on GNRC Medishop, you agree to provide
        accurate and complete "Registration Data" to ensure your account functions
        properly and remains secure. You must update this information promptly as
        needed. Keeping your data up to date improves the reliability and
        functionality of our platform, allowing us to serve you better.
        Additionally, we will send updates on orders, shipments, and promotions
        through various communication channels, and your consent helps us enhance
        your experience with our services.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Maintenance</h3>
      <p>
        This website may deactivate or suspend a user's access to the site and its
        services at any time for system maintenance, upgrades, testing, repairs, or
        other related activities, at its sole discretion and without notice. The
        website will not be liable for any loss, damage, costs, or expenses
        resulting from such deactivation or suspension. This provision extends the
        other general terms under this agreement.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Discontinuation or Modification to Services and Accounts</h3>
      <p>
        The website can modify or add any parts of the Service at any time and
        without prior notice to the User. By exercising this right, the website
        protects itself from liability to the User and any third party for any
        changes to the Service. Users agree that the website may change the Service
        at its discretion and without notice.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Deletion / Removal of User Account</h3>
      <p>
        Users can delete or remove their accounts from GNRC Medishop either through
        their account settings or by contacting support team at{" "}
        <a href="mailto:care@gnrcmedishop.com">care@gnrcmedishop.com</a> with the
        subject line "Termination of Account." To initiate this process, users must
        verify their identity using either the email or SMS linked to their
        account. Once we confirm this verification, we will permanently delete the
        account within 30 days. However, please note that any legal records
        associated with the account will be retained and will not be deleted.
        Additionally, users must settle any pending orders or payments before we can
        delete the account; unresolved transactions will prevent account deletion.
        For further assistance, users can reach out to our support team via email
        at <a href="mailto:care@gnrcmedishop.com">care@gnrcmedishop.com</a> or by
        phone at <a href="tel:9864646246">98 6464 6246</a>.
      </p>
      <p>
        During the payment process, users are required to provide explicit consent
        to these Terms and Conditions by selecting the corresponding checkbox. This
        action constitutes the user's agreement to the terms outlined herein,
        including consent to the processing of personal data necessary to complete
        the transaction. Users retain the right to delete their accounts at any
        time. Such deletion shall be deemed a valid exercise of the user's right to
        withdraw consent for the processing of their personal data. Upon account
        deletion, the Company shall cease all further processing of the user's
        personal data, except where retention is necessary to comply with
        applicable legal or regulatory obligations.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>User Conduct</h3>
      <ul>
        <li>
          As part of our customer service, we offer the option to choose
          alternative brands or products containing the same generic. By placing an
          order, you confirm that you possess a valid prescription from a registered
          medical practitioner, as mandated by law, and agree to present it to the
          licensed retail chemist fulfilling your order. We strongly recommend
          consulting your doctor before making any decisions regarding medication or
          treatment.
        </li>
        <li>
          When using these services and any associated sub-sites or pages, you agree
          to use them solely for lawful purposes and in compliance with all
          applicable laws and regulations. You must respect all laws and regulations
          while accessing the website and conducting transactions, ensuring a safe
          and responsible cyber environment for everyone.
        </li>
        <li>
          To maintain the integrity of our services, you must provide true,
          accurate, complete, and up-to-date information when we request it. GNRC
          Medishop reserves the right to verify this information at any time. If you
          provide any inaccuracies, whether partial or complete, we may reject your
          registration and block your access to GNRC Medishop's services and related
          websites. This decision is solely at GNRC Medishop's discretion, and we do
          not require prior notice.
        </li>
        <li>
          Customers must use the services only for legal and appropriate purposes,
          following all relevant laws, regulations, and accepted practices.
          Additionally, all users must engage in activities that promote the smooth
          operation of our services, avoiding any actions that could disrupt
          operations or affect related servers and networks. This policy aims to
          enhance reliability and efficiency.
        </li>
        <li>
          We fully comply with the Drugs and Cosmetics Act of 1940, the Drugs and
          Cosmetics Rules of 1945, and the Drugs and Magic Remedies (Objectionable
          Advertisements) Act of 1954, including all amendments. At GNRC Medishop,
          only licensed pharmacies will sell and exhibit medicines. This approach
          strengthens our ethical commitments, enhances the healthcare system's
          integrity, and prioritizes consumer safety. By restricting these
          transactions to licensed pharmacies, we create a trustworthy framework for
          distributing medicinal products and reinforce our commitment to ethical
          healthcare practices.
        </li>
      </ul>
    </section>

    <section className={styles.legalSection}>
      <h3>Limitations of Usage</h3>
      <p>This Website cannot be used for any of the following purposes:</p>
      <ol>
        <li>
          Users are expressly prohibited from hosting, displaying, uploading,
          publishing, transmitting, or sharing any content or information that:
          infringes upon the rights of others; violates any applicable law; is
          defamatory, obscene, or harmful to minors; invades the privacy of
          individuals; infringes upon intellectual property rights; misleads or
          deceives recipients; impersonates any person or entity; poses a threat to
          national security or public order; contains viruses, malware, or other
          malicious software; or is knowingly false and intended to cause harm or
          derive unlawful financial gain. Furthermore, users shall not interfere
          with any legal investigation or obstruct the activities of law enforcement
          authorities in any manner.
        </li>
        <li>
          Disseminating any unlawful, harassing, libellous, abusive, threatening,
          harmful, obscene, or otherwise objectionable material.
        </li>
        <li>Gaining unauthorised access to other computer systems.</li>
        <li>Breaching any applicable laws.</li>
        <li>
          Interfering or disrupting networks or websites connected to GNRC
          Medishop.
        </li>
        <li>
          Making, transmitting or storing electronic copies of copyrighted
          materials, design details and colours without the permission of the
          owner.
        </li>
      </ol>
    </section>

    <section className={styles.legalSection}>
      <h3>Prohibited Actions</h3>
      <p>
        The User agrees to adhere strictly to the following prohibitions while
        using the Service:
      </p>
      <ol>
        <li>
          The User shall not permit any individual other than themselves to access
          or utilize the Service.
        </li>
        <li>
          The User must not sell or transfer any rights or obligations stated in
          these Terms and Conditions to any third party. The Terms also prohibit
          unauthorized commercial activities related to the service, including
          distribution and marketing. Users must obtain explicit permission for any
          business-related actions involving the service. This approach protects
          ownership rights and ensures compliance with commercial practices.
        </li>
        <li>
          The Service is designed solely for the specific purposes for which the
          User has registered, and Users may not use it for any other reasons. The
          only exception to this rule is information that Users have posted
          themselves.
        </li>
        <li>
          You must obtain written permission from the website in advance before
          sharing access to the Service with anyone else.
        </li>
        <li>
          Users must not use the Service for any illegal activities, including
          criminal actions. They cannot send or receive messages that are offensive
          due to moral, religious, racial, or political reasons. Additionally, users
          must refrain from engaging in behavior that harasses, annoys, or causes
          distress to others.
        </li>
      </ol>
    </section>

    <section className={styles.legalSection}>
      <h3>Communication</h3>
      <p>
        Using GNRC Medishop means you agree to receive communications from us
        electronically. This includes notifications sent via email, SMS, and phone
        calls (mobile, landline, or any other method). You acknowledge that all
        agreements, notices, disclosures, and other communications we send
        electronically fulfill any legal requirements for written communication.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Termination and Refusal of Service</h3>
      <p>
        When you register as a new user on GNRC Medishop, you agree to provide
        accurate and complete "Registration Data" to ensure your account functions
        properly and remains secure. You must update this information promptly as
        needed. Keeping your data up to date improves the reliability and
        functionality of our platform, allowing us to serve you better. If we
        suspect any inaccuracies or incomplete information in your details, we
        reserve the right to terminate your account. Additionally, as a registered
        user, you will receive updates on orders, shipments, and promotions through
        various communication channels. Your consent helps us enhance your
        experience with our services.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Delivery</h3>
      <p>
        This website provides its services to the whole of India, subject to the
        following:
      </p>
      <ol>
        <li>
          Prescription Medicines can only be delivered by the pharmacy if there is a
          valid prescription. If a prescription is missing, the pharmacy has the
          right to refuse the order. GNRC Medishop is not liable for any orders that
          the pharmacy declines.
        </li>
        <li>
          Prescription medicines, over-the-counter products, and other healthcare
          items can only be delivered to designated areas that are identified by
          serviceable pin codes.
        </li>
        <li>
          If a user outside the serviceable area orders OTC health care products,
          these will be sent via standard courier services through a logistics
          partner. If delivery is not possible in their region, the order will not
          be fulfilled, and the user will be informed.
        </li>
      </ol>
    </section>

    <section className={styles.legalSection}>
      <h3>Payment</h3>
      <p>
        Registering on the website and accessing the information provided is free.
        Users grant GNRC Medishop permission to collect payments on their behalf and
        understand that GNRC Medishop is not liable for any loss or damage that may
        occur during this process. Users can choose from various payment methods,
        including credit/debit cards, net banking, third-party wallets, and cash on
        delivery. GNRC Medishop reserves the right to decide whether to continue or
        discontinue any payment method.
      </p>
      <p>
        When you use any payment method available on the Website, you agree that
        GNRC Medishop is not liable for any loss or damage arising from unauthorized
        transactions, transactions that exceed your bank's limits, transaction
        issues, or declines for any reason. You acknowledge that GNRC Medishop's
        payment service is not a banking or financial service; it merely facilitates
        transactions through authorized banking and credit card networks. GNRC
        Medishop does not act as a trustee or fiduciary in relation to the
        transaction or its pricing.
      </p>
      <p>
        Our online partners manage payments made through credit/debit cards and net
        banking. To learn how GNRC Medishop protects your confidential information,
        please refer to our Privacy Policy. While we provide links and Software
        Development Kits for third-party payment services, we cannot guarantee their
        availability or functionality and are not responsible for any losses that
        may arise from their use. By using our services, you confirm that you are
        the authorized user of the payment methods you employ, and GNRC Medishop is
        not liable for any financial loss or inconvenience resulting from the misuse
        of your account information.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Return, Cancellation and Refund</h3>
      <p>
        Users can return any products they ordered from the App and that were
        successfully delivered to serviceable areas, following the applicable
        Return, Cancellation, and Refund policy, unless a different return policy is
        specified on the product description pages. However, products delivered to
        areas outside of serviceable regions cannot be returned.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Other Terms — Feedback and Suggestions</h3>
      <p>
        We appreciate our users' feedback and suggestions. However, GNRC Medishop
        reserves the right to oversee and manage all postings. Once you submit your
        contributions, we treat them as public, and we accept no responsibility for
        any content provided by users or third parties. We also have no obligation
        to respond to any posted material. By continuing to use this website, you
        grant GNRC Medishop and its affiliates a perpetual, irrevocable, worldwide,
        royalty-free, and non-exclusive license to use, copy, distribute, publicly
        display, modify, and create derivative works from your submissions.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Copyright and Trademark</h3>
      <p>
        We own all content on this website, including images, text, logos, and
        audio/visual material, and we protect it with intellectual property rights.
        Violating these rights may lead to civil or criminal penalties. Users agree
        not to remove or alter any proprietary rights notices attached to the
        content.
      </p>
      <p>
        GNRC Medishop grants users a limited, non-transferable, non-exclusive
        license to access and use its website strictly for personal purposes. This
        license prohibits modifying the website, commercial use, resale, or creating
        derivative works without prior permission. Users may not collect or mine
        data, reproduce content, frame proprietary information, or use hidden text
        containing trademarks.
      </p>
      <p>
        By submitting user data, including all provided content, users grant GNRC
        Medishop a non-exclusive, worldwide, royalty-free, irrevocable, and
        sublicensable right to use, share, distribute, and modify the data to ensure
        compatibility across different networks and devices.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Website Security</h3>
      <p>
        Users must not breach or attempt to breach GNRC Medishop's security. This
        includes using any device or software to interfere with website operations,
        accessing unauthorized data or accounts, probing or testing system
        vulnerabilities without authorization, disrupting services to other users
        through methods such as viruses or spamming, sending unsolicited emails or
        advertisements without consent, and forging any part of email header
        information. Additionally, users may only navigate the site using approved
        search engines and web browsers; all other automated tools or agents are
        prohibited. Violations of these policies may result in civil or criminal
        liability.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Indemnity</h3>
      <p>
        You agree to protect and defend GNRC Medishop, its owners, subsidiaries,
        affiliates, and related parties against any claims, actions, liabilities,
        damages, losses, costs, and expenses—including reasonable attorney's
        fees—that may arise from your use of the website or any violations of GNRC
        Medishop's Terms & Conditions, Privacy Policy, or Disclaimer. This obligation
        also includes any breaches of laws or third-party rights connected to your
        account or any access by others using your account. You acknowledge and
        accept that this protection applies unilaterally and without objection.
      </p>
      <p>
        All brands on this website belong to their respective owners, and we make no
        claims to them. This website is not liable for service shortages or failures
        due to technical issues, and users agree not to seek damages under consumer
        protection laws. Links to external sites do not imply any affiliation, and
        users assume full responsibility for their use. We do not guarantee the
        performance, accuracy, or reliability of the information provided. Users must
        comply with all applicable laws while using the service, and the website
        assumes no liability for any non-compliance by users.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>This Limitation Applies to Anything Related To</h3>
      <p>
        In policy making, it is crucial to consider potential viruses or disabling
        features that could affect service access, compatibility issues with other
        services, software, or hardware, transmission or transaction delays or
        failures, and claims related to breach of contract, warranty, strict
        liability, or negligence. These concerns are especially relevant if GNRC
        Medishop knew or should have known about possible damages that may not be
        fully addressed by the available remedy.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Exclusion of Warranties</h3>
      <p>
        The website and its services are offered "as is" and "as available," with no
        warranties or guarantees, placing all associated risks on the users. GNRC
        Medishop and its affiliates do not promise that the services will fulfill
        user needs, be uninterrupted, secure, or free of errors; they also do not
        guarantee the accuracy or reliability of information obtained through these
        services. Users are fully responsible for any damages that may arise from
        downloaded materials. All implied warranties, including those of
        merchantability and fitness for a specific purpose, are disclaimed. GNRC
        Medishop is not responsible for any incidental or consequential damages
        resulting from the use of the website.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Governing Law and Dispute Resolution</h3>
      <p>
        This Agreement is governed and interpreted according to the laws of India.
        The courts in Kamrup (M), Assam, India, shall have exclusive jurisdiction
        over any litigation arising under this Agreement. The laws of India govern
        all Terms of Use and contractual obligations between the Parties, and any
        disputes arising from or related to these obligations will be resolved
        through arbitration in Kamrup (M). A sole arbitrator, appointed by GNRC
        Medishop, will conduct the arbitration in English in accordance with the
        Arbitration and Conciliation Act, 1996.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Interpreting the Contract</h3>
      <p>
        A court may rule that a part of this contract is unenforceable as written.
        If this occurs, you and we will replace that part with terms that closely
        match the intended meaning of the original terms. The rest of this contract
        will remain unchanged. This document constitutes the entire contract between
        you and us regarding your use of the service, superseding any prior
        agreements or statements on this subject. If you have confidentiality
        obligations related to the service (for example, if you were a beta tester),
        those obligations will remain in effect. Section titles in this contract do
        not restrict the contract's other terms.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>No Third Party Beneficiaries</h3>
      <p>
        This contract benefits only you and us. It does not benefit any other
        person, except permitted successors and assigns under this contract.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Remedies</h3>
      <p>
        If a user violates any agreements, this website reserves the right to remove
        related content without prior notice, issue a warning to cease such actions,
        and, if the violations persist, suspend or deactivate the user's access at
        its discretion. Additionally, the website may pursue legal action for any
        damages or harm to its reputation that may arise.
      </p>
    </section>

    <section className={styles.legalSection}>
      <p>
        <strong>Note:</strong> This policy is based on your acceptance of all the
        outlined conditions, confirming that you are proceeding of your own free
        will and consent.
      </p>
    </section>

    <p className={styles.lastUpdated}>Last Updated: June 2026</p>
  </div>
);

// Disclaimer Content Component
const DisclaimerContent = () => (
  <div className={styles.legalContent}>
    <section className={styles.legalSection}>
      <h3>General Disclaimer</h3>
      <p>
        The information provided on this website is for general informational
        purposes only. While we strive to keep the information up to date and
        correct, we make no representations or warranties of any kind about the
        completeness, accuracy, reliability, suitability, or availability with
        respect to the website or the information, products, services, or
        related graphics contained on the website.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Earnings Disclaimer</h3>
      <p>
        Revenue projections and profit margins mentioned are based on existing
        store performance data and are not indicative of guaranteed future
        outcomes. Individual franchise results may vary based on location,
        market conditions, management, and other factors.
      </p>
    </section>

    <section className={styles.legalSection}>
      <h3>Contact</h3>
      <p>
        For any questions or concerns, please contact us at
        info@gnrcmedishop.com or call +91-7086036887.
      </p>
    </section>

    <p className={styles.lastUpdated}>Last Updated: March 2026</p>
  </div>
);

// Legal Modal Component
const LegalModal = ({ isOpen, onClose, title, children }) => {
  if (typeof window === "undefined") return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: { opacity: 0, y: 30, scale: 0.95, transition: { duration: 0.2 } },
  };

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className={styles.modalBackdrop}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className={styles.legalModal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{title}</h2>
              <IconButton
                className={styles.modalCloseBtn}
                onClick={onClose}
                aria-label="Close modal"
              >
                <Icon icon="mdi:close" />
              </IconButton>
            </div>
            <div className={styles.modalBody}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

// Quick Links data
const quickLinks = [
  { label: "About GNRC", href: "#about" },
  { label: "Why GNRC", href: "#why-gnrc" },
  { label: "Investment", href: "#investment" },
  { label: "Stores", href: "#stores" },
  {
    label: "Careers",
    href: "https://www.gnrcmedishop.com",
    external: true,
  },
];

// Franchise links data
const franchiseLinks = [
  { label: "500 Sq Ft Store", href: "#investment" },
  { label: "700 Sq Ft Store", href: "#investment" },
  { label: "1000 Sq Ft Store", href: "#investment" },
  { label: "Support & Training", href: "#support" },
  {
    label: "GNRC Medishop Website",
    href: "https://www.gnrcmedishop.com",
    external: true,
  },
];

// Social media links
const socialLinks = [
  { icon: "mdi:facebook", href: "#", label: "Facebook" },
  { icon: "mdi:instagram", href: "#", label: "Instagram" },
  { icon: "mdi:youtube", href: "#", label: "YouTube" },
  { icon: "mdi:twitter", href: "#", label: "Twitter" },
];

const Footer = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [disclaimerModalOpen, setDisclaimerModalOpen] = useState(false);

  return (
    <>
      <footer className={styles.footer}>
        {/* Main Footer Content */}
        <div className={styles.mainFooter}>
          <Container maxWidth="xl">
            <div className={styles.footerGrid}>
              {/* Column 1: Logo & Tagline */}
              <div className={styles.footerBrand}>
                <div className={styles.logoWrapper}>
                  <img
                    src="https://res.cloudinary.com/dn9gyaiik/image/upload/v1773293282/logo_ashuyz.png"
                    alt="GNRC Medishop"
                    style={{
                      height: "36px",
                      width: "auto",
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </div>
                <p className={styles.tagline}>
                  Building North East India's Most Trusted Essentials Retail
                  Chain.
                </p>
                {/* Social Icons */}
                <div className={styles.socialIcons}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                      aria-label={social.label}
                    >
                      <Icon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className={styles.footerColumn}>
                <h4 className={styles.columnTitle}>Quick Links</h4>
                <ul className={styles.footerLinks}>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className={styles.footerLink}
                        {...(link.external
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Franchise */}
              <div className={styles.footerColumn}>
                <h4 className={styles.columnTitle}>Franchise</h4>
                <ul className={styles.footerLinks}>
                  {franchiseLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className={styles.footerLink}
                        {...(link.external
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Contact */}
              <div className={styles.footerColumn}>
                <h4 className={styles.columnTitle}>Contact</h4>
                <ul className={styles.contactList}>
                  <li className={styles.contactItem}>
                    <div className={styles.contactLabelRow}>
                      <Icon icon="mdi:phone" className={styles.contactIcon} />
                      <span className={styles.contactLabel}>
                        Franchise Support
                      </span>
                    </div>
                    <a href="tel:+917086036887" className={styles.contactValue}>
                      7086036887
                    </a>
                  </li>
                  {/* <li className={styles.contactItem}>
                    <div className={styles.contactLabelRow}>
                      <Icon
                        icon="mdi:phone-in-talk"
                        className={styles.contactIcon}
                      />
                      <span className={styles.contactLabel}>Alternate</span>
                    </div>
                    <a href="tel:+918638604899" className={styles.contactValue}>
                      8638604899
                    </a>
                  </li> */}
                  <li className={styles.contactItem}>
                    <div className={styles.contactLabelRow}>
                      <Icon icon="mdi:email" className={styles.contactIcon} />
                      <span className={styles.contactLabel}>Email</span>
                    </div>
                    <a
                      href="mailto:info@gnrcmedishop.com"
                      className={styles.contactValue}
                    >
                      info@gnrcmedishop.com
                    </a>
                  </li>
                  <li className={styles.contactItem}>
                    <div className={styles.contactLabelRow}>
                      <Icon
                        icon="mdi:map-marker"
                        className={styles.contactIcon}
                      />
                      <span className={styles.contactLabel}>Address</span>
                    </div>
                    <span className={styles.contactValue}>
                      GNRC Medishop Pvt. Ltd.
                      <br />
                      Guwahati, Assam
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <Container maxWidth="xl">
            <div className={styles.bottomContent}>
              <p className={styles.copyright}>
                &copy; 2025 GNRC Medishop Pvt. Ltd. All Rights Reserved.
              </p>
              <div className={styles.legalLinks}>
                <button
                  className={styles.legalLink}
                  onClick={() => setTermsModalOpen(true)}
                >
                  Terms & Conditions
                </button>
                <span className={styles.linkDivider}>|</span>
                <button
                  className={styles.legalLink}
                  onClick={() => setPrivacyModalOpen(true)}
                >
                  Privacy Policy
                </button>
                <span className={styles.linkDivider}>|</span>
                <button
                  className={styles.legalLink}
                  onClick={() => setDisclaimerModalOpen(true)}
                >
                  Disclaimer
                </button>
              </div>
            </div>
          </Container>
        </div>

        {/* Developer Credit Bar */}
        <div className={styles.developerBar}>
          <Container maxWidth="xl">
            <p className={styles.developerText}>
              Designed and Developed by{" "}
              <a
                href="https://assamdigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.developerLink}
              >
                Assam Digital
              </a>
            </p>
          </Container>
        </div>
      </footer>

      {/* Legal Modals */}
      <LegalModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        title="Privacy Policy"
      >
        <PrivacyPolicyContent />
      </LegalModal>

      <LegalModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
        title="Terms & Conditions"
      >
        <TermsConditionsContent />
      </LegalModal>

      <LegalModal
        isOpen={disclaimerModalOpen}
        onClose={() => setDisclaimerModalOpen(false)}
        title="Disclaimer"
      >
        <DisclaimerContent />
      </LegalModal>
    </>
  );
};

export default Footer;
