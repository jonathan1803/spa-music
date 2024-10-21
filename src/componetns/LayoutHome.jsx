

import Navigation from "../routes/Navigation";
import Sidebar from "./Sidebar";


export const LayoutHome = () => {
  return (
    <div className="flex flex-col h-screen">
     <Navigation />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-4 overflow-y-auto">
      
        </main>
      </div>
    </div>
  );
};

export default LayoutHome;
