<template>
    <div class="flex-justify-end pagination-wrapper">
        <span class="adition-text">共 {{ total }}条记录 第 1 / 80 页</span>
        
        <el-pagination
            background
            hide-on-single-page
            :total="total"
            :layout="layout"
            :page-sizes="pageSizes"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props: any = defineProps({
    total: {
        type: Number,
        default: 0
    },
    pageSizes: {
        type: Array<Number>,
        default: () => [100, 200, 300, 400]
    },
    layout: {
        type: String,
        default: "total, sizes, prev, pager, next, jumper"
    }
})

const {
    total,
    pageSizes,
    layout
} = props;
</script>

<style lang="scss" scoped>
.pagination-wrapper{
    display: flex;
    justify-content: space-between;
}
.adition-text{
    line-height: 22px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
}
</style>