<!--
 * @Description: Description
 * @Author: 陆城锫
 * @Date: 2021-04-25 11:55:50
-->
<template>
    <div>
        <h2>日志分类</h2>
        <div>
            <el-button type="primary" size="small" @click="addCategory">添加分类</el-button>
        </div>
        <Dialog v-if="visible" ref="dialog" />
    </div>
</template>

<script>
import dialog from "./components/categoryDialog";
export default {
    components: {
        Dialog: dialog,
    },
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        addCategory() {
            this.visible = true;
            this.$nextTick(() => {
                this.$refs.dialog.init();
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
