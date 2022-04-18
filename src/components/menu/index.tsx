import { css, Flex, hope } from "@hope-ui/solid";
import {
  Component,
  useContext,
  JSXElement,
  createContext,
  splitProps,
  mergeProps,
  createMemo,
} from "solid-js";

import styles from "./style/index.module.css";

interface IMenuItemProps {
  key: string;
  level: number;
  icon?: JSXElement;
  onClick?: () => void;
}

export let MenuItem: Component<IMenuItemProps> = (props) => {
  let menuContext = useContext(MenuContext);

  let defaultSelected = createMemo(() => {
    return menuContext.defaultSelectedKeys.indexOf(props.key) > -1;
  });

  return (
    <Flex
      {...(defaultSelected() ? { bg: "rgb(242,243,245)" } : { bg: "white" })}
      h="40px"
      alignItems="center"
      pl={props.level * 1.5 + "rem"}
      gap="$1"
      cursor="pointer"
      _hover={{
        color: "#1890ff",
      }}
      onClick={() => {
        props.onClick && props.onClick();
      }}
    >
      {props.icon && <div>{props.icon}</div>}
      <div>{props.children}</div>
    </Flex>
  );
};

interface ISubMneuProps {
  key: string;
  title: JSXElement;
  level: number;
  icon?: JSXElement;
}

export let SubMenu: Component<ISubMneuProps> = (props) => {
  let menuContext = useContext(MenuContext);

  let defaultOpen = menuContext.defaultOpenKeys.indexOf(props.key) > -1;

  return (
    <>
      <hope.div class={`${styles.collapse} ${styles.collapseArrow}`}>
        <hope.input type="checkbox" checked={defaultOpen} />
        <hope.div
          class={styles.collapseTitle}
          pl={props.level * 1.5 + "rem"}
          display="flex"
          gap="$1"
        >
          {props.icon && <div>{props.icon}</div>}
          <div>{props.title}</div>
        </hope.div>
        <hope.div class={styles.collapseContent}>{props.children}</hope.div>
      </hope.div>
    </>
  );
};

interface IMenuContextProps {
  defaultSelectedKeys: string[];
  defaultOpenKeys: string[];
}

// 指定类型 并 设置默认值 (没有在jsx中创建Provider时(即为null)会使用默认值)
let MenuContext = createContext<IMenuContextProps>({
  defaultSelectedKeys: [],
  defaultOpenKeys: [],
});

interface IMenuProps {
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
}

export let Menu: Component<IMenuProps> = (props) => {
  let propsWithDefault = mergeProps(
    {
      defaultSelectedKeys: [],
      defaultOpenKeys: [],
    },
    props
  );

  let [local, others] = splitProps(propsWithDefault, [
    "defaultSelectedKeys",
    "defaultOpenKeys",
  ]);

  return (
    <>
      <MenuContext.Provider value={local}>
        {props.children}
      </MenuContext.Provider>
    </>
  );
};
