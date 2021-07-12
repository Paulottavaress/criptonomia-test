// import app from "./app";
import blogModule from "./modules/blog";
import { createStore } from 'vuex';

const store = createStore({
    modules: {
      blog: blogModule,
    }
  });
  
  export default store;