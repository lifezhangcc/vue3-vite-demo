<template>
    <div class="pro-treeMenu">
        <div v-if="props.isSearch" class="treeMenu-search">
            <el-input @change="handleChange" v-model="search" placeholder="请输入名称" size="large" suffix-icon="Search" >
            </el-input>
        </div>
        <el-scrollbar>
            <el-menu default-active="1" class="el-menu-vertical-demo">
                <template v-for="item,index in treeData" :key="index">
                    <template v-if="item.children && item.children.length>0">
                        <el-sub-menu index="1-1">
                            <template #title>{{ item.name }}</template>
                            <TreeMenu :data="item.children" />
                        </el-sub-menu>
                    </template>
                    <el-menu-item v-else :index="item.id">{{ item.name }}</el-menu-item>
                </template>
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { debounce } from 'lodash';
import TreeMenu from './TreeMenu.vue';

interface DefaultProps {
    data: Array<any>;
    isSearch: boolean;
}

const emits = defineEmits(['update:moduleValue', 'callback'])

const search = ref<string>('')

const props = withDefaults(defineProps<DefaultProps>(), {
    data: () => [],
    isSearch: true,
})

const treeData = computed(() => props.data)

// 监听search变化
const handleChange = debounce((val:string) => {
    emits('callback', val)
}, 300)
</script>

<style scoped lang="scss">
.pro-treeMenu{
    background-color: #fff;
    .treeMenu-search{
        padding: 16px;
    }
}
</style>