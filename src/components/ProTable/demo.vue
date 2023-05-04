<template>
    <div>
        <ProTable 
            :border="false"
            :columns="table.columns"
            :data="table.data"
            :requestAuto="table.requestAuto"
            :requestApi="table.requestApi"
            :showOverflowTooltip="table.showOverflowTooltip"
            pagination
        >
            <template #showTooltip="scope">
                <span>{{ getContentView(scope) }}</span>
            </template>
        </ProTable>
    </div>
</template>
    
<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue';
import ProTable from '@/components/ProTable/ProTable.vue';

const state = reactive<any>({
    table: {
        requestAuto: true, 
        requestApi: async () => {
            const data: any[] = [];
            return Promise.resolve(data)
        },
        showOverflowTooltip: true,
        columns: [
            {
                name: '序号',
                type: 'index',
                align: 'center'
            },
            {
                prop: 'name',
                name: '名称',
                sortable: true
            }, 
            {
                prop: 'name1',
                name: '名称1',
                showOverflowTooltip: true,
            },
            {
                prop: 'name2',
                name: '名称2',
                sortable: true,
                showOverflowTooltip: true,
            },
            {
                prop: 'name3',
                name: '名称3',
                // slots: 'showTooltip',
                showOverflowTooltip: true,
            }
        ],
        data: [
            {
                name: '12313132',
                name1: '大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大',
                name2: '大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大',
                name3: '大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大大'
            }
        ],
        pagination: {
            show: true
        }
    }
})


const getContentView = (scope:any) : string => {
    console.log(scope)
    return scope.row[scope.key];
}

const {
    table
} = toRefs(state)

</script>

<style>
</style>
    