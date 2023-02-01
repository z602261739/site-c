import request from "./request";

/**
 * 获取博客列表数据
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  const resp = await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid
    }
  });
  return resp;
}


/**
 * 获取博客分类
 */
export async function getBlogCategory() {
  const resp = await request.get("/api/blogtype");
  return resp;
}


/**
 * 获取单个博客
 */
export async function getBlog(id) {
  const resp = await request.get(`/api/blog/${id}`);
  return resp;
}


/**
 * 提交评论
 */
export async function postComment(commentInfo) {
  const resp = await request.post("/api/comment", commentInfo);
  return resp;
}


/**
 * 分页获取评论
 */
export async function getComment(blogid, page = 1, limit = 10) {
  const resp = await request.get("/api/comment", {
    params: {
      page,
      limit,
      blogid,
    }
  })
  return resp
}