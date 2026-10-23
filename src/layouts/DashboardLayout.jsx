import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCompact, setIsCompact] = useState(window.innerWidth < 1200);
  const [isScrolled, setIsScrolled] = useState(false);

  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const compact = window.innerWidth < 1200;

      setIsCompact(compact);

      if (compact) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // روی موبایل/تبلت بعد از رفتن به صفحه‌ی دیگر، سایدبار بسته شود
  useEffect(() => {
    if (isCompact) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname, isCompact]);

  useEffect(() => {
    const mainContent = mainRef.current;

    if (!mainContent) return;

    const handleScroll = () => {
      setIsScrolled(mainContent.scrollTop > 0);
    };

    mainContent.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      mainContent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((previous) => !previous);
  };

  return (
    <div className="flex h-dvh w-full bg-[#f8fafc] text-[#334155] font-sans antialiased overflow-hidden">
      {isCompact ? (
        isSidebarOpen && (
          <>
            {/* پس‌زمینه تیره؛ با کلیک سایدبار بسته می‌شود */}
            <div
              className="fixed inset-0 z-30 bg-black/40"
              onClick={() => setIsSidebarOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 z-40 h-full max-w-[85vw] overflow-y-auto">
              <Sidebar isOpen={isSidebarOpen} />
            </div>
          </>
        )
      ) : (
        <Sidebar isOpen={isSidebarOpen} />
      )}

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <Header
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          isCompact={isCompact}
          isScrolled={isScrolled}
        />

        <main
          ref={mainRef}
          className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden flex flex-col"
        >
          <div className="flex-1 min-w-0 p-3 sm:p-6">
            <Outlet />
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}