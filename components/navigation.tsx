"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // スクロールで背景トーン変更＋モバイルメニュー強制クローズ
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobileMenuOpen]);

  // ルート変更時は必ず閉じる
  useEffect(() => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  }, [pathname]); // searchParamsを使うならそれも依存に

  // メニュー展開中の背面スクロールをロック
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "/about", label: "サークル紹介" },
    { href: "/members", label: "メンバー紹介" },
    { href: "/works", label: "プロジェクト" },
    { href: "/activities", label: "活動報告" },
    { href: "/qa", label: "Q&A" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent text-white backdrop-blur-sm"
      } ${
        isMobileMenuOpen && !isScrolled
          ? "bg-gradient-to-br from-[#4d4d4d] to-[#212744] text-white shadow-sm"
          : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`font-cherry text-2xl md:text-3xl text-primary hover:text-accent transition-colors ${
              isScrolled ? "text-foreground" : "text-white/90"
            }`}
          >
            PulluP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 translate-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  isScrolled ? "text-foreground" : "text-white/65"
                } hover:text-accent transition-colors font-medium`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label="メニューを開閉"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            id="mobile-nav"
            className="md:hidden mt-4 pb-4 border-t border-border"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    isScrolled ? "text-foreground" : "text-white/90"
                  } hover:text-accent transition-colors font-medium`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
