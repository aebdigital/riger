import Link from "next/link";
import { ArrowIcon } from "@/components/PriceTable";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-zinc-50 px-4 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase text-orange-700">404</p>
        <h1 className="mt-3 text-4xl font-black tracking-normal text-zinc-950 sm:text-5xl">Stránka sa nenašla</h1>
        <p className="mt-4 text-base font-medium leading-7 text-zinc-600">Skúste sa vrátiť na úvod alebo si vybrať službu z cenníka.</p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
        >
          Domov
          <ArrowIcon />
        </Link>
      </div>
    </main>
  );
}
