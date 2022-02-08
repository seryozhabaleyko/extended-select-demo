import React from 'react';
import { OutlinedInput, Grid, InputLabel, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { ExtendedSelectProps } from './types';
import { ExtendedSelectDialog } from './ExtendedSelectDialog';

const useStyles = makeStyles(
    {
        root: {
            marginBottom: 32,
        },
    },
    {
        name: 'ExtendedSelect',
    }
);

export const ExtendedSelect: React.FC<ExtendedSelectProps> = ({
    label,
    treeData,
}) => {
    const styles = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<string[]>([]);

    const onOpen = (): void => {
        setOpen(true);
    };

    const onClose = (): void => {
        setOpen(false);
    };

    const onApply = (selected: string[]): void => {
        setSelected(selected);
        onClose();
    };

    return (
        <div className={styles.root}>
            <Grid container spacing={1}>
                <Grid
                    item
                    xs={12}
                    container
                    spacing={1}
                    justifyContent="space-between"
                >
                    <Grid item xs="auto">
                        <InputLabel>{label}</InputLabel>
                    </Grid>

                    <Grid item xs="auto">
                        <Link
                            component="button"
                            underline="none"
                            variant="button"
                            onClick={onOpen}
                            textTransform={'none'}
                        >
                            Показать выбранное ({selected.length})
                        </Link>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <OutlinedInput
                        value={selected.join(', ')}
                        onClick={onOpen}
                        fullWidth
                        placeholder="Select..."
                    />
                </Grid>
            </Grid>

            <ExtendedSelectDialog
                open={open}
                onClose={onClose}
                onApply={onApply}
                treeData={treeData}
                initialSelected={selected}
            />
        </div>
    );
};
