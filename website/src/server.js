import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { devConfig, prodConfig } from './config/config';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const config = dev ? devConfig : prodConfig;

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware({
      session: (req, res) => ({
        config,
      }),
    }),
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });
