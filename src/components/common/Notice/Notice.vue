<template>
    <div>
        <el-row :gutter="10">
            <!--公告详情页-->
            <div class="detail">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="height:100%;">
                    <el-main>
                            <div class="noticeBox">
                                <el-container>
                                    <el-main>
                                        <el-row :gutter="10">
                                            <el-table
                                                    :data="tableData"
                                                    stripe
                                                    height="450"
                                                    type="index"
                                                    style="width: 100%">
                                                <el-table-column
                                                        type="selection"
                                                        st
                                                        style="width: 10%">
                                                </el-table-column>
                                                <el-table-column
                                                        type="index"
                                                        :index="indexMethod">
                                                </el-table-column>
                                                <el-table-column
                                                        prop="title"
                                                        label="标题"
                                                        style="width: 50%">
                                                </el-table-column>
                                                <el-table-column
                                                        prop="date"
                                                        label="发布时间"
                                                        style="width: 5%">
                                                </el-table-column>

                                                <el-table-column
                                                        prop="address"
                                                        label="地址"
                                                        style="width: 10%">
                                                </el-table-column>
                                               <!-- <el-table-column
                                                        fixed="right"
                                                        label="操作"
                                                        width="100">
                                                    <template slot-scope="scope">
                                                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                                                        <el-button type="text" size="small">编辑</el-button>
                                                        <el-button type="text" size="small">添加</el-button>

                                                    </template>
                                                </el-table-column>-->
                                                <el-table-column
                                                        align="right"
                                                        style="width: 25%">
                                                    <template slot="header" slot-scope="scope">
                                                        <el-input
                                                                v-model="search"
                                                                size="mini"
                                                                placeholder="输入关键字搜索"/>
                                                    </template>
                                                    <template slot-scope="scope">
                                                        <el-button
                                                                size="mini"
                                                                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                                                        <el-button
                                                                size="mini"
                                                                type="danger"
                                                                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                                                    </template>
                                                </el-table-column>
                                            </el-table>
                                        </el-row>
                                    </el-main>
                                </el-container>
                            </div>
                    </el-main>
                </el-col>
            </div>

        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Notice',
        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    title:'网页色彩搭配的原理_百度文库',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                search: ''
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            indexMethod(index) {
                return index * 2;
            }
        },
    }
</script>