import React, { FC } from 'react';
import Image from 'next/image';
import { Typography } from 'components/common';

interface HeroProps {
  title: string;
}

const Hero: FC<HeroProps> = ({ children, title }) => (
  <section className="py-8 md:py-16 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <div className="block mx-auto mb-6">
        <Image
          className="bg-white rounded-full shadow-md"
          src="/callum-bonnyman-square.jpg"
          alt="Callum Bonnyman"
          width={192}
          height={192}
        />
      </div>
      <Typography as="h1" type="h1" className="mb-6 lg:mb-12">
        {title}
      </Typography>
      {children && (
        <Typography as="h2" type="h3">
          {children}
        </Typography>
      )}
    </div>
  </section>
);

export default Hero;
