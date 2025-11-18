"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { services as demoServices } from "@/app/(services)/data"; // keep your existing service mock or replace with API call
import { Input, Select } from "@/components/ui";

type Service = {
  id: number;
  seller: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  price: string;
  category?: string;
  vetted?: boolean;
};

/* -------------------------
   Small Presentational Pieces (internal components)
   Keeps code in one file but split logically
   ------------------------- */

function Hero({ onSearch }: { onSearch: (q: string) => void }) {
  const [q, setQ] = useState("");

  return (
    <section className="bg-emerald-700 py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl text-white font-extrabold leading-tight mb-3">
            Clear scope. Upfront price. No surprises.
          </h1>
          <p className="text-sm md:text-base text-emerald-100/90 mb-6 max-w-xl">
            Create a project listing, set price & delivery — buyers can purchase directly. Fast, transparent
            hiring for common services.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch(q);
            }}
            className="w-full bg-white rounded-md shadow-sm p-3 flex gap-2 items-center"
          >
            <div className="w-full">
              <Input
                name="search"
                type="text"
                placeholder="Try 'logo design' or 'data entry'"
                value={q}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-500"
            >
              Search
            </button>
          </form>

          {/* popular tags */}
          <div className="mt-4 text-sm text-emerald-100/90 flex flex-wrap gap-3">
            <span className="bg-white/10 px-3 py-1 rounded">Logo Design</span>
            <span className="bg-white/10 px-3 py-1 rounded">WordPress</span>
            <span className="bg-white/10 px-3 py-1 rounded">Illustration</span>
          </div>
        </div>

        <div className="hidden md:block flex-1">
          {/* illustrative cards stack - unique look and not copied from Upwork */}
          <div className="grid grid-cols-2 gap-3">
            <CardPreview title="Logo design" price="$120" />
            <CardPreview title="Landing page" price="$250" />
            <CardPreview title="Explainer video" price="$450" />
            <CardPreview title="Social posts pack" price="$80" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CardPreview({ title, price }: { title: string; price: string }) {
  return (
    <div className="bg-white rounded-lg shadow p-3 flex flex-col gap-2">
      <div className="h-20 bg-emerald-50 rounded-md" />
      <div className="text-sm font-semibold text-[#505050]">{title}</div>
      <div className="text-xs text-gray-500">{price} • 1 day</div>
    </div>
  );
}

