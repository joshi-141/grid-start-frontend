"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { RiBookmark2Line } from "react-icons/ri";
import Link from "next/link";
import { FaBehance, FaLinkedinIn, FaDribbble, FaFacebookF, FaStar } from "react-icons/fa";
import { BsGeoAlt, BsCalendar2Week } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import TimelineExperience from "./TimelineExperience";
import Services from "./Services";
import EditButton from "@/components/ui/editButton";
import ModalCustom from "@/components/ui/modal";
import RenderModalContent from "./renderModalContent";
import styles from "./profile.module.css";


interface UserFormData {
  id: number;
  name: string;
  role: string;
  about: string;
  skills: string[];
  experience: { title: string; company: string; period: string; description?: string }[];
  email?: string;
  phone?: string;
  country?: string;
}

const Profile = () => {
    const [user, setUser] = useState<UserFormData>();
    const [formData, setFormData] = useState<UserFormData>();
    const [open, setOpen] = useState(false);
    const [modalSection, setModalSection] = useState<string | null>(null);

    const handleEdit = (section: string) => {
        setModalSection(section);
        setOpen(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => (prev ? { ...prev, [name]: value } : { [name]: value } as any));
    };

    useEffect(() => {
        fetch("http://localhost:5000/users/1")
            .then((res) => res.json())
            .then(data => setUser(data))
            .catch((err) => console.error("Error fetching user:", err));
    }, []);

    useEffect(() => {
        if (user) setFormData(user);
    }, [user]);

    if (!user) return <p>Loading.....</p>;

    return (
        <>
            <section className="job-details mb-[60px]">
                <div className="job-details-wrapper">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* LEFT COLUMN */}
                            <div className="lg:w-1/3">
                                <div className="candidates-details-left relative flex flex-col justify-center pt-[60px] mb-[60px]">

                                    {/* edit-details */}
                                    <EditButton
                                        onClick={() => handleEdit("profile")}
                                        className={`${styles["profile_edit"]} top-0 right-[-2px]`}
                                    />

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
                                        <span><RiBookmark2Line /></span>
                                    </div>

                                    {/* Profile info */}
                                    <div className="Profile-name pt-[30px] flex flex-col">
                                        <h4 className="mt-[20px] mb-[20px] text-xl font-bold">{user?.name}</h4>
                                        <small className="text-gray-600">{user?.role}</small>

                                        <div className="Candidate-name flex flex-col justify-center pb-2">
                                            <div className="mt-2 text-yellow-500 d-flex align-items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                                <strong className="ml-1 text-gray-700">(5.00)</strong>
                                            </div>
                                        </div>

                                        <div className="candidate-place flex flex-col gap-2 text-gray-600">
                                            <div className="d-flex items-center justify-start gap-2">
                                                <BsGeoAlt /> <span>New York, USA</span>
                                            </div>
                                            <div className="d-flex items-center justify-start gap-2">
                                                <BsCalendar2Week /> <span>2 Years Experience</span>
                                            </div>
                                            <div className="d-flex items-center justify-start gap-2">
                                                <FiClock /> <span>$55 / hour</span>
                                            </div>
                                        </div>

                                        <div className="social-link mt-4">
                                            <ul className="flex gap-3 text-gray-500">
                                                <li><Link href="#"><FaBehance /></Link></li>
                                                <li><Link href="#"><FaLinkedinIn /></Link></li>
                                                <li><Link href="#"><FaDribbble /></Link></li>
                                                <li><Link href="#"><FaFacebookF /></Link></li>
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
                                            <h5 className="text-gray-800 text-[24px] font-medium leading-5">{item?.label}</h5>
                                            <p className="font-medium text-gray-700">{item?.value}</p>
                                        </div>
                                    ))}

                                    <div className="pt-[30px] mt-5 border-t border-gray-300">
                                        <h5 className="text-gray-800 text-[24px] font-medium leading-5">Associated with </h5>
                                        <div className="d-flex gap-2">
                                            <Image
                                                src="/images/org_logo.jpeg"
                                                alt="org logo"
                                                width={40}
                                                height={40}
                                            />
                                            <div>
                                                <p className="text-green-600 font-medium block mb-2">
                                                    Netforth Software Solution Pvt. Ltd
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN */}
                            <div className="lg:w-2/3">
                                <div className="candidates-details-right">
                                    {/* About Me */}
                                    <div className="candidate-list-2">
                                        <h4 className="relative mt-[50px] mb-[30px] pr-2 text-xl font-semibold inline-block">
                                            <span> About Me</span>
                                            <EditButton onClick={() => handleEdit("about")} className={`${styles["profile_edit"]} top-0 left-[100%]`} />
                                        </h4>
                                        <p className="text-gray-700">{user?.about}</p>
                                    </div>

                                    {/* Skills */}
                                    <div className="candidate-list-5 mt-5">
                                        <h4 className="relative inline-block mt-[50px] pr-2 mb-[30px] text-xl font-semibold">
                                            <span>Skills:</span>
                                            <EditButton onClick={() => handleEdit("skills")} className={`${styles["profile_edit"]} top-0 left-[100%]`} />
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {user?.skills.map((skill, i) => (
                                                <span key={i} className="btn btn-primary">{skill}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Experience */}
                                    <div className="candidate-list-3 mt-5">
                                        <h4 className="relative inline-block mt-[50px] pr-2 mb-[30px] text-xl font-semibold">
                                            <span>Experiences:</span>
                                            <EditButton onClick={() => handleEdit("experience")} className={`${styles["profile_edit"]} top-0 left-[100%]`} />
                                        </h4>
                                        <div className="timeline-wrapper pt-4">
                                            <TimelineExperience />
                                        </div>
                                    </div>
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

            {/* 🔹 Single Modal Instance (dynamic content) */}
            <ModalCustom
                open={open}
                onClose={() => setOpen(false)}
                title={`Edit ${modalSection ? modalSection.charAt(0).toUpperCase() + modalSection.slice(1) : "Profile"}`}
                data={user}
            >
                {formData && 
                 <RenderModalContent
                    modalSection={modalSection}
                    formData={formData}
                    setFormData={setFormData}
                    handleInputChange={handleInputChange}
                />
                }
               


                {/* Add Save Button inside Modal */}
                {/* <div className="mt-4 flex justify-end">
                    <button
                        onClick={() => {
                            console.log("✅ Saved Data:", user);
                            setOpen(false);
                        }}
                        className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Save Changes
                    </button>
                </div> */}
            </ModalCustom>
        </>
    );
};

export default Profile;
