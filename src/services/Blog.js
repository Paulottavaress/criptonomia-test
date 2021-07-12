import createApi from "@/services/Api";

function Blog() {
  const api = createApi();

  function fetchPosts() {
    const endpoint = "/posts";
    return api.get(endpoint);
  }

  function fetchUsers() {
    const endpoint = "/users";
    return api.get(endpoint);
  }

  function fetchComments(id) {
    const endpoint = '/posts/' + id + '/comments';
    return api.get(endpoint);
  }

  return {
    fetchPosts,
    fetchUsers,
    fetchComments
  };
}

export default Blog();
