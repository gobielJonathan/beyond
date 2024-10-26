// @ts-check

/** @type {import('ordijs/config').OrdiConfig} */
const ordiConfig = {
  /* config options here */
  compiler({ instance }) {
    return instance;
  },
};

module.exports = ordiConfig;
