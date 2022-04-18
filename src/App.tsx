import {
  Component,
  createMemo,
  createSignal,
  For,
  JSXElement,
  Show,
} from "solid-js";
import { Icon, IconSource } from "@steeze-ui/solid-icon";
import {
  Beaker,
  Bell,
  Calendar,
  Chat,
  Cog,
  Moon,
  Search,
  Translate,
  User,
} from "@steeze-ui/heroicons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  Flex,
  hope,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@hope-ui/solid";

import { Link, useLocation, useNavigate, useRoutes } from "solid-app-router";

import pageRoutes from "~solid-pages";
import { IRoute } from "./model";
import { LogoIcon } from "./lcons";

import { Menu, MenuItem, SubMenu } from "./components/menu";
import { menuRoutes } from "./config/routes";

import qs from "query-string";

import { Menu2 } from "@steeze-ui/remix-icons";

let myIcon = (icon: IconSource) => {
  let size = "20";
  return <Icon size={size} src={icon} />;
};
let getIcon = (key: string) => {
  switch (key) {
    case "dashboard":
      return myIcon(Bell);
    case "visualization":
      return myIcon(Translate);
    case "list":
      return myIcon(Moon);
    case "form":
      return myIcon(Cog);
    case "profile":
      return myIcon(Calendar);
    case "result":
      return myIcon(Chat);
    case "exception":
      return myIcon(Beaker);
    case "user":
      return myIcon(User);
    default:
      return (
        <hope.div
          css={{
            width: "20px",
            height: "20px",
            display: "inline-block",
          }}
        />
      );
  }
};

