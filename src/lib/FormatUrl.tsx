export function formatUrl(url: string) {
  url = url.replace(/^https:\/\/www\./i, '');
  url = url.replace(/^https:\/\//i, '');
  url = url.replace(/\/.*$/, '');
  return url;
}
