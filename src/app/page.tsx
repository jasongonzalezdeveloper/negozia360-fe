// app/page.tsx
"use client";

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <section className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center gap-3">
          <StorefrontRoundedIcon fontSize="large" />
          <h1 className="text-2xl font-semibold">Panel de tu negocio</h1>
        </div>

        <Card className="shadow-md">
          <CardContent className="space-y-4">
            <Typography variant="h6">Inventario</Typography>
            <p className="text-gray-600">
              Gestiona existencias, facturación y reportes en un solo lugar.
            </p>

            <div className="flex gap-3">
              <Button variant="contained" startIcon={<Inventory2RoundedIcon />}>
                Crear producto
              </Button>
              <Button variant="outlined">Ver reportes</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-white p-4">
            <h3 className="mb-2 text-lg font-medium">Ventas del día</h3>
            <p className="text-sm text-gray-600">$1,250.00</p>
          </div>
          <div className="rounded-xl border bg-white p-4">
            <h3 className="mb-2 text-lg font-medium">Productos bajos</h3>
            <p className="text-sm text-gray-600">7 por reabastecer</p>
          </div>
        </div>
      </section>
    </main>
  );
}
