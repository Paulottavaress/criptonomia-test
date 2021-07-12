import Blog from "@/services/Blog";

export default {
  async getPosts({ commit, dispatch }) {
    console.log("Start loading...");
    try {
      const res = await Blog.fetchPosts();
      const posts = res.data;
      commit("SET_POSTS", posts);
    } catch (error) {
      throw error;
    } finally {
      console.log("Loading ended");
      dispatch("getUsers");
    }
  },
  async getUsers({ commit }) {
    console.log("Start getUsers...");
    try {
      const res = await Blog.fetchUsers();
      const users = res.data;
      commit("SET_USERS", users);
    } catch (error) {
      throw error;
    } finally {
      console.log("Loading ended getUsers");
    }
  },
  async getComments({ state, commit }, id) {
    console.log("Start getComments...");
    try {
      const res = await Blog.fetchComments(id);
      const comments = res.data;
      commit("SET_COMMENTS", [comments, id]);
    } catch (error) {
      throw error;
    } finally {
      console.log("Loading ended getComments");
      console.log('state after', state)
    }
  },
};
