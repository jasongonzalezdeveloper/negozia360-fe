"use client";

import { useTranslations } from "next-intl";
import { Button, Card, CardContent, Typography } from "@mui/material";
import Lista from "@/components/features/venta/lista/lista";
import Resumen from "@/components/features/venta/resumen/resumen";

export default function Home() {
  const t = useTranslations();
  return (
    <div className="p-8">
      <Lista />
    </div>
  );
}
