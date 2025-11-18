"use client";

import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { RiCheckFill } from "react-icons/ri";

import { services, johnServices } from "../data";
import Image from "next/image";

import styles from "./service.module.css";

import Slider from "react-slick";
import { useAppSelector } from "@/lib/store";
import { useRouter } from "next/navigation";
import Link from "next/link";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

type Plan = {
  id: string;
  title: string;
  price: string;
  delivery: string;
  revisions: string;
  bullets: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "basic",
    title: "Basic",
    price: "$50",
    delivery: "3 Days",
    revisions: "1 Revision",
    bullets: ["1 page", "Responsive design", "Basic SEO"],
  },
  {
    id: "standard",
    title: "Standard",
    price: "$150",
    delivery: "5 Days",
    revisions: "2 Revisions",
    bullets: ["Up to 5 pages", "Contact form", "Speed optimized"],
    featured: true,
  },
  {
    id: "premium",
    title: "Premium",
    price: "$350",
    delivery: "7 Days",
    revisions: "Unlimited",
    bullets: ["Ecommerce / 10 pages", "Full performance", "24/7 support"],
  },
];

const FAQS = [
  {
    q: "What do you need to get started?",
    a: "Domain and hosting details (or we can help choose), logo, content, and any design references you like.",
  },
  {
    q: "Do you provide revisions?",
    a: "Yes — each package includes revisions as described in the package details.",
  },
  {
    q: "Can you migrate my website?",
    a: "Yes — we can migrate from most platforms to WordPress and keep URLs and SEO intact.",
  },
];

const REVIEWS = [
  { name: "A.", date: "Mar 2025", rating: 5, text: "Excellent work, fast delivery and great communication." },
  { name: "B.", date: "Feb 2025", rating: 5, text: "Delivered as promised. Very professional." },
  { name: "C.", date: "Jan 2025", rating: 4, text: "Good quality; needed one small fix which was handled quickly." },
  { name: "D.", date: "Dec 2024", rating: 5, text: "Amazing! Will hire again." },
];

