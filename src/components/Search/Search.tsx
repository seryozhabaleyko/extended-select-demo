import React from 'react';
import clsx from 'clsx';

import { Input } from '../Input';
import { IconButton } from '../IconButton';

import { SearchProps } from './types';

import styles from './Search.module.scss';

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  const onClear = (): void => {
    onChange('');
  };

  return (
    <div className={styles.root}>
      <Input
        className={clsx(styles.input, className)}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {value && (
        <IconButton className={styles.clear} onClick={onClear}>
          clear
        </IconButton>
      )}
    </div>
  );
};
