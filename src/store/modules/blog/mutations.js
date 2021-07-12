export default {
  SET_POSTS: (state, posts) => {
    state.posts = posts;
  },
  SET_USERS: (state, users) => {
    state.posts.forEach(post => {
        users.forEach(user => {
            if (post.userId == user.id) {
                post.user = user
            }
        })
    })
  },
  SET_COMMENTS: (state, [comments, postId]) => {
    state.posts.forEach(post => {
      if (post.id == postId) {
        post.comments = comments
      }
    })
  },
};
