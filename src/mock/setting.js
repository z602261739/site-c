import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://img1.baidu.com/it/u=3109262389,786218177&fm=253&fmt=auto&app=120&f=JPEG?w=360&h=360",
    siteTitle: "Yoo",
    qq: "602261739",
    qqQrCode: "",
    weixin: "yoo15219935126",
    weixinQrCode: "",
    email: "602261739@qq.com",
    github: "https://github.com/z602261739",
    githubName: "z602261739(yoo)",
    favicon: "https://img2.baidu.com/it/u=2965352879,2834993125&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    icp: "test:2022/10/31"
  }
})