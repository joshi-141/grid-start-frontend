"use client";
import { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import { Button } from "@/components/ui";
import { FiUsers } from "react-icons/fi";

interface HeaderProps {
  className?: string; // optional prop
}


const Header = ({ className }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "Categories",
      children: [
        { label: "Job Details", href: "/job-details" },
        { label: "Candidate List", href: "/candidate-list" },
        { label: "Candidate Grid", href: "/candidate-grid" },
        { label: "Candidate Details", href: "/candidate-details" },
        { label: "Blog Single", href: "/blog-single" },
        { label: "Blog Grid", href: "/blog-grid" },
      ],
    },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Post a Job", href: "/post-job" },
    { label: "Find a Job", href: "/find-job" },
  ];

  // Helper to check if current URL matches
  const isActive = (href: string) => pathname === href;
  const isDropdownActive = (children?: { href: string }[]) =>
    children?.some((child) => pathname.startsWith(child.href));


  useEffect(() => {
    const handleScroll = () => {
      // Change color after scrolling 100px (you can adjust)
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.themeMainMenu} ${styles.stickyMenu} ${className} 
    ${scrolled ? "bg-white shadow" : "bg-transparent"} z-50 `}>
      <Navbar expand="lg" className="">
        <Container className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Navbar.Brand as={Link} href="/" className="d-flex align-items-center">
            <Image src="/images/logo.png" alt="Logo" width={140} height={40} priority />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar" className="justify-content-between">
            <Nav className="d-flex mx-auto gap-3" style={{ alignItems: "center" }}>
              {menuItems.map((item, index) =>
                item.children ? (
                  <NavDropdown
                    key={index}
                    title={item.label}
                    id={`${item.label.toLowerCase()}-dropdown`}
                    className={`${styles["nav-link"]} ${isDropdownActive(item.children) ? styles.active : ""
                      }`}
                  >
                    {item.children.map((child, cIndex) => (
                      <NavDropdown.Item
                        key={cIndex}
                        as={Link}
                        href={child.href}
                        className={`${styles["nav-link"]} ${isActive(child.href) ? styles.active : ""
                          }`}
                      >
                        {child.label}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
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

            <div className="right-widget d-flex align-items-center gap-4">
              <div><FiUsers style={{ fontSize: "30px" }} /></div>
              <Link href="/signup">
                <Button className={`${styles["custom-btn"]}`}>Create Account</Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
