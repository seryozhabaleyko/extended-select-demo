import React from 'react';

import { Search, Tree } from './components';

import styles from './App.module.scss';

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: <span style={{ color: '#1890ff' }}>sss</span>,
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];

function App() {
  const [search, setSearch] = React.useState('');

  const onSearchChange = (search: string): void => {
    setSearch(search);
  };

  return (
    <div className={styles.root}>
      <Search placeholder="Search" value={search} onChange={onSearchChange} />
      <Tree
        checkable
        defaultExpandedKeys={['0-0-0', '0-0-1']}
        defaultSelectedKeys={['0-0-0', '0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
        onSelect={(selectedKeys, info) => {
          console.log('onSelect -> selectedKeys:', selectedKeys);
          console.log('onSelect -> info:', info);
        }}
        onCheck={(checked, info) => {
          console.log('onCheck -> checked:', checked);
          console.log('onCheck -> info:', info);
        }}
        treeData={treeData}
      />
    </div>
  );
}

export default App;
