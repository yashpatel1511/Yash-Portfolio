// import { memo } from "react";
// import { Outlet } from "react-router-dom";
// import BackgroundGrid from "@/components/BackgroundGrid";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import ScrollToTop from "@/components/ScrollToTop";

// const MainLayout = () => {
//   return (
//     <>
//       <BackgroundGrid />
//       <Navbar />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//       <ScrollToTop />
//     </>
//   );
// };

// export default memo(MainLayout);



import { memo } from "react";
import { Outlet } from "react-router-dom";
import BackgroundGrid from "@/components/BackgroundGrid";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0b0b]">
      {/* Background effect */}
      <BackgroundGrid />

      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer always at bottom */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
};

export default memo(MainLayout);
