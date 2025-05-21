
import {
  ChevronDown,
  FileText,
} from "lucide-react";
import {
  FaAmazon,
  FaBlogger,
  FaLink,
  FaWordpress,
} from "react-icons/fa";
import clsx from "clsx"; // Optional, for cleaner class toggling

export default function Sidebar({ open, setOpen }) {
  return (
    <aside
      

      className={clsx(
        "fixed md:relative z-40 bg-white w-64 h-full border-r px-4 py-6 transition-transform duration-300 ease-in-out",
        {
          // Only apply translate on mobile (below md)
          "translate-x-0": open,
          "-translate-x-full": !open,
          "md:translate-x-0": true, // always show on desktop
        }
      )}
    >
      {/* Close button on mobile */}
      <div className="md:hidden flex justify-end mb-4">
        <button
          onClick={() => setOpen(false)}
          className="text-black text-xl font-bold"
        >
          ✕
        </button>
      </div>

      {/* Logo */}
      <div className="text-2xl font-bold text-black mb-6">abun</div>

      {/* Dropdown */}
      <div className="flex items-center justify-between mb-6 border px-3 py-2 rounded cursor-pointer text-sm text-gray-700">
        <span className="flex items-center gap-2">
          <FaAmazon />
          amazon.com
        </span>
        <ChevronDown size={16} />
      </div>

      {/* Navigation */}
      <nav className="space-y-4 text-sm">
        {/* Articles Section */}
        <div>
          <p className="text-gray-500 uppercase mb-1 flex items-center gap-2">
            <FileText />
            Articles
          </p>
          <ul className="space-y-2 pl-2 text-gray-700">
            <li className="hover:text-black cursor-pointer">Create Article</li>
            <li className="text-black font-medium">Generated Articles</li>
            <li className="hover:text-black cursor-pointer">Keyword Projects</li>
            <li className="hover:text-black cursor-pointer pl-2 text-xs text-gray-600">All Keyword to Article</li>
            <li className="hover:text-black cursor-pointer pl-2 text-xs text-gray-600">Seed Competitor Keyword</li>
            <li className="hover:text-black cursor-pointer pl-2 text-xs text-gray-600">Import Keyword from GSC</li>
            <li className="hover:text-black cursor-pointer pl-2 text-xs text-gray-600">Manual Keyword to Article</li>
            <li className="hover:text-black cursor-pointer pl-2 text-xs text-gray-600">Bulk Keyword to Article</li>
            <li className="hover:text-black cursor-pointer pl-2 text-xs text-gray-600">Longtail Keyword to Article</li>
            <li className="hover:text-black cursor-pointer">Article Settings</li>
          </ul>
        </div>

        <div><p className="text-gray-500 uppercase mb-1 flex items-center gap-2"><FaBlogger/>Auto Blog</p></div>
        <div><p className="text-gray-500 uppercase mb-1 flex items-center gap-2"><FaLink />Internal Links</p></div>
        <div><p className="text-gray-500 uppercase mb-1 flex items-center gap-2"><FaWordpress />Free Backlinks</p></div>
        <div><p className="text-gray-500 uppercase mb-1">Integrations</p></div>
        <div><p className="text-gray-500 uppercase mb-1">Subscription</p></div>
        <div><p className="text-gray-500 uppercase mb-1">Affiliate Program</p></div>
        <div><p className="text-gray-500 uppercase mb-1">Help Center</p></div>
        <div><p className="text-gray-500 uppercase mb-1">Updates</p></div>
        <div><p className="text-gray-500 uppercase mb-1">Live Chat Support</p></div>
        <div><p className="text-gray-500 uppercase mb-1">Profile</p></div>
      </nav>
    </aside>
  );
}
