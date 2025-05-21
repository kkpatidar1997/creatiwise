// import React from 'react';
// import Dashboard from './pages/Dashboard';

// function App() {
//   return <Dashboard />;
// }

// export default App;


// src/App.js
// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import DashboardTable from "./components/DashboardTable";

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Mobile sidebar toggle button */}
//       <div className="md:hidden absolute top-4 left-4 z-50">
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="bg-blue-600 text-white p-2 rounded"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Sidebar */}
//       <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

//       {/* Main content */}
//       <div className="flex-1 bg-gray-50 p-4 overflow-auto">
//         <h1 className="text-2xl font-bold mb-4">Articles</h1>
//         <DashboardTable />
//       </div>
//     </div>
//   );
// }

// export default App;


// src/App.js// src/components/Sidebar.jsx
import React from 'react';
import Dashboard from './pages/Dashboard';

function App() {
  return <Dashboard />;
}

export default App;
