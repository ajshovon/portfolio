import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
export const metadata: Metadata = {
  title: 'About :: [.shovon]',
  description: 'Personal Portfolio || [.shovon]',
};

const AboutPage: React.FC = () => {
  return (
    <div className="dark:text-[#a9a9b3] text-[#222222] h-full w-full flex justify-center items-center">
      <div className="max-w-3xl lg:mx-auto lg:px-6 mx-6">
        <div>
          <h1 className="font-bold md:text-[42px] text-[32px]">About</h1>
          <div className="flex justify-center my-5">
            <Image unoptimized src="/assets/images/welcome.gif" width={500} height={500} alt="Welcome" className="rounded-md" />
          </div>
          <p className="mb-2">Hello there,</p>
          <p>
            Myself <strong>Jubayer Ahmad Shovon.</strong>
            <br />
            I work with web technologies and love to build things that make a difference.
            <br />
            Exploring interesting techs and learning along the way having some fun!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
