import { FC, useState } from 'react';
import { Form } from '@formium/types';
import { Brand, ContactForm, Container, IconLink, Modal } from 'components/ui';

interface AppLayoutProps {
  contactForm?: Form;
}

const App: FC<AppLayoutProps> = ({ children, contactForm }) => {
  let [contactIsOpen, setContactIsOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <header className="py-8">
        <Container className="flex">
          <Brand dark to="/" />
          <IconLink
            as={contactForm ? 'button' : 'Link'}
            dark
            icon="MailIcon"
            className="ml-auto"
            href={'mailto:callum@wrux.com'}
            onClick={contactForm ? () => setContactIsOpen(true) : null}
          >
            callum@wrux.com
          </IconLink>
        </Container>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="py-8">
        <Container>
          <div className="flex pt-4 border-t-2">
            <Brand to="/" dark />
            <IconLink
              as={contactForm ? 'button' : 'Link'}
              dark
              icon="MailIcon"
              className="ml-auto"
              href={'mailto:callum@wrux.com'}
              onClick={contactForm ? () => setContactIsOpen(true) : null}
            >
              callum@wrux.com
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
  );
};

export default App;
