"use client";

import React from "react";
import Navbar from "@/components/NavBar";
import ContributionSection from "@/components/ContributionSection";

const Contribute: React.FC = () => {
  return (
    <div className="min-h-screen bg-app-gray">
      <Navbar />
      <div className="container mx-auto py-8 px-6">
        <ContributionSection />
      </div>
    </div>
  );
};

export default Contribute;