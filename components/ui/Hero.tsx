import React, { FC } from 'react';
import Image from 'next/image';

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
      <h1 className="text:lg md:text-xl  g:text-2xl xl:text-3xl font-bold">
        {title}
      </h1>
      {children && (
        <h2 className="mt-8 text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug">
          {children}
        </h2>
      )}
    </div>
  </section>
);

export default Hero;
