import { getReports } from "./utils";

export const determineReportIsSafe = (report: number[]) => {
    const diffs: number[] = [];
    for (let i = 1; i < report.length; i++) {
        diffs.push(report[i] - report[i - 1]);
    }

    // Check if all differences have the same sign (direction)
    const allDecreasing = diffs.every((diff) => diff < 0);
    const allIncreasing = diffs.every((diff) => diff > 0);

    // If not all positive or all negative, it's not safe
    if (!(allDecreasing || allIncreasing)) return false;

    // Check that all step changes are at least 1 and no greater than 3
    return diffs.every((diff) => Math.abs(diff) > 0 && Math.abs(diff) <= 3);
};

const getSafeReportCount = () => {
    const reports = getReports();
    const safeReports = reports.filter(determineReportIsSafe);
    return safeReports.length;
};

export default () => getSafeReportCount();
