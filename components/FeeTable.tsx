import type { FeeRow } from "@/lib/fees";

export function FeeTable({ caption, rows }: { caption: string; rows: FeeRow[] }) {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <caption className="mb-3 text-left font-heading text-2xl text-ink">{caption}</caption>
        <thead>
          <tr className="border-b-2 border-ink">
            <th scope="col" className="py-2 pr-4 font-semibold">
              Item
            </th>
            <th scope="col" className="py-2 font-semibold">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.item} className="border-b border-neutral-200">
              <th scope="row" className="py-3 pr-4 align-top font-medium">
                {row.item}
                {row.detail ? (
                  <span className="mt-1 block text-sm font-normal text-neutral-700">{row.detail}</span>
                ) : null}
              </th>
              <td className="py-3 align-top whitespace-nowrap">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
