"use client"; // Adicionar "use client" para hooks como useState e useEffect

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Ícones para o menu hambúrguer
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/comparison", label: "Comparar Preços" },
  { href: "/contribute", label: "Contribuir" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fecha o menu mobile se a tela for redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-white shadow-md py-4 px-0 sticky top-0 z-50">
      {" "}
      {/* Adicionado sticky e z-index */}
      <div className="container mx-auto flex items-center justify-between relative">
        {" "}
        {/* Adicionado relative */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-app-green font-bold text-2xl">
            {" "}
            Comparador online
          </span>
        </Link>{" "}
        {/* Navegação Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-app-dark hover:text-app-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <SignedIn>
            <Link
              href="/reports"
              className="text-app-dark hover:text-app-green transition-colors"
            >
              Relatórios
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="bg-app-green hover:bg-green-600 text-white">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
        {/* Botão do Menu Mobile (Hambúrguer) */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Abrir menu de navegação"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
        {/* Painel do Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-2 mt-2 border-t border-gray-200">
            <div className="container mx-auto px-6 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-app-dark hover:text-app-green transition-colors py-2 text-center"
                  onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar
                >
                  {link.label}
                </Link>
              ))}
              <SignedIn>
                <Link
                  href="/reports"
                  className="text-app-dark hover:text-app-green transition-colors py-2 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Relatórios
                </Link>
              </SignedIn>
              <div className="mt-2 pt-2 border-t border-gray-100">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button className="bg-app-green hover:bg-green-600 text-white w-full">
                      Login
                    </Button>
                  </SignInButton>
                </SignedOut>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
