import { BasicDataNode, TreeProps as RcTreeProps } from 'rc-tree';
import { DataNode } from 'rc-tree/lib/interface';

export interface TreeProps<T extends BasicDataNode = DataNode>
  extends Omit<RcTreeProps<T>, 'prefixCls'> {}
