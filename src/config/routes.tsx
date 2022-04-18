import { IRoute } from "../model";

export let menuRoutes: IRoute[] = [
  {
    name: "首页",
    path: "/",
    icon: "user",
  },
  {
    name: "仪表盘",
    path: "/dashboard",
    icon: "dashboard",
    children: [
      {
        name: "工作台",
        path: "/dashboard/workplace",
        children: [
          {
            name: "普通工作台",
            path: "/dashboard/workplace/base",
            children: [
              {
                name: "能量瓶小伙",
                path: "/dashboard/workplace/base/nlpxh",
              },
              {
                name: "奥特曼",
                path: "/dashboard/workplace/base/atm",
              },
            ],
          },
          {
            name: "超级工作台",
            path: "/dashboard/workplace/super",
            children: [
              {
                name: "火影忍者",
                path: "/dashboard/workplace/super/hyrz",
              },
              {
                name: "猪猪侠",
                path: "/dashboard/workplace/super/zzx",
              },
            ],
          },
        ],
      },
      {
        name: "实时监控",
        path: "/dashboard/monitor",
      },
    ],
  },
  {
    name: "数据可视化",
    path: "/visualization",
    icon: "visualization",
    children: [
      {
        name: "分析页",
        path: "/visualization/data-analysis",
      },
      {
        name: "多维数据分析",
        path: "/visualization/multi-dimension-data-analysis",
      },
    ],
  },
  {
    name: "列表页",
    path: "/list",
    icon: "list",
    children: [
      {
        name: "查询表格",
        path: "/list/search-table",
      },
      {
        name: "卡片列表",
        path: "/list/card",
      },
    ],
  },
  {
    name: "表单页",
    path: "/form",
    icon: "form",
    children: [
      {
        name: "分组表单",
        path: "/form/group",
      },
      {
        name: "分步表单",
        path: "/form/step",
      },
    ],
  },
  {
    name: "详情页",
    path: "/profile",
    icon: "profile",
    children: [
      {
        name: "基础详情页",
        path: "/profile/basic",
      },
    ],
  },

  {
    name: "结果页",
    path: "/result",
    icon: "result",
    children: [
      {
        name: "成功页",
        path: "/result/success",
        breadcrumb: false,
      },
      {
        name: "失败页",
        path: "/result/error",
        breadcrumb: false,
      },
    ],
  },
  {
    name: "异常页",
    path: "/exception",
    icon: "exception",
    children: [
      {
        name: "403",
        path: "/exception/403",
      },
      {
        name: "404",
        path: "/exception/404",
      },
      {
        name: "500",
        path: "/exception/500",
      },
    ],
  },
  {
    name: "个人中心",
    path: "/user",
    icon: "user",
    children: [
      {
        name: "用户信息",
        path: "/user/info",
      },
      {
        name: "用户设置",
        path: "/user/setting",
      },
    ],
  },
];
