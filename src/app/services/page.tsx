"use client"

import { useState, useEffect } from "react"
import { Button, Input, Select } from "@/components/ui";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
// import { BsFillGeoAltFill } from "react-icons/bs";
// import { BsCalendar2Week } from "react-icons/bs";
// import { FaRegClock } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { candidates, services } from "./data";
import Form from "@/components/forms/Form";
import { useForm } from "react-hook-form";
import Link from "next/link";

import FilterDropdown from "./FilterDropdown";

interface LoginInputs {
    email: string;
    password: string;
}


const Services = () => {
    const [scrolled, setScrolled] = useState(false);
    const methods = useForm<LoginInputs>({
        mode: "onTouched",
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = methods;

    const onSubmit = (data: LoginInputs) => {
        console.log("Form submitted:", data);
    };


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)

    }, []);

    return (
        <>

            {/* ======= HEADER / BANNER SECTION ======= */}
            <section className="about-us-banner py-20 bg-gray-50 relative">
                <div className="about-three-rapper relative">
                    <div className="container mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-semibold pb-10">Service Listing</h1>

                        <Form
                            methods={methods}
                            onSubmit={onSubmit}
                            className="form-3 d-flex align-items-center justify-content-between mx-auto">
                            <div className="item_1" ><Image src="images/icon/search.svg" alt="" width={16} height={16} /></div>
                            <div className="placeholder">
                                <Input name="job-title" id="" type="text" placeholder="Job title" />
                            </div>
                            <div className="location d-flex">
                                <Image src="images/icon/map.svg" alt="" width={16} height={16} />
                                <select className="nice-select">
                                    <option value="0" data-display="Location..">Location..</option>
                                    <option value="1">Bangladesh</option>
                                    <option value="2">India</option>
                                    <option value="3">America</option>
                                    <option value="4">Canada</option>
                                </select>
                            </div>
                            <div className="button">
                                <a href="custom-btn" className="">
                                    <span>Search Now</span>
                                </a>
                            </div>
                        </Form>

                    </div>
                </div>
            </section>

            {/* ======= MAIN GRID SECTION ======= */}
            <section className="py-16 bg-white">
                <div className={`${scrolled && "w-full bg-white sticky top-0 z-50 pt-4"} pb-4 mb-3`}>
                    <div className={`container`}>
                        {/* ======= FILTER BAR ======= */}
                        <div className="w-full flex flex-wrap items-center justify-between gap-4">
                            {/* Left Dropdown Filters */}
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="flex flex-wrap items-center gap-3">
                                    <FilterDropdown
                                        title="Service options"
                                        options={[
                                            {
                                                category: "Website type",
                                                items: [
                                                    { label: "E-Commerce store", count: 20 },
                                                    { label: "Business", count: 18 },
                                                    { label: "Dropshipping", count: 12 },
                                                    { label: "Landing page", count: 11 },
                                                ],
                                            },
                                            {
                                                category: "Service offerings",
                                                items: [
                                                    { label: "Offers subscriptions", count: 8 },
                                                    { label: "Paid video consultations", count: 30 },
                                                ],
                                            },
                                        ]}
                                    />

                                    <FilterDropdown
                                        title="Seller details"
                                        options={[
                                            {
                                                category: "Seller type",
                                                items: [
                                                    { label: "Top rated", count: 15 },
                                                    { label: "Level 2", count: 25 },
                                                    { label: "New seller", count: 10 },
                                                ],
                                            },
                                        ]}
                                    />

                                    <FilterDropdown
                                        title="Budget"
                                        options={[
                                            {
                                                category: "Price range",
                                                items: [
                                                    { label: "Under $50" },
                                                    { label: "$50 - $200" },
                                                    { label: "$200 & above" },
                                                ],
                                            },
                                        ]}
                                    />

                                    <FilterDropdown
                                        title="Delivery time"
                                        options={[
                                            {
                                                category: "Turnaround",
                                                items: [
                                                    { label: "24 hours" },
                                                    { label: "Up to 3 days" },
                                                    { label: "Up to 7 days" },
                                                ],
                                            },
                                        ]}
                                    />
                                </div>

                            </div>

                            {/* Right Toggle Filters */}
                            <div className="flex flex-wrap items-center gap-5">
                                {/* Toggle Component */}
                                <div className="flex items-center gap-2">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" defaultChecked className="sr-only peer" />
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                                    </label>
                                    <span className="text-sm text-gray-700 font-medium">Pro services</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" defaultChecked className="sr-only peer" />
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                                    </label>
                                    <span className="text-sm text-gray-700 font-medium">
                                        Instant <span className="text-orange-500 font-semibold">response</span>
                                    </span>
                                    <span className="bg-pink-200 text-pink-700 text-xs font-semibold px-2 py-0.5 rounded">
                                        New
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container mx-auto px-6">
                    <div className="mb-10 flex items-center justify-between">
                        <h2 className="text-xl font-semibold">210 Results</h2>
                        <div className="flex items-center gap-3">
                            <span className="font-medium">Sort by:</span>
                            <Select
                                id="sort"
                                options={[
                                    { value: "best", label: "Best Selling" },
                                    { value: "new", label: "Newest" },
                                    { value: "low", label: "Price: Low to High" },
                                    { value: "high", label: "Price: High to Low" },
                                ]}
                            />
                        </div>
                    </div>

                    {/* ======= GRID OF CARDS ======= */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="group border rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden bg-white"
                            >
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
            </section>
        </>
    );
};

export default Services;
