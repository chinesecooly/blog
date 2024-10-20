<script setup>
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import BoardView from './views/BoardView.vue';
import DoorView from './views/DoorView.vue';
import FloorView from './views/FloorView.vue';
import CustomFurnitureView from './views/CustomFurnitureView.vue';

</script>

<template>
  <el-watermark content="宁煜">
    <el-tabs type="border-card" :stretch="true">
      <el-tab-pane label="首页">
        <HomeView />
      </el-tab-pane>
      <el-tab-pane label="板材">
        <BoardView />
      </el-tab-pane>
      <el-tab-pane label="木门">
        <DoorView />
      </el-tab-pane>
      <el-tab-pane label="地板">
        <FloorView />
      </el-tab-pane>
      <el-tab-pane label="定制">
        <CustomFurnitureView />
      </el-tab-pane>
      <el-tab-pane label="关于我们">
        <AboutView />
      </el-tab-pane>
    </el-tabs>
  </el-watermark>
</template>

<style scoped></style>
