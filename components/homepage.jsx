import React from "react";
import Particles from "@/utils/Particles";
import BlurText from "@/utils/BlurText";
import TrueFocus from "@/utils/TrueFocus";
import ShinyText from "@/utils/ShinyText";
import Image from "next/image";
import myface from "../utils/images/myface.jpeg";

const Homepage = () => {
  return (
    <div className="flex w-full min-h-screen items-center relative">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={600}
          particleSpread={40}
          speed={0.5}
          particleBaseSize={500}
          moveParticlesOnHover={true}
          alphaParticles
          disableRotation
          pixelRatio={1}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center w-full justify-around relative z-10 px-4 md:px-8">
        {/* Image (atas saat mobile) */}
        <div className="order-1 md:order-2 flex w-full md:w-1/2 justify-center mt-6 md:mt-0">
          <div data-aos="fade-left">
            <Image
              src={myface}
              alt="Profile Picture"
              className="border-2 border-white/20 w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover object-bottom"
            />
          </div>
        </div>

        {/* Desktop */}
        <div className="order-2 md:order-1 font-bold w-full md:w-1/2 text-3xl lg:text-4xl text-white/90 p-4 md:p-8 text-center md:text-left hidden lg:flex  flex-col gap-4 justify-start items-start">
          <BlurText
            text="Hi Everyone, I'm"
            delay={200}
            animateBy="words"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />
          <TrueFocus
            className="hidden"
            sentence="Rifky Afiifurrohmaan"
            manualMode
            blurAmount={4.5}
            borderColor="#5227FF"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
          <ShinyText
            text="Lecturer, Programmer, and Tech Enthusiast"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </div>
        {/* Mobile */}
        <div className="order-2 md:order-1 font-bold w-full md:w-1/2 text-white/90 p-4 md:p-8 text-center flex lg:hidden flex-col gap-4 justify-start items-start">
          <BlurText
            text="Hi Everyone, I'm"
            delay={200}
            animateBy="words"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
          />
          <BlurText
            text="Rifky Afiifurrohmaan"
            delay={200}
            animateBy="words"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="text-4xl mb-8"
          />
          
          <ShinyText
            text="Lecturer, Programmer, and Tech Enthusiast"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
            className="flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
