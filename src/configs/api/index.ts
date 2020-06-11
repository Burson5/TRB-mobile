import envConfig from '../env.conf';
const API_ENV = process.env.API_ENV;
const currentEnvConfig: EnvTemplate = envConfig[API_ENV] as unknown as EnvTemplate;

export default currentEnvConfig;
