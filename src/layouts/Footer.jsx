import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FONT = "Roboto, Helvetica, Arial, sans-serif";

export default function Footer() {
  return (
    <footer
      style={{ fontFamily: FONT }}
      className="w-full bg-gray-100 px-3 pt-3 pb-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[14px] select-none"
    >
      {/* Left Section: Copyright */}
      <div className="flex flex-wrap items-center justify-center gap-1 order-2 sm:order-1 text-center text-[#67748E]">
        <span>© {new Date().getFullYear()}, made with</span>

        <FavoriteIcon
          sx={{ fontSize: 14, color: "#67748E", verticalAlign: "middle" }}
        />

        <span>by</span>

        <a
          href="https://www.mypihub.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-[#344767] hover:opacity-80 transition-opacity"
        >
          &nbsp;MyPiHUB&nbsp;
        </a>

        <span>for a better web.</span>
      </div>

      {/* Right Section: Footer Links */}
      <nav className="flex flex-wrap items-center justify-center gap-5 order-1 sm:order-2">
        {["MyPatientHUB", "About Us", "Blog"].map((label) => (
          <a
            key={label}
            href="https://www.mypihub.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[#67748E] hover:text-[#344767] transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}