export const indexValidator = (url: string) => {
  return url.trim() === 'undefined' ? '1' : url;
};
