"use client";

import React from "react";

import { StockData } from "@/types/stock-data";

import { PeerComparisonTable } from "@/components/features/peer/comparsion-table";
import { createPeerComparisonColumns } from "@/components/features/peer/comparsion-table/columns";

import { useDataTable } from "@/hooks/use-data-table";

import stockData from "@/data/data.json";

export default function Home() {
  const data = React.useMemo(() => stockData as StockData[], []);

  const columns = React.useMemo(() => createPeerComparisonColumns(), []);

  const { table } = useDataTable<StockData>({
    data,
    columns,
    getRowId: (row) => row.symbolCode,
    pageCount: 1,
    rowCount: data.length,
  });

  return (
    <div className="min-h-screen bg-neutral-100 px-6 py-12 dark:bg-black">
      <main className="mx-auto w-full max-w-6xl">
        <PeerComparisonTable table={table} />

        {/* Lightweight chart */}
      </main>
    </div>
  );
}
