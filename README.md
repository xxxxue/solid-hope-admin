# solid hope admin

| 名称              | 简介             |
| ----------------- | ---------------- |
| solid             | JavaScript框架   |
| hope-ui           | UI组件库         |
| solid-app-router  | 路由             |
| vite-plugin-pages | 自动生成文件路由 |
| query-string      | 解析浏览器地址   |
|                   |                  |


## 功能

- 顶部
- 根据JSON生成侧边栏菜单 , 刷新后默认展开菜单并选择当前链接
- 文件路由



## 部署

> 因为路由是history 模式, 刷新会404,
>
> 所以nginx需要增加以下代码, 在找不到文件后,返回index.html的内容

```
try_files $uri $uri/ /index.html;
```

