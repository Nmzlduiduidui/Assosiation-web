<template>
    <div>
        <el-row :gutter="10">
            <!--公告详情页-->
            <div class="detail">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="height:100%;">
                    <el-main>
                        <el-page-header @back="goBack" content="公告详情">
                        </el-page-header>

                        <el-main>
                        <el-card class="box-card" style="margin-top: 30px;background-color: rgba(217, 236, 255, 0.4)">
                            <div slot="header" class="clearfix">
                                <h2>南宁学院对应用技术大学建设的积极探索</h2>
                                <div style="margin-top: 10px">
                                    <el-button style="padding: 3px;font-size: 20px" type="text">
                                        <h6>发布时间:{{dataTime}}| 点击数：6666</h6>

                                    </el-button>
                                </div>
                            </div>

                            <div class="noticeDetail" style="">
                                <div style="text-align: left;text-indent:25px">
                                    <p>
                                        近日，新华社主管杂志《高管信息》2019年36期、37期分别以《“应用思维”实现新升崛起，“变道超车”引领三大突破—南宁学院走应用技术大学发展之路调查（上）》及《“应用理念”值得借鉴  发展仍需持续给力——南宁学院走应用技术大学发展之路调查（下）》为标题，分上下两期对学校应用技术大学建设的积极探索与实践进行专题报道。

                                        报道认为，学校对应用技术大学建设的积极探索与实践有三大突破：一是专业群对接产业链，以需求为导向建设地方经济社会发展急需的应用型专业，实现了地方高校服务地方发展办学使命的突破。二是以应用能力产出为导向培养应用型人才，学生实践动手能力强，招生就业两旺，实现了人才培养目标与规格的突破。三是产教融合校企合作，改变了办学模式与人才培养模式，产教彼此跨界、整合、重构、融合，供给侧与需求侧无缝对接，实现了育人主体从学校到产教双主体的突破。

                                        刊文作者系新华社广西分社总编助理、经济部主任、智库中心主任，高级记者，刊物主要为党政“高管”提供决策咨询参考。现将全文转载，以飨读者。</p>
                                </div>
                            </div>
                            <!--<div v-for="o in 4" :key="o" class="text item">-->
                            <!--{{'列表内容 ' + o }}-->
                            <!--</div>-->
                        </el-card>
                        </el-main>
                    </el-main>
                </el-col>
            </div>

        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        methods: {
            goBack() {
                console.log('go back');
            }
        }
    }

</script>

<style scoped>

    . {
        padding: 0;
        margin: 0;
    }
</style>