let App: Component = () => {
  let [openSidebar, setOpenSidebar] = createSignal<boolean>(true);

  let breadcrumbMap = createMemo(() => {
    return new Map();
  });

  let toggleSidebar = () => {
    setOpenSidebar(!openSidebar());
  };

  let location = useLocation();
  let navigate = useNavigate();

  let defaultOpenKeys = createMemo(() => {
    let currentComponent = qs.parseUrl(location.pathname).url.slice(1);
    let paths = currentComponent.split("/");

    let res: string[] = [];
    paths = paths.slice(0, paths.length - 1);
    for (let i = 1; i <= paths.length; i++) {
      let item = "/" + paths.slice(0, i).join("/");
      res.push(item);
    }

    return res;
  });

  let defaultSelectedKeys = createMemo(() => {
    return [location.pathname];
  });

  let goToPath = (path: string) => {
    navigate(path);
  };

  let renderMneuItem = (routes: IRoute[]) => {
    let nodes: JSXElement[] = [];
    breadcrumbMap().clear();
    function travel(
      _routes: IRoute[],
      level: number,
      parentNode: string[] = []
    ) {
      return _routes.map((route) => {
        let titleDom = route.name;

        // 没有子节点,返回 Link, 结束当前路线的递归
        if (
          route.path &&
          (!Array.isArray(route.children) ||
            (Array.isArray(route.children) && !route.children?.length))
        ) {
          // 存储当前 Link 的父子关系路线
          breadcrumbMap().set(route.path, [...parentNode, route.name]);

          // 非 一级目录,返回 Link,结束递归, 最终拼装一个嵌套结构
          if (level > 1) {
            return (
              <MenuItem
                key={route.path}
                level={level}
                onClick={() => goToPath(route.path)}
              >
                {titleDom}
              </MenuItem>
            );
          }

          // 一级目录
          let iconDom = getIcon(route.icon || "");
          nodes.push(
            <MenuItem
              key={route.path}
              icon={iconDom}
              level={level}
              onClick={() => goToPath(route.path)}
            >
              {titleDom}
            </MenuItem>
          );
        }

        // 处理带有子节点的路由
        if (Array.isArray(route.children) && route.children?.length) {
          // 是子节点,继续递归, return给1级节点,最终拼装出一个嵌套结构
          if (level > 1) {
            return (
              <SubMenu key={route.path} title={titleDom} level={level}>
                {travel(route.children, level + 1, [...parentNode, route.name])}
              </SubMenu>
            );
          }
          // 1级节点 ,添加到集合中, 开始递归子节点, 拼装一个嵌套结构
          let iconDom = getIcon(route.icon || "");
          nodes.push(
            <SubMenu
              key={route.path}
              icon={iconDom}
              title={titleDom}
              level={level}
            >
              {travel(route.children, level + 1, [...parentNode, route.name])}
            </SubMenu>
          );
        }
      });
    }
    travel(routes, 1);

    return nodes;
  };

  let renderBreadcrumb = (nameArr: string[]) => {
    return (
      <>
        <Breadcrumb css={{ fontSize: "13px" }}>
          <For each={nameArr}>
            {(name, index) => {
              return (
                <>
                  <BreadcrumbItem>
                    <Text>{name}</Text>
                    <Show when={nameArr.length - 1 > index()}>
                      <BreadcrumbSeparator />
                    </Show>
                  </BreadcrumbItem>
                </>
              );
            }}
          </For>
        </Breadcrumb>
      </>
    );
  };

  return (
    <>
      <Box w="$full" h="$full">
        <Flex direction="column" h="$full">
          {/* head  */}
          <Flex
            bg="white"
            h="60px"
            position="fixed"
            left="0"
            top="0"
            right="0"
            justifyContent="space-between"
            alignItems="center"
            minW="580px"
          >
            {/* Logo */}
            <Flex justifyItems="center" alignItems="center" pl="20px">
              <LogoIcon />
              <Box
                fontSize="20px"
                css={{ display: "none", "@md": { display: "flex" } }}
              >
                Hope Admin
              </Box>
              <IconButton
                ml="$2"
                onClick={toggleSidebar}
                borderRadius="$full"
                aria-label=""
                icon={myIcon(Menu2)}
              />
            </Flex>
            {/* Logo End */}
            {/* right */}
            <Flex pr="$4">
              <HStack spacing="$3" py="14px">
                <Box>
                  <InputGroup w="196px">
                    <Input placeholder="输入查询内容" borderRadius="$3xl" />
                    <InputRightElement pointerEvents="none">
                      {myIcon(Search)}
                    </InputRightElement>
                  </InputGroup>
                </Box>

                <Box>
                  <IconButton
                    borderRadius="$full"
                    aria-label=""
                    icon={myIcon(Translate)}
                  />
                </Box>

                <Box>
                  <IconButton
                    borderRadius="$full"
                    aria-label=""
                    icon={myIcon(Bell)}
                  />
                </Box>
                <Box>
                  <IconButton
                    borderRadius="$full"
                    aria-label=""
                    icon={myIcon(Moon)}
                  />
                </Box>
                <Box>
                  <IconButton
                    borderRadius="$full"
                    aria-label=""
                    icon={myIcon(Cog)}
                  />
                </Box>
                <Box>
                  <Avatar
                    name="user"
                    h="38px"
                    w="38px"
                    src="/src/assets/user.png"
                  >
                    <AvatarBadge
                      boxSize="0.9em"
                      bg="$success9"
                      borderColor="papay"
                    />
                  </Avatar>
                </Box>
              </HStack>
            </Flex>
            {/* right end */}
          </Flex>
          {/* head end  */}

          {/* sidebar */}
          <Flex
            position="fixed"
            mt="60px"
            left="0"
            bottom="0"
            top="0"
            transition="transform 0.3s cubic-bezier(0.34, 0.69, 0.1, 1)"
            transform={openSidebar() ? "translateX(0%)" : "translateX(-100%)"}
          >
            {/* menu */}
            <Box w="250px" px="10px" overflowX="hidden" overflowY="auto">
              <Menu
                defaultOpenKeys={defaultOpenKeys()}
                defaultSelectedKeys={defaultSelectedKeys()}
              >
                {renderMneuItem(menuRoutes)}
              </Menu>
            </Box>
            {/* menu end */}
          </Flex>
          {/* sidebar end */}

          {/* content */}
          <Flex
            pt="60px"
            w="$full"
            h="$full"
            pl={openSidebar() ? "250px" : "0px"}
            transition="padding-left 0.3s cubic-bezier(0.34, 0.69, 0.1, 1)"
          >
            <Box w="$full" h="$full" px="20px">
              <Box
                css={{
                  fontSize: "10px",
                  display: "none",
                  "@md": { display: "flex" },
                }}
              >
                {renderBreadcrumb(breadcrumbMap().get(location.pathname))}
              </Box>
              <Box>{useRoutes(pageRoutes)}</Box>
              <Flex justifyContent="center" alignItems="center">
                Hope Admin
              </Flex>
            </Box>
          </Flex>
          {/* content end */}
        </Flex>
      </Box>
    </>
  );
};

export default App;