export default function Page() {
  const {user} = useAppSelector(state=>state.auth)
  const router = useRouter();

  // if(!user) router.push("/login")

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top: Gig Title + Breadcrumbs + Ratings */}
        <section className="mb-6">
          <div className="text-sm mb-2">Business / WordPress / Website Development</div>
          <h1>
            I will build WordPress website, custom wordpress website, build website development
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-600">

            <span className={`${styles["tags"]}`}>Top Rated Seller</span>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500 flex items-center gap-1">
                {Array.from({ length: 5 }).map(() => (
                  <FaStar />
                ))}
              </span>
              <span>1,254 reviews</span>
            </div>

            <span>English / Hindi</span>

          </div>
        </section>

        {/* Main two-column layout: left content, right sticky sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Banner / Media */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                {/* Large banner image */}
                <img
                  src="/banner-placeholder.jpg"
                  alt="Gig Banner"
                  onError={(e) => (e.currentTarget.src = "https://picsum.photos/1200/500?random=1")}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                {/* Overlay small badges / actions */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">PRO</span>
                  <span className="px-3 py-1 bg-white  text-gray-800 rounded text-sm">Elementor</span>
                </div>
              </div>

              <div className="p-6">
                {/* Gig short info row (delivery/time etc) */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-800">Delivery:</strong>
                    <span>3 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-800">Service type:</strong>
                    <span>WordPress Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-800">Platform:</strong>
                    <span>Elementor / WooCommerce</span>
                  </div>
                </div>

                {/* About this gig */}
                <div className="mt-6 prose prose-sm max-w-none text-gray-700">
                  <h3>About</h3>
                  <p>
                    I am a professional WordPress developer with 8+ years of experience building custom, responsive,
                    and high-performing WordPress sites using Elementor and custom themes. I focus on clean code,
                    SEO-friendly structure, and fast loading times.
                  </p>

                  <h3>What I offer</h3>
                  <ul className=" list-disc list-outside flex flex-wrap gap-1">
                    <li className="w-full pl-2">Custom Elementor Pro templates or custom theme development</li>
                    <li className="w-full pl-2">Responsive layout for all devices</li>
                    <li className="w-full pl-2">SEO and speed optimizations</li>
                    <li className="w-full pl-2">WooCommerce store setup and product import</li>
                    <li className="w-full pl-2">Security measures and backup configuration</li>
                  </ul>

                  <h3>Why choose me?</h3>
                  <p>I deliver clean, documented work with clear communication and support. I can also help with hosting setup, domain configuration and post-launch support.</p>
                </div>
              </div>
            </article>

            {/* Tags / Skills */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex flex-wrap gap-3">
                {["WordPress", "Elementor", "WooCommerce", "Speed Optimization", "SEO", "Custom Theme"].map((t) => (
                  <span key={t} className={`${styles["tags"]}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Portfolio</h3>
                <div className="text-sm ">Showing 8 items</div>
              </div>

              <div>

                <Slider {...settings}>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div className="px-2">
                      <div key={i} className="rounded overflow-hidden border">
                        <img
                          src={`https://picsum.photos/seed/portfolio-${i}/600/400`}
                          alt={`portfolio-${i}`}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-3 text-sm">
                          <div className="font-medium">Project {i + 1}</div>
                          <div className="">WordPress • Elementor</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>

              </div>
            </section>

            {/* Packages / Pricing Table (Fiverr-style) */}
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Packages</h3>
                <div className="text-sm ">Compare packages and pick what fits</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PLANS.map((p) => (
                  <div
                    key={p.id}
                    className={`border rounded-lg p-3 flex flex-col justify-between ${p.featured ? "border-indigo-400 ring-1 ring-indigo-50" : "border-gray-200"
                      }`}
                  >
                    <div>
                      <div className="flex items-baseline justify-between">
                        <div>
                          <div className="text-sm ">{p.title}</div>
                          <div className="mt-1 text-2xl font-bold">{p.price}</div>
                        </div>

                        <div className="text-right text-sm ">
                          <div>{p.delivery}</div>
                          <div className="mt-1">{p.revisions}</div>
                        </div>
                      </div>

                      <ul className="p-0 pt-3 space-y-2 text-sm text-gray-600">
                        {p.bullets.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <FaCheck className="text-green-600" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <button className={`w-full py-2 rounded ${p.featured ? styles['custom-btn'] : styles['custom-btn-light']}`}>
                        Select {p.title}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Full Description (long) */}
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 >Full Description</h3>
              <div className="prose max-w-none text-gray-700">
                <p>
                  Welcome! I design and develop high-quality WordPress websites using Elementor or custom themes.
                  My process focuses on clarity, conversion, and performance. I document everything and hand over an
                  easy-to-manage admin.
                </p>
                <h4>What you will get</h4>
                <ul className="list-disc list-outside flex flex-wrap gap-1">
                  <li className="w-full" >Design & layout as per your brand</li>
                  <li className="w-full" >Responsive across devices</li>
                  <li className="w-full" >Security & speed best practices</li>
                  <li className="w-full" >Search-Engine friendly structure</li>
                  <li className="w-full" >After-delivery support and documentation</li>
                </ul>
                <h4>Process</h4>
                <ul className="list-disc list-outside flex flex-wrap gap-1">
                  <li className="w-full">Requirement & scope gathering</li>
                  <li className="w-full">Design and approval</li>
                  <li className="w-full">Development and testing</li>
                  <li className="w-full">Launch and support</li>
                </ul>

                <p>
                  If you have questions, please message me your requirement, and I'll reply with a detailed plan & timeline.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {FAQS.map((f, idx) => (
                  <details key={idx} className="border rounded p-3">
                    <summary className="font-medium cursor-pointer">{f.q}</summary>
                    <p className="mt-2 text-sm text-gray-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Reviews</h3>
                <div className="text-sm ">Overall rating: 4.9 (1,254)</div>
              </div>

              <div className="space-y-4">
                {REVIEWS.map((r, idx) => (
                  <div key={idx} className="border rounded p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-lg font-semibold">{r.name[0]}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{r.name}</div>
                            <div className="text-sm ">{r.date}</div>
                          </div>
                          <div className="text-yellow-500 text-sm flex">
                            {Array.from({ length: r.rating }).map((_, i) => (
                              <FaStar key={i} />
                            ))}
                            {Array.from({ length: 5 - r.rating }).map((_, i) => (
                              <FaRegStar key={i} />
                            ))}
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-700">{r.text}</p>
                      </div>
                    </div>
                  </div>
                ))}


                <div className="job-list-pagination mt-4 d-flex align-items-center justify-center">
                  <ul className="pagination">
                    {[1, 2, 3, 4].map((item, idx) => (
                      <li key={idx} className="page-item">
                        <a className="page-link" href="">{item}</a>
                      </li>
                    ))}

                    <li className="page-item">
                      <a className="page-link" href="#">
                        <GoArrowRight />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </section>

{/* Related services */}
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Other services offered by John</h3>

              {/* ======= GRID OF CARDS ======= */}
              <div>
                <Slider {...settings}>

                  {johnServices.map((service) => (
                    <div key={service.id} className="px-2">
                      <div className="group border rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden bg-white" >
                        {/* Image */}
                        <div className="relative w-full h-48">
                          <Image
                            src={service.image}
                            alt={service.seller}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Card Info */}
                        <div className="p-4 flex flex-col gap-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h5 className="m-0 font-semibold"> {service.seller} </h5>
                            <p className="line-clamp-2 m-0" style={{ lineHeight: "20px" }}>
                              {service.title}
                            </p>
                            {/* {service.vetted && (
                                            <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-0.5 rounded-full font-medium">
                                                Vetted Pro
                                            </span>
                                        )} */}
                          </div>

                          <div className="flex items-center gap-1 text-sm">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <FaStar
                                key={i}
                                className={i < Math.round(service.rating) ? "fill-yellow-400" : "fill-gray-300"}
                              />
                            ))}
                            <span className="ml-2 font-medium">
                              {service.rating} ({service.reviews})
                            </span>
                          </div>
                          <p className="m-0"> From <span className="font-medium">{service.price}</span> </p>
                        </div>
                      </div>
                    </div>
                  ))}

                </Slider>
              </div>

            </section>

            {/* Related services */}
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Related Services</h3>

              {/* ======= GRID OF CARDS ======= */}
              <div>
                <Slider {...settings}>

                  {services.map((service) => (
                    <div key={service.id} className="px-2">
                      <div className="group border rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden bg-white" >
                        {/* Image */}
                        <div className="relative w-full h-48">
                          <Image
                            src={service.image}
                            alt={service.seller}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Card Info */}
                        <div className="p-4 flex flex-col gap-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h5 className="m-0 font-semibold"> {service.seller} </h5>
                            <p className="line-clamp-2 m-0" style={{ lineHeight: "20px" }}>
                              {service.title}
                            </p>
                            {/* {service.vetted && (
                                            <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-0.5 rounded-full font-medium">
                                                Vetted Pro
                                            </span>
                                        )} */}
                          </div>

                          <div className="flex items-center gap-1 text-sm">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <FaStar
                                key={i}
                                className={i < Math.round(service.rating) ? "fill-yellow-400" : "fill-gray-300"}
                              />
                            ))}
                            <span className="ml-2 font-medium">
                              {service.rating} ({service.reviews})
                            </span>
                          </div>
                          <p className="m-0"> From <span className="font-medium">{service.price}</span> </p>
                        </div>
                      </div>
                    </div>
                  ))}

                </Slider>
              </div>

            </section>
          </div>

          {/* Right Column: Sticky Seller Sidebar */}
          <aside className={`${styles["detail-card"]} lg:col-span-4`}>
            <div className="sticky top-6 space-y-6">
              {/* Seller card */}
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4">
                  <img
                    src="https://picsum.photos/seed/seller/200/200"
                    alt="seller"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">John</div>
                    <div className="text-sm ">Top Rated Seller</div>
                    <div className="mt-2 text-sm">From India • English</div>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="text-sm ">Response time</div>
                  <div className="font-medium">Within 12 hours</div>
                </div>

                <div className="mt-2 text-sm">
                  <div><strong>1,254</strong> Reviews</div>
                  <div className="mt-1"><strong>98%</strong> Order completion</div>
                </div>

                <div className="mt-4">
                  <Link href={"/"} className={` ${styles["custom-btn"]} py-2`}>Continue</Link>
                </div>

                <div className="mt-4 text-xs ">
                  <div className="flex items-center justify-between">
                    <span>Local time</span>
                    <span>12:35 PM</span>
                  </div>
                </div>
              </div>

              {/* Seller guarantee / gig extras */}
              <div className="bg-white p-3 rounded-lg shadow-sm border text-sm">
                <div className="font-medium mb-2">What’s included</div>
                <ul className="p-0 space-y-2">
                  <li className="flex items-center gap-2">
                    <RiCheckFill />
                    <span>100% Custom design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <RiCheckFill />
                    <span>Responsive & mobile-ready</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <RiCheckFill />
                    <span>Fast delivery & support</span>
                  </li>
                </ul>
              </div>

              {/* Seller stats / mini portfolio */}
              <div className="bg-white p-3 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm">Seller insights</div>
                  <div className="text-sm font-medium">Top rated</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <img src="https://picsum.photos/seed/s1/200/200" alt="s1" className="w-full h-20 object-cover rounded" />
                  <img src="https://picsum.photos/seed/s2/200/200" alt="s2" className="w-full h-20 object-cover rounded" />
                  <img src="https://picsum.photos/seed/s3/200/200" alt="s3" className="w-full h-20 object-cover rounded" />
                </div>
              </div>

              {/* Contact / Share */}
              {/* <div className="bg-white p-5 rounded-lg shadow-sm border text-sm">
                <button className="w-full py-2 rounded border mb-3">Contact Seller</button>
                <div className="flex gap-3 justify-center ">
                  <button className="text-xs">Share</button>
                  <button className="text-xs">Report</button>
                </div>
              </div> */}
            </div>
          </aside>
        </div>
      </div >
    </main >
  );
}
