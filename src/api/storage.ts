const getData: <T>(key: string) => T | null = (key) =>
  JSON.parse(localStorage.getItem(key) as string);

export { getData };
