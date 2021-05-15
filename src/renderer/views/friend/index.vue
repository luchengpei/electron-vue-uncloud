<!--
 * @Description: Description
 * @Author: 陆城锫
 * @Date: 2021-05-15 16:15:24
-->
<template>
    <div>
        <div class="header">
            <el-button type="primary" size="small" @click="beMyFrend">Be my friends</el-button>
        </div>
        <el-table border :data="friendsList" :loading="loading" style="width: 100%">
            <el-table-column align="center" header-align="center" label="index" type="index" width="100">
            </el-table-column>
            <el-table-column align="center" header-align="center" label="nickName" prop="nickName"> </el-table-column>
            <el-table-column
                align="center"
                header-align="center"
                label="abbreviation"
                prop="abbreviation"
            ></el-table-column>
            <el-table-column align="center" header-align="center" label="picture">
                <template v-slot="{ row }">
                    <el-image
                        :src="row.picture"
                        lazy
                        style="width:100px;height:100px"
                        :preview-src-list="[row.picture]"
                    ></el-image>
                </template>
            </el-table-column>
            <el-table-column align="center" header-align="center" label="gameName" prop="gameName"></el-table-column>
            <el-table-column align="center" header-align="center" label="source" prop="source"></el-table-column>
            <el-table-column align="center" header-align="center" label="knowTime" prop="knowTime"></el-table-column>
            <el-table-column align="center" header-align="center" label="operate">
                <template v-slot="{ row }">
                    <el-button type="text">删除</el-button>
                    <el-button type="text" @click="edit(row._id)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import friendApi from "@/api/friend.js";
export default {
    data() {
        return {
            friendsList: [],
            loading: true,
            total: 0,
        };
    },
    mounted() {
        this.getFriendList();
    },
    methods: {
        beMyFrend() {
            console.log(44877771187);
        },
        getFriendList() {
            let data = {
                action: "get",
            };
            friendApi.friendList(data).then((res) => {
                if (res.status == 200) {
                    this.friendsList = res.data.data;
                    this.total = res.data.total;
                }
                this.friendsList.forEach((row) => {
                    row.picture = row.picture.map((item) => item.url).join("");
                });
                console.log(this.friendsList, "xxx");
            });
        },
        edit(id) {
            console.log(id, "888");
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    margin: 20px 0;
}
</style>
