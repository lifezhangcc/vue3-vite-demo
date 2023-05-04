<template>
  <el-button text @click="open">Click to open Message Box</el-button>
</template>

<script lang="ts" setup>
// import MessageBox from './message';
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const open = () => {
  proxy.MessageBox({
    title: '',
    content: '这是一条通知信息12313131这是一条通知信息12313131这是一条通知信息12313131这是一条通知信息12313131',
    showCancelButton: true,
    ellipsis: false,
    rows: 1
  })
}
</script>

<style lang="scss" scoped>

</style>