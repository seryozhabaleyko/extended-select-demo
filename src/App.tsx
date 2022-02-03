import React from 'react';
import { makeStyles } from '@mui/styles';

import { ExtendedSelect } from './components';

const useStyles = makeStyles(
    () => ({
        root: {},
    }),
    { name: 'App' }
);

function App() {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <ExtendedSelect />
        </div>
    );
}

export default App;
