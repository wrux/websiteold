import type { NextPage } from 'next';
import Head from 'next/head';
// import { formium } from 'lib/formium';
// import { Form } from '@formium/types';
import { AppLayout } from 'components/layouts';
import { Container, Hero, Navigation, NavigationItem } from 'components/ui';
import { Highlight, Typography } from 'components/common';

// @TODO: Revert the formium comment out changes.
interface HomeProps {
  // contactForm?: Form;
}

const Home: NextPage<HomeProps> = ({}) => (
  <AppLayout>
    <Head>
      <title>Callum Bonnyman, Web developer | wrux.com</title>
      <meta
        name="description"
        content="I'm currently working as a frontend developer somewhere in Europe. I love building performant and accessible websites and solving complex problems in the browser."
      />
    </Head>
    <Hero title="Hi, I'm Callum">
      {`I'm`} currently working as a <Highlight>Frontend Developer</Highlight>{' '}
      somewhere in Europe. I love building performant and accessible websites
      and solving complex problems in the browser.
    </Hero>
    <Container>
      <Navigation className="mb-12 md:mb-24" label="Find me on other platforms">
        <NavigationItem href="https://github.com/wrux" target="_blank">
          GitHub
        </NavigationItem>
        <NavigationItem
          href="https://www.linkedin.com/in/wrux/"
          target="_blank"
        >
          LinkedIn
        </NavigationItem>
        <NavigationItem
          href="https://www.instagram.com/etocallum/"
          target="_blank"
        >
          Instagram
        </NavigationItem>
        <NavigationItem href="https://bloke.blog" target="_blank">
          Blog
        </NavigationItem>
      </Navigation>
    </Container>
    <Container as="section" className="my-16">
      <header>
        <Typography
          as="h2"
          type="h2"
          className="text-center mb-6 md-mb-8 lg:mb-12"
        >
          Recent Work
        </Typography>
      </header>
      <main className="grid gap-4 md:gap-8 lg:gap-12 md:grid-cols-2 xl:grid-cols-4">
        <div className="bg-gray-800 p-8 focus-visible:bg-gray-500">Works</div>
        <div className="bg-gray-800 p-8">Works</div>
        <div className="bg-gray-800 p-8">Works</div>
        <div className="bg-gray-800 p-8">Works</div>
        <div className="bg-gray-800 p-8">Works</div>
      </main>
    </Container>
  </AppLayout>
);

export const getStaticProps = async () => {
  // try {
  //   const form = await formium.getFormBySlug('contact');
  //   return {
  //     props: {
  //       contactForm: form || null,
  //     },
  //   };
  // } catch (e) {
  //   console.log(e);
  // }
  return {
    props: {},
  };
};

export default Home;
