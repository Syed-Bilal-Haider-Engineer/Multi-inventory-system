import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footerCompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="md:flex md:justify-between md:items-center px-12 py-7 bg-purple-900">
        <h1 className="text-3xl md:text-4xl lg:leading-normal font-semibold md:w-2/5 mb-6">
          <span className="text-green-500">Subscribe</span> to receive news,
          events, and offers.
        </h1>
        <div className="flex flex-col md:flex-row">
          <input
            type="email"
            required
            placeholder="Enter your email..."
            className="w-full md:w-auto mr-1 mb-4 md:mb-0 px-2 py-2.5 rounded focus:outline-none"
          />
          <button className="bg-green-500 hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-8 py-16 text-center sm:text-left">
        <div className="flex flex-col items-center">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt="Shopo Logo"
            className="w-24 filter invert"
          />
          <p className="mt-4">
            The home and elements needed to create beautiful products.
          </p>
          <div className="flex items-center mt-6">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter size={25} className="ml-3 cursor-pointer" />
            <AiFillInstagram size={25} className="ml-3 cursor-pointer" />
            <AiFillYoutube size={25} className="ml-3 cursor-pointer" />
          </div>
        </div>
        {renderFooterLinks("Company", footerCompanyLinks)}
        {renderFooterLinks("Shop", footerProductLinks)}
        {renderFooterLinks("Support", footerSupportLinks)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-400 text-sm py-2 px-8">
        <span>© 2020 Becodemy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt="Payment Methods"
          />
        </div>
      </div>
    </footer>
  );
};

const renderFooterLinks = (title, links) => (
  <ul key={title} className="text-center sm:text-left">
    <h1 className="mb-1 font-semibold">{title}</h1>
    {links.map((link, index) => (
      <li key={index}>
        <Link
          to={link.link}
          className="hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
);

export default Footer;
