import { ActionIcon, Button, Card, Flex, TextInput, Title, useMantineTheme } from '@mantine/core';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export const CourseFilterForm = () => {
    const theme = useMantineTheme();

    return (
        <Card
            withBorder
            p={'md'}
            radius={'lg'}
            shadow={'sm'}
            mt={-56}
        >
            <Flex justify={'space-between'} align={'center'} mb={'xl'}>
                <Title order={3}>Kurse</Title>
                <Button
                    component={Link}
                    to={'/courses/new'}
                    variant="gradient"
                    gradient={{ from: 'indigo', to: 'grape' }}
                >
                    Erstellen
                </Button>
            </Flex>
            <TextInput
                icon={<IconSearch size={18} stroke={1.5} />}
                radius="xl"
                size="md"
                rightSection={
                    <ActionIcon size={32} radius="xl" variant="filled" color={theme.primaryColor}>
                        <IconArrowRight size={18} stroke={1.5} />
                    </ActionIcon>
                }
                placeholder="Kurse suchen"
                rightSectionWidth={42}
            />
        </Card>
    );
}
