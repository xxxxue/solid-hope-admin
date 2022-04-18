# solid-hope-admin

| 名称                                                         | 简介             |
| ------------------------------------------------------------ | ---------------- |
| [solid](https://github.com/solidjs/solid)                    | JavaScript框架   |
| [hope-ui](https://github.com/fabien-ml/hope-ui)              | UI组件库         |
| [solid-app-router](https://github.com/solidjs/solid-app-router) | 路由             |
| [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) | 自动生成文件路由 |
| [query-string](https://github.com/sindresorhus/query-string) | 解析URL地址      |
| [steeze-ui/solid-icon](https://github.com/steeze-ui/icons/blob/main/packages/components/solid-icon) | 图标             |



| 名称                            | 简介                    |
| ------------------------------- | ----------------------- |
| husky                           | git hooks               |
| lint-staged                     | 过滤出 git暂存区 的文件 |
| prettier                        | 代码整理                |
| sort-package-json               | 整理 package.json       |
| commitlint                      | 规范化 git message      |
| @commitlint/config-conventional | commitlint的常规配置    |



## 功能

- 顶部
- 根据JSON生成侧边栏菜单 , 刷新后默认展开菜单并选择当前链接
- 文件路由



## 部署

> 因为路由是history 模式, 刷新会404,
> 所以需要在找不到文件后,返回index.html的内容



### Nginx

```
try_files $uri $uri/ /index.html;
```



### Vercel

> 项目根目录添加 `vercel.json`

```json
{
    "version": 2,
    "routes": [
        {
            "handle": "filesystem"
        },
        {
            "src": "/(.*)",
            "status": 404,
            "dest": "/index.html"
        }
    ]
}
```



