import React from 'react';
import styles from '../HomePage/HeroSection/HeroContent.module.css'

const ContactSection: React.FC = () => {
  return (
    <div className=" py-20">
      <div className="container mx-auto px-4">
        <h2 className={`${styles.goldmanBold} text-4xl font-bold mb-8 text-center`}>Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fade-in-left">
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="animate-fade-in-right">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className={`${styles.goldmanRegular} text-2xl font-bold mb-4`}>Get in Touch</h3>
              <p className={`${styles.jacques} text-lg mb-4`}>
                Have any questions or inquiries? Feel free to reach out to us using the form, and we'll get back to you as soon as possible.
              </p>
              <div className="flex items-center mb-4">
                <i className="fas fa-map-marker-alt text-green-500 mr-4"></i>
                <span>Safi ,Morocco</span>
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-envelope text-green-500 mr-4"></i>
                <span>anasc00ding@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-green-500 mr-4"></i>
                <span>+212 601992205</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;