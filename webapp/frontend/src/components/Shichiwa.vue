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
      khm: '25',
      name: '七わのからす',
      text: '　むかし、ある男のひとに、むすこばかり、七人ありました。むすめをほしい、ほしいとねがってきたのですが、ひとりも、さずからなかったのです。'
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