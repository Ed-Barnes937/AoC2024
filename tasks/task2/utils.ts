const path = "./tasks/task2/reactorReports.txt";
const file = Bun.file(path);

const text = await file.text();

export const getReports = () => {
    const reports: number[][] = text.split("\n").map((report) =>
        report.split(" ").map((level) => parseInt(level))
    );

    return reports;
};
