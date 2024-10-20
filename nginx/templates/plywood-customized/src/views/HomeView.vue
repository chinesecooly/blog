<script setup>
import { ref } from 'vue';
const imgLinkList = ref([
  'https://jmy-pic.baidu.com/0/pic/-1169484445_-310465839.jpg@f_webp',
  'https://jmy-pic.baidu.com/0/pic/-1862740401_854976390.jpg@f_webp',
  'https://jmy-pic.baidu.com/0/pic/127762744_1537779667.jpg@f_webp'
])
</script>

<template>
  <el-carousel height="300px">
    <el-carousel-item v-for="(imgLink, index) in imgLinkList" :key="index">
      <el-image :src="imgLink" fit="fill" />
    </el-carousel-item>
  </el-carousel>
  <el-row style="margin-top: 10px; text-align: center;">
    <el-col :span="8">
      <el-card>板材</el-card>
    </el-col>
    <el-col :span="8">
      <el-card>木板</el-card>
    </el-col>
    <el-col :span="8">
      <el-card>地板</el-card>
    </el-col>
  </el-row>
  <el-row style="margin-top: 10px; text-align: center;">
    <el-col :span="8">
      <el-card>定制</el-card>
    </el-col>
    <el-col :span="8">
      <el-card>加盟</el-card>
    </el-col>
    <el-col :span="8">
      <el-card>关于</el-card>
    </el-col>
  </el-row>
  <el-card style="margin-top: 10px; text-align: center;">
    <h3>关于XX</h3>
    <h4>ABOUT XX</h4>
    XX木业集团，中国板材行业影响力品牌，中国定制家居新锐企业。自成立以来，不断整合产业资源，实现生态家居系统的一体化配套生产。在板材、定制家居等产品领域，拥有生产、研发、设计、服务等完善的业务体系，产品覆盖中国28个省级行政区。
    <el-row style="margin-top: 10px; text-align: center;">
      <el-col :span="8" :offset="8">
        <el-button type="primary">了解更多</el-button>
      </el-col>
      <el-col>
        <video src="https://jmy-video.baidu.com/3d7408adf350dbfd5520fecd065cac9c_1920_1080.mp4"
          style="margin-top: 10px;" height=" 200px"></video>
      </el-col>
    </el-row>
  </el-card>
  <el-card style="margin-top: 10px; text-align: center;">
    <h3>产品中心</h3>
    <h4>PENGHONG PRODUCTS</h4>
    <el-tabs :stretch="true">
      <el-tab-pane label="定制">
        <el-image src="https://jmy-pic.baidu.com/0/pic/-724188799_-1687836683.jpg@f_webp"></el-image>
      </el-tab-pane>
      <el-tab-pane label="板材">
        <el-image src="https://jmy-pic.baidu.com/0/pic/-1525488358_1665855394.jpg@f_webp"></el-image>
      </el-tab-pane>
      <el-tab-pane label="木门">
      </el-tab-pane>
      <el-tab-pane label="地板">
        <FloorView />
      </el-tab-pane>
    </el-tabs>
  </el-card>

</template>
