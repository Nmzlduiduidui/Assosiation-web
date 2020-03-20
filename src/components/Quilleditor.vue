<template>
    <div>
    <el-card style="height:300px;width: 90%;margin: 0 auto">
        <quill-editor
                v-model="content"
                ref="myTextEditor"
                :options="editorOption"
                @change="onChange"
                style="height:100%;width:95%;margin: 0 auto"
        >
            <!-- 自定义toolar -->
            <div id="toolbar" slot="toolbar">
                <!-- Add a bold button -->
                <button class="ql-bold" title="加粗">Bold</button>
                <button class="ql-italic" title="斜体">Italic</button>
                <button class="ql-underline" title="下划线">underline</button>
                <button class="ql-strike" title="删除线">strike</button>
                <button class="ql-blockquote" title="引用"></button>
                <button class="ql-code-block" title="代码"></button>
                <button class="ql-header" value="1" title="标题1"></button>
                <button class="ql-header" value="2" title="标题2"></button>
                <!--Add list -->
                <button class="ql-list" value="ordered" title="有序列表"></button>
                <button class="ql-list" value="bullet" title="无序列表"></button>
                <!-- Add font size dropdown -->
                <select class="ql-header" title="段落格式">
                    <option selected>段落</option>
                    <option value="1">标题1</option>
                    <option value="2">标题2</option>
                    <option value="3">标题3</option>
                    <option value="4">标题4</option>
                    <option value="5">标题5</option>
                    <option value="6">标题6</option>
                </select>
                <select class="ql-size" title="字体大小">
                    <option value="10px">10px</option>
                    <option value="12px">12px</option>
                    <option value="14px">14px</option>
                    <option value="16px" selected>16px</option>
                    <option value="18px">18px</option>
                    <option value="20px">20px</option>
                </select>
                <select class="ql-font" title="字体">
                    <option value="SimSun">宋体</option>
                    <option value="SimHei">黑体</option>
                    <option value="Microsoft-YaHei">微软雅黑</option>
                    <option value="KaiTi">楷体</option>
                    <option value="FangSong">仿宋</option>
                    <option value="Arial">Arial</option>
                </select>
                <!-- Add subscript and superscript buttons -->
                <select class="ql-color" value="color" title="字体颜色"></select>
                <select class="ql-background" value="background" title="背景颜色"></select>
                <select class="ql-align" value="align" title="对齐"></select>
                <button class="ql-clean" title="还原"></button>
                <!-- You can also add your own -->
                <span class="ql-formats">
          <button type="button" @click="imgClick">
            <svg viewBox="0 0 18 18">
                <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect>
                <circle class="ql-fill" cx="6" cy="7" r="1"></circle>
                <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline>
            </svg>
          </button>
      </span>
                <span class="ql-formats">
           <button type="button" class="ql-video"></button>
       </span>
            </div>

        </quill-editor>

    </el-card>

        <crop-upload
                v-model="showCrop"
                :width="width"
                :height="height"
                :fileName="fileName"
                :uploadUrl="uploadUrl"
                @uploadSuccess="onUploadSuccess"
        ></crop-upload>

    </div>

</template>

<script>
    
    import {quillEditor} from 'vue-quill-editor'
    import CropUpload from './CropUpload';

    export default {
        props: {
            /*编辑器的内容*/
            value: {
                type: String
            },
            /*上传图片的地址*/
            uploadUrl: {
                type: String
            },
            /*上传图片的file控件name*/
            fileName: {
                type: String
            },
            /*图片大小*/
            maxSize:{
                type:Number,
                default:400//kb
            },
            /*使用使用裁切*/
            canCrop:{
                type:Boolean,
                default:false
            },
            /*裁切的最小尺寸*/
            width:{
                type:Number,
                default:200
            },
            /*裁切的最小尺寸*/
            height:{
                type:Number,
                default:200
            }
        },
        data() {
            return {
                content: '',
                editorOption: {
                    modules: {
                        toolbar: '#toolbar'
                    }
                },
                /*显示裁切控件*/
                showCrop:false
            }
        },
        methods: {
            onChange(){
                this.$emit('input', this.content)
            },
            /*选择上传图片切换*/
            onFileChange(e){
                var fileInput = e.target;
                if (fileInput.files.length == 0) {
                    return;
                }
                if (fileInput.files[0].size > 1024 * 1024 * this.maxSize) {
                    alert('图片过大');
                    return;
                }
                if (!this.uploadUrl) {
                    console.log('no editor uploadUrl');
                    return;
                }
                var self = this;
                var data = new FormData;
                data.append(this.fileName, fileInput.files[0],name);
                this.editor.focus();
                var xhr=new XMLHttpRequest();
                xhr.open('post',this.uploadUrl);
                xhr.responseType='json';
                xhr.send(data);
                xhr.onload=function () {
                    if(xhr.status==200){
                        self.editor.insertEmbed(self.editor.getSelection().index, 'image', xhr.response.url);
                    }
                }
            },
            /*裁切上传成功 res根据上传接口值获取*/
            onUploadSuccess:function (res) {
                this.editor.focus();
                this.editor.insertEmbed(this.editor.getSelection().index, 'image', res.url);
            },
            /*点击上传图片按钮*/
            imgClick() {
                if(this.canCrop){
                    this.showCrop=true;
                }else{
                    /*创建input file 不裁切，自己控制*/
                    var input = document.createElement('input');
                    input.type = 'file';
                    input.name = this.fileName;
                    input.accept = 'image/jpeg,image/png,image/jpg,image/gif';
                    input.onchange = this.onFileChange;
                    input.click();
                }
            },

        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quill;
            }
        },
        components: {
            quillEditor,
            CropUpload
        },
        mounted(){
            this.content = this.value;
        },
        watch: {
            'value'(newVal, oldVal) {
                if (this.editor) {
                    if (newVal !== this.content) {
                        this.content = newVal
                    }
                }
            },
        }
    }
</script>

<style scoped>

</style>