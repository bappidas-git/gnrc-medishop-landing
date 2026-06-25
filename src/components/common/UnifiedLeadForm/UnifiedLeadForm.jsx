/* ============================================
   UnifiedLeadForm Component
   Single reusable lead capture form with:
   - Duplicate prevention
   - Trust badges
   - Consent text
   - Redirect to Thank You page
   - Customizable title, subtitle, and phone CTA
   ============================================ */

import React, { useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { submitLeadToWebhook, isDuplicateLead, markLeadAsSubmitted } from "../../../utils/webhookSubmit";
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  CircularProgress,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { showSuccess, showError, showInfo } from "../../../utils/swalHelper";
import Button from "../Button/Button";
import {
  getMobileErrorMessage,
  getEmailErrorMessage,
  getNameErrorMessage,
} from "../../../utils/validators";
import styles from "./UnifiedLeadForm.module.css";

// Local storage key for leads
const LEADS_STORAGE_KEY = "gnrc_franchise_submitted_leads";

// Investment interest options
const COURSE_OPTIONS = [
  "500 Sq.Ft. Store (~₹22L)",
  "700 Sq.Ft. Store (~₹28L)",
  "1000 Sq.Ft. Store (~₹38L)",
  "Not Sure — Need Guidance",
];

// Current occupation options
const CLASS_OPTIONS = [
  "Business Owner",
  "Salaried Professional",
  "Retired / Looking for New Venture",
  "First-Time Entrepreneur",
  "Investor / Partner",
];

// Initial form state
const initialFormState = {
  name: "",
  mobile: "",
  email: "",
  investment_interest: "",
  current_occupation: "",
};

// Initial error state
const initialErrorState = {
  name: "",
  mobile: "",
  email: "",
  investment_interest: "",
  current_occupation: "",
};

const SITE_REF = "www.gnrcmedishopfranchise.com / franchise.gnrcmedishop.com";

// Shared inline styles for the Privacy Policy content
const ppStyles = {
  section: { marginBottom: "24px" },
  heading: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "12px",
    color: "#2D3561",
  },
  paragraph: {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "#374151",
    marginBottom: "12px",
  },
  list: {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "#374151",
    paddingLeft: "20px",
    margin: "0 0 12px",
  },
  listItem: { marginBottom: "6px" },
  link: {
    color: "#1FA89B",
    fontWeight: 500,
    textDecoration: "underline",
    wordBreak: "break-word",
  },
  lastUpdated: { fontSize: "12px", color: "#6B7280", fontStyle: "italic" },
};

