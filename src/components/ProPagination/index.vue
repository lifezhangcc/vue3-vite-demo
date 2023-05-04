<template>
    <div :class="`${className} flex-align-center height60`">
        <el-pagination 
            :class="props.className"
            :current-page="currentPage" 
            :page-size="pageSize" 
            :page-sizes="[10, 20, 50, 100, 200]"
            :small="props.small" 
            :disabled="props.disabled" 
            :background="props.background" 
            :layout="props.layout"
            :total="props.total" 
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange" 
        />
    </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import type { PaginationProps } from 'element-plus';

interface DefaultProps extends PaginationProps {
    className?: string;
    align?: 'left' | 'center' | 'right';
    small?: boolean;
    background?: boolean;
    layout?: string;
    pageSizes: Array<number>;
    total: number;
}

const props = withDefaults(defineProps<DefaultProps>(), {
    small: false,
    background: false,
    className: '',
    align: 'right',
    total: 0,
    pageSizes: () => [10, 20, 50, 100, 200],
    layout: "total, sizes, prev, pager, next, jumper",
})

const emits = defineEmits(['size-change', 'current-change'])

const currentPage = ref(1)
const pageSize = ref(10)

const className = computed(() => {
    console.log(props.align)
    if (props.align === 'right') {
        return 'flex-justify-end';
    }
    if (props.align === 'center') {
        return 'flex-justify-center';
    }
    return 'flex-justify-start';
})

const handleCurrentChange = (val: number) => {
    emits('current-change', val)
}

const handleSizeChange = (val: number) => {
    emits('size-change', val)
}
</script>
  
<style lang="scss" scoped>
.height60{
    height: 60px;
}
</style>