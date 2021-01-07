<template>
    <div>
        <vue-header/>
        <div class="container">
          <!-- ルートとマッチしたコンポーネントがここに表示される -->
          <router-view/>
        </div>
        <vue-footer/>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    body {
        padding:0;
        margin:0;
    }

    .container {
        min-height: 100vh;
        box-sizing: border-box;
        padding: 20px;
        box-sizing: border-box;
    }

</style>