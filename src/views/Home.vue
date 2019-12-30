<template>
    <div
            element-loading-background="rgba(0, 0, 0, 0.8)"
            element-loading-spinner="el-icon-loading"
            element-loading-text="拼命加载中"
            id="main"
            v-loading="loading"
    >
        <div class="nav">
            <div class="nav-title">
                <img class="nav-title__logo" src="../assets/logo@3x.png"/>
                <h1 aria-label="EHR全国离职率报表" class="nav-title__content">EHR全国离职率报表</h1>
            </div>
            <!-- /.nav-title -->
            <div class="nav-row">
                <div class="nav-picker">
                    <el-date-picker
                            :clearable="false"
                            :picker-options="pickerOptions"
                            @change="changeMonth"
                            class="nav-picker__body"
                            placeholder="选择月份"
                            type="month"
                            v-model="strMonth"
                            value-format="yyyy-MM"
                    ></el-date-picker>
                </div>
                <!-- /选择月份 -->
                <div class="TurnoverRateStyle-options" id="buttons">
                    <el-button-group>
                        <el-button
                                @click="buttonClicked('up')"
                                class="buttons"
                                type="primary"
                                v-bind:class="{active:buttonClickedValue=='up'}"
                        >UP离职率
                        </el-button>
                        <el-button
                                @click="buttonClicked('wsp')"
                                class="buttons"
                                type="primary"
                                v-bind:class="{active:buttonClickedValue=='wsp'}"
                        >固定WPS离职率
                        </el-button>
                        <el-button
                                @click="buttonClicked('upwsp')"
                                class="buttons"
                                type="primary"
                                v-bind:class="{active:buttonClickedValue=='upwsp'}"
                        >UP+固定WPS离职率
                        </el-button>
                    </el-button-group>
                </div>

                <!-- 是否包含免责-->

                    <el-radio-group class="el-icon-totle" @change="changeDuty" v-model="duty">
                        <el-radio  label="1">免责前</el-radio>
                        <el-radio  label="2">免责后</el-radio>
                    </el-radio-group>





