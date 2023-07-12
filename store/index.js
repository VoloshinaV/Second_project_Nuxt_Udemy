import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if (!process.client) {
          console.log(context.req.session)
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: '1',
                title: 'Hello there!',
                previewText: 'This my first post!',
                thumbnail: 'https://www.brookings.edu/wp-content/uploads/2022/01/shutterstock_1145553203_small.jpg'
              },
              {
                id: '2',
                title: 'Hello there - the second time!',
                previewText: 'This my second post!',
                thumbnail: 'https://images.ctfassets.net/hrltx12pl8hq/4ACnMj4WVSOZRZt0jHu9h5/1506f652bcd70f4dc3e88219fefea858/shutterstock_739595833-min.jpg?fit=fill&w=600&h=400'
              },
              {
                id: '3',
                title: 'Hi!',
                previewText: 'This my third post!',
                thumbnail: 'https://thumbs.dreamstime.com/z/new-future-technology-concept-abstract-background-business-solution-54350985.jpg'
              }

            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
