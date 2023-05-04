<template>
    <div class="pro-treeMenu">
        <div v-if="props.isSearch" class="treeMenu-search">
            <el-input @change="handleChange" v-model="search" placeholder="请输入名称" size="large" suffix-icon="Search" >
            </el-input>
        </div>
        <el-scrollbar>
            <el-menu default-active="2" class="el-menu-vertical-demo">
                <el-sub-menu index="1">
                    <template #title>
                        <span>中国</span>
                    </template>
                    <el-sub-menu index="1-1">
                        <template #title>新疆维吾尔自治区</template>
                        <el-menu-item index="1-1-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-2">
                        <template #title>西藏自治区</template>
                        <el-menu-item index="1-2-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-3">
                        <template #title>内蒙古自治区</template>
                        <el-menu-item index="1-3-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-4">
                        <template #title>青海省</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-5">
                        <template #title>四川省</template>
                        <el-menu-item index="1-5-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-6">
                        <template #title>黑龙江省</template>
                        <el-menu-item index="1-6-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-7">
                        <template #title>甘肃省</template>
                        <el-menu-item index="1-7-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-8">
                        <template #title>云南省</template>
                        <el-menu-item index="1-8-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-9">
                        <template #title>广西壮族自治区</template>
                        <el-menu-item index="1-9-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-10">
                        <template #title>湖南省</template>
                        <el-menu-item index="1-10-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-11">
                        <template #title>陕西省</template>
                        <el-menu-item index="1-11-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-12">
                        <template #title>河北省</template>
                        <el-menu-item index="1-12-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="1">
                    <template #title>
                        <span>中国</span>
                    </template>
                    <el-sub-menu index="1-1">
                        <template #title>新疆维吾尔自治区</template>
                        <el-menu-item index="1-1-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-2">
                        <template #title>西藏自治区</template>
                        <el-menu-item index="1-2-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-3">
                        <template #title>内蒙古自治区</template>
                        <el-menu-item index="1-3-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-4">
                        <template #title>青海省</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-5">
                        <template #title>四川省</template>
                        <el-menu-item index="1-5-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-6">
                        <template #title>黑龙江省</template>
                        <el-menu-item index="1-6-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-7">
                        <template #title>甘肃省</template>
                        <el-menu-item index="1-7-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-8">
                        <template #title>云南省</template>
                        <el-menu-item index="1-8-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-9">
                        <template #title>广西壮族自治区</template>
                        <el-menu-item index="1-9-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-10">
                        <template #title>湖南省</template>
                        <el-menu-item index="1-10-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-11">
                        <template #title>陕西省</template>
                        <el-menu-item index="1-11-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-12">
                        <template #title>河北省</template>
                        <el-menu-item index="1-12-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="1">
                    <template #title>
                        <span>中国</span>
                    </template>
                    <el-sub-menu index="1-1">
                        <template #title>新疆维吾尔自治区</template>
                        <el-menu-item index="1-1-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-2">
                        <template #title>西藏自治区</template>
                        <el-menu-item index="1-2-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-3">
                        <template #title>内蒙古自治区</template>
                        <el-menu-item index="1-3-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-4">
                        <template #title>青海省</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-5">
                        <template #title>四川省</template>
                        <el-menu-item index="1-5-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-6">
                        <template #title>黑龙江省</template>
                        <el-menu-item index="1-6-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-7">
                        <template #title>甘肃省</template>
                        <el-menu-item index="1-7-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-8">
                        <template #title>云南省</template>
                        <el-menu-item index="1-8-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-9">
                        <template #title>广西壮族自治区</template>
                        <el-menu-item index="1-9-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-10">
                        <template #title>湖南省</template>
                        <el-menu-item index="1-10-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-11">
                        <template #title>陕西省</template>
                        <el-menu-item index="1-11-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-12">
                        <template #title>河北省</template>
                        <el-menu-item index="1-12-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="1">
                    <template #title>
                        <span>中国</span>
                    </template>
                    <el-sub-menu index="1-1">
                        <template #title>新疆维吾尔自治区</template>
                        <el-menu-item index="1-1-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-2">
                        <template #title>西藏自治区</template>
                        <el-menu-item index="1-2-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-3">
                        <template #title>内蒙古自治区</template>
                        <el-menu-item index="1-3-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-4">
                        <template #title>青海省</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-5">
                        <template #title>四川省</template>
                        <el-menu-item index="1-5-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-6">
                        <template #title>黑龙江省</template>
                        <el-menu-item index="1-6-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-7">
                        <template #title>甘肃省</template>
                        <el-menu-item index="1-7-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-8">
                        <template #title>云南省</template>
                        <el-menu-item index="1-8-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-9">
                        <template #title>广西壮族自治区</template>
                        <el-menu-item index="1-9-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-10">
                        <template #title>湖南省</template>
                        <el-menu-item index="1-10-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-11">
                        <template #title>陕西省</template>
                        <el-menu-item index="1-11-1">item one</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="1-12">
                        <template #title>河北省</template>
                        <el-menu-item index="1-12-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { debounce } from 'lodash';

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