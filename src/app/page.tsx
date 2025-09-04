// app/page.tsx
"use client";

import { useTranslations } from "next-intl";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function Home() {
  const t = useTranslations();
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <section className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center gap-3">
          <StorefrontRoundedIcon fontSize="large" />
          <h1 className="text-2xl font-semibold">{t("greeting")}</h1>
        </div>

        <Card className="shadow-md">
          <CardContent className="space-y-4">
            <Typography variant="h6">{t("inventory")}</Typography>
            <p className="text-gray-600">{t("inventoryDescription")}</p>

            <div className="flex gap-3">
              <Button variant="contained" startIcon={<Inventory2RoundedIcon />}>
                {t("createProduct")}
              </Button>
              <Button variant="outlined">{t("viewReports")}</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-white p-4">
            <h3 className="mb-2 text-lg font-medium">{t("salesToday")}</h3>
            <p className="text-sm text-gray-600">$1,250.00</p>
          </div>
          <div className="rounded-xl border bg-white p-4">
            <h3 className="mb-2 text-lg font-medium">{t("lowProducts")}</h3>
            <p className="text-sm text-gray-600">7 {t("toRestock")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
