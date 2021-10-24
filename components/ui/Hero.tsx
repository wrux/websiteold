import React, { FC } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle }) => (
  <section className="py-8 md:py-16 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <img
        src="https://i.pravatar.cc/300"
        className="w-32 h-32 mx-auto mb-6 rounded-full shadow-md"
        alt="wrux: Callum Bonnyman"
        width="128"
        height="128"
      />
      <h1 className="text-3xl font-bold uppercase">{title}</h1>
      {subtitle && <h2 className="mt-8 text-4xl leading-snug">{subtitle}</h2>}
    </div>
  </section>
);

export default Hero;
