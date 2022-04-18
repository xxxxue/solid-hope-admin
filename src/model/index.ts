export type Auth = {
  resource: string | RegExp;
  actions?: string[];
};

export type IRoute = {
  name: string;
  path: string;
  breadcrumb?: boolean;
  children?: IRoute[];
  icon?: string;
};
