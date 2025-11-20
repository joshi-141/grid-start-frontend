"use client";
import { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
// import { Button } from "@/components/ui";
import { FaRegBell } from "react-icons/fa";
import Logout from "@/components/logout";
import { useAppSelector } from "@/lib/store";

import { FiUsers, FiSettings, FiLogOut, FiUser, FiBriefcase } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";


interface HeaderProps {
  className?: string; // optional prop
}


const Header = ({ className }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { token } = useAppSelector(state => state.auth);
  console.log("token", token);
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Post a Service", href: "/post-a-service" },
  ];

  // Helper to check if current URL matches
  const isActive = (href: string) => pathname === href;
  const isDropdownActive = (children?: { href: string }[]) =>
    children?.some((child) => pathname.startsWith(child.href));


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.themeMainMenu} ${styles.stickyMenu} ${className} 
    ${scrolled ? "" : "bg-transparent"} z-50 `}>
      <Navbar expand="lg" className="">
        <Container className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Navbar.Brand as={Link} href="/" className="d-flex align-items-center">
            <Image src="/images/logo.png" alt="Logo" width={140} height={40} priority />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar" className="justify-content-between">
            <Nav className="d-flex ml-auto gap-3" style={{ alignItems: "center" }}>
              {menuItems.map((item, index) =>
              (
                <Nav.Link
                  key={index}
                  as={Link}
                  href={item.href}
                  className={`${styles["nav-link"]} ${isActive(item.href) ? styles.active : ""
                    }`}
                >
                  {item.label}
                </Nav.Link>
              )
              )}
            </Nav>


            {token ? (
              <div className="right-widget d-flex align-items-center gap-4 ml-7">

                <div><FaRegBell style={{ fontSize: "30px" }} /></div>

                <div className="relative select-none">
                  {/* Trigger Icon */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                  >
                    <FiUsers className="text-3xl" />
                  </button>

                  {/* Dropdown Menu */}
                  {open && (
                    <div
                      className="absolute right-0 px-2 mt-3 w-56 bg-white shadow-lg rounded-lg border py-2 z-50 animate-fade-in"
                    >
                      {/* <Link
                        href="/dashboard"
                        className={` ${styles["nav-link"]} gap-3 px-2 py-2 hover:bg-gray-100 transition rounded`} style={{ display: "flex" }}
                      >
                        <MdDashboard />
                        Dashboard
                      </Link> */}

                      <Link
                        href="/profile"
                        className={` ${styles["nav-link"]} gap-3 px-2 py-2 hover:bg-gray-100 transition rounded items-center`} style={{ display: "flex" }}
                      >
                        <FiUser />
                        Profile
                      </Link>

                      <Link
                        href="/profile/settings"
                          className={` ${styles["nav-link"]} gap-3 px-2 py-2 hover:bg-gray-100 transition rounded items-center`} style={{display:"flex"}}
                      >
                        <FiSettings />
                        Settings
                      </Link>

                      <Link
                        href="/my-services"
                          className={` ${styles["nav-link"]} gap-3 px-2 py-2 hover:bg-gray-100 transition rounded items-center`} style={{display:"flex"}}
                      >
                        <FiBriefcase />
                        My Services
                      </Link>

                      <div className="border-t border-gray-200 my-2" />

                        <Logout icon={<FiLogOut />} className={`${styles["logout-btn"]}`} />

                      {/* <button
                        onClick={() => console.log("logout")}
                        className="flex items-center gap-3 px-2 py-2 w-full text-left hover:bg-red-50 text-red-600 transition rounded"
                      >
                        
                        <FiLogOut />
                        Logout
                      </button> */}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className="right-widget d-flex align-items-center gap-4 ml-3">
                  <Link href="/login" className={`${styles["nav-link"]}`}>Login</Link>
                  <Link href="/registration" className={`${styles["custom-btn"]}`}>Register</Link>
                  {/* <Logout /> */}
                </div>
              </>
            )}



          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
