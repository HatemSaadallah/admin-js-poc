import * as dotenv from 'dotenv';

dotenv.config();

import { config as defaultConfig } from './config.development';

const env = process.env.NODE_ENV || 'development';
const filePath = `config.${env}`;

let currentConfig = null;

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { config } = require(`./${filePath}`);
  currentConfig = config;
} catch (error) {}

const current = currentConfig ?? defaultConfig;

export default [defaultConfig, current];
