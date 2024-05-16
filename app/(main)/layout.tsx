"use client";

import { Spinner } from "@nextui-org/react";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import Navigation from "./_components/navigation";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect("/");
  }

  return (
    <div className="h-screen flex">
      <Navigation />
      <main className="h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
