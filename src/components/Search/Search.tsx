import React from 'react';
import clsx from 'clsx';

import { Input } from '../Input';

import { SearchProps } from './types';
import styles from './Search.module.scss';

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <Input
      className={clsx(styles.root, className)}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
