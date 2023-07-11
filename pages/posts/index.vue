<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       resolve({
        loadedPosts: [
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
        ]
        });
      }, 1000);
      // reject(new Error())
    })
    .then(data => {
      return data
    })
    .catch(e => {
      context.error(e);
    });
  }
};
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>