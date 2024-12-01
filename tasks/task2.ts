import { getIds } from "../utils";

/**
 * 1. Get the ids from the input file
 * 2. Get the occurances of each id in the second list
 * 3. Multiply the id by the occurances
 * 4. Sum the scores
 * 5. Return the sum
 */

const getOccurence = (num: number) => {
    const { list2 } = getIds();

    return list2.filter((item) => item === num).length;
};

const getSimilarityScore = (num: number) => {
    const occurances = getOccurence(num);

    return num * occurances;
};

export const getSimilarityScores = () => {
    const { list1 } = getIds();

    const similarityScores = list1.map(getSimilarityScore);

    return similarityScores;
};

export const sumScores = () => {
    const scores = getSimilarityScores();

    return scores.reduce((acc, curr) => acc + curr, 0);
};

export default () => sumScores();
