import type { TableColumnCtx } from 'element-plus';

export type TypeProps = "index" | "selection" | "expand";

export type FieldNamesProps = {
    label: string;
    value: string;
    children?: string;
};

export interface ColumnProps<T = any> extends Partial<Omit<TableColumnCtx<T>, "children" | "renderHeader" | "renderCell">> {
    tag?: boolean; // 是否标签展示
    isShow?: boolean; // 是否显示在表格当中
    isFilterEnum?: boolean; // 当前单元格值是否根据 enum 格式化（示例：enum 只作为搜索项数据）
    fieldNames?: FieldNamesProps; // 指定 label && value && children 的 key 值
    headerRender?: (row: ColumnProps) => any; // 自定义表头内容渲染（tsx语法）
    render?: (scope: { row: T }) => any; // 自定义单元格内容渲染（tsx语法）
    _children?: ColumnProps<T>[]; // 多级表头

}

export type Pagination = {
    show: boolean;
    total: number;
    layout: string;
    small?: string;
    currentPage?: number;
    pageSizes: Array<number>;
}