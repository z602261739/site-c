import axios from "axios";
import showMessage from "@/utils/showMessage";

const ins = axios.create();
ins.interceptors.response.use(function (resp) {
  if (resp.data.code === 0) {
    return resp.data.data;
  } else {
    showMessage({
      content: resp.data.msg,
      type: "warn"
    });
    return null;
  }
});

export default ins;