import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // react-icons ব্যবহার করছি

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-600 py-10 mt-auto border-t border-gray-200">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* কলাম ১ */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold text-blue-600 mb-2">ArtHub</h3>
          <p className="text-sm leading-relaxed">
            ডিজিটাল আর্টওয়ার্কের জন্য আপনার বিশ্বস্ত গন্তব্য। শিল্পীদের সাথে সংযোগ করুন এবং আপনার পছন্দের আর্ট সংগ্রহ করুন।
          </p>
        </div>

        {/* কলাম ২ */}
        <div className="flex flex-col items-start md:items-center">
          <h4 className="font-semibold text-gray-800 mb-3">কুইক লিংকস</h4>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="/about" className="hover:text-blue-600 transition">আমাদের সম্পর্কে</a>
            <a href="/contact" className="hover:text-blue-600 transition">যোগাযোগ</a>
            <a href="/careers" className="hover:text-blue-600 transition">ক্যারিয়ার</a>
          </div>
        </div>

        {/* কলাম ৩ */}
        <div className="flex flex-col items-start md:items-end">
          <h4 className="font-semibold text-gray-800 mb-3">আমাদের সাথে থাকুন</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-600 transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-600 transition">
              <FaInstagram size={24} />
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            © {currentYear} ArtHub. All rights reserved.
          </p>
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-400 mt-8 pt-4 border-t border-gray-200">
        Developed with ♥ for ArtHub Project.
      </div>
    </footer>
  );
};

export default Footer;