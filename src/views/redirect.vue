<script>
    // 重定向
    export default {
        name: "redirect",
        created() {
            const { params,query} = this.$route
            const {path} = params
            this.$router.replace({path:'/'+path,query})
        },
        render: function (h) {

            return h()
        }
    }
</script>
