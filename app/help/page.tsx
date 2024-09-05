import React from "react";

const Help = () => {
  return (
    <div className="min-h-[10vh] py-10">
      <div className="flex justify-center items-center">
        <div className="flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold text-center">Help</h1>
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
              Welcome to the Archline Designs help page. Here you will find
              information on how to navigate and use our website.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Navigation Guide</h2>
            <p>Our website has the following main sections:</p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Home/Landing Page:</strong> Contains all designs,
                testimonials, and other information.
              </li>
              <li>
                <strong>About Us:</strong> Learn more about Archline Designs and
                our mission.
              </li>
              <li>
                <strong>Contact Us:</strong> Get in touch with us for inquiries
                or feedback.
              </li>
              <li>
                <strong>Privacy Policy:</strong> Understand how we handle your
                personal data.
              </li>
              <li>
                <strong>Help:</strong> Assistance on navigating and using the
                website.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Portfolio Section</h2>
            <p>
              View our architectural designs on the home/landing page. Click on
              any project to see detailed information and images.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Search Functionality
            </h2>
            <p>
              Use the search bar at the top of the page to find specific
              projects or design styles.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">User Account</h2>
            <p>
              Currently, we do not offer user accounts. Stay tuned for future
              updates.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>
              For any inquiries or feedback, please visit our{" "}
              <a href="/contact-us" className="text-primary hover:underline">
                Contact Us
              </a>{" "}
              page.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Technical Requirements
            </h2>
            <p>
              Our website is compatible with modern browsers. For the best
              experience, we recommend using the latest version of Chrome,
              Firefox, or Safari.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Privacy Policy and Terms of Service
            </h2>
            <p>
              Please review our{" "}
              <a href="/policy" className="text-primary hover:underline">
                Privacy Policy
              </a>{" "}
              for details on how we handle your data.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Support</h2>
            <p>
              For additional help, please contact us through our{" "}
              <a href="/contact-us" className="text-primary hover:underline">
                Contact Us
              </a>{" "}
              page.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
            <p>
              We value your feedback! Let us know how we can improve by
              contacting us.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Updates and Announcements
            </h2>
            <p>
              Stay updated with new projects and features by visiting our
              home/landing page regularly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Help;
