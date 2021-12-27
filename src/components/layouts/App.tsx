import { FC, useState } from 'react';
import Head from 'next/head';
import { Form } from '@formium/types';
import { Brand, ContactForm, Container, IconLink, Modal } from 'components/ui';

interface AppLayoutProps {
  contactForm?: Form;
}

const App: FC<AppLayoutProps> = ({ children, contactForm }) => {
  let [contactIsOpen, setContactIsOpen] = useState(false);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <header className="py-8">
          <Container className="flex">
            <Brand to="/" />
            <IconLink
              as={contactForm ? 'button' : 'Link'}
              icon="MailIcon"
              className="ml-auto"
              href={'mailto:callum@wrux.com'}
              onClick={contactForm ? () => setContactIsOpen(true) : undefined}
            >
              <span className="md:hidden">Contact</span>
              <span className="hidden md:block">callum@wrux.com</span>
            </IconLink>
          </Container>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="py-8">
          <Container>
            <div className="flex pt-4 border-t-2 border-t-black dark:border-t-white">
              <Brand to="/" />
              <IconLink
                as={contactForm ? 'button' : 'Link'}
                icon="MailIcon"
                className="ml-auto"
                href={'mailto:callum@wrux.com'}
                onClick={contactForm ? () => setContactIsOpen(true) : undefined}
              >
                <span className="md:hidden">Contact</span>
                <span className="hidden md:block">callum@wrux.com</span>
              </IconLink>
            </div>
          </Container>
        </footer>
        {contactForm && (
          <Modal
            isOpen={contactIsOpen}
            onClose={() => setContactIsOpen(false)}
            title="Interested in working together?"
            description="Tell me a little bit about you and your project and I will get back to you."
          >
            <ContactForm form={contactForm} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default App;
