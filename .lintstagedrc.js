module.exports = {
  '*.ts?(x)': () => 'yarn check-types',
  '*.(ts|js)?(x)': (filenames) => `eslint ${filenames.join(' ')}`,
}
