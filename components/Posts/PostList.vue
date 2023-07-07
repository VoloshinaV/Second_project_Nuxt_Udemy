<template>
  <section class="posts-lists">
    <PostPreview
      id ="1"
      thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbFT50fetX0fpGDIl-TGaptbKNfLcyLRHftdl52MLzC-7wAaA7z_B8wa7WBwkgCj_3oI&usqp=CAU"
      title="Hello there!"
      previewText="This is my first post"/>
    <PostPreview
      id ="2"
      thumbnail="https://www.brookings.edu/wp-content/uploads/2022/01/shutterstock_1145553203_small.jpg"
      title="Hello!"
      previewText="This is my second post"/>
    <PostPreview
      id ="3"
      thumbnail="https://images.ctfassets.net/hrltx12pl8hq/4ACnMj4WVSOZRZt0jHu9h5/1506f652bcd70f4dc3e88219fefea858/shutterstock_739595833-min.jpg?fit=fill&w=600&h=400"
      title="Hi!"
      previewText="This is my third post"/>
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
.posts-lists {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
