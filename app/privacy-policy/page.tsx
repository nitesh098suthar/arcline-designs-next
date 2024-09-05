import React from "react";

const Policy = () => {
  return (
    <div className="min-h-[10vh] py-10">
      <div className="flex justify-center items-center ">
        <div className=" flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold text-center">Privacy Policy</h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-white text-black text-justify">
        <div className="max-w-4xl mx-auto">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Welcome to Arcline Architects. We value your privacy and are
              committed to protecting your personal data. This Privacy Policy
              outlines how we collect, use, disclose, and protect your
              information when you visit our site.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Information We Collect
            </h2>

            <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
            <p>
              We may collect the following personal data when you interact with
              our Site:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Contact Information: Name, email address, phone number, and
                mailing address.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Non-Personal Data</h3>
            <p>
              We may also collect non-personal data that does not directly
              identify you:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Usage Data: Information about how you use our Site, such as
                pages viewed, time spent on pages, and navigation paths.
              </li>
              <li>
                Technical Data: IP address, browser type and version, time zone
                setting, browser plug-in types and versions, operating system
                and platform, and other technology on the devices you use to
                access the Site.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              How We Use Your Information
            </h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc list-inside">
              <li>
                Service Delivery: To provide and manage our services, including
                processing your orders and managing your account.
              </li>
              <li>
                Communication: To respond to your inquiries, send newsletters,
                and provide customer support.
              </li>
              <li>
                Personalization: To tailor the content and features on our Site
                to your interests and preferences.
              </li>
              <li>
                Marketing: To send promotional materials and updates about our
                services, with your consent where required by law.
              </li>
              <li>
                Improvement: To analyze and improve our Site, products, and
                services.
              </li>
              <li>
                Security: To protect our Site and users from fraud and other
                security risks.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              How We Share Your Information
            </h2>
            <p>
              We do not sell or rent your personal data to third parties. We may
              share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Service Providers: With third-party service providers who assist
                us in operating our Site, conducting our business, or servicing
                you, so long as those parties agree to keep this information
                confidential.
              </li>
              <li>
                Legal Requirements: When required by law or in response to valid
                requests by public authorities (e.g., a court or government
                agency).
              </li>
              <li>
                Business Transfers: In connection with, or during negotiations
                of, any merger, sale of company assets, financing, or
                acquisition of all or a portion of our business to another
                company.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, loss, or
              destruction. However, no method of transmission over the internet
              or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Access: The right to request access to the personal data we hold
                about you.
              </li>
              <li>
                Correction: The right to request correction of any inaccurate or
                incomplete data.
              </li>
              <li>
                Deletion: The right to request deletion of your personal data,
                subject to certain conditions.
              </li>
              <li>
                Restriction: The right to request restriction of processing your
                personal data.
              </li>
              <li>
                Objection: The right to object to the processing of your
                personal data.
              </li>
              <li>
                Portability: The right to request transfer of your personal data
                to another party.
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              provided below.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these sites.
              We encourage you to read the privacy policies of any third-party
              sites you visit.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. Your
              continued use of the Site after any changes signifies your
              acceptance of the revised Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:ankit.suthar44@gmail.com"
                className="text-primary hover:underline"
              >
                ankit.suthar44@gmail.com
              </a>
            </p>
          </section>

          <footer className="mt-8">
            <p className="text-sm text-darkGrey">
              By using our Site, you acknowledge that you have read and
              understand this Privacy Policy.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Policy;
