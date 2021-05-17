<template>
    <div class="app-wrapper" :class="IsUseSysTitle ? 'UseSysTitle' : 'NoUseSysTitle'">
        <div :class="classObj">
            <navbar></navbar>
            <div class="container-set">
                <sidebar class="sidebar-container" :class="IsUseSysTitle ? 'UseSysTitle' : 'NoUseSysTitle'"></sidebar>
                <div class="main-container">
                    <!-- <app-main></app-main> -->
                    <!-- <myPage /> -->
                    <webview
                        src="https://static-961b6030-14d7-48d6-ac17-d4ba8deaef20.bspapp.com/yqt_i_love_you/index.html"
                        class="if"
                    ></webview>
                </div>
            </div>
        </div>
        <!-- <myPage /> -->
    </div>
</template>

<script>
import { Sidebar, AppMain, Navbar } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";
import myPage from "@/components/test.vue";
export default {
    name: "layout",
    components: {
        Sidebar,
        AppMain,
        Navbar,
        myPage,
    },
    mixins: [ResizeMixin],
    data: () => ({
        IsUseSysTitle: require("./../../../config").IsUseSysTitle,
        show: false,
    }),
    computed: {
        sidebar() {
            return this.$store.state.app.sidebar;
        },
        device() {
            return this.$store.state.app.device;
        },
        classObj() {
            return {
                hideSidebar: !this.sidebar.opened,
                openSidebar: this.sidebar.opened,
            };
        },
    },
    mounted() {},
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/mixin.scss";
.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    .container-set {
        position: relative;
        padding-top: 62px;
    }
}
.UseSysTitle {
    top: 0px;
}
.NoUseSysTitle {
    top: 38px;
}
.if {
    position: absolute;
    left: 0;
    width: 100vw;
    height: 100vh;
}
</style>
