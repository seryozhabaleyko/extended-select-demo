import React from 'react';
import { makeStyles } from '@mui/styles';

import { ExtendedSelect, TreeNode } from './components';

export const treeData: TreeNode[] = [
    {
        id: '1',
        name: 'Child - 1',
    },
    {
        id: '2',
        name: 'Child - 2',
    },
    {
        id: '3',
        name: 'Child - 3',
        children: [
            {
                id: '4',
                name: 'Child - 4',
                children: [
                    {
                        id: '7',
                        name: 'Child - 7',
                    },
                    {
                        id: '8',
                        name: 'Child - 8',
                    },
                ],
            },
        ],
    },
    {
        id: '5',
        name: 'Child - 5',
        children: [
            {
                id: '6',
                name: 'Child - 6',
            },
        ],
    },
    {
        id: '9',
        name: 'Child - 9',
        children: [
            {
                id: '10',
                name: 'Child - 10',
                children: [
                    {
                        id: '11',
                        name: 'Child - 11',
                    },
                    {
                        id: '12',
                        name: 'Child - 12',
                    },
                ],
            },
        ],
    },
];

export const lineData: TreeNode[] = [
    {
        id: '1',
        name: 'Child - 1',
    },
    {
        id: '2',
        name: 'Child - 2',
    },
    {
        id: '3',
        name: 'Child - 3',
    },
    {
        id: '4',
        name: 'Child - 4',
    },
    {
        id: '5',
        name: 'Child - 5',
    },
    {
        id: '6',
        name: 'Child - 6',
    },
    {
        id: '7',
        name: 'Child - 7',
    },
    {
        id: '8',
        name: 'Child - 8',
    },
    {
        id: '9',
        name: 'Child - 9',
    },
    {
        id: '10',
        name: 'Child - 10',
    },
];

const useStyles = makeStyles(
    () => ({
        root: {
            maxWidth: 600,
        },
        avatarRoot: {
            backgroundColor: 'red',
        },
        avatarImg: {
            height: '100%',
        },
    }),
    { name: 'App' }
);

function App() {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <ExtendedSelect
                label="Тендеры в роли Заказчика"
                treeData={treeData}
            />
            <ExtendedSelect
                label="Тендеры в роли Поставщика"
                treeData={lineData}
            />
        </div>
    );
}

export default App;
