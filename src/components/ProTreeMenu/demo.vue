<template>
    <ProTreeMenu 
        :data="treeData"
    />
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { debounce } from 'lodash';
import ProTreeMenu from '@/components/ProTreeMenu/index.vue';


const treeData = ref<Array<any>>([
    {
        name: '中国',
        id: '1',
        children: [
            {
                name: '新疆维吾尔自治区',
                id: '1-1', 
                children: [
                    {
                        name: '新疆维吾尔自治区',
                        id: '1-1-1', 
                    },
                    {
                        name: '西藏自治区',
                        id: '1-2-1', 
                    },
                    {
                        name: '内蒙古自治区',
                        id: '1-3-1', 
                    },
                    {
                        name: '青海省',
                        id: '1-4-1', 
                    }
                ]
            },
            // {
            //     name: '西藏自治区',
            //     id: '1-2', 
            // },
            // {
            //     name: '内蒙古自治区',
            //     id: '1-3', 
            // },
            // {
            //     name: '青海省',
            //     id: '1-4', 
            // }
        ]
    }
])

// const treeData = computed(() => props.data)

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