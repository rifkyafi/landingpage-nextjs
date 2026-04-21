"use client";
import React from "react";
import Image from "next/image";
import { showToast } from "nextjs-toast-notify";
import Folder from "@/utils/Folder";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import myface from "../utils/images/myface.jpeg";
import myface2 from "../utils/images/myface2.jpg";
import myface3 from "../utils/images/myface3.jpg";

const Footer = () => {
  const handleSocialClick = (platform) => {
  showToast.success(`Membuka ${platform} 🚀`, {
    duration: 3000,
    position: "bottom-right",
    transition: "bounceIn",
    progress: true,
    });
  };

  return (
    <div id="Contact"
    className="w-full min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center ">
        {/* Image */}
        <div className="flex justify-center">
          <div data-aos="fade-right">

          <div className="flex justify-center items-center w-56 h-56 sm:w-64 sm:h-64 ">
            <div style={{ height: '600px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Folder size={2} 
                color="#5227FF" 
                className="custom-folder"
                items={[
              <Image
              key="img1"
              src={myface}
              alt="Paper 1"
              className="w-full h-full object-cover rounded-lg"
              />,
              <Image
              key="img2"
              src={myface2}
              alt="Paper 2"
              className="w-full h-full object-cover rounded-lg"
              />,
              <Image
              key="img3"
              src={myface3}
              alt="Paper 3"
              className="w-full h-full object-cover rounded-lg"
              />
            ]}
                />
            </div>
            {/* <Image
              src={myface}
              alt="Profile"
              className="rounded-2xl object-cover object-bottom w-full h-full p-2 -rotate-6"
              /> */}
          </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-start md:text-left">
        <div data-aos="fade-left">

          <h3 className="text-3xl font-bold mb-6">Contact Me</h3>

          <p className="text-slate-400 mb-4 text-justify  ">
            Saya adalah mahasiswa Pendidikan Teknik Informatika dan Komputer di
            Universitas Sebelas Maret yang memiliki ketertarikan dalam dunia
            teknologi dan pengembangan web.
          </p>

          <p className="text-slate-400 mb-6 text-justify ">
            Saya terus belajar dan mengembangkan kemampuan untuk menjadi seorang
            profesional di bidang teknologi dan pendidikan.
          </p>

          {/* 🔥 Social Media */}
          <div className="flex justify-start gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/rifky-afiifurrohmaan-45722932a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-xl hover:bg-blue-600 hover:scale-110 transition duration-300"
              onMouseEnter={() => handleSocialClick("LinkedIn")}
              >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/rifkyafi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-xl hover:bg-gray-700 hover:scale-110 transition duration-300"
              onMouseEnter={() => handleSocialClick("GitHub")}
              >
              <FaGithub size={20} />
            </a>

            <a
              href="https://instagram.com/rifkyafii__"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-xl hover:bg-pink-600 hover:scale-110 transition duration-300"
              onMouseEnter={() => handleSocialClick("Instagram")}
              >
              <FaInstagram size={20} />
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
