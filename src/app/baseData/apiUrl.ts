import { environment } from '../../environments/environment';

const businessApi: string = environment.businessApiEndPoint;

export const apiConstant = {
  'userInfo': businessApi + 'user',
};
