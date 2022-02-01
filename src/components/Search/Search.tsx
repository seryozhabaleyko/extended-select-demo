import React from 'react';

import { Input } from '../Input';

import { SearchProps } from './types';

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return <Input value={value} onChange={onChange} placeholder={placeholder} />;
};
