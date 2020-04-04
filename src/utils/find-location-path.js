export function findLocationPath(path, separator = '/') {
  const lastIndex = path.lastIndexOf(separator);
  return path.substring(lastIndex + 1);
}
