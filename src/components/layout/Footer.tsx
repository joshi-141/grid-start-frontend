import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className="footer-one pt-20 bg-gray-100" >
                <div className="container" >
                    <div className="row d-flex" >
                        <div className="col-md-6" >
                            <div className="footer-one_1" >
                                <Image src="/images/logo.png" width={150} height={150} alt="" className="pb-3" />
                                <p className="">Collaboratively parallel task functionalized tailers whereas principle-centered schemas. Continually enable multifunctional.</p>
                                <div className="social_group pt-3" >
                                    <ul className="p-0">
                                        <li><Link href=""><FaFacebookF /></Link></li>
                                        <li><Link href=""><FaTwitter /></Link></li>
                                        <li><Link href=""><FaInstagram /></Link></li>
                                        <li><Link href=""><FaYoutube /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2" >
                            <div className="footer-one_2" >
                                <h4>Quick Links</h4>
                                <ul className="p-0">
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Popular</a></li>
                                    <li><a href="">Best Offer</a></li>
                                    <li><a href="">Destinations</a></li>
                                    <li><a href="">Changelog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2" >
                            <div className="footer-one_2" >
                                <h4>Company</h4>
                                 <ul className="p-0">
                                    <li><a href="">About</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Careers</a></li>
                                    <li><a href="">Press</a></li>
                                    <li><a href="">Presentation</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2" >
                            <div className="footer-one_2" >
                                <h4>Services</h4>
                                 <ul className="p-0">
                                    <li><a href="">Contact &amp; Faq</a></li>
                                    <li><a href="">Track Your Order</a></li>
                                    <li><a href="">Shipping</a></li>
                                    <li><a href="">Trade Program</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row border-t border-gray-300" >
                        <div className="copy-right text-center py-5">
                            <h5 className="">All rights reserved ©2022 Creativegigs </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;