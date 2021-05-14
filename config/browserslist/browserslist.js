module.exports = {
  production: [
    '>0.2% in CA and since 2020 and last 2 major versions',
    'not ie 11',
    'not op_mini all',
    'not dead',
  ],
  development: [
    'last 1 chrome version',
    'last 1 firefox version',
    'last 1 safari version',
  ],
  polyfill: [
    '>0.2% in CA and since 2018',
    'Firefox ESR',
    'not dead',
    'not op_mini all',
    'not and_uc <= 12.12',
  ]
}
