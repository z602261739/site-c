// import Home from "@/views/Home";
// import About from "@/views/About";
// import Blog from "@/views/Blog";
// import Project from "@/views/Project";
// import Message from "@/views/Message";
// import BlogDetail from "@/views/Blog/Detail"

import NotFound from "@/views/NotFound";

import "nprogress/nprogress.css";
import {
  start,
  done,
  configure
} from "nprogress";

configure({
  trickleSpeed: 17,
  showSpinner: false,
});

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function getPageComponent(pageCompResolver) {
  return async () => {
    start();
    if (process.env.NODE_ENV === "development") {
      await delay(2000);
    }
    const comp = await pageCompResolver();
    done();
    return comp;
  };
}

export default [{
    name: "Home",
    path: "/",
    // component: Home,
    // component: () => import("@/views/Home"),
    component: getPageComponent(() =>
      import("@/views/Home")
    ),
    meta: {
      title: "首页"
    }
  },
  {
    name: "About",
    path: "/About",
    // component: About,
    // component: () => import("@/views/About"),
    component: getPageComponent(() =>
      import("@/views/About")
    ),
    meta: {
      title: "关于我"
    }
  },
  {
    name: "Blog",
    path: "/Blog",
    // component: Blog,
    // component: () => import("@/views/Blog"),
    component: getPageComponent(() =>
      import("@/views/Blog")
    ),
    meta: {
      title: "文章列表"
    }
  },
  {
    name: "CategoryBlog",
    path: "/Blog/cate/:categoryID",
    // component: Blog,
    // component: () => import("@/views/Blog"),
    component: getPageComponent(() =>
      import("@/views/Blog")
    ),
    meta: {
      title: "文章列表"
    }
  },
  {
    name: "BlogDetail",
    path: "/Blog/:id",
    // component: BlogDetail,
    // component: () => import("@/views/Blog/Detail"),
    component: getPageComponent(() =>
      import("@/views/Blog/Detail")
    ),
    meta: {
      title: "文章详情"
    }
  },
  {
    name: "Project",
    path: "/Project",
    // component: Project,
    // component: () => import("@/views/Project"),
    component: getPageComponent(() =>
      import("@/views/Project")
    ),
    meta: {
      title: "项目&效果"
    }
  },
  {
    name: "Message",
    path: "/Message",
    // component: Message,
    // component: () => import("@/views/Message"),
    component: getPageComponent(() =>
      import("@/views/Message")
    ),
    meta: {
      title: "留言板"
    }
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
  }
];