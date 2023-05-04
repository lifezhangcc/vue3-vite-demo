<template>
    <template v-for="item,index in treeData" :key="index">
        <template v-if="item.children && item.children.length>0">
            <el-sub-menu index="1-1">
                <template #title>{{ item.name }}</template>
                <TreeMenu :data="item.children" />
            </el-sub-menu>
        </template>
        <el-menu-item v-else :index="item.id">{{ item.name }}</el-menu-item>
    </template>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import TreeMenu from './TreeMenu.vue';

interface DefaultProps {
    data: Array<any>;
    isSearch: boolean;
}

const props = withDefaults(defineProps<DefaultProps>(), {
    data: () => [],
    isSearch: true,
})

const treeData = computed(() => props.data)
</script>

<style scoped lang="scss">
.pro-treeMenu{
    background-color: #fff;
    .treeMenu-search{
        padding: 16px;
    }
}
</style>