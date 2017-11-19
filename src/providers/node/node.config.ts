import { OpaqueToken } from '@angular/core';

export let APP_NODE = new OpaqueToken('node.config');

export interface INodeConfig {
  addurl: string;
  baseurl: string;
}

export const NodeConfig: INodeConfig = {
  addurl: "/entity/node?_format=json",
  baseurl: "/node/",
};