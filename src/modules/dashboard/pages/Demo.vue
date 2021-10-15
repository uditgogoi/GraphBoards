<template>
    <div><div>Demo</div>

            Message {{showMessage}}

    </div>
</template>
<script>
export default {
    name:'Demo',
    props: {
        showMessage:String
    },
    created() {
        const routes= this.$route.params;
        console.log(routes)
    },
}
</script>