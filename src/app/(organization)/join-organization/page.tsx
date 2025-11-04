"use client";

import { Button } from "@/components/ui";
import CurrentOrganizatio from "./currentOreganization";
import OrganizationList from "./organizationList";
import styles from "./join-organization.module.css";

const organizationList = [
    { title: "Netforth" },
    { title: "Linearbee" },
    { title: "ABC tech" },
    { title: "XYZ Solution" },
    { title: "A2Z Solutions" },
]

const JoinOrganization = () => {
    return (
        <>
            <div className="about-us-banner pt-[160px] md-mb-100">
                <div className="about-three-rapper">

                    {/* Banner content */}
                    <div className="container pb-5">
                        <div className="row py-5 d-flex align-items-center justify-content-center flex-column text-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1> Manage your organization</h1>
                            </div>

                            <div className="d-flex flex-wrap align-items-center justify-content-left mt-5">
                                <h3>Current organization:</h3>
                                <div className="w-full mt-2 row">
                                    <div className="col-md-6">
                                        <CurrentOrganizatio />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* organization list */}


                </div>
            </div>


            <div className="py-5">
                <div className="container">
                    <h3 className="pb-3">Join a new organisation:</h3>
                    <div className="w-full mt-2 pb-5 row gap-y-5">
                        {organizationList.map((item, index) => (
                            <div key={index} className="col-md-6">
                                <OrganizationList title={item.title} />
                            </div>
                        ))}
                    </div>

                    <div className="d-flex flex-wrap align-items justify-content-center bg-gray-100 rounded-lg my-5 py-5">
                        <h2 className="w-full text-center mb-5">Create your new organization and invite your team to join.</h2>
                        <Button className={`${styles["apply-btn"]}`}>Create Organization</Button>
                    </div>
                </div>
            </div>

        </>

    );
};

export default JoinOrganization;
