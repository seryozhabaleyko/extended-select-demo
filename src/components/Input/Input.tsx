import React from 'react';
import clsx from 'clsx';

import { InputProps } from './types';

import styles from './Input.module.scss';

export const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      type={type}
      className={clsx(styles.root, className)}
      placeholder={placeholder}
    />
  );
};
