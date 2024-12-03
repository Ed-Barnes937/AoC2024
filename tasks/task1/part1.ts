import { getIds } from "./utils";

/**
 * Find the total distance between the two lists of IDs.
 *
 * The two lists are sorted and then the distance between each pair of IDs is calculated.
 * The total distance is the sum of all the distances.
 *
 * @returns {number} The total distance between the two lists of IDs.
 */

const getDistancesBetweenSortedLists = () => {
    const { list1, list2 } = getIds();
    const distances: number[] = [];

    list1.sort();
    list2.sort();

    list1.forEach((id1, index) => {
        const id2 = list2[index];
        const distance = id1 - id2;
        distances.push(Math.abs(distance));
    });

    return distances;
};

const getTotalDistance = () => {
    const distances = getDistancesBetweenSortedLists();
    return distances.reduce((a, b) => a + b, 0);
};

export default () => getTotalDistance();
