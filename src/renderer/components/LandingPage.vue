<template>
    <div id="wrapper">
        <img id="logo" :src="logo" alt="electron-vue" />
    </div>
</template>

<script>
import SystemInformation from "./LandingPage/SystemInformation";
import { message } from "@/api/login";
import { ipcRenderer } from "electron";
export default {
    name: "landing-page",
    components: { SystemInformation },
    data: () => ({
        text: "等待数据读取",
        newdata: {
            name: "yyy",
            age: "12",
        },
        logo: require("@/assets/logo.png"),
        textarray: [],
        percentage: 0,
        colors: [
            { color: "#f56c6c", percentage: 20 },
            { color: "#e6a23c", percentage: 40 },
            { color: "#6f7ad3", percentage: 60 },
            { color: "#1989fa", percentage: 80 },
            { color: "#5cb87a", percentage: 100 },
        ],
        dialogVisible: false,
        progressStaus: null,
        filePath: "",
    }),
    created() {
        console.log(__lib);
        ipcRenderer.on("download-progress", (event, arg) => {
            this.percentage = Number(arg);
        });
        ipcRenderer.on("download-error", (event, arg) => {
            if (arg) {
                this.progressStaus = "exception";
                this.percentage = 40;
                this.colors = "#d81e06";
            }
        });
        ipcRenderer.on("download-paused", (event, arg) => {
            if (arg) {
                this.progressStaus = "warning";
                this.$alert("下载由于未知原因被中断！", "提示", {
                    confirmButtonText: "重试",
                    callback: (action) => {
                        this.$ipcApi.send("satrt-download");
                    },
                });
            }
        });
        ipcRenderer.on("download-done", (event, age) => {
            this.filePath = age.filePath;
            this.progressStaus = "success";
            this.$alert("更新下载完成！", "提示", {
                confirmButtonText: "确定",
                callback: (action) => {
                    this.$electron.shell.openPath(this.filePath);
                },
            });
        });
        ipcRenderer.on("UpdateMsg", (event, age) => {
            switch (age.state) {
                case -1:
                    const msgdata = {
                        title: "发生错误",
                        message: age.msg,
                    };
                    this.dialogVisible = false;
                    this.$ipcApi.send("open-errorbox", msgdata);
                    break;
                case 0:
                    this.$message("正在检查更新");
                    break;
                case 1:
                    this.$message({
                        type: "success",
                        message: "已检查到新版本，开始下载",
                    });
                    this.dialogVisible = true;
                    break;
                case 2:
                    this.$message({ type: "success", message: "无新版本" });
                    break;
                case 3:
                    this.percentage = age.msg.percent.toFixed(1);
                    break;
                case 4:
                    this.progressStaus = "success";
                    this.$alert("更新下载完成！", "提示", {
                        confirmButtonText: "确定",
                        callback: (action) => {
                            this.$ipcApi.send("confirm-update");
                        },
                    });
                    break;

                default:
                    break;
            }
        });
    },
    methods: {
        openNewWin() {
            let data = {
                url: "/form/index",
            };
            this.$ipcApi.send("open-win", data);
        },
        getMessage() {
            message().then((res) => {
                this.$alert(res.data, "提示", {
                    confirmButtonText: "确定",
                });
            });
        },
        StopServer() {
            this.$ipcApi.send("stop-server").then((res) => {
                this.$message({
                    type: "success",
                    message: "已关闭",
                });
            });
        },
        StartServer() {
            this.$ipcApi.send("statr-server").then((res) => {
                if (res) {
                    this.$message({
                        type: "success",
                        message: res,
                    });
                }
            });
        },
        // 获取electron方法
        open() {},
        CheckUpdate(data) {
            switch (data) {
                case "one":
                    this.$ipcApi.send("check-update").then((res) => {
                        console.log("启动检查");
                    });

                    break;
                case "two":
                    this.$ipcApi.send("start-download").then(() => {
                        this.dialogVisible = true;
                    });

                    break;

                default:
                    break;
            }
        },
        handleClose() {
            this.dialogVisible = false;
        },
    },
    destroyed() {
        console.log("销毁了哦");
        this.$ipcApi.remove("confirm-message");
        this.$ipcApi.remove("download-done");
        this.$ipcApi.remove("download-paused");
        this.$ipcApi.remove("confirm-stop");
        this.$ipcApi.remove("confirm-start");
        this.$ipcApi.remove("confirm-download");
        this.$ipcApi.remove("download-progress");
        this.$ipcApi.remove("download-error");
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
    padding: 60px 80px;
}

#logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
}

main {
    display: flex;
    justify-content: space-between;
}

main > div {
    flex-basis: 50%;
}

.left-side {
    display: flex;
    flex-direction: column;
}

.welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
}

.title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
}

.title.alt {
    font-size: 18px;
    margin-bottom: 10px;
}
.doc {
    margin-bottom: 10px;
}
.doc p {
    color: black;
    margin-bottom: 10px;
}
.doc .el-button {
    margin-top: 10px;
    margin-right: 10px;
}
.doc .el-button + .el-button {
    margin-left: 0;
}
.conten {
    text-align: center;
}
</style>
