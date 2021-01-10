const common = {
  imagesPathPrefix: 'https://storage.googleapis.com/photoatm-com.appspot.com',
  imgixPathPrefix: 'https://photoatm.imgix.net',
};
const devConfig = Object.assign(
  {},
  {
    baseUrl: 'https://us-central1-photoatm-com.cloudfunctions.net',
  },
  common,
);

const prodConfig = Object.assign(
  {},
  {
    baseUrl: 'https://us-central1-photoatm-com.cloudfunctions.net',
  },
  common,
);

module.exports = {
  devConfig: devConfig,
  prodConfig: prodConfig,
};
