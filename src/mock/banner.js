import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [{
      id: "1",
      midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
      title: "未闻花名",
      description: "我们总是在意自己错过太多，却不知自己曾经拥有多少",
    },
    {
      id: "2",
      midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
      title: "火影忍者",
      description: "游龙当归海，海不迎我自来",
    },
    {
      id: "3",
      midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
      bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
      title: "Clannad",
      description: "想哭就哭吧，长大了想哭却不能哭的情况有的是",
    },
  ]
})