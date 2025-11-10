"use client"

import { Button, Input } from "@/components/ui";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsCalendar2Week } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

interface Candidate {
    id: number;
    name: string;
    role: string;
    location: string;
    experience: string;
    rate: string;
    image: string;
    rating: number;
}


const candidates: Candidate[] = [
    {
        id: 1,
        name: "Ronald Richards",
        role: "Sr. UX/UI Designer",
        location: "New York, USA",
        experience: "2 Years Experience",
        rate: "$55 / hour",
        image: "/images/team/team-20.png",
        rating: 5,
    },
    {
        id: 2,
        name: "Jacob Jones",
        role: "Sr. UX/UI Designer",
        location: "New York, USA",
        experience: "2 Years Experience",
        rate: "$55 / hour",
        image: "/images/team/team-21.png",
        rating: 5,
    },
    {
        id: 3,
        name: "Arlene McCoy",
        role: "Sr. UX/UI Designer",
        location: "New York, USA",
        experience: "2 Years Experience",
        rate: "$55 / hour",
        image: "/images/team/team-22.png",
        rating: 5,
    },
    {
        id: 4,
        name: "Kristin Watson",
        role: "Sr. UX/UI Designer",
        location: "New York, USA",
        experience: "2 Years Experience",
        rate: "$55 / hour",
        image: "/images/team/team-23.png",
        rating: 5,
    },
];


const JobList = () => {
    return (
        <>
            {/* ====== About Us Banner ====== */}
            <section className="about-us-banner py-20 bg-gray-50 relative">
                <div className="about-three-rapper relative">
                    <div className="container mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Get applications from the world best talents.</h1>
                    </div>
                </div>
            </section>

            {/* ====== Feature Job List ====== */}
            <section className="feature-job-list-rapper py-16">
                <div className="container">
                    <div className="row">
                        {/* ====== Left Filter Section ====== */}
                        <div className="col-md-4 flex flex-col gap-10">
                            <div className="left-list flex flex-wrap gap-5">
                                {/* Job Type */}
                                <div className="w-full">
                                    {/* <h3>All Categories</h3> */}
                                    <select className="form-select w-full border rounded-md p-2">
                                        <option>All Categories</option>
                                        <option>Design</option>
                                        <option>Marketing</option>
                                        <option>Development</option>
                                    </select>
                                </div>

                                {/* Experience Level */}
                                <div className="w-full">
                                    <h3>Experience Level</h3>
                                    <div className="flex flex-col gap-3 pt-2">
                                        {["Expert", "Internship", "Senior", "Junior", "Regular"].map((label, i) => (
                                            <div key={i} className="flex items-center justify-between">
                                                <Input type="checkbox" id={Math.random()} label={label} className="flex flex-row-reverse items-center gap-2" />
                                                <span className="text-gray-500 text-sm">{Math.floor(Math.random() * 50) + 10}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Job Type Filter */}
                                <div className="w-full">
                                    <h3>Job Type</h3>
                                    <div className="flex flex-col gap-3 pt-2">
                                        {["Full Time", "Part Time", "Remote", "Internship", "Contract", "Training"].map((label, i) => (
                                            <div key={i} className="flex items-center justify-between">
                                                <Input type="checkbox" id={Math.random()} label={label} className="flex flex-row-reverse items-center gap-2" />
                                                <span className="text-gray-500 text-sm">{Math.floor(Math.random() * 50) + 10}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="right-job-list">
                                <div className="job-list-heading  mb-10 d-flex align-items-center justify-content-between">
                                    <strong>Showing 2514 Candidates</strong>
                                    <div className="sort-list d-flex align-items-center justify-content-around">
                                        <strong>Sort by</strong>
                                        <div className="">
                                            <select className="form-select" aria-label="Default select example">
                                                {/* <option selected="">category</option> */}
                                                <option value="1">Design</option>
                                                <option value="2">Marketing</option>
                                                <option value="3">Development</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="candidate-list space-y-6">
                                    {candidates.map((candidate) => (
                                        <div
                                            key={candidate.id}
                                            className="Candidate-list-1 mb-6 flex items-center justify-between border p-4 rounded-lg hover:shadow-md transition"
                                        >
                                            {/* Profile Pic */}
                                            <div className="Candidate-pic">
                                                <Image
                                                    src={candidate.image}
                                                    alt={candidate.name}
                                                    width={150}
                                                    height={150}
                                                />
                                            </div>

                                            {/* Name and Role */}
                                            <div className="Candidate-name flex flex-col justify-center gap-2">
                                                <h4 className="text-lg font-semibold mb-1">{candidate.name}</h4>
                                                <span className="text-gray-600 mb-2">{candidate.role}</span>
                                                <div className="flex items-center text-yellow-500">
                                                    {Array.from({ length: candidate.rating }).map((_, i) => (
                                                        <FaStar />
                                                    ))}
                                                    <p className="rating ml-1 mb-0 text-gray-700" style={{ fontWeight: "500" }}>
                                                        ({candidate.rating}.00)
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Location, Experience, Rate */}
                                            <div className="Candidate-place flex flex-col gap-2 items-start text-sm text-gray-600">
                                                <div className="flex items-center mb-2 gap-2 text-base">
                                                    <BsFillGeoAltFill />
                                                    <span >{candidate.location}</span>
                                                </div>
                                                <div className="flex items-center mb-2 gap-2 text-base">
                                                    <BsCalendar2Week />
                                                    <span>{candidate.experience}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-base">
                                                    <FaRegClock />
                                                    <span>{candidate.rate}</span>
                                                </div>
                                            </div>

                                            {/* Contact Button */}
                                            <Button className="Candidate-contact"> Contact Now </Button>
                                        </div>
                                    ))}


                                    <div className="job-list-pagination d-flex align-items-center pt-15">
                                        <ul className="pagination">
                                            {[1, 2, 3, 4, 5].map((item, idx) => (
                                                <li key={idx} className="page-item ">
                                                    <span className="page-link cursor-pointer">{item}</span>
                                                </li>
                                            ))}

                                            <li className="page-item">
                                                <span className="page-link cursor-pointer">
                                                    <GoArrowRight />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default JobList;
