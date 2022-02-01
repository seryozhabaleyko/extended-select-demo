import React from 'react';

import { CheckboxProps } from './types';

import styles from './Checkbox.module.scss';

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  indeterminate,
}) => {
  return (
    <span className={styles.root}>
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />

      {!indeterminate && !checked && <span>default</span>}
      {!indeterminate && checked && <span>checked</span>}
      {indeterminate && <span>indeterminate</span>}
    </span>
  );
};
