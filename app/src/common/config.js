export const appID = "56539961";
export const appSecret = "lb7i7ILL";

export const NavMenu = [
  {
    title: "首页",
    key: "/admin/home",
  },
  {
    title: "常用UI组件",
    key: "/admin/ui",
    children: [
      {
        title: "按钮",
        key: "/admin/ui/buttons",
      },
      {
        title: "弹框",
        key: "/admin/ui/modals",
      },
      {
        title: "加载中的效果",
        key: "/admin/ui/spins",
      },
      {
        title: "通知提醒框",
        key: "/admin/ui/notifications",
      },
      {
        title: "全局消息提示",
        key: "/admin/ui/messages",
      },
      {
        title: "进度条",
        key: "/admin/ui/progresses",
      },
      {
        title: "走马灯/轮播图",
        key: "/admin/ui/carousels",
      },
      {
        title: "拖拽排序",
        key: "/admin/ui/drags",
      },
    ],
  },
  {
    title: "表单组件",
    key: "/admin/form",
    children: [
      {
        title: "登录表单",
        key: "/admin/form/form-login",
      },
      {
        title: "注册表单",
        key: "/admin/form/form-register",
      },
    ],
  },
  {
    title: "表格组件",
    key: "/admin/table",
    children: [
      {
        title: "基础表格",
        key: "/admin/table/basic",
      },
      {
        title: "高级表格",
        key: "/admin/table/advanced",
      },
    ],
  },
  {
    title: "系统管理",
    key: "/admin/system",
    children: [
      {
        title: "用户管理",
        key: "/admin/system/users",
      },
      {
        title: "角色管理",
        key: "/admin/system/roles",
      },
      {
        title: "资源管理",
        key: "/admin/system/resources",
      },
    ],
  },
];
