const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const isTS = fs.existsSync(path.join(cwd, 'tsconfig.json'));

module.exports = {
  extends: [
    'canonical',
    ...(isTS ? ['canonical/typescript'] : []),
    'canonical/react',
  ],
};