// Privacy Policy Content Component
const PrivacyPolicyContent = () => (
  <div style={{ padding: "0 8px" }}>
    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Introduction</h3>
      <p style={ppStyles.paragraph}>
        GNRC Medishop presents this Privacy Policy to make users aware of how and
        through which means we may collect and process user data through our
        website, applications, and other platforms, while ensuring the protection
        and privacy of users' data. The policy provides insight into the type of
        sensitive personal data that we obtain, use for our service, and reassure
        users with what information is not required or sought from them. We aim at
        satisfying the curiosity of our users regarding their data usage and at
        respecting privacy.
      </p>
      <p style={ppStyles.paragraph}>
        Accessing or using {SITE_REF} constitutes your acceptance that you have
        read, understood, and agreed to abide by the terms of this Privacy Policy
        as well as the Website Terms and Conditions.
      </p>
      <p style={ppStyles.paragraph}>
        Notwithstanding anything contained herein, if the expression 'mobile
        application' is omitted in any portion, sub-portion or clause of this
        agreement, it shall not be construed that the terms and conditions laid
        down in those portions, sub-portions or clauses do not apply to access
        through mobile applications. This agreement shall also be binding on
        access through mobile applications.
      </p>
      <p style={ppStyles.paragraph}>
        You also agree and consent to our collecting, storing, processing,
        transferring, and sharing information (including sensitive personal
        information) relating to you with third parties or service providers for
        the purposes set out in this Privacy Policy.
      </p>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Language of the Terms</h3>
      <p style={ppStyles.paragraph}>
        The terms are adopted herein in the English language, and this site does
        not provide a translation of the English version of the Terms. In any
        inconsistency between the English version and a translation, the English
        version shall prevail.
      </p>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Changes to Privacy Policy</h3>
      <p style={ppStyles.paragraph}>
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

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>
        Types of Information Collected and Uses of Collected Information
      </h3>
      <p style={ppStyles.paragraph}>
        We collect and store your personal information, including sensitive
        personal details you provide from time to time while using {SITE_REF}.
        This information is essential to ensure a safe, secure, efficient, and
        personalized shopping experience.
      </p>
      <p style={ppStyles.paragraph}>
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
      <p style={ppStyles.paragraph}>
        You do not need to provide personal details for being able to log in and
        navigate our website and mobile application. If you wish to register as a
        user, you will have to provide the relevant personal details in the
        course of the registration process.
      </p>
      <p style={ppStyles.paragraph}>
        We will use the information you provide in operating our website and our
        mobile application. We may also use it in developing products and services
        tailored according to your choices so as to provide you with the best.
        Moreover, in countries where applicable law provides an option for you,
        with your consent, we shall also use information about you for direct
        marketing purposes on behalf of ourselves and other group companies,
        partners and agents of us.
      </p>
      <p style={ppStyles.paragraph}>
        We collect information when you make transactions on our website and
        mobile application, including your contact details and purchase
        information. We also collect data about your preferences based on your
        interactions with our platform. We also collect device and technical
        information when you use our website or mobile application.
      </p>
      <p style={ppStyles.paragraph}>
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
      <p style={ppStyles.paragraph}>
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
      <p style={ppStyles.paragraph}>
        We will ensure that user data is retained for at least 180 days after
        cancellation or withdrawal of registration. After that period, the data
        will be deleted. If it takes longer to delete, we will get in touch with
        the user.
      </p>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Data Sharing and Privacy Policy</h3>
      <ul style={ppStyles.list}>
        <li style={ppStyles.listItem}>
          <strong>Information Sharing with Laboratory Partners:</strong> When
          partners book diagnostic tests on customers' behalf, we securely share
          essential personal and health information—such as name, contact details,
          test type, and appointment details—with authorized labs and platforms
          (e.g., ITDose) solely to schedule, conduct, and deliver the services.
        </li>
        <li style={ppStyles.listItem}>
          <strong>Smart Report Generation via Authorized Providers:</strong> To
          enhance report quality and accuracy, ITDose may securely share test data
          with authorized providers (e.g., Niroggyan) solely for generating
          structured reports; these providers are contractually barred from
          storing or using the data for any other purpose.
        </li>
        <li style={ppStyles.listItem}>
          <strong>Delivery of Test Results:</strong> Test results are securely
          transmitted back to our systems and made available to our partners for
          download. In addition, results may be directly shared with customers
          through secure communication channels such as WhatsApp or SMS, ensuring
          timely and convenient access.
        </li>
        <li style={ppStyles.listItem}>
          <strong>Data Protection and Compliance:</strong> All third-party service
          providers involved in the handling or processing of diagnostic data
          operate under strict data protection agreements. These agreements
          mandate adherence to applicable privacy laws and security standards to
          safeguard the confidentiality and integrity of customer data at all
          stages of processing and transmission.
        </li>
      </ul>
      <p style={ppStyles.paragraph}>
        We hope this policy clarifies the different types of personal data we may
        collect on this website and how that data may be handled or used by us.
        Here, you can find various types of information we gather from customers
        regarding details pertaining to GNRC Medishop Private Limited.
      </p>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Personally Identifiable Information</h3>
      <p style={ppStyles.paragraph}>
        Personally Identifiable Information ("PII") means any information that can
        be reasonably used to identify a specific End User. This identification,
        along with the input of data, is directly related to your various
        undertakings on {SITE_REF} through creating an account, order placement,
        giving feedback, or recommending a product. Although you may discontinue
        these undertakings, once enrolled, obtaining the necessary information is
        obligatory.
      </p>
      <p style={ppStyles.paragraph}>
        Some of the information that we collect includes:
      </p>
      <ul style={ppStyles.list}>
        <li style={ppStyles.listItem}>Name</li>
        <li style={ppStyles.listItem}>Gender</li>
        <li style={ppStyles.listItem}>Mobile Numbers</li>
        <li style={ppStyles.listItem}>Email ID</li>
        <li style={ppStyles.listItem}>Date of Birth</li>
        <li style={ppStyles.listItem}>Mailing Address</li>
      </ul>
      <p style={ppStyles.paragraph}>
        Any additional personal information that you provide or that is collected
        about you over time will be handled in accordance with applicable local
        legislation.
      </p>
      <p style={ppStyles.paragraph}>
        We try to limit the situations under which we collect sensitive personal
        data. However, in certain situations, such collection can occur due to
        specific requests from you from time to time. Depending on your activities
        on {SITE_REF}, certain information requested by us may be obligatory, and
        the rest are not obligatory. Also, please note that should you fail to
        provide obligatory information for doing certain activities, you may not be
        able to do those certain activities.
      </p>
      <p style={ppStyles.paragraph}>
        The various purposes for which we need this information include, but are
        not limited to:
      </p>
      <ul style={ppStyles.list}>
        <li style={ppStyles.listItem}>Verifying you as a legitimate user.</li>
        <li style={ppStyles.listItem}>
          Allowing you to place orders for products and services.
        </li>
        <li style={ppStyles.listItem}>Payment Process.</li>
        <li style={ppStyles.listItem}>Informing you about order status.</li>
        <li style={ppStyles.listItem}>
          Delivering Reports by Service Providers.
        </li>
      </ul>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Technical Data</h3>
      <p style={ppStyles.paragraph}>
        For the purposes of this privacy policy statement, 'Customer Data' includes
        both Personal Data and Technical Data. The latter includes device and
        technical information you provide in the process of using our website or
        mobile application, for example, IP addresses, and other unique identifiers
        such as mobile carrier, operating system, and platform.
      </p>
      <p style={ppStyles.paragraph}>
        This information may be utilized to analyze website usage, enhance our
        services, improve our marketing and promotional activities, administer our
        website effectively, and better cater to your shopping preferences.
      </p>
      <p style={ppStyles.paragraph}>
        We use the Personally Identifiable Information to resolve disputes, enforce
        our agreements with you including the Website Terms of Use and this Privacy
        Policy, compliance with applicable laws and to assist law enforcement
        activities. All your personally identifiable information remains private
        and confidential on {SITE_REF}. We do not sell, rent or lease your
        information to third parties without your explicit permission.
      </p>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Data Security</h3>
      <p style={ppStyles.paragraph}>
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
      <p style={ppStyles.paragraph}>
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

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>
        Updating Personally Identifiable Information
      </h3>
      <p style={ppStyles.paragraph}>
        All users can access, update, and delete their Personally Identifiable
        Information (PII) on our website. We encourage users to periodically review
        and update their PII. To update your information, please follow the steps
        below:
      </p>
      <ol style={ppStyles.list}>
        <li style={ppStyles.listItem}>Login to the account.</li>
        <li style={ppStyles.listItem}>Click on 'My Account'.</li>
        <li style={ppStyles.listItem}>
          On the Dashboard click on 'Update your Profile' and make the necessary
          changes.
        </li>
        <li style={ppStyles.listItem}>
          On the Dashboard click on 'Address Book' to change your address(s).
        </li>
      </ol>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Data Tracking</h3>
      <ul style={ppStyles.list}>
        <li style={ppStyles.listItem}>
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
        <li style={ppStyles.listItem}>
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
        <li style={ppStyles.listItem}>
          <strong>Beacons –</strong> A web beacon is an electronic image embedded
          in the code of a web page. We use web beacons to monitor user traffic
          patterns from one page to another and to enhance site performance.
        </li>
      </ul>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Sharing Data with WebEngage</h3>
      <p style={ppStyles.paragraph}>
        To enhance our customer experience and optimize our communication
        strategies, {SITE_REF} shares specific customer data with WebEngage, a
        customer engagement and retention platform. This data may include basic
        customer information, user behavior on our website or app, and transaction
        history. As a data processor acting on our behalf, WebEngage is
        contractually bound to process the data exclusively in accordance with our
        instructions and in compliance with relevant data protection laws.
      </p>
      <p style={ppStyles.paragraph}>We use WebEngage to:</p>
      <ul style={ppStyles.list}>
        <li style={ppStyles.listItem}>
          Send customized notifications, promotions, and communications,
          personalized alerts, messages, and deals.
        </li>
        <li style={ppStyles.listItem}>
          Analyze customer interactions and engagement patterns to gain valuable
          insights into user preferences.
        </li>
        <li style={ppStyles.listItem}>
          Utilize user behavior analytics to improve services, enhance customer
          engagement, and drive strategic growth.
        </li>
      </ul>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>
        Security of Personally Identifiable Information
      </h3>
      <p style={ppStyles.paragraph}>
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

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Advertisement</h3>
      <p style={ppStyles.paragraph}>
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

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Other Content</h3>
      <p style={ppStyles.paragraph}>
        All other links are for information purposes only and are provided as a
        convenience to you. You acknowledge and agree that this site is not
        responsible for the availability of, or any content, advertising or
        products on or available from those Internet sites or resources, nor for
        any damage, loss or consequence of any sort which may be caused to your
        computer system or the internet connection, for access to sites or
        resources related to this site.
      </p>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Miscellaneous Privacy Policy</h3>
      <p style={ppStyles.paragraph}>
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

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>
        Mindfulness and Compliance with Company Policies
      </h3>
      <p style={ppStyles.paragraph}>
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

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Public Areas</h3>
      <p style={ppStyles.paragraph}>
        Some aspects of our {SITE_REF} website allow you to publicly contribute
        comments or reviews on those pages. Remember that such information is public
        and can be viewed by other customers or businesses. It might be reproduced
        on other websites or search results, making it that much easier for others
        to aggregate or obtain your information.
      </p>
      <p style={ppStyles.paragraph}>
        In case you do not want to receive promotional emails or marketing
        information from us, then please contact us at{" "}
        <a href="mailto:care@gnrcmedishop.com" style={ppStyles.link}>
          care@gnrcmedishop.com
        </a>
        . We will take care of your request as soon as possible.
      </p>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Data Subject Rights</h3>
      <p style={ppStyles.paragraph}>
        You agree that if you provide your cell phone number at the time of signing
        up, we can contact you by phone, SMS, WhatsApp, or in any other way. We may,
        at our own discretion and wherever it is permissible by law, recover a
        reasonable administrative fee charged for this facility. We reserve the
        right to withhold or withdraw your access to our customer information and we
        will give an explanation in cases where this is mandated under applicable
        law.
      </p>
      <p style={ppStyles.paragraph}>
        If you have any issues or feedback or complaints related to how your
        customer data has been used or shared, please contact us at{" "}
        <a href="mailto:care@gnrcmedishop.com" style={ppStyles.link}>
          care@gnrcmedishop.com
        </a>
        .
      </p>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Jurisdiction</h3>
      <p style={ppStyles.paragraph}>
        The Terms, and your use of this website shall be governed by and construed
        in accordance with the applicable laws of India. Its conflict of law
        provisions are also applicable here. This website and you, accept the
        exclusive jurisdiction of the courts located in Kolkata, West Bengal, India.
      </p>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Precautions You Can Take</h3>
      <p style={ppStyles.paragraph}>
        Passwords should be complex, not disclosed to anyone, changed periodically,
        and not written on any paper. All activities carried out under an account
        are the responsibility of users. Keep your computer protected with
        up-to-date antivirus software and the latest version of the browser but
        watch out for phishing e-mails that might ask you to give them some private
        or sensitive information by sending you an e-mail and using your e-mail
        address.
      </p>
      <p style={ppStyles.paragraph}>
        {SITE_REF} and its representatives never request you to mail to us any
        personal or sensitive information through e-mails. In case you ever get a
        request like that, just relax; it is not from us.
      </p>
    </section>

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Others</h3>
      <p style={ppStyles.paragraph}>
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

    <section style={ppStyles.section}>
      <h3 style={ppStyles.heading}>Contact Us</h3>
      <p style={ppStyles.paragraph}>
        For further details or to resolve queries or grievances, please contact the
        Grievance Officer:
      </p>
      <ul style={ppStyles.list}>
        <li style={ppStyles.listItem}>
          <strong>Grievance Officer:</strong> Firoj Khan
        </li>
        <li style={ppStyles.listItem}>
          <strong>Email:</strong>{" "}
          <a href="mailto:firoj.khan@gnrcmedishop.com" style={ppStyles.link}>
            firoj.khan@gnrcmedishop.com
          </a>
        </li>
        <li style={ppStyles.listItem}>
          <strong>Phone:</strong>{" "}
          <a href="tel:7002189744" style={ppStyles.link}>
            7002189744
          </a>
        </li>
      </ul>
      <p style={ppStyles.paragraph}>
        {SITE_REF} will make all possible endeavours to resolve your grievance
        within 15 days from the date of receipt. By proceeding you acknowledge that
        you accept all the conditions stated above voluntarily and with consent.
      </p>
    </section>

    <p style={ppStyles.lastUpdated}>Last Updated: June 2026</p>
  </div>
);

