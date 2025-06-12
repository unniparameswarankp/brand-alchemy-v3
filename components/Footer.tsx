
import Link from 'next/link';
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaDribbble, FaBehance, FaTimes } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container">

        {/* Main footer links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm mb-16">
          <div>
            <h3 className="font-light text-2xl mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Industries</Link></li>
              <li><Link href="#">Works</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-light text-2xl mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">Branding</Link></li>
              <li><Link href="#">Experience Design</Link></li>
              <li><Link href="#">Technology</Link></li>
              <li><Link href="#">Digital Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-light text-2xl mb-4">Other</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">Partnership</Link></li>
              <li><Link href="#">Awards and Recognitions</Link></li>
              <li><Link href="#">Insights</Link></li>
              <li><Link href="#">Blogs</Link></li>
              <li><Link href="#">Resource Augmentation</Link></li>
              <li><Link href="#">Testimonials</Link></li>
              <li><Link href="#">Our Clients</Link></li>
              <li><Link href="#">Submit Feedback to Our CEO</Link></li>
              <li><Link href="#">Download Brochure</Link></li>
              <li><Link href="#">Sitemap</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="font-light text-2xl mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>General Enquiry : +91 480 2733 111</li>
              <li>Sales Enquiry : +91 480 2733 555</li>
              <li>Email : info@bandalchemys.com</li>
              <li>HR Enquiry : +91 480 2733 999</li>
              <li>Whatsapp ( Sales ) : +91 8606 483 399</li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">Brand Alchemy © 2025 All rights reserved</div>
          {/* Social Icons */}
        <div className="flex justify-center gap-6 text-m text-white mb-4 md:mb-0">
          <Link className="text-gray-400 cursor-pointer" href="#"><FaLinkedin  /></Link>
          <Link className="text-gray-400 cursor-pointer" href="#"><FaYoutube /></Link>
          <Link className="text-gray-400 cursor-pointer" href="#"><FaInstagram /></Link>
          <Link className="text-gray-400 cursor-pointer" href="#"><FaFacebook /></Link>
          <Link className="text-gray-400 cursor-pointer" href="#"><FaDribbble /></Link>
          <Link className="text-gray-400 cursor-pointer" href="#"><FaBehance /></Link>
          <Link className="text-gray-400 cursor-pointer" href="#"><FaTimes /></Link>
        </div>
          <div className="flex gap-4">
            <Link href="#">Privacy Policy</Link>
            <span>|</span>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>

        
      </div>
      
    </footer>
  );
}
