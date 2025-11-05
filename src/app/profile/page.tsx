import Image from "next/image";
import { RiBookmark2Line } from "react-icons/ri";
import styles from "./profile.module.css";
import Link from "next/link";
import { Button } from "@/components/ui";

import { FaBehance, FaLinkedinIn, FaDribbble, FaFacebookF, FaStar } from "react-icons/fa";
import { BsGeoAlt, BsCalendar2Week } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
// import TimelineEducation from "./TimelineEducation";
import TimelineExperience from "./TimelineExperience";
import Services from "./Services";


const Profile = () => {
    return (
        <>
            <section className="job-details mb-[60px]">
                <div className="job-details-wrapper">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* LEFT COLUMN */}
                            <div className="lg:w-1/3">
                                <div className="candidates-details-left flex flex-col justify-center pt-[60px] mb-[60px]">
                                    {/* Candidate header */}
                                    <div className="save-candidate flex items-start justify-start gap-3">
                                        <Image
                                            src="/images/team/team-24.png"
                                            alt="Candidate"
                                            width={80}
                                            height={80}
                                            className="rounded-full"
                                        />
                                        <span className="text-green-600 font-semibold">Available Now</span>
                                        <span> <RiBookmark2Line /> </span>
                                    </div>

                                    {/* Profile info */}
                                    <div className="Profile-name pt-[30px] flex flex-col">
                                        <h4 className="mt-[20px] mb-[20px] text-xl font-bold">Ronald Richards</h4>
                                        <small className="text-gray-600">Sr. UX/UI Designer</small>

                                        <div className="Candidate-name flex flex-col justify-center pb-2">
                                            <div className="mt-2 text-yellow-500 d-flex align-items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                                <strong className="ml-1 text-gray-700">(5.00)</strong>
                                            </div>
                                        </div>

                                        <div className="candidate-place flex flex-col gap-2 text-gray-600">
                                            <div className="d-flex items-center justify-start gap-2"><BsGeoAlt /> <span>New York, USA</span></div>
                                            <div className="d-flex items-center justify-start gap-2"><BsCalendar2Week /> <span>2 Years Experience</span></div>
                                            <div className="d-flex items-center justify-start gap-2"><FiClock /> <span>$55 / hour</span></div>
                                        </div>


                                        <div className="social-link mt-4">
                                            <ul className="flex gap-3 text-gray-500">
                                                <li><Link href="#"> <FaBehance /> </Link></li>
                                                <li><Link href="#"> <FaLinkedinIn /> </Link></li>
                                                <li><Link href="#"> <FaDribbble /> </Link></li>
                                                <li><Link href="#"> <FaFacebookF /> </Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Candidate Stats */}
                                    {[
                                        { label: "Job Done", value: "153+ Jobs" },
                                        { label: "Number Of Hours", value: "3159+ hr" },
                                        { label: "Salary", value: "$55 / hour" },
                                        { label: "Account Creation", value: "21 Jan 2018" },
                                        { label: "Email Id", value: "Ronald@mail.com" },
                                        { label: "Phone Number", value: "(316) 555-0116" },
                                        { label: "Country", value: "United States" },
                                    ].map((item, i) => (
                                        <div key={i} className="pt-[20px]">
                                            <h5 className="text-gray-800 text-[24px] font-medium leading-5">{item.label}</h5>
                                            <p className="font-medium text-gray-700">{item.value}</p>
                                        </div>
                                    ))}

                                    <div className="pt-[30px] mt-5 border-t border-gray-300">
                                        <h5 className="text-gray-800 text-[24px] font-medium leading-5">Associated with </h5>
                                        <div className="d-flex gap-2">
                                           <Image
                                            src="/images/org_logo.jpeg"
                                            alt="org log"
                                            width={40}
                                            height={40}
                                        />
                                            <div>
                                                <p className="text-green-600 font-medium block mb-2">Netforth Software Solution Pvt. Ltd</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN */}
                            <div className="lg:w-2/3">
                                <div className="candidates-details-right">
                                    {/* Candidate summary */}
                                    {/* <div className="candidate-list-1 mb-[40px] flex flex-wrap items-center justify-between gap-2">
                                        <div className="Candidate-pic">
                                            <Image
                                                src="/images/team/team-25.png"
                                                alt="Ronald Richards"
                                                width={90}
                                                height={90}
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="Candidate-name flex flex-col justify-center">
                                            <h4 className="mb-[10px] text-xl font-bold">Ronald Richards</h4>
                                            <span className="text-gray-600">Sr. UX/UI Designer</span>
                                            <div className="mt-2 text-yellow-500 d-flex align-items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                                <strong className="ml-1 text-gray-700">(5.00)</strong>
                                            </div>
                                        </div>
                                        <div className="candidate-place flex flex-col gap-2 text-gray-600">
                                            <div className="d-flex items-center justify-start gap-2"><BsGeoAlt /> <span>New York, USA</span></div>
                                            <div className="d-flex items-center justify-start gap-2"><BsCalendar2Week /> <span>2 Years Experience</span></div>
                                            <div className="d-flex items-center justify-start gap-2"><FiClock /> <span>$55 / hour</span></div>
                                        </div>
                                        <div>
                                            <Link href="#">
                                                <Button className={`${styles["Candidate-contact"]}`}>Contact Now </Button>
                                            </Link>
                                        </div>
                                    </div> */}

                                    {/* About Me */}
                                    <div className="candidate-list-2">
                                        <h4 className="mt-[50px] mb-[30px] text-xl font-semibold">About Me</h4>
                                        <p className="text-gray-700">
                                            Dramatically envisioneer interactive leadership through functionalized ROI.
                                            Professionally simplify synergistic initiatives before effective channels.
                                            Dramatically create fully researched innovation without multifunctional partnerships.
                                        </p>
                                    </div>

                                    {/* Skills */}
                                    <div className="candidate-list-5 mt-5">
                                        <h4 className="mt-[50px] mb-[30px] text-xl font-semibold">Skills:</h4>
                                        <p className="mb-[30px] text-gray-700">
                                            Dramatically envisioneer interactive leadership through functionalized ROI.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                "UI/UX Design",
                                                "Graphic Design",
                                                "Product Design",
                                                "HTML",
                                                "Development",
                                                "WordPress",
                                                "Back-End",
                                                "Front-End",
                                            ].map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="btn btn-primary"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Education */}
                                    {/* <div className="candidate-list-3">
                                        <h4 className="mt-[50px] mb-[30px] text-xl font-semibold">Education</h4>
                                        <div className="timeline-wrapper">
                                            <TimelineEducation />
                                        </div>

                                    </div> */}

                                    {/* Experience */}
                                    <div className="candidate-list-3 mt-5">
                                        <h4 className="mt-[50px] mb-[30px] text-xl font-semibold">Experiences</h4>
                                        <div className="timeline-wrapper pt-4">
                                            < TimelineExperience />
                                        </div>
                                    </div>

                                    {/* Apply Button */}
                                    {/* <div className="candidate-list-6">
                                        <Link href="#" className="apply-btn d-flex align-items-center justify-content-center">
                                            Apply For The Job
                                        </Link>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* services section */}

            <section className="feature-job-grid pb-20">
                <Services />
            </section>

        </>
    );
};

export default Profile;