<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://www.brookings.edu/wp-content/uploads/2022/01/shutterstock_1145553203_small.jpg"
      title="Hello there!"
      previewText="This my first post!" />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://images.ctfassets.net/hrltx12pl8hq/4ACnMj4WVSOZRZt0jHu9h5/1506f652bcd70f4dc3e88219fefea858/shutterstock_739595833-min.jpg?fit=fill&w=600&h=400"
      title="Hello there - the second time!"
      previewText="This my second post!" />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://thumbs.dreamstime.com/z/new-future-technology-concept-abstract-background-business-solution-54350985.jpg"
      title="Hi!"
      previewText="This my third post!" />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
