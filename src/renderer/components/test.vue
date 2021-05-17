<!--
 * @Description: Description
 * @Author: 陆城锫
 * @Date: 2021-05-17 10:16:13
-->
<template>
    <div class="wrapper">
        <div class="min-box">
            <div class="item item1"></div>
            <div class="item item2"></div>
            <div class="item item3"></div>
            <div class="item item4"></div>
            <div class="item item5"></div>
            <div class="item item6"></div>
        </div>
        <div class="max-box">
            <div class="item item1"></div>
            <div class="item item2"></div>
            <div class="item item3"></div>
            <div class="item item4"></div>
            <div class="item item5"></div>
            <div class="item item6"></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
    /* 盒子的宽度 */
    width: 200px;
    /* 盒子高度 */
    height: 200px;
    /* 整个图片的位置 */
    margin: 200px auto 0;
    /* 相对定位 */
    position: relative;
    /* 设置关键帧动画 
                应用:
                1. 做无休止运动的时候可以使用这个动画属性
                2. 往返运动,并且希望有动画次数限制的的时候也可以使用
                3. 有中间状态的时候也可以使用
              animation的子属性
              1. 关键帧动画名称  
              2. 动画执行时间
              3. 动画的速率函数
              4. 动画的执行次数
              5. 动画的延迟时间
              6. 动画的填充模式 animation-fill-mode:forward(停止在最后一个关键帧的位置)
                               backwards(立即作用第一个关键帧的位置)
              7. 动画的运动的规则(是否往返运动)
            */
    animation: inifiteAnimate 5s linear infinite;
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    /* 让我的元素成3D在舞台上呈现 */
    transform-style: preserve-3d;
}

@keyframes inifiteAnimate {
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(360deg);
    }
}

.min-box,
.max-box {
    width: 200px;
    height: 200px;
    /* 定位 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* box的宽度 */
    width: 100%;
    /* box的高度 */
    height: 100%;

    /* 希望当前元素是立体效果 */
    transform-style: preserve-3d;
    /* 
            过渡动画
             */
    transition: all 2s;
}

.item {
    /* 每张图片的宽度 */
    width: 100%;
    /* 每张图片的高度 */
    height: 100%;
    /* 背景图片的大小 */
    background-size: 100%;
    /* 背景图的位置 */
    background-position: center;
    position: absolute;
    /* 图片透明度 */
    opacity: 0.6;
    transition: all 0.5s;
}

.wrapper:hover .max-box .item {
    width: 300px;
    height: 300px;
}

.item1 {
    background-image: url("../assets/timg.jpg");
    transform: translateZ(100px);
}

.wrapper:hover .max-box .item1 {
    transform: translateZ(300px);
}

.item2 {
    background-image: url("../assets/timg.jpg");
    /* 变换:旋转,平移,缩放,扭曲 */
    transform: rotateY(90deg) translateZ(100px);
}

.wrapper:hover .max-box .item2 {
    transform: rotateY(90deg) translateZ(300px);
}

.item3 {
    background-image: url("../assets/timg.jpg");
    transform: rotateY(-90deg) translateZ(100px);
}

.wrapper:hover .max-box .item3 {
    transform: rotateY(-90deg) translateZ(300px);
}

.item4 {
    background-image: url("../assets/timg.jpg");
    transform: rotateY(180deg) translateZ(100px);
}

.wrapper:hover .max-box .item4 {
    transform: rotateY(180deg) translateZ(300px);
}

.item5 {
    background-image: url("../assets/timg.jpg");
    transform: rotateX(90deg) translateZ(100px);
}

.wrapper:hover .max-box .item5 {
    transform: rotateX(90deg) translateZ(300px);
}

.item6 {
    background-image: url("../assets/timg.jpg");
    transform: rotateX(-90deg) translateZ(100px);
}

.wrapper:hover .max-box .item6 {
    transform: rotateX(-90deg) translateZ(300px);
}
</style>
