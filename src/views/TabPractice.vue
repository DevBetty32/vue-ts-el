<template>
    <el-tabs v-model="activeTab">
      <el-tab-pane label="Tab 1" name="first"> <!-- -->
        <div class="ag-theme-alpine" style="height: 500px; width: 100%;">
            <ag-grid-vue
            class="ag-theme-alpine"
            :rowData="rowData"
            :columnDefs="columnDefs"
            :defaultColDef="defaultColDef"
            @grid-ready="onGridReady"
            />            
        </div>
      </el-tab-pane>
      <el-tab-pane label="Tab 2" name="second">
        <div>두 번째 탭의 내용입니다.</div>
      </el-tab-pane>
      <el-tab-pane label="Tab 3" name="third">
        <div>세 번째 탭의 내용입니다.</div>
      </el-tab-pane>
    </el-tabs>
  </template>
<script lang="ts">
import {defineComponent, ref, } from 'vue'
import {AgGridVue} from 'ag-grid-vue3'
    export default defineComponent({
        components:{AgGridVue},
        data() {
    return {
      columnDefs: [
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' },
      ],
      rowData: [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 },
      ],
      defaultColDef: { sortable: true, filter: true },
    };
  },  
  methods: {
    onGridReady(params: any) {
      params.api.sizeColumnsToFit();
    },
  },
        name: 'TabPractice',
        setup(){
            const activeTab = ref('first');

            return {
                activeTab
            }
        }
    })
</script>

<style>
.ag-theme-alpine {
  height: 100%;
  width: 100%;
}
</style>