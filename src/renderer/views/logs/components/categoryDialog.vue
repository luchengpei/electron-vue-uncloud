<!--
 * @Description: Description
 * @Author: 陆城锫
 * @Date: 2021-04-25 13:39:34
-->
<template>
    <el-dialog title="添加日志分类" :visible.sync="dialogVisible" width="750px">
        <el-form :model="dataForm" ref="dataForm"> </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            dataForm: {},
        };
    },
    methods: {
        init() {
            this.dialogVisible = true;
        },
    },
};
</script>

<style lang="scss" scoped></style>
