// could be moved to global helpers, but until it's used in more places it's fine here
export function clampValue ({
  value,
  min,
  max
}: {
  value: number;
  min: number;
  max: number;
}): number {
  return Math.min(Math.max(value, min), max)
}
