import { useState } from 'react';
import { createStyles, getStylesRef, Navbar, Group, Burger, Tooltip, UnstyledButton } from '@mantine/core';
import {
  IconFile,
} from '@tabler/icons-react';
import { pages } from './db/data';


const useStyles = createStyles((theme) => {
  const icon = getStylesRef('icon') as any;
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
      flexShrink: 0,
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

    linkShrink: {
      width: 50,
      height: 50,
      borderRadius: theme.radius.md,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    }
  };
});


interface NavbarLinkProps {
  icon: any;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link)}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}



export function ExamNavbar() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Home');
  const [opened, setOpened] = useState(true);

  const links = pages.map((item) => (
    <Tooltip
      label={item.name}
      position="right"
      transitionDuration={0}
      opened={opened ? false : undefined}
    >
      <a
        className={cx(classes.link, { [classes.linkActive]: item.name === active })}
        href={item.id}
        key={item.name}
        onClick={(event) => {
          event.preventDefault();
          setActive(item.name);
        }}
      >
        <IconFile className={classes.linkIcon} stroke={1.5} />
        <span style={{ display: opened ? undefined : 'none' }}>{item.name}</span>
      </a>
    </Tooltip>
  ));

  return (
    <Navbar
      height={700}
      p="md"
      sx={{ flexBasis: opened ? 300 : 82, flexShrink: 0, flexGrow: 0, overflow: 'hidden', transition: 'flex-basis 0.3s' }}
    >
      <Navbar.Section grow>
        <Group position={opened ? 'right' : 'center'} mb={'lg'}>
          <Burger
            size={'sm'}
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={'Menu'}
          />
        </Group>
        {links}
      </Navbar.Section>
    </Navbar>
  );
}