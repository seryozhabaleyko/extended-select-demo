import React from 'react';

import { Input } from '../Input';

import { SearchProps } from './types';

import styles from './Search.module.scss';

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Input
      className={styles.root}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
