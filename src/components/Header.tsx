"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "홈", href: "/" },
    { name: "소개", href: "/about" },
    { name: "프로그램", href: "/programs" },
    { name: "시설", href: "/facilities" },
  ];

  // 헤더는 항상 흰색 배경으로 고정
  const isDarkBackground = false;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                빅스 부산캠퍼스
              </h1>
              <p className="text-sm text-gray-600">영어 유치원</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                pathname === "/contact"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transform hover:scale-105"
              }`}
            >
              상담 신청
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none transition-colors duration-200 text-gray-700 hover:text-blue-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`block mt-4 mx-3 px-6 py-2 rounded-full font-medium text-center transition-all duration-200 ${
                  pathname === "/contact"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                상담 신청
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
