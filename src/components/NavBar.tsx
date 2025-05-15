import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-app-green font-bold text-2xl">
            {" "}
            Comparador online
          </span>
        </Link>{" "}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-app-dark hover:text-app-green transition-colors"
          >
            Início
          </Link>
          <Link
            href="/comparison"
            className="text-app-dark hover:text-app-green transition-colors"
          >
            Comparar Preços
          </Link>
          <Link
            href="/reports"
            className="text-app-dark hover:text-app-green transition-colors"
          >
            Relatórios
          </Link>
          <Link
            href="/contribute"
            className="text-app-dark hover:text-app-green transition-colors"
          >
            Contribuir
          </Link>
        </div>
        <Link href="/comparison">
          <Button className="bg-app-green hover:bg-green-600 text-white">
            Começar a Poupar
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
