const path = "./LocationIds.txt";
const file = Bun.file(path);

const text = await file.text();

export const getIds = () => {
    const list1: number[] = [];
    const list2: number[] = [];

    text.split("\n").forEach((line) => {
        const [id1, id2] = line.split("   ");
        list1.push(parseFloat(id1));
        list2.push(parseFloat(id2));
    });

    return { list1, list2 };
};
