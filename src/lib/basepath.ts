export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

export function assetPath(path: string): string {
  return `${getBasePath()}${path}`;
}
