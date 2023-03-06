import { createStyles, getStylesRef, Text, Tooltip } from "@mantine/core";
import { IconFile } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";

const useStyles = createStyles((theme) => {
    const icon = getStylesRef ('icon') as any;
    return {
        link: {
            ...theme.fn.focusStyles(),
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.sm,
            textDecoration: 'none',
            color: theme.colors.gray[7],
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            '&:hover': {
                backgroundColor: theme.colors.gray[0],
                color: theme.black,

                [`& .${icon}`]: {
                    color: theme.black,
                },
            },
        },
        linkActive: {
            '&, &:hover': {
                backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
                    .background,
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
                [`& .${icon}`]: {
                    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
                },
            },
        },
        linkIcon: {
            ref: icon,
            flexShrink: 0,
        },
    };
});

interface PageLinkProps {
    id: string;
    name: string;
    isSidebarOpen: boolean;
}

export const PageLink = ({ id, name, isSidebarOpen }: PageLinkProps) => {
    const { courseId, pageId: currentPageId } = useParams();
    const { classes, cx } = useStyles();

    return (
        <Tooltip
            label={name}
            position="right"
            transitionDuration={0}
            opened={isSidebarOpen ? false : undefined}
        >
            <Link
                to={`/courses/${courseId}/pages/${id}`}
                className={cx(classes.link, { [classes.linkActive]: id === currentPageId })}
            >
                <IconFile className={classes.linkIcon} />
                <Text sx={{ display: isSidebarOpen ? undefined : 'none', whiteSpace: 'nowrap' }}>
                    {name}
                </Text>
            </Link>
        </Tooltip>
    );
};
