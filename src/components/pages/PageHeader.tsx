import { useContext } from "react";
import { ActionIcon, Button, Flex, Menu, Title } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { BlockMutationDrawer } from "../blocks/BlockMutationDrawer";
import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { PageByIdQuery } from "../../urql/queries/pageByIdQuery";
import { ActionType, BlockMutationDispatchContext } from "../../context/BlockContext";

export const PageHeader = () => {
    const { pageId } = useParams();
    const dispatch = useContext(BlockMutationDispatchContext);
    const [{ data }] = useQuery({ query: PageByIdQuery, variables: { id: pageId! } });

    const handleDispatch = (actionType: ActionType) => {
        if (dispatch) {
            dispatch({
                type: actionType,
                payload: null,
            });
        }
    }

    return (
        <>
            <Flex justify={'space-between'} align={'center'} mb={36}>
                <Title order={2} mb={'lg'}>
                    {data?.page?.name}
                </Title>
                <Flex>
                    <Button
                        sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                        onClick={() => handleDispatch('CREATE_RICHTEXT')}
                    >
                        Einfügen
                    </Button>
                    <Menu shadow={'md'} width={200}>
                        <Menu.Target>
                            <ActionIcon
                                variant="filled"
                                size={36}
                                color="indigo"
                                sx={theme => ({ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftColor: theme.colors.indigo[3] })}
                            >
                                <IconChevronDown />
                            </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Label>Blöcke</Menu.Label>
                            <Menu.Item onClick={() => handleDispatch('CREATE_RICHTEXT')}>RichText-Editor</Menu.Item>
                            <Menu.Item>Checkbox</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Flex>
            </Flex>
            <BlockMutationDrawer />
        </>
    );
}
