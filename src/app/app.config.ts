import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface IAppConfig {
  urlApi: string;
  viewApi: string;
}

export const AppConfig: IAppConfig = {
  urlApi: "http://dev-domain.com",
  viewApi: "/list/nodes",
};
