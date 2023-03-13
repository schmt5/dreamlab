interface Props {
    when: boolean;
    children: React.ReactNode;
}

export const Show = ({ when, children }: Props) => {
    if (!when) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
}
