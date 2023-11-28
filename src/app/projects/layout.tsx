"use client";

import { useState } from "react";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contactVisibility, setContactVisibility] = useState<boolean>(false);

  return (
    <>
      {children}
      {/* Footer */}
      <Footer contactVisibility={contactVisibility} />
    </>
  );
}
