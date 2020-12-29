<template>
  <div class="output">
    <div class="content">
    <h3> {{ name }}&nbsp;&nbsp;&nbsp;&nbsp;KHM {{khm}}</h3>
    <p> {{ text }} </p>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      khm: '50',
      name: 'いばらひめ',
      text: '　昔むかし、王さまとおきさきががおりました。ふたりは毎日、「子どもがほしい！子どもがいればな！」と、言い暮らしていましたが、いつまでたっても、ひとりもさずかりませんでした。'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.output {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 50%;
}

h3 {
  color: blue;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>