import React from 'react';
import RcTree from 'rc-tree';

import { TreeProps } from './types';

import styles from './Tree.module.scss';

export const Tree: React.VFC<TreeProps> = (props) => {
  return <RcTree {...props} prefixCls={styles.root} />;
};
