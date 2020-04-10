<template>
                <el-row :gutter="10">
                    <!--Modify个人信息-->
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
                            <div class="noticeModify" style="margin-top: 30px">
                                <el-form :label-position="labelPosition" label-width="80px"
                                         :model="noticeModify"
                                         ref="noticeModify"
                                         style="text-align: center">
                                        <!--<input type="button" value="切换裁切" @click="canCrop=!canCrop">-->
                                        <editor ref="myTextEditor"
                                                :fileName="'myFile'"
                                                :canCrop="canCrop"
                                                :uploadUrl="uploadUrl"
                                                v-model="content"></editor>
                                        <div v-html="content"></div>
                                </el-form>
                            </div>
                    </el-col>
                </el-row>
</template>

<script>

    import editor from "../../components/QuillEditor";
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