function CategoryTiles({
  categories,
}: {
  categories: { label: string; image?: string }[];
}) {
  return (
    <section className="container mx-auto px-6 py-15">
      <h3 className="text-xl font-semibold mb-4">Browse by Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((c) => (
          <button
            key={c.label}
            className="flex items-center gap-3 p-4 bg-white rounded shadow hover:shadow-lg transition text-left"
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-md flex items-center justify-center">
              {/* placeholder icon */}
              <span className="text-emerald-600 font-bold">{c.label.split(" ")[0].charAt(0)}</span>
            </div>
            <div>
              <div className="font-medium">{c.label}</div>
              <div className="text-xs text-gray-500">Popular</div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function StickyFilterBar({
  total,
  onSort,
  onTogglePro,
  proOnly,
  onReset,
}: {
  total: number;
  onSort: (v: string) => void;
  onTogglePro: (val: boolean) => void;
  proOnly: boolean;
  onReset: () => void;
}) {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="text-sm font-semibold">{total} Results</div>

          <div className="flex items-center gap-2">
            <label className="text-sm">Sort</label>
            <Select
              id="sort"
              options={[
                { value: "best", label: "Best selling" },
                { value: "new", label: "Newest" },
                { value: "low", label: "Price: low to high" },
              ]}
              onChange={(e: any) => onSort(e.target.value)}
            />
          </div>

          <button
            onClick={onReset}
            className="text-sm text-emerald-600 underline ml-2 hidden md:inline-block"
          >
            Reset
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={proOnly}
                onChange={(e) => onTogglePro(e.target.checked)}
              />
              <div className="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-emerald-500 relative">
                <span className="absolute left-1 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4" />
              </div>
            </label>
            <div className="text-sm">Pro services</div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button className="px-3 py-1 border rounded text-sm">Grid</button>
            <button className="px-3 py-1 border rounded text-sm">List</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ s }: { s: Service }) {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg overflow-hidden transition">
      <div className="relative w-full h-48">
        <Image src={s.image} alt={s.title} fill className="object-cover" />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="text-sm font-semibold">
            <Link href={`/service/${s.id}`} className="line-clamp-2">
              {s.title}
            </Link>
            <div className="text-xs text-gray-500 mt-1">by {s.seller}</div>
          </div>
          {s.vetted && (
            <div className="text-xs px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded">Vetted</div>
          )}
        </div>

        <div className="flex items-center gap-2 mt-3 text-sm">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className={i < Math.round(s.rating) ? "text-yellow-400" : "text-gray-200"} />
            ))}
          </div>
          <div className="text-xs text-gray-600 ml-2">
            {s.rating} • {s.reviews} reviews
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-lg font-semibold">{s.price} </div>
          <Link href={`/service/${s.id}`} className="inline-flex items-center gap-2 text-emerald-600">
            View <GoArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* -------------------------
   Main Page
   ------------------------- */

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [services, setServices] = useState<Service[]>(() => demoServices as Service[]);
  const [filtered, setFiltered] = useState<Service[]>(services);
  const [proOnly, setProOnly] = useState(false);
  const [sort, setSort] = useState("best");

  useEffect(() => {
    handleFilterSort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services, query, proOnly, sort]);

  const categories = useMemo(
    () => [
      { label: "WordPress" },
      { label: "Articles & Blog Posts" },
      { label: "Video Editing" },
      { label: "Illustration" },
    ],
    []
  );

  function handleFilterSort() {
    let list = [...services];

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((s) => s.title.toLowerCase().includes(q) || s.seller.toLowerCase().includes(q));
    }

    if (proOnly) {
      list = list.filter((s) => s.vetted);
    }

    if (sort === "low") {
      list = list.sort((a, b) => parseFloat(a.price.replace(/[^0-9.]/g, "")) - parseFloat(b.price.replace(/[^0-9.]/g, "")));
    } else if (sort === "high") {
      list = list.sort((a, b) => parseFloat(b.price.replace(/[^0-9.]/g, "")) - parseFloat(a.price.replace(/[^0-9.]/g, "")));
    } else {
      // "best" or "new" fallback: sort by rating
      list = list.sort((a, b) => b.rating - a.rating);
    }

    setFiltered(list);
  }

  function onSearch(q: string) {
    setQuery(q);
  }

  function onReset() {
    setQuery("");
    setProOnly(false);
    setSort("best");
  }

  return (
    <div className="min-h-screen">
      <Hero onSearch={onSearch} />

      <CategoryTiles categories={categories} />



      {/* -------------------------------------------------- */}
      {/* NEW SECTION — OFFERED SERVICES (FREELANCERS' GIGS) */}
      {/* -------------------------------------------------- */}

      <section className="mb-4 bg-gray-50 py-5">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Offered Services</h2>
          <p className="text-gray-600 pb-3">
            Browse services freelancers are actively offering — fixed price, fast delivery.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">

            {[
              {
                id: 1,
                title: "Professional Logo Design",
                freelancer: "Aarav Studio",
                rating: 4.8,
                price: "$40",
                image: "/images/gig1.jpg",
              },
              {
                id: 2,
                title: "Next.js Website Development",
                freelancer: "Riya Codes",
                rating: 5,
                price: "$200",
                image: "/images/gig2.jpg",
              },
              {
                id: 3,
                title: "SEO Keyword Strategy",
                freelancer: "Kunal SEO",
                rating: 4.9,
                price: "$25",
                image: "/images/gig3.jpg",
              },
            ].map((gig) => (
              <div
                key={gig.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 overflow-hidden group"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={gig.image}
                    alt={gig.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg group-hover:text-emerald-600 transition">
                    {gig.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">By {gig.freelancer}</p>

                  <div className="flex items-center gap-2 mt-3 text-sm">
                    <FaStar className="text-yellow-400" />
                    <span className="font-medium">{gig.rating}</span>
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    <span className="text-xl font-bold text-emerald-600">{gig.price}</span>

                    <Link
                      href={`/gigs/${gig.id}`}
                      className="text-emerald-600 flex items-center gap-2 font-medium hover:underline"
                    >
                      View <GoArrowRight />
                    </Link>
                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>
      </section>


      <div className="py-5">
        <StickyFilterBar
          total={filtered.length}
          proOnly={proOnly}
          onTogglePro={setProOnly}
          onSort={(v) => setSort(v)}
          onReset={onReset}
        />

        {/* Grid */}
        <section className="container mx-auto px-6 pt-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: "How it works" + Featured */}
            <aside className="sticky top-20 hidden lg:block">
              <div className="bg-white rounded-lg p-6 border">
                <h4 className="font-semibold mb-3">How it works</h4>
                <ol className="text-sm space-y-3 text-gray-600 p-0">
                  <li><strong>Browse</strong> — find pre-defined projects</li>
                  <li><strong>Buy</strong> — purchase & provide requirements</li>
                  <li><strong>Approve</strong> — review & accept delivery</li>
                </ol>
              </div>

              <div className="bg-white border rounded-lg p-6 mt-6">
                <h4 className="font-semibold mb-3">Filter by Category</h4>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((c) => (
                    <button key={c.label} className="text-left p-2 rounded border text-sm">{c.label}</button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right/Main: cards */}
            <div className="lg:col-span-2">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {filtered.map((s) => (
                  <ServiceCard key={s.id} s={s} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center mt-12 gap-2">
                <div className="job-list-pagination d-flex align-items-center">
                  <ul className="pagination">
                    {[1, 2, 3, 4].map((item, _) => (
                      <li className="page-item">
                        <Link className="page-link" href="">{item}</Link>
                      </li>
                    ))}

                    <li className="page-item">
                      <a className="page-link" href="#"> <GoArrowRight /></a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
