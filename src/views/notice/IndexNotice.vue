<template>
    <div class="indexNotice">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <div class="indexNotice-top">
                        <div class="indexNotice-top-left">
                            <i class="el-icon-tickets"> 公告</i>
                        </div>
                        <div class="indexNotice-top-right">
                            more
                        </div>
                    </div>
                    <div class="indexNotice-content">
                        <el-table :data="tableData" :show-header="false" stripe
                                  style="width: 100%">

                            <el-table-column
                                    prop="context"
                                    label="公告">
                            </el-table-column>

                            <el-table-column
                                    prop="date"
                                    label="日期"
                                    width="180">
                            </el-table-column>
                        </el-table>

                    </div>
                </div>
            </el-col>
            <el-col :span="24">
            </el-col>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "IndexNotice",
        data(){
            return{
                tableData: [{
                    date: '2016-05-02',
                    context: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    context: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    context: '上海市普陀区金沙江路 1519 弄'
                }]

            }
        }
    }
</script>
