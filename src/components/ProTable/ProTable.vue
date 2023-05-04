<!--
 * @Date: 2023-04-27 09:50:49
 * @Description: 表格组件,
-->

<template>
    <div class="pro-table">
        <el-table
            :data="tableData"
            :border="props.border"
            :stripe="props.stripe"
            :tooltip-effect="props.tooltipEffect"
            :default-sort="props.defaultSort"
            :max-height="props.maxHeight"
            :row-class-name="props.rowClassName"
            :cell-class-name="props.cellClassName"
            :header-cell-class-name="props.headerCellClassName"
            @selection-change="handleSelectionChange"
        >
            <template v-for="item in tableColumns" :key="item">
                <template v-if="item.type == 'selection' || item.type == 'index'">
                    <el-table-column 
                        :type="item.type"
                        :label="item.name"
                        :align="item.align||'center'" 
                        :width="item.width||50"
                    />
                </template>
                <template v-else>
                    <el-table-column
                        :key="item"
                        :prop="item.prop"
                        :label="item.name"
                        :align="item.align || 'center'"
                        :show-overflow-tooltip="item.showOverflowTooltip && !item.slots"
                        :min-width="item.minWidth || '100px'"
                        :sortable="item.sortable"
                        :type="item.type || 'normal'"
                        :fixed="item.fixed"
                        :width="item.width || ''"
                    >
                        <template #default="scope" v-if="item.slots">
                            <slot :name="item.slots" :key="item.prop" v-bind="scope"></slot>
                        </template>
                    </el-table-column>
                </template>
            </template>
            
            <!-- 插入表格最后一行之后的插槽 -->
            <template #append>
                <slot name="append"> </slot>
            </template>

            <!-- 空数据 -->
            <template #empty>
                <div class="table-empty">
                    <slot name="empty">
                        <img style="width:70px;height:70px" src="@/assets/images/u180.png" alt="notData" />
                        <div>暂无数据</div>
                    </slot>
                </div>
            </template>
        </el-table>

      <!-- 分页组件 -->
        <slot name="pagination">
            <ProPagination 
                align="right"
                :small="pagination.small"
                :total="pagination.total"
                :layout="pagination.layout"
                :page-sizes="pagination.pageSizes"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
        </slot>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import type { TableProps } from 'element-plus';
import { ColumnProps, Pagination } from './interface';
import ProPagination from '@/components/ProPagination/index.vue';

interface ProTableProps extends Partial<Omit<TableProps<any>, "data">> {
    requestApi?: (params: any) => Promise<any> | any; // 请求表格数据的 api
    requestAuto?: boolean; // 是否自动执行 requestApi
    requestError?: (params: any) => void; // requestApi错误监听
    dataCallback?: (data: any) => any; // 返回数据的回调
    initParam?: any; // 初始化请求参数
    border?: boolean; // 是否带有边框
    stripe?: boolean; // 是否显示带斑马纹
    rowKey?: string; // 行数据的 Key，用来优化 Table 的渲染（默认为 id）
    defaultSort?: any; // 排序
    tooltipEffect?: string; // light
    maxHeight?: number; // 表格最大高度显示
    rowClassName?: string; // 行 class
    cellClassName?: string; // 单元格 class
    columns: Array<ColumnProps>;
    headerCellClassName?: string;
    pagination?: Pagination;
    data: Array<any>; // 表数据
}

const props = withDefaults(defineProps<ProTableProps>(), {
    requestApi: () => {},
    requestAuto: false,
    columns: () => [],
    data: () => [],
    initParam: {},
    isPagination: true,
    toolButton: true,
    border: true,
    rowKey: "id",
    defaultSort: {},
    tooltipEffect: "light",
    rowClassName: '',
    cellClassName: '',
    headerCellClassName: '',
    pagination: {
        show: true,
        total: 0,
        currentPage: 1,
        pageSizes: [10, 20, 50, 100],
        layout: "total, sizes, prev, pager, next, jumper",
        small: "default"
    }
});

const emits = defineEmits(['size-change', 'current-change', 'selection-change']);
const tableColumns = computed(() => props.columns);

const pagination = ref<Pagination>(props.pagination);
const tableData = ref<any[]>(props.data);

onMounted(() => {
    requestApi()
})

watch(() => props.data, (newVal: Array<any>) => {
    if(props.requestAuto) {
        tableData.value = newVal;
    }
})

// 监听requestApi
const requestApi = async (params?:object) => {
    if(!props.requestAuto) return;

    const data:any[] = await props.requestApi({...props.initParam, ...params});
    tableData.value = data;

    // 设置total
    if(pagination.value.show) {
        // pagination['total'] = 100;
    }
}

const handleSelectionChange = (val:Array<any>) => {
    emits("selection-change", val);
}

const handleSizeChange = (val:number) => {
    emits("size-change", val);
    requestApi({pageSize: val});
};

const handleCurrentChange = (val:number) => {
    emits("current-change", val);
    requestApi({pageNo: val});
};
</script>
  
<style scoped lang="scss">
.pro-table{
    background-color: #fff;
}
:deep(.el-table thead){
    font-size: 16px;
    color: #666;
}
:deep(.el-table){
    font-size: 16px;
    color: #333;
}
</style>