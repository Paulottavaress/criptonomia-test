export default {
  posts(state) {
    return state.posts;
  },
  getComments(id) {
    return state.posts.filter(post => post.id == id)[0]
  }
};
