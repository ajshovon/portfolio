/** The public path of a page: built files are `/about.html` and `/index.html`, but they are linked and served as `/about` and `/`. */
export function cleanPathname(url: URL) {
  return url.pathname.replace(/(\/index)?(\.html)?\/?$/, '') || '/';
}
