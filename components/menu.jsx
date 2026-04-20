import React from "react";
import LogoLoop from "@/utils/LogoLoop";
import Image from "next/image";
import Journey1 from "@/utils/images/Journey/Journey1.jpg";
import Journey2 from "@/utils/images/Journey/Journey2.jpg";
import Journey3 from "@/utils/images/Journey/Journey3.jpg";
import Journey4 from "@/utils/images/Journey/Journey4.jpg";
import Journey5 from "@/utils/images/Journey/Journey5.jpg";
import Journey6 from "@/utils/images/Journey/Journey6.jpg";
import Journey7 from "@/utils/images/Journey/Journey7.jpg";
import Journey8 from "@/utils/images/Journey/Journey8.jpg";
import { FaMosque, FaPray, FaBookReader, FaPeopleArrows } from "react-icons/fa";

const Menu = () => {
  // const journeyImages = [
  //   Journey1,
  //   Journey2,
  //   Journey3,
  //   Journey4,
  //   Journey5,
  //   Journey6,
  //   Journey7,
  //   Journey8
  // ];

const imageLogos = [
  { src: Journey1.src, alt: "Company 1" },
  { src: Journey2.src, alt: "Company 2" },
  { src: Journey3.src, alt: "Company 3" },
  { src: Journey4.src, alt: "Company 4" },
  { src: Journey5.src, alt: "Company 5" },
  { src: Journey6.src, alt: "Company 6" },
  { src: Journey7.src, alt: "Company 7" },
  { src: Journey8.src, alt: "Company 8" },
];

const iconLogos = [
  { node: <FaMosque size={40} />, alt: "Company 1" },
  { node: <FaPray size={40} />, alt: "Company 2" },
  { node: <FaBookReader size={40} />, alt: "Company 3" },
  { node: <FaPeopleArrows size={40} />, alt: "Company 4" },
];

  return (
    <div
      className="flex flex-wrap w-full min-h-screen items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 text-white"
      >
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="max-w-3xl mx-auto px-6 pt-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perjalanan Pendidikan
          </h2>
          <p className="text-slate-400 text-lg">
            Sebuah perjalanan dari sekolah dasar hingga dunia perkuliahan di
            bidang teknologi.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" className="w-full mt-12">
      <div className="max-w-4xl mx-auto px-6 mt-6">
        <div className="relative border-l border-slate-700">
          <div className="mb-10 ml-6">
            <span className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 border border-white"></span>
            <h3 className="text-xl font-semibold">SDN 1 Klodran</h3>
            <p className="text-slate-400">
              Saya memulai perjalanan pendidikan di sekolah dasar ini, membangun
              fondasi awal dalam belajar.
            </p>
          </div>
      </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="mb-10 ml-6">
            <span className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 border border-white"></span>
            <h3 className="text-xl font-semibold">SMPN 2 Ngemplak</h3>
            <p className="text-slate-400">
              Melanjutkan ke jenjang SMP, saya mulai mengembangkan minat dan
              kemampuan akademik.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="mb-10 ml-6">
            <span className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 border border-white"></span>
            <h3 className="text-xl font-semibold">SMKN 9 Surakarta</h3>
            <p className="text-slate-400">
              Di SMK, saya mulai fokus pada bidang kejuruan dan mengenal dunia
              teknologi lebih dalam.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="ml-6">
            <span className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 border border-white"></span>
            <h3 className="text-xl font-semibold">Universitas Sebelas Maret</h3>
            <p className="text-slate-400">
              Saat ini saya sedang menempuh pendidikan S1 di Program Studi
              Pendidikan Teknik Informatika dan Komputer.
            </p>
          </div>
        </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {journeyImages.map((img, index) => (
          <Image
          key={index}
          src={img}
          alt={`Journey ${index + 1}`}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-xl"
          />
        ))}
        </div> */}
      <div className="h-[400px] relative overflow-hidden rounded-2xl mt-5">
        {/* Basic horizontal loop */}
        <LogoLoop
          logos={imageLogos}
          speed={100}
          direction="left"
          logoHeight={250}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          // fadeOut
          // fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
          />      
      </div>
    </div>
  );
};

export default Menu;
