import { Box, createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    list: {
        display: 'flex',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.gray[0],
        height: 46,

        '& a': {
            fontWeight: 500,
            padding: '10px 16px',
            textDecoration: 'none',
            color: theme.black,
            borderRadius: theme.radius.sm,
            border: `1px solid transparent`,
            borderBottom: 0,

            '&[data-active="true"]': {
                backgroundColor: theme.white,
                borderColor: theme.colors.gray[3],
            },
        }
    },
}));

interface Props {
    children: React.ReactNode;
}

export const HeaderTabsWrapper = ({ children }: Props) => {
    const { classes } = useStyles();

    return (
        <Box className={classes.list}>
            {children}
        </Box>
    );
}
