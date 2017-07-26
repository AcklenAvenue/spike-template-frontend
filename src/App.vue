<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <span class="navbar-brand">Spike template</span>
        </div>
      </div>
    </nav>
    <div id="app">
      <div class="jumbotron" v-for="post in posts">
        <h1>{{post.title}}</h1>
        <p>{{post.body}}</p>
        <p class="text-right">Post id: {{post.id}}</p>
        <p class="text-right">User id: {{post.userId}}</p>
      </div>
      <button class="btn btn-success" v-on:click="getPosts">Get more posts</button>
    </div>
  </div>
</template>

<script>
import fakeService from './services/fakeService';

export default {
  name: 'app',
  beforeMount(){
    this.getPosts();
  },
  data(){
    return {
      posts: [],
      postCounter: 0
    }
  },
  methods: {
    getPosts(){
      fakeService.getPosts(++this.postCounter).then((response) => {
        if(response.ok)
          return response.json();
      }).then((parsedResponse) => {
        this.posts.push(parsedResponse);
      });
    }
  }
}
</script>
<style>
  #app{
    padding: 10px;
  }
  .jumbotron{
    padding: 20px;
  }
</style>

