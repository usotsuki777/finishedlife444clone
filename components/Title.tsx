type Props = {
    title: string;
};

function Title({ title }: Props) {

    return <h1 className="text-center text-6xl font-masa text-[#008000] drop-shadow-lg title-shadow">{title}</h1>
}

export { Title }