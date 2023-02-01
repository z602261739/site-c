<template>
<ul class="contact-container">
    <li>
      <a target="_blank" :href="data.github">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.email}`">
        <div class="icon">
          <Icon type="email" />
        </div>
        <span>{{ data.email }}</span>
      </a>
    </li>
    <li>
      <a
        :href="
          `tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`
        "
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img src="./qq.png" alt="" />
      </div>
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img src="./weixin.png" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/global.less";
.contact-container {
  width: 100%;
  padding: 20px;
  background-color: transparent;
  box-sizing: border-box;
  @itemHeight: 30px;
  li {
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    margin: 14px 0;
    position: relative;
    color: @gray;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
    a {
      cursor: pointer;
      text-align: center;
      display: flex;
      font-size: 14px;
      .icon {
        font-size: 25px;
        margin-right: 10px;
        &.qq {
          font-size: 28px;
          text-indent: -2px;
        }
      }
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    background-color: #fff;
    padding: 5px 5px;
    border-radius: 7%;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      color: #fff;
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      height: 8px;
      width: 8px;
      background-color: #fff;
      bottom: -4px;
    }
  }
}
</style>