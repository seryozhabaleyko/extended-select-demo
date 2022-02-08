import { TreeNode } from './types';

export const filter = (treeNode: TreeNode[], searchQuery: string) => {
    const getNodes = (result: TreeNode[], object: TreeNode) => {
        if (object.name.includes(searchQuery)) {
            result.push(object);
            return result;
        }

        if (Array.isArray(object.children)) {
            const nodes = object.children.reduce(getNodes, []);

            if (nodes.length) {
                result.push({ ...object, children: nodes });
            }
        }

        return result;
    };

    return treeNode.reduce(getNodes, []);
};

export const getTreeNodeIds = (child: TreeNode) => {
    const result: string[] = [child.id];

    const callback = (child: TreeNode) => {
        result.push(child.id);
        child.children?.forEach(callback);
    };

    child.children?.forEach(callback);

    return result;
};
