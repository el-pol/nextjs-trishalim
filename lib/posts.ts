import { api } from "./ghost";

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      fields: ["id", "title", "slug", "feature_image"],
    })
    .catch((err) => {
      console.error(err);
    });
}
