export function sum(a: number, b: number): number {
  return a + b;
}

export function fibonacci(n: number): number {
  return n == 0 || n == 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}