"use client";
import Navbar from "@/components/navbar";
import Homepage from "@/components/homepage";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import { showToast } from "nextjs-toast-notify";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
  showToast.success("Selamat datang di portfolio saya 👋", {
    duration: 3000,
  });
  }, []);
  return (
    <div>
      <Navbar />
      <Homepage />
      <Menu />
      <Footer />
    </div>
  );
}
