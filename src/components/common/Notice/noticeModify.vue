<template>
    <div class="noticeModifyBox">
        <el-container>
            <el-main>
                <el-row :gutter="10">
                    <!--Modify个人信息-->
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
                        <el-main>
                            <div class="detailTitle" style="line-height: 60px">
                                <div class="detailTitle-left">
                                    <p>发布公告</p>
                                </div>
                            </div>
                            <hr/>
                            <div class="noticeModify" style="margin-top: 30px">
                                <el-form :label-position="labelPosition" label-width="80px"
                                         :model="noticeModify"
                                         ref="noticeModify"
                                         style="text-align: center">

                                    <el-form-item label="标题" style="width: 50%;text-align: left">
                                        <el-input v-model="noticeModify.Title"></el-input>
                                    </el-form-item>
                                    <!--      <el-form-item label="公告内容">
                                           <el-input type="textarea" v-model="noticeModify.Content"></el-input>
                                        <quill-editor v-model="noticeModify.Content"
                                                         ref="myQuillEditor"
                                                         class="editer"
                                                         :options="editorOption"
                                                         @ready="onEditorReady($event)"
                                                         style="height: 500px;" >
                                           </quill-editor>
                                    </el-form-item>
                                    -->
                                    <p>公告内容</p>
                                    <div style="margin: 15px">
                                        <!--<input type="button" value="切换裁切" @click="canCrop=!canCrop">-->
                                        <editor ref="myTextEditor"
                                                :fileName="'myFile'"
                                                :canCrop="canCrop"
                                                :uploadUrl="uploadUrl"
                                                v-model="content"></editor>
                                        <div v-html="content"></div>
                                    </div>
                                    <el-form-item>
                                        <el-button type="primary" @click="onSubmit">保存</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-main>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>

    </div>
</template>

<script>

    import editor from "../../Quilleditor";
    export default {
        name: "Modify",
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                labelPosition: 'right',
                noticeModify: {
                    Title: '',
                    Content: ''
                },
                canCrop:false,
                /*测试上传图片的接口，返回结构为{url:''}*/
                uploadUrl:'http://localhost:4000/api/upload',
                content:''
            }
        },
        methods: {
            onSubmit() {
                alert('保存成功!');
            }
        },
        components: {
            editor
        }

    }
</script>

<style scoped>


    .noticeModifyBox .item {
        margin-bottom: 18px;
    }

    .noticeModifyBox  .detailTitle-left{
        text-align: left
    }
    .noticeModifyBox  .detailTitle-left p{
       font-size: 25px;
    }


</style>