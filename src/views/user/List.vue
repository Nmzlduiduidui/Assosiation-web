<template>
    <div>
        <el-row :gutter="10">
            <!--用户列表页-->
            <div class="notice">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="height:100%;">
                    <el-main>
                        <div class="noticeBox">
                            <el-container>
                                <el-main>
                                    <el-row :gutter="10">

                                        <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
                                            <el-form-item label="用户名称" prop="userName">
                                                <el-input
                                                        v-model="queryParams.userName"
                                                        placeholder="请输入用户名称"
                                                        clearable
                                                        size="small"
                                                        style="width: 150px"
                                                        @keyup.enter.native="handleQuery"
                                                />
                                            </el-form-item>
                                            <el-form-item label="手机号码" prop="phone">
                                                <el-input
                                                        v-model="queryParams.phone"
                                                        placeholder="请输入手机号码"
                                                        clearable
                                                        size="small"
                                                        style="width: 240px"
                                                        @keyup.enter.native="handleQuery"
                                                />
                                            </el-form-item>

                                            <el-form-item label="创建时间">
                                                <el-date-picker
                                                        v-model="dateRange"
                                                        size="small"
                                                        style="width: 240px"
                                                        value-format="yyyy-MM-dd"
                                                        type="daterange"
                                                        range-separator="-"
                                                        start-placeholder="开始日期"
                                                        end-placeholder="结束日期"
                                                ></el-date-picker>
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button type="primary" icon="el-icon-search" size="mini"
                                                           @click="handleQuery">搜索
                                                </el-button>
                                                <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置
                                                </el-button>
                                            </el-form-item>
                                        </el-form>

                                        <el-row :gutter="10" class="mb8" style="margin-bottom: 5px">
                                            <el-col :span="1.5">
                                                <el-button
                                                        type="primary"
                                                        icon="el-icon-plus"
                                                        size="mini"
                                                        @click="handleAdd"
                                                >新增
                                                </el-button>
                                            </el-col>
                                            <el-col :span="1.5">
                                                <el-button
                                                        type="success"
                                                        icon="el-icon-edit"
                                                        size="mini"
                                                        :disabled="single"
                                                        @click="handleUpdate"
                                                >修改
                                                </el-button>
                                            </el-col>
                                            <el-col :span="1.5">
                                                <el-button
                                                        type="danger"
                                                        icon="el-icon-delete"
                                                        size="mini"
                                                        :disabled="multiple"
                                                        @click="handleDelete"
                                                >删除
                                                </el-button>
                                            </el-col>

                                        </el-row>

                                        <el-table v-loading="loading" stripe :data="userList"
                                                  @selection-change="handleSelectionChange"
                                                  height="450"
                                                  type="index"
                                                  style="width: 100%"
                                                  class="userListTable">
                                            <el-table-column type="selection" st></el-table-column>
                                            <el-table-column prop="userId" label="ID" align="center"
                                                             width="50px"></el-table-column>
                                            <el-table-column prop="studentNumber" label="学号" align="center"
                                                             width="120px"></el-table-column>
                                            <el-table-column prop="userName" label="用户名" align="center"
                                                             width="120px"></el-table-column>
                                            <el-table-column prop="phone" label="手机号" align="center"
                                                             width="120px"></el-table-column>
                                            <el-table-column prop="major" label="学院" align="center"
                                                             width="120px"></el-table-column>
                                            <el-table-column prop="grade" label="班级" align="center"
                                                             width="120px"></el-table-column>
                                            <el-table-column prop="createTime" label="创建时间" align="center">
                                                <template slot-scope="scope">
                                                    <span>{{ parseTime(scope.row.createTime) }}</span>
                                                </template>
                                            </el-table-column>

                                            <el-table-column
                                                    label="操作"
                                                    align="center"
                                                    width="180"
                                                    class-name="small-padding fixed-width"
                                            >
                                                <template slot-scope="scope">
                                                    <el-button
                                                            size="mini"
                                                            type="text"
                                                            icon="el-icon-edit"
                                                            @click="handleUpdate(scope.row)"
                                                    >修改
                                                    </el-button>
                                                    <el-button
                                                            v-if="scope.row.userId !== 1"
                                                            size="mini"
                                                            type="text"
                                                            icon="el-icon-delete"
                                                            @click="handleDelete(scope.row)"
                                                    >删除
                                                    </el-button>
                                                    <el-button
                                                            size="mini"
                                                            type="text"
                                                            icon="el-icon-key"
                                                            @click="handleResetPwd(scope.row)"
                                                    >重置
                                                    </el-button>
                                                </template>
                                            </el-table-column>

                                        </el-table>

                                        <Pagination
                                                v-if="total>0"
                                                :total="total"
                                                :page.sync="queryParams.pageNum"
                                                :limit.sync="queryParams.pageSize"
                                                @pagination="getList"/>

                                        <!-- 添加或修改参数配置对话框 -->
                                        <el-dialog :title="title" :visible.sync="open" width="500px">

                                            <el-form ref="form" :model="form" :rules="rules" label-width="80px"
                                                     style="">
                                                <el-row>
                                                    <el-col :span="24">
                                                        <el-form-item label="用户名称" prop="userName">
                                                            <el-input v-model="form.userName" placeholder="请输入用户名称"/>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="24">
                                                        <el-form-item label="手机号" prop="phone">
                                                            <el-input v-model="form.phone" placeholder="请输入手机号"
                                                                      maxlength="11"/>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="24">
                                                        <el-form-item label="学号" prop="studentID">
                                                            <el-input v-model="form.studentID" placeholder="请输入学号"
                                                                      maxlength="50"/>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="24">
                                                        <el-form-item label="学院" prop="major">
                                                            <el-input v-model="form.major" placeholder="请输入学院"
                                                                      maxlength="50"/>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="24">
                                                        <el-form-item label="班级" prop="grade">
                                                            <el-input v-model="form.grade" placeholder="请输入班级"
                                                                      maxlength="50"/>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="24">
                                                        <el-form-item label="邮箱" prop="email">
                                                            <el-input v-model="form.email" placeholder="请输入邮箱"
                                                                      maxlength="50"/>
                                                        </el-form-item>
                                                    </el-col>

                                                    <el-col :span="24">
                                                        <!--v-if="form.userId == undefined"-->
                                                        <el-form-item  label="密码" prop="password">
                                                            <el-input v-model="form.password" placeholder="请输入密码"
                                                                      type="password"/>
                                                        </el-form-item>
                                                    </el-col>

                                                    <el-col :span="24">
                                                        <el-form-item label="备注">
                                                            <el-input v-model="form.remark" type="textarea"
                                                                      placeholder="请输入内容"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                            </el-form>
                                            <div slot="footer" class="dialog-footer">
                                                <el-button type="primary" @click="submitForm">确 定</el-button>
                                                <el-button @click="cancel">取 消</el-button>
                                            </div>

                                        </el-dialog>

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
    import {addUser, getUser, deleteUser, updateUser, listUser,resetUserPwd} from "@/api/system/user";
    import "../../utils/index"

    export default {
        name: 'List',
        data() {
            return {
                // 日期范围
                dateRange: [],
                // 总条数
                total: 0,
                // 用户表格数据
                userList: null,
                // 表单参数
                form: {},
                // 查询参数
                queryParams: {
                    pageNum: 1,
                    pageSize: 10,
                    userName: undefined,
                    phone: undefined,
                    deptId: undefined
                },
                // 遮罩层
                loading: true,
                search: '',
                // 状态数据字典
                statusOptions: [],
                // 性别状态字典
                sexOptions: [],
                // 岗位选项
                postOptions: [],
                // 角色选项
                roleOptions: [],
                // 选中数组
                ids: [],
                // 非单个禁用
                single: true,
                // 非多个禁用
                multiple: true,
                // 弹出层标题
                title: "",
                // 是否显示弹出层
                open: false,
                // 默认密码
                initPassword: undefined,
                rules: {
                    userName: [
                        {required: true, validator: this.validators.validateuserName, trigger: 'blur'}
                    ],
                    phone: [
                        {required: true, validator: this.validators.validatePhone, trigger: 'blur'}
                    ],
                    email: [
                        {validator: this.validators.validateEmail, trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: "用户密码不能为空", trigger: "blur"}
                    ]
                }
            }
        },
        created() {
            this.getList();
        },
        methods: {
            /** 新增按钮操作 */
            handleAdd() {
                this.reset();
                getUser().then(response => {
                    this.postOptions = response.posts;
                    this.roleOptions = response.roles;
                    this.open = true;
                    this.title = "添加用户";
                    this.form.password = this.initPassword;
                });
            },

            /** 删除按钮操作 */
            handleDelete(row) {
                const userIds = row.userId || this.ids;
                console.log(userIds);

                this.$confirm('是否确认删除用户ID为"' + userIds + '"等数据项?', "警告", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                }).then(function () {
                    return deleteUser(userIds);
                }).then(() => {
                    this.getList();
                    this.msgSuccess("删除成功");
                }).catch(function () {
                });
            },
            /** 修改按钮操作 */
            handleUpdate(row) {
                const userId = row.userId || this.ids;
                getUser(userId).then(response => {
                    this.form = response.data.data;
                    this.postOptions = response.posts;
                    this.roleOptions = response.roles;
                    this.form.postIds = response.postIds;
                    this.form.roleIds = response.roleIds;
                    this.open = true;
                    this.title = "修改用户";
                    // this.form.password = "";
                });
            },
            /** 重置密码按钮操作 */
            handleResetPwd(row) {
                this.$prompt('请输入"' + row.userName + '"的新密码', "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消"
                }).then(({value}) => {
                    resetUserPwd(row.userId, value).then(response => {
                        if (response.code === 200) {
                            this.msgSuccess("修改成功，新密码是：" + value);
                        } else {
                            this.msgError(response.msg);
                        }
                    });
                }).catch(() => {
                });
            },
            /** 提交按钮 */
            submitForm: function () {
                this.$refs["form"].validate(valid => {
                    if (valid) {
                        if (this.form.userId != undefined) {
                            updateUser(this.form).then(response => {
                                if (response.data.code === 200) {
                                    this.msgSuccess("修改成功");
                                    this.open = false;
                                    this.getList();
                                } else {
                                    this.msgError(response.data.msg);
                                }
                            });
                        } else {
                            addUser(this.form).then(response => {
                                if (response.data.code === 200) {
                                    this.msgSuccess("新增成功");
                                    this.open = false;
                                    this.getList();
                                } else {
                                    this.msgError(response.data.msg);
                                }
                            });
                        }
                    }
                });
            },
            /** 搜索按钮操作 */
            handleQuery() {
                this.queryParams.page = 1;
                this.getList();
            },
            // 取消按钮
            cancel() {
                this.open = false;
                this.reset();
            },
            // 表单重置
            reset() {
                this.form = {
                    userId: undefined,
                    deptId: undefined,
                    userName: undefined,
                    nickName: undefined,
                    password: undefined,
                    studentID: undefined,
                    phone: undefined,
                    email: undefined,
                    sex: undefined,
                    status: "0",
                    remark: undefined,
                    postIds: [],
                    roleIds: []
                };
                this.resetForm("form");
            },
            /** 重置按钮操作 */
            resetQuery() {
                this.dateRange = [];
                this.queryParams = {
                    userName: undefined,
                    phone: undefined,
                    email: undefined
                };
                this.handleQuery();
            },
            // 多选框选中数据
            handleSelectionChange(selection) {
                this.ids = selection.map(item => item.userId);
                this.single = selection.length != 1;
                this.multiple = !selection.length;
            },
            indexMethod(index) {
                return index * 2;
            },
            getList() {
                this.loading = true;
                console.log(this.dateRange)
                listUser(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
                        this.userList = response.data.rows;
                        console.log(this.userList)
                        this.total = response.data.total;
                        this.loading = false;
                    }
                );
            }
        },
    }
</script>
<style lang="scss">
    .userListTable {
        th {
            padding: 0 !important;
            height: 50px;
            line-height: 50px;
        }

        td {
            padding: 0 !important;
            height: 50px;
            line-height: 50px;
        }
    }
</style>