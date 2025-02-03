"use client";

import { useEffect } from "react";

export default function StorePage() {
  useEffect(() => {
    window.location.href = "https://killingtwins.bigcartel.com/products";
  }, []);

  return null;
}
