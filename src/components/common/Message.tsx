import React, { FC } from 'react';
import cn from 'clsx';
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/solid';

interface MessageProps {
  message: string;
  type: 'success' | 'error';
}

const Message: FC<MessageProps> = ({ message, type }) => {
  const IconComponent = type === 'success' ? ThumbUpIcon : ThumbDownIcon;
  return (
    <div className="flex flex-row" role="alert">
      <div className="w-16">
        <IconComponent
          className={cn(
            'h-8 w-8 translate-y-1',
            type === 'success' ? 'text-green-500' : 'text-red-500'
          )}
          aria-hidden
        />
      </div>
      <p className="text-lg md:text-xl">{message}</p>
    </div>
  );
};

export default Message;
