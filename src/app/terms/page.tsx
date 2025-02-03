import React from 'react';
import './index.scss';
import Header from '@/components/header/page';
import Footer from '@/components/footer/MainFooter';

const Terms: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="terms">
        <h1>Lingroks Terms and Conditions</h1>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Lingroks! These Terms and Conditions (&quot;Terms&quot;)
          govern your use of Lingroks&apos; website, mobile application, browser
          extension, and any related services (collectively, the
          &quot;Services&quot;). By accessing or using our Services, you agree
          to comply with and be bound by these Terms. If you do not agree with
          any part of these Terms, you should discontinue the use of our
          Services immediately.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          To use Lingroks, you must be at least 13 years old. By using our
          Services, you confirm that you meet this requirement. If you are using
          the Services on behalf of an organization, you represent that you have
          the authority to bind that organization to these Terms.
        </p>

        <h2>3. Description of Services</h2>
        <p>
          Lingroks provides AI-powered language processing tools, including
          translation, text summarization, and text-to-speech functionalities.
          The Services may be accessed through our website, mobile application,
          or browser extension.
        </p>

        <h2>4. Account Registration and Security</h2>
        <ul>
          <li>
            You may need to create an account to access certain features of the
            Services.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities under your account.
          </li>
          <li>
            You agree to notify us immediately of any unauthorized access or use
            of your account.
          </li>
          <li>
            Lingroks reserves the right to suspend or terminate accounts that
            violate these Terms.
          </li>
        </ul>

        <h2>5. Acceptable Use Policy</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use Lingroks for any illegal, fraudulent, or unauthorized purpose.
          </li>
          <li>
            Interfere with or disrupt the Services or servers connected to the
            Services.
          </li>
          <li>
            Engage in data scraping, automated data collection, or reverse
            engineering of our software.
          </li>
          <li>
            Upload or share content that is harmful, abusive, defamatory, or
            otherwise objectionable.
          </li>
        </ul>

        <h2>6. Intellectual Property</h2>
        <ul>
          <li>
            Lingroks and its associated content, trademarks, and intellectual
            property are owned by Lingroks and protected under applicable laws.
          </li>
          <li>
            You may not use, copy, or distribute any part of the Services
            without prior written permission from Lingroks.
          </li>
        </ul>

        <h2>7. Third-Party Services</h2>
        <p>
          Lingroks may integrate with third-party services. We are not
          responsible for the content, policies, or practices of these third
          parties. Your interactions with them are subject to their respective
          terms and policies.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law:</p>
        <ul>
          <li>
            Lingroks shall not be liable for any direct, indirect, incidental,
            or consequential damages arising from your use of the Services.
          </li>
          <li>
            We do not guarantee that the Services will be error-free,
            uninterrupted, or free from security breaches.
          </li>
        </ul>

        <h2>9. No Payments or Subscriptions (Current Phase)</h2>
        <p>
          Currently, Lingroks does not require any payment for accessing the
          Services. However, we plan to introduce subscription plans and payment
          features in future releases. Any changes regarding payments will be
          updated in these Terms, and you will be notified accordingly.
        </p>

        <h2>10. Modifications and Updates</h2>
        <p>
          We reserve the right to update or modify these Terms at any time. Any
          changes will be posted on our website, and your continued use of the
          Services constitutes acceptance of the revised Terms.
        </p>

        <h2>11. Termination</h2>
        <p>
          We may suspend or terminate your access to the Services at any time if
          you violate these Terms or engage in activities that may harm Lingroks
          or its users.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the jurisdiction in which Lingroks is officially registered.
          If Lingroks is not yet registered in any jurisdiction, these Terms
          shall be governed by general principles of international business law
          until such registration is completed.
        </p>

        <h2>13. Contact Information</h2>
        <p>
          For any questions or concerns regarding these Terms, you may contact
          us at services@lingroks.live.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
