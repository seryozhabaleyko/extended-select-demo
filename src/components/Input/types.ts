import React from 'react';

export type InputProps = {
  value: string;
  onChange: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
};