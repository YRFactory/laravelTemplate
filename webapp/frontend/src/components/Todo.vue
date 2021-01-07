<template>
    <div>
        <Header />
        <div class="main-container">
            <h1>タスク一覧</h1>
        </div>
    </div>
</template>

<script>
    import Header from './Header';

    export default {
        components: {
            Header
        },
        metaInfo: {
            title: 'ログイン',
            htmlAttrs: {
                lang: 'ja'
            }
        },
        created () {
            const user = this.$store.getters['auth/user'];
            if (user !== null) {
                this.$router.push('/todo');
            }
        },
        methods: {    //追加
            async login() {
                await this.$store.dispatch('auth/login', this.form);
                this.$router.push('/todo');
            }
        }
    }
</script>

<style>
    .main-container {
        width: 500px;
        margin: auto;
    }
</style>