/**
 * Utility functions for testing and debugging challenges
 */

export function measureExecutionTime<T>(fn: () => T): {
  result: T;
  timeMs: number;
} {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  return { result, timeMs: end - start };
}

export function generateRandomArray(
  length: number,
  min: number = 0,
  max: number = 100
): number[] {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}

export function printTestResult(
  testName: string,
  expected: any,
  actual: any
): void {
  const passed = JSON.stringify(expected) === JSON.stringify(actual);
  const status = passed ? '✅ PASS' : '❌ FAIL';
  console.log(`${status} ${testName}`);
  if (!passed) {
    console.log(`  Expected: ${JSON.stringify(expected)}`);
    console.log(`  Actual: ${JSON.stringify(actual)}`);
  }
}
