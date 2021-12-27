import { createClient } from '@formium/client';
import { defaultComponents } from '@formium/react';
import { TextareaProps, TextInputProps } from '@formium/react/dist/inputs';
import { Button, FormControl, Input, Textarea } from 'components/common';

const projectId: string = process.env.NEXT_PUBLIC_FORMIUM_PROJECTID!;

export const formium = createClient(projectId, {
  apiToken: process.env.FORMIUM_TOKEN,
});

export const formComponents = {
  ...defaultComponents,
  ElementsWrapper: ({ children }: { children: React.ReactNode }) => (
    <div className="space-y-4">{children}</div>
  ),
  FormControl,
  Header: () => null,
  PageWrapper: ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col space-y-4">{children}</div>
  ),
  SubmitButton: (props: JSX.IntrinsicElements['button']) => (
    <Button
      type="submit"
      className="ml-auto"
      {...props}
      isLoading={props.disabled}
    />
  ),
  TextInput: (props: TextInputProps) => <Input {...props} />,
  Textarea: (props: TextareaProps) => <Textarea {...props} />,
};
