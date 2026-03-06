"use client";

import React from "react";

import { StockData } from "@/types/stock-data";

import { PeerComparisonTable } from "@/components/features/peer/comparsion-table";
import { createPeerComparisonColumns } from "@/components/features/peer/comparsion-table/columns";
import { PeerPerformanceChart } from "@/components/features/peer/chart";

import { useDataTable } from "@/hooks/use-data-table";

import stockData from "@/data/data.json";

export default function Home() {
  const memorizedStocks = React.useMemo(() => stockData as StockData[], []);

  const columns = React.useMemo(() => createPeerComparisonColumns(), []);

  const { table } = useDataTable<StockData>({
    data: memorizedStocks,
    columns,
    getRowId: (row) => row.symbolCode,
    pageCount: 1,
    rowCount: memorizedStocks.length,
  });

  const { rowSelection } = table.getState();

  const selectedCompanyName = React.useMemo(() => {
    return Object.keys(rowSelection)
      .map(
        (symbolCode) =>
          memorizedStocks.find((stock) => stock.symbolCode === symbolCode)?.companyName || ""
      )
      .filter(Boolean);
  }, [rowSelection, memorizedStocks]);

  return (
    <div className="bg-neutral-100 px-6 py-12 dark:bg-black">
      <main className="mx-auto w-full max-w-6xl flex flex-col gap-6">
        <PeerComparisonTable table={table} />
        <PeerPerformanceChart
          selectedSymbols={Object.keys(rowSelection)}
          labels={selectedCompanyName}
        />
      </main>
    </div>
  );
}
