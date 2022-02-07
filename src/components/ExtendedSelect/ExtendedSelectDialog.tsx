import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    FormControlLabel,
    Grid,
    IconButton,
    OutlinedInput,
} from '@mui/material';
import { ArrowBack, ChevronRight, ExpandMore } from '@mui/icons-material';
import { TreeItem, TreeView } from '@mui/lab';
import React, { useEffect } from 'react';
import { ExtendedSelectDialogProps, TreeNode } from './types';
import { makeStyles } from '@mui/styles';
import { filter } from './helpers';

const getTreeNodeIds = (child: TreeNode) => {
    const result: string[] = [child.id];

    const callback = (child: TreeNode) => {
        result.push(child.id);
        child.children?.forEach(callback);
    };

    child.children?.forEach(callback);

    return result;
};

const useStyles = makeStyles(
    () => ({
        dialogPaper: {
            width: '100%',
        },
    }),
    { name: 'ExtendedSelectDialog' }
);

export const ExtendedSelectDialog: React.FC<ExtendedSelectDialogProps> = ({
    open,
    onClose,
    onApply,
    treeData,
    initialSelected,
}) => {
    const styles = useStyles();
    const [selected, setSelected] = React.useState<string[]>(initialSelected);

    useEffect(() => {
        if (open) {
            setSelected(initialSelected);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    const handleApply = () => {
        onApply(selected);
    };

    const onClear = () => {
        setSelected([]);
    };

    const [search, setSearch] = React.useState('');

    const onSearchChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setSearch(event.target.value);
    };

    const renderTree = React.useMemo(() => {
        const onCheckboxChange =
            (treeNode: TreeNode) =>
            (event: React.ChangeEvent<HTMLInputElement>) => {
                const checked = event.target.checked;

                const treeNodeIds = getTreeNodeIds(treeNode);

                setSelected((prevSelected) =>
                    checked
                        ? [...prevSelected, ...treeNodeIds]
                        : prevSelected.filter(
                              (treeNodeId) => !treeNodeIds.includes(treeNodeId)
                          )
                );
            };

        const onCheckboxOrLabelClick = (
            event: React.MouseEvent<HTMLButtonElement | HTMLLabelElement>
        ) => {
            event.stopPropagation();
        };

        const renderTreeNode = (treeNode: TreeNode) => {
            const checked = selected.includes(treeNode.id);

            return (
                <TreeItem
                    key={treeNode.id}
                    nodeId={treeNode.id}
                    label={
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={onCheckboxChange(treeNode)}
                                    onClick={onCheckboxOrLabelClick}
                                />
                            }
                            label={treeNode.name}
                            onClick={onCheckboxOrLabelClick}
                        />
                    }
                >
                    {treeNode.children?.map(renderTreeNode)}
                </TreeItem>
            );
        };

        return filter(treeData, search).map(renderTreeNode);
    }, [selected, treeData, search]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            classes={{ paper: styles.dialogPaper }}
        >
            <DialogContent
                sx={{
                    padding: 2.5,
                    paddingBottom: 0,
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} container spacing={2}>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <IconButton onClick={onClose}>
                                        <ArrowBack />
                                    </IconButton>
                                }
                                label="Реализуемые товары"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <OutlinedInput
                                autoFocus
                                fullWidth
                                value={search}
                                onChange={onSearchChange}
                                placeholder="Search..."
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ maxHeight: 250, overflow: 'auto' }}>
                            <TreeView
                                defaultCollapseIcon={<ExpandMore />}
                                defaultExpandIcon={<ChevronRight />}
                                multiSelect
                                selected={selected}
                            >
                                {renderTree}
                            </TreeView>
                        </Box>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions
                sx={{
                    padding: 2.5,
                    justifyContent: 'space-between',
                }}
            >
                <Button variant="contained" onClick={handleApply}>
                    Применить
                </Button>
                <Button variant="outlined" onClick={onClear}>
                    Очистить
                </Button>
            </DialogActions>
        </Dialog>
    );
};
