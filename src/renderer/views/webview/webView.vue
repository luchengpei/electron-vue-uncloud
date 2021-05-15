<!--
 * @Description: Description
 * @Author: 陆城锫
 * @Date: 2021-04-23 15:22:27
-->
<template>
    <div class="wrap">
        <webview :src="url" id="web-view"></webview>
        <!-- <iframe :src="url" frameborder="0" id="web-view"></iframe> -->
    </div>
</template>

<script>
const path = require("path");
export default {
    props: {
        url: {
            type: String,
            default: "https://music.163.com/",
        },
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
.wrap {
    width: 100vw;
    height: 100vh;
    #web-view {
        position: fixed;
        width: 100vw;
        height: 100vh;
    }
}
</style>
