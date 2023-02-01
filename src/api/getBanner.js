import request from "./request";

export async function getBanner() {
  const resp = await request.get("/api/banner");
  return resp;
}

getBanner();