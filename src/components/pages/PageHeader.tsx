import { useState } from "react";
import { ActionIcon, Button, Flex, Menu, Title } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { CreateBlockDrawer } from "../CreateBlockDrawer";
import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { PageByIdQuery } from "../../urql/queries/pageByIdQuery";

export const PageHeader = () => {
    const { pageId } = useParams();
    const [{ data }] = useQuery({ query: PageByIdQuery, variables: { id: pageId! } })
    const [blockToCreate, setBlockToCreate] = useState<'' | 'richtext' | 'checkbox'>('');

    return (
        <>
            <Flex justify={'space-between'} align={'center'} mb={'lg'}>
                <Title order={2} mb={'lg'}>
                    {data?.page?.name}
                </Title>
                <Flex>
                    <Button
                        sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                        onClick={() => setBlockToCreate('richtext')}
                    >
                        Einfügen
                    </Button>
                    <Menu shadow={'md'} width={200}>
                        <Menu.Target>
                            <ActionIcon
                                variant="filled"
                                size={36}
                                color="pink"
                                sx={theme => ({ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftColor: theme.colors.pink[3] })}
                            >
                                <IconChevronDown />
                            </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Label>Blöcke</Menu.Label>
                            <Menu.Item onClick={() => setBlockToCreate('richtext')}>RichText-Editor</Menu.Item>
                            <Menu.Item>Checkbox</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Flex>
            </Flex>
            <CreateBlockDrawer
                blockToCreate={blockToCreate}
                onClose={() => setBlockToCreate('')}
            />
        </>
    );
}
