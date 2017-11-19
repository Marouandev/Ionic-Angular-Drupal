import { OpaqueToken } from '@angular/core';

export let APP_USER = new OpaqueToken('user.config');

export interface IUserConfig {
  urlLogin: string;
  urlregister: string;
  urlLogout: string;
  baseurl: string;
  urltoken: string;
}

export const UserConfig: IUserConfig = {
  urlLogin: "/user/login?_format=json",
  urlregister: "/user/register?_format=hal_json",
  urlLogout: "/user/logout",
  baseurl: "/user/",
  urltoken: "/rest/session/token",
};