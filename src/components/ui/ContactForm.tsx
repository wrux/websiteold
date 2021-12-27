import React, { FC, useState } from 'react';
import { FormiumForm } from '@formium/react';
import { formium, formComponents } from 'lib/formium';
import { Form } from '@formium/types';
import { Message } from 'components/common';

interface ContactFormProps {
  form: Form;
}

const ContactForm: FC<ContactFormProps> = ({ form }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  if (error) {
    return (
      <Message
        type="error"
        message="Looks like there was an error. Please try again."
      />
    );
  }
  if (success) {
    return (
      <Message
        type="success"
        message="Thank you! Your response has been recorded."
      />
    );
  }
  return (
    <FormiumForm
      data={form}
      components={formComponents}
      onSubmit={async (values) =>
        formium
          .submitForm('contact', values)
          .then(() => setSuccess(true))
          .catch(() => setError(true))
      }
    />
  );
};

export default ContactForm;
