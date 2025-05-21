// components/TableSection.jsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { FaWordpress } from "react-icons/fa"

const articles = [
  {
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    createdOn: "20 hours ago",
  },
  {
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    createdOn: "21 hours ago",
  },
  {
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2678,
    createdOn: "a day ago",
  },
  {
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [2900]",
    words: 2408,
    createdOn: "1 Oct, 24",
  },
]

export default function TableSection() {
  return (
    <div className="overflow-x-auto mt-6 bg-white shadow-sm rounded-lg border">
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-100 text-gray-700 font-medium">
          <tr>
            <th className="p-3"><input type="checkbox" /></th>
            <th className="p-3">Article Title</th>
            <th className="p-3">Keyword (Traffic)</th>
            <th className="p-3">Words</th>
            <th className="p-3">Created On</th>
            <th className="p-3">Action</th>
            <th className="p-3">Publish</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              <td className="p-3"><input type="checkbox" /></td>
              <td className="p-3">{article.title}</td>
              <td className="p-3">{article.keyword}</td>
              <td className="p-3">{article.words}</td>
              <td className="p-3">{article.createdOn}</td>
              <td className="p-3">
                <Button size="sm" variant="outline">View</Button>
              </td>
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <FaWordpress className="text-xl text-gray-600" />
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-gray-600 hover:text-black">⋮</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 text-sm text-gray-600">
        <span>Total 9 Article Titles | Show 
          <select className="mx-2 border rounded px-1">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select> 
          entries per page</span>
        <span>1 / 1</span>
      </div>
    </div>
  )
}
