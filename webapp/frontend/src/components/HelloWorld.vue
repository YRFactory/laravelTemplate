<template>
<div>
  <p class="message">メッセージ: {{ msg }}
</p>
<blockquote>
Apr/6/2019<p />
</blockquote>
</div>
</template>

<style>
.message { color: blue; }
</style>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'グリム童話の世界へようこそ'
    }
  }
}
</script>