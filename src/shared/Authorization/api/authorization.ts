import { fetcher } from './apicalls';
export const authorization = (mode: 'signin' | 'signup', body: any) => fetcher(`/${mode}`, body);