// Privacy Policy Modal Component
const PrivacyPolicyModal = ({ isOpen, onClose }) => {
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
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "16px",
          }}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "80vh",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderBottom: "1px solid #E5E7EB",
                backgroundColor: "#F9FAFB",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: 0,
                  color: "#2D3561",
                }}
              >
                Privacy Policy
              </h2>
              <IconButton
                onClick={onClose}
                aria-label="Close modal"
                size="small"
                sx={{ color: "#6B7280" }}
              >
                <Icon icon="mdi:close" />
              </IconButton>
            </div>
            <div
              style={{
                padding: "20px",
                overflowY: "auto",
                maxHeight: "calc(80vh - 60px)",
              }}
            >
              <PrivacyPolicyContent />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const UnifiedLeadForm = ({
  variant = "default", // 'default', 'dark', 'hero', 'drawer'
  title = "Apply Now",
  subtitle = "Fill in your details and our franchise team will assist you",
  submitButtonText = "Submit Enquiry",
  showTitle = true,
  showSubtitle = true,
  showCourseFields = true,
  showTrustBadges = true,
  showConsent = true,
  showPhoneButton = false,
  onClose, // Called when drawer should close (for drawer variant)
  onSubmitSuccess,
  className = "",
  formId = "unified-lead-form",
}) => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorState);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Refs for input focus management
  const nameRef = useRef(null);
  const mobileRef = useRef(null);
  const emailRef = useRef(null);
  const courseRef = useRef(null);
  const classRef = useRef(null);

  // Check if lead already exists in localStorage
  const checkDuplicateLead = useCallback((email, mobile) => {
    try {
      const storedLeads = JSON.parse(
        localStorage.getItem(LEADS_STORAGE_KEY) || "[]"
      );
      return storedLeads.some(
        (lead) =>
          lead.email.toLowerCase() === email.toLowerCase() ||
          lead.mobile === mobile
      );
    } catch {
      return false;
    }
  }, []);

  // Save lead to localStorage
  const saveLeadToStorage = useCallback((leadData) => {
    try {
      const storedLeads = JSON.parse(
        localStorage.getItem(LEADS_STORAGE_KEY) || "[]"
      );
      storedLeads.push({
        email: leadData.email,
        mobile: leadData.mobile,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(storedLeads));
    } catch (error) {
      console.error("Error saving lead to storage:", error);
    }
  }, []);

  // Handle input change
  const handleChange = useCallback(
    (field) => (event) => {
      let value = event.target.value;

      // Special handling for mobile number - only allow digits
      if (field === "mobile") {
        value = value.replace(/\D/g, "").slice(0, 10);
      }

      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: "",
        }));
      }
    },
    [errors]
  );

  // Handle input blur - validate on blur
  const handleBlur = useCallback(
    (field) => () => {
      setTouched((prev) => ({
        ...prev,
        [field]: true,
      }));

      // Validate the field
      let errorMessage = "";

      switch (field) {
        case "name":
          errorMessage = getNameErrorMessage(formData.name);
          break;
        case "mobile":
          errorMessage = getMobileErrorMessage(formData.mobile);
          break;
        case "email":
          errorMessage = getEmailErrorMessage(formData.email);
          break;
        case "investment_interest":
          if (showCourseFields && !formData.investment_interest) {
            errorMessage = "Please select an investment plan";
          }
          break;
        case "current_occupation":
          if (showCourseFields && !formData.current_occupation) {
            errorMessage = "Please select your occupation";
          }
          break;
        default:
          break;
      }

      setErrors((prev) => ({
        ...prev,
        [field]: errorMessage,
      }));
    },
    [formData, showCourseFields]
  );

  // Validate entire form
  const validateForm = useCallback(() => {
    const newErrors = {
      name: getNameErrorMessage(formData.name),
      mobile: getMobileErrorMessage(formData.mobile),
      email: getEmailErrorMessage(formData.email),
      investment_interest:
        showCourseFields && !formData.investment_interest
          ? "Please select an investment plan"
          : "",
      current_occupation:
        showCourseFields && !formData.current_occupation
          ? "Please select your occupation"
          : "",
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      mobile: true,
      email: true,
      investment_interest: true,
      current_occupation: true,
    });

    return Object.values(newErrors).every((error) => !error);
  }, [formData, showCourseFields]);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form
    if (!validateForm()) {
      // Focus first field with error
      if (errors.name || !formData.name) {
        nameRef.current?.focus();
      } else if (errors.mobile || !formData.mobile) {
        mobileRef.current?.focus();
      } else if (errors.email || !formData.email) {
        emailRef.current?.focus();
      }
      return;
    }

    // Check for duplicate — show alert ON TOP of drawer (don't close drawer)
    if (isDuplicateLead(formData.mobile)) {
      await showInfo(
        'Already Registered!',
        'This mobile number has already been registered. Our franchise team will contact you soon.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare lead data
      const leadData = {
        name: formData.name.trim(),
        mobile: formData.mobile.trim(),
        email: formData.email.trim(),
        investment_interest: formData.investment_interest || '',
        current_occupation: formData.current_occupation || '',
        source: formId || 'general',
      };

      // Submit to webhook (Pabbly or dummy)
      const result = await submitLeadToWebhook(leadData);

      if (result.success) {
        // Push lead form submission event to GTM dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'lead_form_submission',
          formSource: formId || 'general',
          investmentInterest: formData.investment_interest,
        });

        // Mark as submitted for duplicate prevention
        markLeadAsSubmitted(formData.mobile);

        // Also save to localStorage for local duplicate checking
        saveLeadToStorage(formData);

        // Set lead submitted flag for thank you page access
        sessionStorage.setItem("lead_submitted", "true");
        sessionStorage.setItem("lead_name", formData.name);

        // Show success alert ON TOP of drawer
        await showSuccess(
          'Franchise Enquiry Received! \uD83C\uDFEA',
          'Thank you for your interest in GNRC Medishop Franchise! Our business development team will contact you within 24 hours.'
        );

        // THEN reset form
        setFormData(initialFormState);
        setTouched({});
        setErrors(initialErrorState);

        // THEN close drawer (if in a drawer)
        if (onClose) {
          onClose();
        }

        // Callback for parent component
        if (onSubmitSuccess) {
          onSubmitSuccess(formData);
        }

        // THEN navigate to thank you page
        navigate('/thank-you');
      } else {
        await showError('Oops!', result.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      await showError(
        'Something went wrong',
        'Please try again or call us directly at +91-7086036887.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const fieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * i, duration: 0.3 },
    }),
  };

  // Determine styles based on variant
  const getVariantClass = () => {
    switch (variant) {
      case "dark":
        return styles.variantDark;
      case "hero":
        return styles.variantHero;
      case "drawer":
        return styles.variantDrawer;
      default:
        return styles.variantDefault;
    }
  };

  return (
    <div
      className={`${styles.formContainer} ${getVariantClass()} ${className}`}
    >
      {/* Form Header */}
      {(showTitle || showSubtitle) && (
        <div className={styles.formHeader}>
          {showTitle && (
            <Typography variant="h5" className={styles.formTitle}>
              {title}
            </Typography>
          )}
          {showSubtitle && subtitle && (
            <Typography
              variant="body2"
              className={styles.formSubtitle}
              sx={
                variant === "dark" || variant === "drawer"
                  ? { color: "#FFFFFFB3 !important" }
                  : undefined
              }
            >
              {subtitle}
            </Typography>
          )}
        </div>
      )}

      {/* Form */}
      <form
        id={formId}
        onSubmit={handleSubmit}
        className={styles.form}
        noValidate
        autoComplete="off"
      >
        {/* Name Field */}
        <motion.div
          custom={0}
          variants={fieldVariants}
          initial="hidden"
          animate="visible"
        >
          <TextField
            inputRef={nameRef}
            fullWidth
            placeholder="Full Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange("name")}
            onBlur={handleBlur("name")}
            error={touched.name && !!errors.name}
            helperText={touched.name && errors.name}
            disabled={isSubmitting}
            className={styles.textField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon
                    icon="mdi:account-outline"
                    className={styles.inputIcon}
                    style={
                      variant === "dark" || variant === "drawer"
                        ? { color: "#FFFFFF80" }
                        : undefined
                    }
                  />
                </InputAdornment>
              ),
            }}
            inputProps={{
              "aria-label": "Your name",
              maxLength: 50,
            }}
          />
        </motion.div>

        {/* Mobile Field */}
        <motion.div
          custom={1}
          variants={fieldVariants}
          initial="hidden"
          animate="visible"
        >
          <TextField
            inputRef={mobileRef}
            fullWidth
            placeholder="Mobile Number"
            variant="outlined"
            value={formData.mobile}
            onChange={handleChange("mobile")}
            onBlur={handleBlur("mobile")}
            error={touched.mobile && !!errors.mobile}
            helperText={touched.mobile && errors.mobile}
            disabled={isSubmitting}
            className={styles.textField}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  className={styles.mobilePrefix}
                >
                  <Typography
                    variant="body2"
                    className={styles.countryCode}
                    sx={
                      variant === "dark" || variant === "drawer"
                        ? { color: "#FFFFFFCC !important" }
                        : undefined
                    }
                  >
                    +91
                  </Typography>
                  <span
                    className={styles.prefixDivider}
                    style={
                      variant === "dark" || variant === "drawer"
                        ? { color: "#FFFFFF4D" }
                        : undefined
                    }
                  >
                    -
                  </span>
                </InputAdornment>
              ),
            }}
            inputProps={{
              "aria-label": "Mobile number",
              maxLength: 10,
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />
        </motion.div>

        {/* Email Field */}
        <motion.div
          custom={2}
          variants={fieldVariants}
          initial="hidden"
          animate="visible"
        >
          <TextField
            inputRef={emailRef}
            fullWidth
            placeholder="Email Address"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            disabled={isSubmitting}
            className={styles.textField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon
                    icon="mdi:email-outline"
                    className={styles.inputIcon}
                    style={
                      variant === "dark" || variant === "drawer"
                        ? { color: "#FFFFFF80" }
                        : undefined
                    }
                  />
                </InputAdornment>
              ),
            }}
            inputProps={{
              "aria-label": "Email address",
            }}
          />
        </motion.div>

        {/* Course Interest Field */}
        {showCourseFields && (
          <motion.div
            custom={3}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
          >
            <FormControl
              fullWidth
              error={touched.investment_interest && !!errors.investment_interest}
              className={styles.textField}
            >
              <Select
                ref={courseRef}
                displayEmpty
                value={formData.investment_interest}
                onChange={handleChange("investment_interest")}
                onBlur={handleBlur("investment_interest")}
                disabled={isSubmitting}
                startAdornment={
                  <InputAdornment position="start">
                    <Icon
                      icon="mdi:store-outline"
                      className={styles.inputIcon}
                      style={
                        variant === "dark" || variant === "drawer"
                          ? { color: "#FFFFFF80" }
                          : undefined
                      }
                    />
                  </InputAdornment>
                }
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <span style={{ color: variant === "dark" || variant === "drawer" ? "#FFFFFF80" : undefined, opacity: variant === "dark" || variant === "drawer" ? 1 : 0.5 }}>
                        Select Investment Plan
                      </span>
                    );
                  }
                  return selected;
                }}
                MenuProps={{
                  PaperProps: {
                    sx: { zIndex: 99999 },
                  },
                  disablePortal: false,
                  style: { zIndex: 99999 },
                }}
                inputProps={{
                  "aria-label": "Investment interest",
                }}
                sx={
                  variant === "dark" || variant === "drawer"
                    ? { color: "#FFFFFF", "& .MuiSelect-icon": { color: "#FFFFFF80" } }
                    : undefined
                }
              >
                {COURSE_OPTIONS.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              {touched.investment_interest && errors.investment_interest && (
                <FormHelperText>{errors.investment_interest}</FormHelperText>
              )}
            </FormControl>
          </motion.div>
        )}

        {/* Occupation Field */}
        {showCourseFields && (
          <motion.div
            custom={4}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
          >
            <FormControl
              fullWidth
              error={touched.current_occupation && !!errors.current_occupation}
              className={styles.textField}
            >
              <Select
                ref={classRef}
                displayEmpty
                value={formData.current_occupation}
                onChange={handleChange("current_occupation")}
                onBlur={handleBlur("current_occupation")}
                disabled={isSubmitting}
                startAdornment={
                  <InputAdornment position="start">
                    <Icon
                      icon="mdi:briefcase-outline"
                      className={styles.inputIcon}
                      style={
                        variant === "dark" || variant === "drawer"
                          ? { color: "#FFFFFF80" }
                          : undefined
                      }
                    />
                  </InputAdornment>
                }
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <span style={{ color: variant === "dark" || variant === "drawer" ? "#FFFFFF80" : undefined, opacity: variant === "dark" || variant === "drawer" ? 1 : 0.5 }}>
                        Select Current Occupation
                      </span>
                    );
                  }
                  return selected;
                }}
                MenuProps={{
                  PaperProps: {
                    sx: { zIndex: 99999 },
                  },
                  disablePortal: false,
                  style: { zIndex: 99999 },
                }}
                inputProps={{
                  "aria-label": "Current occupation",
                }}
                sx={
                  variant === "dark" || variant === "drawer"
                    ? { color: "#FFFFFF", "& .MuiSelect-icon": { color: "#FFFFFF80" } }
                    : undefined
                }
              >
                {CLASS_OPTIONS.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              {touched.current_occupation && errors.current_occupation && (
                <FormHelperText>{errors.current_occupation}</FormHelperText>
              )}
            </FormControl>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.div
          custom={showCourseFields ? 5 : 3}
          variants={fieldVariants}
          initial="hidden"
          animate="visible"
          className={styles.submitWrapper}
        >
          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? (
              <Box className={styles.loadingState}>
                <CircularProgress size={20} color="inherit" />
                <span>Submitting...</span>
              </Box>
            ) : (
              <>
                <Icon icon="mdi:send" className={styles.submitIcon} />
                <span>{submitButtonText}</span>
              </>
            )}
          </Button>
        </motion.div>

        {/* Trust Badges */}
        {showTrustBadges && (
          <motion.div
            custom={showCourseFields ? 6 : 4}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            className={styles.trustBadges}
          >
            <div
              className={styles.trustBadge}
              style={
                variant === "dark" || variant === "drawer"
                  ? { color: "#FFFFFF99" }
                  : undefined
              }
            >
              <Icon icon="mdi:trophy-award" className={styles.trustIcon} />
              <span>20+ Years Legacy</span>
            </div>
            <div
              className={styles.trustBadge}
              style={
                variant === "dark" || variant === "drawer"
                  ? { color: "#FFFFFF99" }
                  : undefined
              }
            >
              <Icon icon="mdi:currency-inr" className={styles.trustIcon} />
              <span>₹80 Cr Turnover</span>
            </div>
            <div
              className={styles.trustBadge}
              style={
                variant === "dark" || variant === "drawer"
                  ? { color: "#FFFFFF99" }
                  : undefined
              }
            >
              <Icon icon="mdi:percent-circle" className={styles.trustIcon} />
              <span>20-22% Gross Margin</span>
            </div>
          </motion.div>
        )}

        {/* Consent Text */}
        {showConsent && (
          <motion.div
            custom={showCourseFields ? 7 : 5}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
          >
            <Typography
              variant="caption"
              className={styles.consentText}
              sx={
                variant === "dark" || variant === "drawer"
                  ? { color: "#FFFFFF99 !important" }
                  : undefined
              }
            >
              By submitting this form, I agree to the{" "}
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(true)}
                className={styles.privacyLink}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                Terms & Conditions and Privacy Policy
              </button>
              . By submitting this form, I agree to receive communication from GNRC Medishop regarding franchise opportunities.
            </Typography>
          </motion.div>
        )}
      </form>

      {/* Phone Button */}
      {showPhoneButton && (
        <div className={styles.phoneSection}>
          <Typography
            className={styles.orText}
            sx={{ color: "#FFFFFF80 !important" }}
          >
            Or call us directly
          </Typography>
          <a href="tel:+917086036887" className={styles.phoneLink}>
            <Icon icon="mdi:phone" />
            <span>+91-7086036887</span>
          </a>
        </div>
      )}

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
};

export default UnifiedLeadForm;
