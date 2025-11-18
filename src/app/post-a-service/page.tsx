"use client";

import React, { useState } from "react";

const PostServicePage = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
  });

  const marketplaceServices = [
    {
      id: 1,
      title: "Full-Stack Web App",
      seller: "Rahul",
      price: "$250",
      image: "/images/sample1.jpg",
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      seller: "Priya",
      price: "$80",
      image: "/images/sample2.jpg",
    },
  ];

  // NEW — Offered Services (GIGS LIST FROM FREELANCERS)
  const offeredServices = [
    {
      id: 1,
      title: "Professional Logo Design",
      freelancer: "Aarav Studio",
      price: "$40",
      rating: 4.8,
      image: "/images/gig1.jpg",
    },
    {
      id: 2,
      title: "Next.js Website Development",
      freelancer: "Riya Codes",
      price: "$200",
      rating: 5,
      image: "/images/gig2.jpg",
    },
    {
      id: 3,
      title: "SEO Keyword Research",
      freelancer: "Kunal SEO",
      price: "$25",
      rating: 4.9,
      image: "/images/gig3.jpg",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full px-6 py-10 max-w-7xl mx-auto">

      {/* ------------------------------------------------ */}
      {/* POST A SERVICE — your original section kept intact */}
      {/* ------------------------------------------------ */}

      <h1 className="text-3xl font-bold mb-6">Post a Service</h1>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow p-6 rounded-lg">
        <div className="flex flex-col">
          <label className="font-semibold">Service Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="e.g. Website Development"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Category</label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="e.g. Design / Development"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Price</label>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="$100"
          />
        </div>

        <div className="flex flex-col col-span-1 md:col-span-2">
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="border p-2 rounded h-28"
            placeholder="Write details about your service..."
          />
        </div>

        <button className="bg-black text-white py-3 rounded-lg mt-2 col-span-1 md:col-span-2">
          Submit Service
        </button>
      </form>


      {/* ------------------------------------------------ */}
      {/* MARKETPLACE SERVICES — your grid stays as-is     */}
      {/* ------------------------------------------------ */}

      <h2 className="text-2xl font-bold mt-12 mb-4">Marketplace Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {marketplaceServices.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <img
              src={service.image}
              alt=""
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">By {service.seller}</p>
              <p className="font-bold mt-2">{service.price}</p>
            </div>
          </div>
        ))}
      </div>



      {/* ------------------------------------------------ */}
      {/* NEW SECTION — OFFERED SERVICES (GIGS)            */}
      {/* ------------------------------------------------ */}

      <h2 className="text-2xl font-bold mt-12 mb-4">Offered Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {offeredServices.map((gig) => (
          <div
            key={gig.id}
            className="bg-white shadow rounded-xl overflow-hidden hover:scale-[1.02] transition"
          >
            <img
              src={gig.image}
              alt={gig.title}
              className="h-44 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">{gig.title}</h3>

              <p className="text-gray-600 text-sm">By {gig.freelancer}</p>

              <div className="flex justify-between items-center mt-3">
                <span className="font-bold">{gig.price}</span>
                <span className="text-yellow-500 font-semibold">
                  ⭐ {gig.rating}
                </span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default PostServicePage;
