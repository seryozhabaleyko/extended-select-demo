import React from 'react';

import { IconButtonProps } from './types';

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};
