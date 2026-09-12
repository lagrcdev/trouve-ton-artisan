"use client";

import { useEffect } from "react";

// Charge le JS de Bootstrap (menu mobile, etc) dans le navigateur
export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
