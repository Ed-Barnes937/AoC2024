import { determineReportIsSafe } from "./part1";
import { getReports } from "./utils";

const isReportSafeWithSkip = (report: number[]) => {
    return report.some((_, skipIndex) => {
        const modifiedReport = report.filter((_, index) => index !== skipIndex);
        return determineReportIsSafe(modifiedReport);
    });
};

const getSafeReportCount = () => {
    const reports = getReports();
    const safeReports = reports.filter((report) =>
        determineReportIsSafe(report) || isReportSafeWithSkip(report)
    );
    return safeReports.length;
};

export default () => getSafeReportCount();
