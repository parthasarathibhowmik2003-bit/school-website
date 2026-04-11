import { Link } from "react-router";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                GV
              </div>
              <div className="text-white">Green Valley Public School</div>
            </div>
            <p className="text-sm mb-4">
              Nurturing Minds, Building Futures since 1995
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-emerald-500 transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-emerald-500 transition-colors">Admissions</Link></li>
              <li><Link to="/faculty" className="hover:text-emerald-500 transition-colors">Faculty</Link></li>
              <li><Link to="/notices" className="hover:text-emerald-500 transition-colors">Notices</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/facilities" className="hover:text-emerald-500 transition-colors">Facilities</Link></li>
              <li><Link to="/gallery" className="hover:text-emerald-500 transition-colors">Gallery</Link></li>
              <li><Link to="/achievements" className="hover:text-emerald-500 transition-colors">Achievements</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>21 Lakeview Road, Guwahati, Assam, India</span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-emerald-500 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@gvpschool.edu.in" className="hover:text-emerald-500 transition-colors">info@gvpschool.edu.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 Green Valley Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
