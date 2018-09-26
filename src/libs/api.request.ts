import HttpRequest from '@/libs/axios'
import config from '@/config'

// const baseUrl: string = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
const baseUrl: string = config.baseUrl.dev;
const axios = new HttpRequest(baseUrl);
export default axios;