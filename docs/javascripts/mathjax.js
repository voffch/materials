window.MathJax = {
  loader: {load: ['[tex]/mhchem']},
  tex: {
    packages: {'[+]': ['mhchem']},
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    tags: 'all'
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};