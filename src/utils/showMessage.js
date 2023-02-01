import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less"

/**
 * 弹出消息
 * @param {String} content 消息内容 
 * @param {String} type 消息类型   info(普通) error(错误) success(成功) warn(警告)
 * @param {Number} duration 多久后消失
 * @param {String} container 容器,消息显示在容器正中，默认显示在页面正中
 */

export default function (options = {}) {

  const content = options.content || '';
  const type = options.type || 'info';
  const duration = options.duration || 2000;
  const container = options.container || document.body;

  // 创建消息元素
  const div = document.createElement('div');
  const iconDom = getComponentRootDom(Icon, {
    type
  });

  // 设置模板
  div.innerHTML = `
    <span class="${styles.icon}">${iconDom.outerHTML}</span>
    <div>${content}</div>
  `;

  // 设置样式
  div.className = `${styles.message} ${styles['message-' + type]}`;

  // 判断所在容器的position属性
  if (options.container) {
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }



  container.appendChild(div);

  // 强行渲染
  div.clientHeight; // 读取div.clientHeight，导致重新渲染reflow

  // 回归到正常位置
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;

  // 等一段时间后消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-21px)`;
    div.addEventListener("transitionend", function () {
      div.remove();

      // 消失后运行回调函数
      options.callback && options.callback();
    }, {
      once: true
    })
  }, duration);
}