export type TreeNode = {
    id: string;
    name: string;
    children?: TreeNode[];
};

export type ExtendedSelectProps = {
    label: string;
    treeData: TreeNode[];
};

export type ExtendedSelectDialogProps = {
    open: boolean;
    onClose: () => void;
    onApply: (selected: string[]) => void;
    treeData: TreeNode[];
    initialSelected: string[];
};
