import { environment } from '../../environments/environment';

const businessApi: string = environment.businessApiEndPoint;

export const ApiUrl = {
  local: 'http://localhost:4600/AddressWeb/Service/AddressJsonpProvider.aspx',
  st: 'http://99.12.115.32/Addressbook/web/Service/AddressJsonpProvider.aspx',
  prod: 'https://ab.office.cmbchina.com/addressbook/web/Service/AddressJsonpProvider.aspx'
};

export const apiConstant = {
  'projects': businessApi + 'projects',
};
