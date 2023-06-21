import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          For me, technology isn't just about writing code or building products. It's about making a positive impact on the world and advancing humanity. When I look around at the incredible technological innovations that surround us today, from skyscrapers to smartphones to space travel, I feel inspired to contribute to this legacy. I believe that coding can help us solve some of the world's most pressing problems and pave the way for a better future.
        </p>

        <br />

        <p className="text-xl">
          Whether we're developing software to improve healthcare outcomes or designing algorithms to reduce carbon emissions, technology has the power to make a real difference in people's lives. That's why I'm passionate about my work as a software developer, and I'm excited about the opportunity to join a team that shares my vision for a better world. I'm always down to chat about code, politics, jazz, or whatever excites YOU, just click 'Message' and drop me a line!
        </p>
      </div>
    </div>
  );
};

export default About;
