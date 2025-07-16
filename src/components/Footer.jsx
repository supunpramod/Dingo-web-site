
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">About Us</h4>
            <p className="text-gray-400">
              Heaven fruitful doesn't over for these theheaven fruitful doe over days
              appear creeping seasons sad behold beari ath of it fly signs bearing
              be one blessed after.
            </p>
          </div>

          {/* Important Links Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Important Link</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">WHMCS-bridge</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Search Domain</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">My Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shopping Cart</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Our Shop</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Contact us</h4>
            <div className="space-y-3 text-gray-400">
              <p>
                <span className="font-medium text-white">Address:</span> Hath of it fly signs bear be one blessed after
              </p>
              <p>
                <span className="font-medium text-white">Phone:</span> +2 36 265 (8060)
              </p>
              <p>
                <span className="font-medium text-white">Email:</span> info@colorlib.com
              </p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Newsletter</h4>
            <p className="text-gray-400">
              Heaven fruitful doesn't over lesser in days. Appear creeping seas
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with{' '}
              <i className="ti-heart text-orange-500" aria-hidden="true"></i> by{' '}
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                Colorlib
              </a>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="ti-dribbble"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;