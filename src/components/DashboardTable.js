
import React from "react";
import { articles } from "../data/articles";
import { FaWordpress } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

const DashboardTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded shadow-md">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Article Title</th>
            <th className="p-3">Keyword (Traffic)</th>
            <th className="p-3">Words</th>
            <th className="p-3">Created On</th>
            <th className="p-3">Action</th>
            <th className="p-3">Publish</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, idx) => (
            <tr key={idx} className="border-t hover:bg-gray-50">
              <td className="p-3">{article.title}</td>
              <td className="p-3">{article.keyword}</td>
              <td className="p-3">{article.words}</td>
              <td className="p-3">{article.createdOn}</td>
              <td className="p-3">
                <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded">
                  View
                </button>
               
              </td>
              <td className="p-3">
                <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded display flex">
                <FaWordpress/> <MdArrowDropDown />
                
                </button>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
