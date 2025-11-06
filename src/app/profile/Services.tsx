import Link from "next/link";

const servicesData = [
    {
        title: "Sr. UX/UI Designer",
        country: "United States",
        role: "Full-Time",
        price: "5000",
    },
    {
        title: "Full Stack Developer",
        country: "Canada",
        role: "Full-Time",
        price: "7500",
    },
    {
        title: "Digital Marketing",
        country: "United States",
        role: "Part-Time",
        price: "21000",
    },
    {
        title: "Web Design",
        country: "UK",
        role: "Full-Time",
        price: "4000",
    },
    {
        title: "Data Analyst",
        country: "United States",
        role: "Full-Time",
        price: "8000",
    },
    {
        title: "Graphic Deasign",
        country: "France",
        role: "Full-Time",
        price: "2000",
    },
]


const Services = () => {
    return (
        <>

            <div className="feature-job-grid-rapper" >
                <div className="container" >
                    <div className="row job-grid-heading d-flex align-items-center pb-10" >
                        <div className="col-lg-8 md-pb-20" >
                            <div className="left-grid" >
                                <span className="">My services:</span>
                            </div>
                        </div>
                        {/* <div className="col-lg-4" >
								<div className="right-grid d-flex align-items-center justify-content-lg-end" >
									<span>Sort by</span>
									 <select defaultValue="">
                                        <option value="" disabled>
                                            Category
                                        </option>
                                        <option value="design">Design</option>
                                        <option value="development">Development</option>
                                        <option value="marketing">Marketing</option>
                                    </select>
							   </div>
							</div> */}
                    </div>
                    <div className="row  gy-4 md-gy-1" >

                        {servicesData.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12" >
                                <div className="job-1 d-flex flex-column" >
                                    {/* <div className="job-company" >
                                        <div className="company-name" >
                                            <img src="images/slider/slider-1.png" alt="" />
                                            <span>Remote</span>
                                        </div>
                                        <div className="company-taq" >
                                            <i className="bi bi-bookmark"></i>
                                        </div>
                                    </div> */}
                                    <div className="job-title" >
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="job-type" >
                                        <span><i className="bi bi-geo-alt"></i></span>
                                        <span>{item.country}</span>
                                        <span><i className="bi bi-clock"></i></span>
                                        <span>{item.role}</span>
                                    </div>
                                    <div className="job-sallary pt-20" >
                                        <span><strong>${item.price}</strong>/Month</span>
                                        <Link href="" className="">Apply Now</Link>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                    <div className="explore-btn" ><a href="" className="btn-custom">Explore All</a></div>
                </div>
            </div>
        </>
    );
}


export default Services;