<!--              <div class="el-icon-totle" @click="changeDuty">
                    <i v-show="duty" class="el-icon-success"></i>
                    <i v-show="!duty" class="el-icon-circle-close"></i>
                    <span v-show="duty">包含免责</span>
                    <span v-show="!duty">不含免责</span>
                </div>-->


            </div>
        </div>

        <div class="firstLine">
            <!-------------------------------------------离职率统计---------------------------------------------->
            <el-card :body-style="{padding:'0' }" class="box-card TurnoverRateStyle">
                <div class="TurnoverRateStyle-header echarts-title-totle" slot="header">

                    <div>
                        <span class="echarts-title">离职率统计&nbsp;&nbsp;</span>
                        <div class="echarts-title-company">单位:百分比</div>
                    </div>

                </div>

                <div id="TurnoverRate"></div>
            </el-card>

            <!-------------------------------------------离职原因分布(单位:百分比)---------------------------------------------->

            <el-card :body-style="{ padding:'0' }" class="box-card TurnoverRateReasonStyle">
                <div slot="header" class="echarts-title-totle">


                    <div>
                        <span class="echarts-title">离职原因分布</span>
                        <div class="echarts-title-company">单位:百分比</div>
                    </div>

                    <div style=" font-size: 14px; display: flex;flex-direction: row;  margin-top: 7px; align-items: center">
                        <span style="width: 77px;">工作年限：</span>
                        <el-select @change="changeSeniority" placeholder="请选择" size="mini" class="mini-width"
                                   style="width: 130px;"
                                   v-model="changeSeniorityValue">
                            <el-option
                                    :key="item.value"
                                    :label="item.value"
                                    :value="item.label"
                                    v-for="item in options"

                            ></el-option>
                        </el-select>
                    </div>
                </div>
                <div id="TurnoverRateReason"></div>
            </el-card>
        </div>

        <div class="secondLine">
            <!-------------------------------------------离职人数占比---------------------------------------------->
            <div style="width: 50%;display: flex;flex-direction: row">
                <div id="bar">
                    <el-card :body-style="{ padding:'0' }" class="box-card DepartureRatioStyless">
                        <div class=" echarts-title-totle" slot="header">
                            <div>
                                <span class="echarts-title">离职人数占比</span>
                                <div class="echarts-title-company">单位:百分比</div>
                            </div>
                        </div>
                        <div id="DepartureRatio"></div>
                    </el-card>
                </div>


                <div id="DepartureRatioArea">
                    <!-------------------------------------------离职人数分布---------------------------------------------->
                    <el-card
                            :body-style="{ padding:'0' }"
                            class="box-card lackOfPostsReasonsStyle border-bottom-radius"
                            shadow="never"
                            style="border-bottom: 0px;"
                    >
                        <div class="secondLine-input">
                            <div class="clearfix echarts-title-totle" slot="header">
                                <div>
                                    <span class="echarts-title">离职人员年龄分布</span>
                                    <div class="echarts-title-company">单位:人数</div>
                                </div>
                            </div>
                            <el-select v-model="nationalPositon" @change="changeOldArea" placeholder="请选择" size="mini"
                                       style="padding-right: 1%"
                                       class="nationalSelect">
                                <el-option
                                        v-for="item in positonOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </div>
                        <div id="lackOfPostsReasons"></div>
                    </el-card>

                    <!-------------------------------------------离职人员工作年限分布---------------------------------------------->
                    <el-card
                            :body-style="{ padding:'0' }"
                            class="box-card lackOfPostsReasonsStyle border-top-radius"
                            shadow="never"
                            style="border-top: 0px;"
                    >
                        <div class="clearfix" slot="header">
                            <span class="echarts-title">离职人员工作年限分布</span>
                            <div class="echarts-title-company">单位:人数</div>
                        </div>
                        <div id="lackOfPostsReasonsTime"></div>
                    </el-card>
                </div>
            </div>
            <!-------------------------------------------离职原因分布(单位：人数)---------------------------------------------->
            <el-card :body-style="{ padding:'0' }" class="box-card TurnoverRateReasonsStyles"
                     id="TurnoverRateReasonsArea">

                <div class="secondLine-input">
                    <div class="clearfix" slot="header">
                        <span class="echarts-title">离职原因分布</span>
                        <div class="echarts-title-company">单位:人数</div>
                    </div>
                    <el-select v-model="causePositon" @change="changeReasonArea" placeholder="请选择" size="mini"
                               class="nationalSelect">
                        <el-option
                                v-for="item in positonOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"

                        >
                        </el-option>
                    </el-select>
                </div>


                <div id="TurnoverRateReasons"></div>
            </el-card>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts';
    import '../plugins/axios'

    export default {
        name: 'home',
        data() {
            return {
                //离职人员年龄选择方位
                nationalPositon: '0',
                //离职原因分布(单位：人数)方位
                causePositon: '0',
                RegionId: '',
                positonOptions: [
                    {
                        value: '0',
                        label: '全国',
                    },
                    {
                        value: '4',
                        label: 'EA',
                    }, {
                        value: '1',
                        label: 'WE'
                    }, {
                        value: '2',
                        label: 'NO'
                    }, {
                        value: '6',
                        label: 'SO'
                    }],
                totleNum: 0,
                //离职人数占比数据
                strMonth: '2019-08',
                IsUp: 1, // 1是   UP，  2是WSP，  0是UP+WSP
                IsRelief: 1, //   1是不包含免责  0是包含免责
                nationalTotal: '',
                loading: false,
                //离职原因分布月份
                changeSeniorityValue: '汇总',
                workYears: '',
                duty: '1',
                //缺岗原因分析，离职人员工作年限分析X轴坐标
                yearsOld: false,
                //饼图数据
                departureRatioData: false,
                //离职率X轴坐标
                turnoverRateDataX: false,
                //离职率数据
                turnoverRateData: false,
                //柱状图离职原因分布数据名
                turnoverRateReasonsDataX: false,
                //柱状图离职原因分布数据
                turnoverRateReasonsData: false,
                //条形图离职原因分布数据名
                turnoverRateReasonDataX: false,
                //条形图离职原因分布数据
                turnoverRateReasonData: false,
                //离职人员年龄析数据
                lackOfPostsReasonsData: false,
                //离职人员工作年限分布数据
                lackOfPostsReasonsTimeData: false,
                //离职人员工作原因分布数据-折线
                turnoverRateReasonsData2: false,
                buttonClickedValue: 'up',
                colorList: ['#F93F3F', '#F86B58', '#FFA864', '#FFDD96', '#D0E6A5', '#82DFE7', '#90E3B9', '#2B93C7'],
                options: [
                    {
                        value: '0-6个月',
                        label: '-1'
                    },
                    {
                        value: '6个月-1年',
                        label: '1'
                    },
                    {
                        value: '1-3年',
                        label: '2'
                    },
                    {
                        value: '3-5年',
                        label: '3'
                    },
                    {
                        value: '5年以上',
                        label: '4'
                    },
                    {
                        value: '汇总',
                        label: '0'
                    }
                ],
                turnoverRateReasonDataY: ['Total', 'SO', 'WE', 'NO', 'EA'],
                TurnoverRateEcharts: null,
                TurnoverRateReasonEcharts: null,
                lackOfPostsReasonsEcharts: null,
                lackOfPostsReasonsTimeEcharts: null,
                DepartureRatioEcharts: null,
                TurnoverRateReasonsEcharts: null,
                pickerOptions: {
                    disabledDate: (time) => {
                        if (time.getFullYear() == 2019 && (time.getMonth() >= 0 && time.getMonth() <= 8)) {
                            return false
                        } else {
                            return true
                        }
                    },
                },
                value: '汇总',
                month: '2019-08'
            }
        },

        mounted() {

            /*离职率统计-API*/
            this.turnoverRateAPI();

            /* 离职率占比-API*/
            this.departureRatioAPI();

            /* 离职人员年龄占比-API*/
            this.lackOfPostsReasonsAPI();

            /* 离职人员工作年限分布-API*/
            this.lackOfPostsReasonsTimeAPI();

            /* 离职原因分布（单位：百分比）-API*/
            this.turnoverRateReasonAPI();

            /* 离职原因分布（单位：人数）-API*/
            this.turnoverRateReasonsAPI();

            this.turnoverRateReasons2API()
        },
        watch: {},
        methods: {
            /*离职率统计-API*/
            turnoverRateAPI() {
                let baseUrl = 'http://139.129.194.134:9002';
                this.$axios.get(
                    baseUrl + '/ApiEmpQuit/LinearChart', {
                        params: {
                            strMonth: this.strMonth,
                            IsUp: this.IsUp,
                            IsRelief: this.IsRelief,
                        }
                    }
                ).then(res => {
                    // 离职率X轴
                    this.turnoverRateDataX = res.data.turnoverRateDataX;
                    // 离职率数据
                    this.turnoverRateData = res.data.LinearEntity;
                    this.TurnoverRate();
                });
            },

            /* 离职人數占比-API*/
            departureRatioAPI() {
                let baseUrl = 'http://139.129.194.134:9002';
                this.$axios.get(
                    baseUrl + '/ApiEmpQuit/PieChart', {
                        params: {
                            strMonth: this.strMonth,
                            IsUp: this.IsUp,
                            IsRelief: this.IsRelief,
                        }
                    }
                ).then(res => {
                    // 离职人數占比数据
                    this.departureRatioData = res.data.departureRatioData;
                    this.totleNum = res.data.nationalTotal,
                        this.DepartureRatio();
                });
            },

            // 离职人员年龄占API
            lackOfPostsReasonsAPI() {
                let baseUrl = 'http://139.129.194.134:9002';
                this.$axios.get(
                    baseUrl + '/ApiEmpQuit/QuitAgeChart', {
                        params: {
                            strMonth: this.strMonth,
                            IsUp: this.IsUp,
                            IsRelief: this.IsRelief,
                            RegionId: this.nationalPositon,
                        }
                    }
                ).then(res => {
                    // 离职人员年龄占比数据
                    this.lackOfPostsReasonsData = res.data;
                    this.lackOfPostsReasons();
                });
            },

            /* 离职人员工作年限分布-API*/
            lackOfPostsReasonsTimeAPI() {
                let baseUrl = 'http://139.129.194.134:9002';
                this.$axios.get(
                    baseUrl + '/ApiEmpQuit/QuitWorkYeasChart', {
                        params: {
                            strMonth: this.strMonth,
                            IsUp: this.IsUp,
                            IsRelief: this.IsRelief,
                            RegionId: this.nationalPositon,
                        }
                    }
                ).then(res => {
                    // 离职人员工作年限分布数据
                    this.lackOfPostsReasonsTimeData = res.data;
                    this.lackOfPostsReasonsTime();
                });
            },

            /*离职原因分布月份-API*/
            turnoverRateReasonAPI() {
                if (this.changeSeniorityValue == '汇总') {
                    this.workYears = 0;
                }
                else {
                    this.workYears = this.changeSeniorityValue;
                }
                let baseUrl = 'http://139.129.194.134:9002';
                this.$axios.get(
                    baseUrl + '/ApiEmpQuit/QuitReasonBarChart', {
                        params: {
                            strMonth: this.strMonth,
                            IsUp: this.IsUp,
                            IsRelief: this.IsRelief,
                            WorkYears: this.workYears
                        }
                    }
                ).then(res => {

                    this.turnoverRateReasonData = res.data;
                    this.TurnoverRateReason();
                });
            },

            /* 离职原因分布（单位：人数）-API*/
            turnoverRateReasonsAPI() {
                let baseUrl = 'http://139.129.194.134:9002';
                this.$axios.get(
                    baseUrl + '/ApiEmpQuit/QuitReasonChart', {
                        params: {
                            strMonth: this.strMonth,
                            IsUp: this.IsUp,
                            IsRelief: this.IsRelief,
                            RegionId: this.causePositon,
                        }
                    }
                ).then(res => {
                    // 离职原因分布（单位：百分比)数据
                    this.turnoverRateReasonsData = res.data;
                    this.TurnoverRateReasons();
                });
            },

            /* 离职原因分布（单位：人数）-折现图-API*/
            turnoverRateReasons2API() {
                let baseUrl = 'http://139.129.194.134:9002';
                this.$axios.get(
                    baseUrl + '/ApiEmpQuit/QuitReasonChart2', {
                        params: {
                            strMonth: this.strMonth,
                            IsUp: this.IsUp,
                            IsRelief: this.IsRelief,
                            RegionId: this.causePositon,
                        }
                    }
                ).then(res => {
                    // 离职原因分布（单位：百分比)数据
                    this.turnoverRateReasonsData2 = res.data;
                    this.TurnoverRateReasons();

                });
            },

            /*离职人员年龄分布改变区域*/
            changeOldArea() {
                this.lackOfPostsReasonsAPI();
                this.lackOfPostsReasonsTimeAPI();
            },

            changeReasonArea() {
                this.turnoverRateReasonsAPI();
                this.turnoverRateReasons2API();
            },

            /*离职原因分布月份*/
            /*参数WorkYears   0是汇总 1是不足一年 2是1到3年 3是3到5年 4是5年以上*/
            changeSeniority() {
                this.turnoverRateReasonAPI()
            },

            buttonClicked(value) {
                this.buttonClickedValue = value;
                this.TurnoverRateEcharts.clear();
                if (value == "up") {
                    this.IsUp = 1
                }
                if (value == "wsp") {
                    this.IsUp = 2
                }
                if (value == "upwsp") {
                    this.IsUp = 0
                }
                this.turnoverRateAPI();
                this.departureRatioAPI();
                this.lackOfPostsReasonsAPI();
                this.lackOfPostsReasonsTimeAPI();
                this.turnoverRateReasonAPI();
                this.turnoverRateReasonsAPI();
                this.turnoverRateReasons2API();
            },

            /*总体数据分布月份*/
            changeMonth() {
                this.turnoverRateAPI();
                this.departureRatioAPI();
                this.lackOfPostsReasonsAPI();
                this.lackOfPostsReasonsTimeAPI();
                this.turnoverRateReasonAPI();
                this.turnoverRateReasonsAPI();
                this.turnoverRateReasons2API();
            },

            /*是否包含免责*/
            changeDuty() {

                if (this.duty == 2) {
                    this.IsRelief = 0;
                }
                else {
                    this.IsRelief = 1;
                }

                this.turnoverRateAPI();
                this.departureRatioAPI();
                this.lackOfPostsReasonsAPI();
                this.lackOfPostsReasonsTimeAPI();
                this.turnoverRateReasonAPI();
                this.turnoverRateReasonsAPI();
                this.turnoverRateReasons2API();
            },

            /*离职率统计-FUNCTION*/
            TurnoverRate() {
                const TurnoverRate = echarts.init(document.getElementById('TurnoverRate'));
                let peopleOption = {
                    color: ["#2B93C7", '#FFDD96', '#90E3B9', '#F88A58', '#F93F3F'],
                    tooltip: {
                        trigger: 'axis',
                        // formatter: "{c}%"
                    },
                    legend: {
                        x: 'left',
                        // padding: [10, 0, 0, 140],
                        icon: 'circle',
                        bottom: '0%',
                        textStyle: {
                            fontSize: 14,
                            fontFamily: "SourceHanSansCN Medium",
                            color: '#4D4D4D'
                        }
                    },
                    grid: {
                        top: '10%',
                        left: '5%',
                        right: '3%',
                        bottom: '20%',
                        // containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        /*         boundaryGap: false,*/
                        axisLabel: {
                            show: true,
                            textStyle: {
                                fontSize: 14,
                                fontFamily: "DIN Alternate Bold",
                                color: '#4D4D4D'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#e1e0e0',
                            }
                        },
                        data: this.turnoverRateDataX,
                    },
                    yAxis: {
                        type: 'value',
                        min: 0,
                        splitNumber: 5,
                        show: true,
                        splitLine: {
                            show: false,
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#e1e0e0',
                            }
                        },
                        axisLabel: {
                            show: true,
                            formatter: '{value}%',
                            /*                            formatter: function (params) {
                                                            return Math.ceil(params/6)+'%';
                                                        },*/
                            textStyle: {
                                fontSize: 14,
                                color: '#4D4D4D',
                                fontFamily: "DIN Alternate Bold",
                            }
                        },
                    },
                    series: this.turnoverRateData.map(s => ({
                        name: s.RegionName,
                        type: 'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                fontSize: 14,
                                fontFamily: "DIN Alternate Bold",
                                formatter: "{c}%"
                            }
                        },
                        data: s.RegionQuitData.map(num => parseFloat(num))
                    }))
                };
                TurnoverRate.setOption(peopleOption);
                this.TurnoverRateEcharts = TurnoverRate
            },

            //离职人数占比
            DepartureRatio() {
                const DepartureRatio = echarts.init(document.getElementById('DepartureRatio'));
                let option = {
                    color: [
                        '#2B93C7', '#F86B58', '#FFDD96', '#90E3B9'
                    ],
                    title: {
                        text: this.totleNum,
                        left: 'center',
                        top: '37%',
                        show: true,
                        textStyle: {
                            color: '#4D4D4D',
                            fontSize: 50,
                            align: 'center',
                        },
                        subtext: 'National Total',
                        subtextStyle: {
                            lineHeight: 10,
                            color: '#4D4D4D',
                            fontSize: 16,
                            fontFamily: "DIN Alternate Bold",
                        }
                    },
                    series: this.departureRatioData.map(s => ({
                        hoverAnimation: false,
                        name: s['name'],
                        type: 'pie',
                        startAngle: 45,
                        radius: ['57%', '95%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                formatter: "  {c}%\n{b}",
                                position: 'inner',
                                color: '#fff',
                                fontSize: 15,
                                fontFamily: "DIN Alternate Bold",
                            },
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data: this.departureRatioData    /*/!*this.departureRatioData*!/*/
                    }))
                };
                DepartureRatio.setOption(option)
                this.DepartureRatioEcharts = DepartureRatio
            },

            //离职人数年龄分布
            lackOfPostsReasons() {
                const bar = echarts.init(document.getElementById('lackOfPostsReasons'));

                let option = {
                    // tooltip: {
                    //     trigger: 'axis',
                    //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    //     }
                    // },
                    grid: {
                        top: '8%',
                        left: '7%',
                        right: '4%',
                        bottom: '20%',
                        height: "40%",
                        //containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.lackOfPostsReasonsData.x,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#e1e0e0',

                                }
                            },
                            axisLabel: {
                                align: 'center',
                                fontSize: 14,
                                fontFamily: "DIN Alternate Bold",
                                color: "#4d4d4d",
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            show: true,
                            max: 120,
                            min: 0,
                            splitNumber: 4,
                            axisLine: {
                                lineStyle: {
                                    color: '#e1e0e0',
                                }
                            },
                            axisLabel: {
                                align: 'right',
                                fontSize: 14,
                                fontFamily: "SourceHanSansCN Medium",
                                color: "#4d4d4d",
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#f2f2f2',
                                },
                            }
                        }
                    ],
                    series: [
                        {
                            // name: '直接访问',
                            type: 'bar',
                            // color: ['#2B93C7','#2BB9C7','#58CFDB','#82DFE7','#90E3B9'],
                            itemStyle: {
                                normal: {
                                    //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                                    color: function (params) {
                                        // build a color map as your need.
                                        let colorList = ['#2B93C7', '#2BB9C7', '#58CFDB', '#82DFE7', '#90E3B9'];
                                        return colorList[params.dataIndex]
                                    },
                                    //以下为是否显示，显示位置和显示格式的设置了

                                }
                            },
                            barWidth: '60%',
                            data: this.lackOfPostsReasonsData.y,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    fontSize: 14,
                                    fontFamily: "DIN Alternate Bold",
                                    color: "#4d4d4d",
                                }
                            },
                        }
                    ]
                };

                bar.setOption(option)
                this.lackOfPostsReasonsEcharts = bar
            },

            //离职人员工作年限分布
            lackOfPostsReasonsTime() {
                const bar = echarts.init(document.getElementById('lackOfPostsReasonsTime'));
                let option = {
                    color: ['#3398DB'],
                    // tooltip: {
                    //     trigger: 'axis',
                    //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    //     }
                    // },
                    grid: {
                        top: '5%',
                        left: '7%',
                        right: '4%',
                        bottom: '16%',
                        height: '60%',
                        //containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.lackOfPostsReasonsTimeData.x,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#e1e0e0',
                                }
                            },
                            axisLabel: {
                                align: 'center',
                                fontSize: 14,
                                fontFamily: "DIN Alternate Bold",
                                color: "#4d4d4d",
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            show: true,
                            max: 120,
                            min: 0,
                            splitNumber: 4,
                            axisLine: {
                                lineStyle: {
                                    color: '#e1e0e0',
                                }
                            },
                            axisLabel: {
                                align: 'right',
                                fontSize: 14,
                                fontFamily: "DIN Alternate Bold",
                                color: "#4d4d4d",
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#f2f2f2',
                                },
                            }
                        }
                    ],
                    series: [
                        {
                            // name: '直接访问',
                            type: 'bar',
                            barWidth: '60%',
                            itemStyle: {
                                normal: {
                                    //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                                    color: function (params) {
                                        // build a color map as your need.
                                        let colorList = ['#2B93C7', '#2BB9C7', '#58CFDB', '#82DFE7', '#90E3B9'];
                                        return colorList[params.dataIndex]
                                    },
                                    //以下为是否显示，显示位置和显示格式的设置了

                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    fontSize: 14,
                                    fontFamily: "DIN Alternate Bold",
                                    color: "#4d4d4d",
                                    position: 'top'

                                }
                            },
                            data: this.lackOfPostsReasonsTimeData.y
                        }
                    ]
                };

                bar.setOption(option);
                this.lackOfPostsReasonsTimeEcharts = bar
            },

            //离职原因分布（单位：百分比）
            TurnoverRateReason() {
                const bar = echarts.init(document.getElementById('TurnoverRateReason'));
                let option = {
                    color: ['#2B93C7', '#2BB9C7', '#58CFDB', '#82DFE7', '#90E3B9', '#D0E6A5', '#FFDD96'],
                    /*color: ['#2B93C7', '#2BB9C7', '#58CFDB', '#90E3B9', '#FFDD96'],*/
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: this.turnoverRateReasonData.turnoverRateDataX,
                        icon: 'circle',
                        x: 'left',
                        left: '4%',
                        bottom: '0%',
                        textStyle: {
                            fontSize: 14,
                            fontFamily: "SourceHanSansCN Medium",
                            color: "#4d4d4d",
                        }

                    },
                    grid: {
                        top: '1%',
                        left: '8%',
                        right: '5%',
                        bottom: '13%',
                        height: '85%',


                    },
                    xAxis: {
                        show: false,
                        type: 'value',
                        min: 0,
                        max: 120,
                        width: '100%',
                    },
                    yAxis: {
                        type: 'category',
                        data: this.turnoverRateReasonData.RegionNames,
                        axisLine: {
                            lineStyle: {
                                color: '#e1e0e0',
                            }
                        },
                        axisLabel: {
                            align: 'left',
                            margin: 50,
                            fontSize: 14,
                            fontFamily: "DIN Alternate Bold",
                            color: "#4d4d4d",
                        },
                    },
                    series: this.turnoverRateReasonData.turnoverRateDataX.map((name, index) => ({
                        barMinHeight: 25,
                        name,
                        type: 'bar',
                        stack: '总量',

                        label: {
                            normal: {
                                show: true,
                                formatter: function (params) {
                                    if (params.value > 0) {
                                        return params.value + '%';
                                    } else {
                                        return params.value + '%';
                                    }
                                },
                                position: 'inside',
                                fontSize: 16,
                                fontFamily: "DIN Alternate Bold",
                                /*formatter:'{c}'%*/
                                color: '#fff',

                            }
                        },
                        data: this.turnoverRateReasonData.turnoverRateReasonData[index].map(num => parseFloat(num))
                    }))
                };
                bar.setOption(option)
                this.TurnoverRateReasonEcharts = bar
            },

            //离职原因分布（单位：人数）
            TurnoverRateReasons() {
                const KEcharts = echarts.init(document.getElementById('TurnoverRateReasons'));
                const posList = [
                    'left', 'right', 'top', 'bottom',
                    'inside',
                    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
                    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
                ];

                this.configParameters = {
                    rotate: {
                        min: -90,
                        max: 90
                    },
                    align: {
                        options: {
                            left: 'left',
                            center: 'center',
                            right: 'right'
                        }
                    },
                    verticalAlign: {
                        options: {
                            top: 'top',
                            middle: 'middle',
                            bottom: 'bottom'
                        }
                    },
                    position: {
                        options: echarts.util.reduce(posList, function (map, pos) {
                            map[pos] = pos;
                            return map;
                        }, {})
                    },
                    distance: {
                        min: 0,
                        max: 100
                    }
                };

                this.config = {
                    rotate: 90,
                    align: 'left',
                    verticalAlign: 'middle',
                    position: 'insideBottom',
                    distance: 15,
                    onChange: function () {
                        const labelOption = {
                            normal: {
                                rotate: this.config.rotate,
                                align: this.config.align,
                                verticalAlign: this.config.verticalAlign,
                                position: this.config.position,
                                distance: this.config.distance,
                            }
                        };
                        KEcharts.setOption({
                            series: [{
                                label: labelOption,
                            }, {
                                label: labelOption
                            }, {
                                label: labelOption
                            }, {
                                label: labelOption
                            }]
                        });
                    }
                };

                var that = this;

                function renderItem(params, api) {
                    var xValue = api.value(0);
                    var currentSeriesIndices = api.currentSeriesIndices();
                    var barLayout = api.barLayout({
                        barGap: '0%', barCategoryGap: '10%', count: currentSeriesIndices.length - 1
                    });

                    var points = [];
                    for (var i = 0; i < currentSeriesIndices.length; i++) {
                        var seriesIndex = currentSeriesIndices[i];
                        if (seriesIndex !== params.seriesIndex) {
                            var point = api.coord([xValue, api.value(seriesIndex)]);
                            point[0] += barLayout[i - 1].offsetCenter;
                            point[1] -= 20;
                            points.push(point);
                        }
                    }
                    var style = api.style({
                        stroke: api.visual('color'),
                        fill: null
                    });

                    return {
                        type: 'polyline',
                        shape: {
                            points: points
                        },
                        style: style
                    };
                }

                const encodeY = [];
                /*                this.turnoverRateReasonsData.PositionNames.forEach((index) => {
                                    encodeY.push(index + 1);
                                }); */

                let option = {
                    legend: {
                        x: 'left',
                        data: this.turnoverRateReasonsData.PositionNames,
                        icon: 'circle',
                        bottom: 0,
                        textStyle: {
                            fontSize: 14,
                            fontFamily: "SourceHanSansCN Medium",
                            color: "#4d4d4d",
                        }
                    },
                    color: this.colorList,
                    tooltip: {
                        show: true,
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        position: function (p) {
                            return [p[0] + 10, p[1] - 50];
                        },

                    },
                    grid: {
                        // height: '60%',
                        top: '5%',
                        left: '0%',
                        right: '1%',
                        bottom: '20%',
                        // calculable: true,
                    },

                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {show: true},
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    fontSize: 14,
                                    fontFamily: "SourceHanSansCN Medium",
                                    color: "#4d4d4d",
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#e0e1e1',
                                },
                            },
                            splitLine: {
                                show: false,
                            },
                            splitArea: {
                                show: true,
                                areaStyle: {
                                    color: ["#FAFAFA", '#fefefe'],
                                }
                            },
                            data: this.turnoverRateReasonsData.turnoverRateDataX
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            show: false,
                            axisLine: {
                                lineStyle: {
                                    color: '#e0e1e1',
                                }
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    fontSize: 14,
                                    fontFamily: "DIN Alternate Bold",
                                    color: "#4d4d4d",
                                }
                            },
                            splitLine: {
                                show: false,
                            }
                        }
                    ],
                    series: [{
                        type: 'custom',
                        renderItem: renderItem,
                        name: 'trend',
                        barWidth: 12,
                        itemStyle: {
                            normal: {

                                opacity: 1,
                                color: '#FFA864'
                            }
                        },
                        encode: {
                            x: 0,
                            y: encodeY
                        },
                        data: that.turnoverRateReasonsData2.turnoverRateReasonData,

                    }].concat(this.turnoverRateReasonsData.turnoverRateReasonData.map((data, index) => ({
                        type: 'bar',
                        animation: false,
                        barGap: '0%',
                        barCategoryGap: '10%',
                        name: this.turnoverRateReasonsData.PositionNames[index],
                        itemStyle: {
                            normal: {
                                borderWidth: -5,
                                opacity: 1
                            }
                        },
                        data: data
                    })))
                };
                KEcharts.setOption(option);
                this.TurnoverRateReasonsEcharts = KEcharts;

            },
        }
    }
</script>

<style lang="scss">
    @import '../style/index';

    #main {
        .el-button--primary {
            background-color: transparent !important;
            height: 32px !important;
            border: 1px solid #fff !important;
        }

        .el-button {
            padding: 0px 20px !important;
        }

        .el-button.active {
            background-color: #fff !important;
            color: #4d4d4d !important;
        }
        .nav-row {
            display: flex;
            flex-direction: row;
        }
        .nav-picker .nav-picker__body .el-input__inner {
            width: 115px !important;
            border-radius: 4px !important;
        }
        .el-radio__input.is-checked .el-radio__inner{
            border-color: #409EFF;
            background: #fff;
        }
        .el-radio__inner::after{
            background-color: #409eff;
        }
        .el-radio__label{
            color: #fff;
        }
        .el-radio{
            margin-right: 10px;
        }
        .el-radio-group{
            font-size: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 22px;
            margin-right: 20px;
        }
        .nav-picker .nav-picker__body .el-input__icon{
            display: flex;
            flex-direction: row;align-items: center;
        }
    }
</style>
