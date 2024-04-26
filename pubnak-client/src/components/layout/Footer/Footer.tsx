import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4">PubNak</h4>
            <p className="text-gray-400">Connect with influencers and promote your brand.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/About">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="https://www.facebook.com/Anas.NAK.07/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/anas-nakhli-31aa83255/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.instagram.com/anas__nak/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay up to date with our latest news and updates.</p>
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full md:w-auto px-4 py-2 mb-2 md:mb-0 md:mr-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors duration-300 w-full md:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PubNak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;