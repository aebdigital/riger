import type { PriceTable as PriceTableType } from "@/lib/site-data";

type PriceTableProps = {
  table: PriceTableType;
};

export function PriceTable({ table }: PriceTableProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold tracking-normal text-zinc-950 md:text-3xl">{table.caption}</h2>
        {table.note ? <p className="mt-2 text-sm font-semibold text-orange-700">{table.note}</p> : null}
      </div>
      <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white shadow-sm">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-zinc-950 text-white">
            <tr>
              {table.headers.map((header) => (
                <th key={header} scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.join("-")} className="border-t border-zinc-200 odd:bg-white even:bg-zinc-50">
                {row.map((cell, index) => (
                  <td
                    key={`${cell}-${index}`}
                    className={`px-4 py-3 align-top ${index === 0 ? "font-semibold text-zinc-950" : "text-zinc-700"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
