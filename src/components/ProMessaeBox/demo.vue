<template>
  <el-button text @click="open">Click to open Message Box</el-button>
</template>

<script lang="ts" setup>
import MessageBox from './message';

const open = () => {
  MessageBox({
    title: '',
    content: '这是一条通知信息',
    showCancelButton: true,
  })
}
</script>

<style lang="scss" scoped>

</style>