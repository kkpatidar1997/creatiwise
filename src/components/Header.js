
import React from "react";

const Header = () => {
  return (
    <div className="w-full mb-6 px-4">
      {/* Page Title */}
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Articles
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow">
          Generated Articles
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm font-medium">
          Published Articles
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm font-medium">
          Scheduled Articles
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-blue-600 text-sm font-medium">
          Archived Articles
        </button>
      </div>

      {/* Search */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search for Title & Keywords..."
          className="w-full sm:max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Header;


