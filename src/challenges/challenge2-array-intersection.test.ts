import { arrayIntersection } from './challenge2-array-intersection';

describe('Challenge 2: Array Intersection', () => {
    test('should return [3, 4] for [1, 2, 3, 4] and [3, 4, 5, 6]', () => {
        const result = arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]);
        expect(result).toEqual([3, 4]);
    });

    test('should return ["b", "c"] for ["a", "b", "c"] and ["b", "c", "d"]', () => {
        const result = arrayIntersection(["a", "b", "c"], ["b", "c", "d"]);
        expect(result).toEqual(["b", "c"]);
    });

    test('should return [2, 3] for [1, 1, 2, 3] and [2, 2, 3, 4] (no duplicates)', () => {
        const result = arrayIntersection([1, 1, 2, 3], [2, 2, 3, 4]);
        expect(result).toEqual([2, 3]);
    });

    test('should return [] for [1, 2, 3] and [4, 5, 6] (no intersection)', () => {
        const result = arrayIntersection([1, 2, 3], [4, 5, 6]);
        expect(result).toEqual([]);
    });

    test('should return [] for empty arrays', () => {
        const result = arrayIntersection([], [1, 2, 3]);
        expect(result).toEqual([]);
    });

    test('should handle both arrays empty', () => {
        const result = arrayIntersection([], []);
        expect(result).toEqual([]);
    });

    test('should handle single element arrays', () => {
        const result = arrayIntersection([1], [1]);
        expect(result).toEqual([1]);
    });
});
