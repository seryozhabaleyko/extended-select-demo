import React from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    OutlinedInput,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TreeItem, TreeView } from '@mui/lab';
import { ExpandMore, ChevronRight } from '@mui/icons-material';

const useStyles = makeStyles(
    () => ({
        root: {},
        modal: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
    }),
    { name: 'ExtendedSelect' }
);

type ExtendedSelectProps = {};

export const ExtendedSelect: React.FC<ExtendedSelectProps> = () => {
    const styles = useStyles();
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState('');

    const onSearchChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setSearch(event.target.value);
    };

    const handleClickOpen = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    return (
        <div className={styles.root}>
            <OutlinedInput onClick={handleClickOpen} />

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <OutlinedInput value={search} onChange={onSearchChange} />

                    <TreeView
                        defaultCollapseIcon={<ExpandMore />}
                        defaultExpandIcon={<ChevronRight />}
                        multiSelect
                        sx={{
                            height: 216,
                            flexGrow: 1,
                            maxWidth: 400,
                            overflowY: 'auto',
                        }}
                    >
                        <TreeItem nodeId="1" label="Applications">
                            <TreeItem nodeId="2" label="Calendar" />
                            <TreeItem nodeId="3" label="Chrome" />
                            <TreeItem nodeId="4" label="Webstorm" />
                        </TreeItem>

                        <TreeItem nodeId="5" label="Documents">
                            <TreeItem nodeId="6" label="MUI">
                                <TreeItem nodeId="7" label="src">
                                    <TreeItem nodeId="8" label="index.js" />
                                    <TreeItem nodeId="9" label="tree-view.js" />
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
                    </TreeView>
                </DialogContent>

                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>
                        Применить
                    </Button>
                    <Button variant="outlined" onClick={handleClose}>
                        Очистить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
