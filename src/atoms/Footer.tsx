import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { type FC, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const FooterItem: FC<{ heading: string; children: ReactNode }> = ({
  heading,
  children,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <h4 className="text-lg font-semibold">{heading}:</h4>
      <div className="text-sm text-neutral-600">{children}</div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="text-neutral-900 w-full flex p-10 max-w-xl flex-col mx-auto gap-10">
      <section className="flex w-full justify-evenly">
        <section className="flex flex-col max-w-80 min-w-40 gap-4">
          <FooterItem heading="Address">
            <p>
              Sarthi Ayurvedic Hospital & Panchkarma Centre Opp. K.N. School,
            </p>
            <p>Ghikara Road, Charkhi Dadri, Haryana – 127306</p>
          </FooterItem>
          <FooterItem heading="Contact">
            <p>Phone / WhatsApp: +91 84818 19393</p>
            <a href="mailto:sarthiayurvedichospital@gmail.com">
              Email: sarthiayurvedichospital@gmail.com
            </a>
          </FooterItem>
        </section>
        <section className="flex flex-col min-w-40 max-w-80 gap-4">
          <FooterItem heading="Visiting Hours">
            <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
            <p>Sunday: 10:00 AM – 4:00 PM</p>
          </FooterItem>
          <FooterItem heading="Certifications">
            <p>NABH‑certified | CGHS Empanelled</p>
          </FooterItem>
          <FooterItem heading="Follow Us">
            <span className="flex w-full gap-10">
              <a
                target="_blank"
                href="https://wa.me/918481819393"
                className="text-xs flex flex-col items-center gap-1"
              >
                <MessageCircle size={40} className="text-green-500" />
                Whatsapp
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/people/Sarthi-ayurvedic-hospital-and-panchkarma-centre-charkhi-dadri-haryana/61555531862343/?sk=reels_tab"
                className="text-xs flex flex-col items-center gap-1"
              >
                <Facebook
                  size={40}
                  cursor={"pointer"}
                  className="text-blue-500"
                />
                Facebook
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/sarthiayurvedichospital"
                className="text-xs flex flex-col items-center gap-1"
              >
                <Instagram
                  size={40}
                  cursor={"pointer"}
                  className="text-pink-500"
                />
                Instagran
              </a>
            </span>
          </FooterItem>
        </section>
        <section className="flex flex-col min-w-40 max-w-80 gap-4">
          <FooterItem heading="Quick Links">
            <Link to="/">
              <p className="my-2 hover:underline hover:text-sarthi-green">
                Home
              </p>
            </Link>
            <Link to="/treatments">
              <p className="my-2 hover:underline hover:text-sarthi-green">
                Treatments
              </p>
            </Link>
            <Link to="/about">
              <p className="my-2 hover:underline hover:text-sarthi-green">
                About Us
              </p>
            </Link>
            <Link to="/doctors">
              <p className="my-2 hover:underline hover:text-sarthi-green">
                Doctors
              </p>
            </Link>
            <Link to="/contact">
              <p className="my-2 hover:underline hover:text-sarthi-green">
                Contact Us
              </p>
            </Link>
          </FooterItem>
        </section>
      </section>
      <section className="flex justify-center flex-col gap-2 items-center w-full">
        <Logo />
        <h6 className="mt-5">© 2025 Sarthi Ayurvedic Hospital. All rights reserved.</h6>
        <a href="https://pragyan.framer.website/" target="_blank">Proudly designed by Pragyan Design Co.</a>
        <a href="https://aditya-garg.netlify.app/" target="_blank">Developed by Aditya Garg</a>
      </section>
    </footer>
  );
};

export default Footer;
