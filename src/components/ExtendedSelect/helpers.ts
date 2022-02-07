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
