import echarts from "echarts";
export default {
  //离职人数占比
  augDepartureRatioOption: {
    color: [
      "#2B93C7", "#F86B58", "#FFDD96", "#90E3B9"
    ],
    title: {
      text: "92%",
      left: "center",
      top: "40%",
      // padding:[24,0],
      textStyle: {
        color: "#4d4d4d",
        fontSize: 40,
        fontFamily: "SourceHanSansCN ExtraLight",
        align: "center"
      },
      subtext: "National Total",
      subtextStyle: {
        lineHeight: 10,
        color: "#E30202",
        fontSize: 15,
        fontFamily: "SourceHanSansCN ExtraLight",
      }
    },
    series: [
      {
        hoverAnimation: false,
        type: "pie",
        startAngle: 45,
        radius: ["57%", "95%"],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: true,
            formatter: "  {c}%\n{b}",
            position: "inner",
            color: "#fff",
            fontSize: 13,
            fontFamily: "SourceHanSansCN ExtraLight",
          },
        },
        labelLine: {
          normal: {
            show: true
          }
        },
        data: [
          { value: 92, name: "EA" },
          { value: 90, name: "SO" },
          { value: 96, name: "WE" },
          { value: 93, name: "NO" },
        ]
      }
    ]
  },
  //离职率统计
  augTurnoverRateOption(input) {
    var augup = ["2.38%", "1.48%", "2.33%", "2.09%", "2.05%"];
    var augwsp = ["3.64%", "5.35%", "5.88%", "8.76%", "5.57%"];
    var augupwsp = ["2.67%", "1.90%", "2.80%", "3.37%", "2.67%"];
    var supup = ["2.86%", "1.75%", "2.46%", "2.81%", "2.48%"];
    var supwsp = ["6.06%", "9.09%", "5.22%", "6.04%", "6.43%"];
    var supupwsp = ["3.60%", "2.54%", "2.82%", "3.44%", "3.17%"];
    var option = {
      tooltip: {
        trigger: "axis"
      },
      legend: {
        x: "left",
        data: ["EA", "NO", "WE", "SO", "National Total"],
        icon: "circle",
        bottom: "0%",
      },
      grid: {
        top: "10%",
        left: "2.5%",
        right: "2.5%",
        bottom: "20%",
      },

      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          show: true,
          textStyle: {
            fontSize: 11
          }
        },
        axisLine: {
          lineStyle: {
            color: "#888",
          }
        },
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      },
      yAxis: {
        type: "value",
        show: false,
        axisLine: {
          lineStyle: {
            color: "#888",
          }
        },

      },
      series: [
        {
          name: "EA",
          type: "line",
          stack: "总量",
          lineStyle: { color: "#FC5553" },
          label: {
            normal: {
              show: true,
              position: "top",
              fontSize: 14,
              fontFamily: "SourceHanSansCN ExtraLight",
            }
          },
          itemStyle: {
            normal: {
              color: "#2B93C7",//图例的颜色
              lineStyle: {
                color: "#2B93C7"//线的颜色
              }
            },
          },
          data: [0, 0, 0, 0, 0, 0, 0, input == "up" ? augup[0] : input == "wsp" ? augwsp[0] : augupwsp[0], input == "up" ? supup[0] : input == "wsp" ? supwsp[0] : supupwsp[0]]
        },
        {
          name: "NO",
          type: "line",
          stack: "总量",
          lineStyle: { color: "#F5B030" },
          label: {
            normal: {
              show: true,
              position: "top",
              fontSize: 14,
              fontFamily: "SourceHanSansCN ExtraLight",
            }
          },
          itemStyle: {
            normal: {
              color: "#90E3B9",//图例的颜色

              lineStyle: {
                color: "#90E3B9"//线的颜色
              }
            },
          },
          data: [0, 0, 0, 0, 0, 0, 0, "1.48%", ""]
        },
        {
          name: "WE",
          type: "line",
          stack: "总量",
          lineStyle: { color: "#00C09D" },
          label: {
            normal: {
              show: true,
              position: "top",
              fontSize: 14,
              fontFamily: "SourceHanSansCN ExtraLight",
            }
          },
          itemStyle: {
            normal: {
              color: "#FFDD96",//图例的颜色
              lineStyle: {
                color: "#FFDD96"//线的颜色
              }
            },
          },
          data: [0, 0, 0, 0, 0, 0, 0, "2.33%", ""]
        },
        {
          name: "SO",
          type: "line",
          stack: "总量",
          lineStyle: { color: "#007EC0" },
          label: {
            normal: {
              show: true,
              position: "top",
              fontSize: 14,
              fontFamily: "SourceHanSansCN ExtraLight",
            }
          },
          itemStyle: {
            normal: {
              color: "#F88A58",//图例的颜色
              lineStyle: {
                color: "#F88A58"//线的颜色
              }
            },
          },
          data: [0, 0, 0, 0, 0, 0, 0, "2.09%", ""]
        },
        {
          name: "National Total",
          type: "line",
          stack: "总量",
          lineStyle: { color: "#E30202" },
          label: {
            normal: {
              show: true,
              position: "top",
              fontSize: 14,
              fontFamily: "SourceHanSansCN ExtraLight",
            }
          },
          itemStyle: {
            normal: {
              color: "#F93F3F",//图例的颜色
              lineStyle: {
                color: "#F93F3F"//线的颜色
              }
            },
          },
          data: [0, 0, 0, 0, 0, 0, 0, "2.05%", ""]
        }
      ]
    }
    return option
  },
  //柱状图离职原因分布
  augTurnoverRateReasonsOption() {
    const posList = [
      "left", "right", "top", "bottom",
      "inside",
      "insideTop", "insideLeft", "insideRight", "insideBottom",
      "insideTopLeft", "insideTopRight", "insideBottomLeft", "insideBottomRight"
    ];

    this.configParameters = {
      rotate: {
        min: -90,
        max: 90
      },
      align: {
        options: {
          left: "left",
          center: "center",
          right: "right"
        }
      },
      verticalAlign: {
        options: {
          top: "top",
          middle: "middle",
          bottom: "bottom"
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
      align: "left",
      verticalAlign: "middle",
      position: "insideBottom",
      distance: 15,
      onChange: function () {
        // const labelOption = {
        //   normal: {
        //     rotate: this.config.rotate,
        //     align: this.config.align,
        //     verticalAlign: this.config.verticalAlign,
        //     position: this.config.position,
        //     distance: this.config.distance,
        //   }
        // };
        // KEcharts.setOption({
        //   series: [{
        //     label: labelOption,
        //   }, {
        //     label: labelOption
        //   }, {
        //     label: labelOption
        //   }, {
        //     label: labelOption
        //   }]
        // });
      }
    };


    let labelOption = {
      normal: {
        show: true,
        fontFamily: "SourceHanSansCN ExtraLight",
        position: ["50%", "-3%"],
        distance: this.config.distance,
        align: this.config.align,
        verticalAlign: this.config.verticalAlign,
        rotate: this.config.rotate,
        formatter: "{c}",
        fontSize: 12,
        color: "#000",
        rich: {
          name: {
            textBorderColor: "#fff"
          }
        }
      }
    };

    let option = {
      legend: {
        x: "left",
        data: this.turnoverRateReasonsData || ["EA", "NO", "WE", "SO", "National Total", "WE1", "WE2", "WE3", "WE4", "WE5"],
        // padding: [10, 0, 0, 140],
        icon: "circle",
        top: "92%"
      },
      color: this.colorList,
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      grid: {
        top: "1%",
        left: "1%",
        right: "1%",
        bottom: "15%"
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          axisTick: { show: true },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 10

            }
          },
          axisLine: {
            lineStyle: {
              color: "#888",
            }
          },
          data: ["个人原因", "业务淘汰", "劳动强度", "门店原因", "薪资原因"]
        }
      ],
      yAxis: [
        {
          type: "value",
          show: false,

          axisLine: {
            lineStyle: {
              color: "#888",
            }
          },
        }
      ],
      series: [
        {
          name: this.turnoverRateReasonsDataX[0] || "EA",
          type: "bar",
          backgroundColor: "#000",

          barGap: 0,
          label: labelOption,
          barWidth: 12,
          data: this.turnoverRateReasonsData[0] || [3, 54, 34, 85, 23]
        },
        {
          name: this.turnoverRateReasonsDataX[1] || "NO",
          type: "bar",
          label: labelOption,
          barWidth: 12,
          data: this.turnoverRateReasonsData[1] || [23, 65, 32, 57, 67]
        },
        {
          name: this.turnoverRateReasonsDataX[2] || "WE",
          type: "bar",
          label: labelOption,
          barWidth: 12,
          data: this.turnoverRateReasonsData[2] || [98, 134, 101, 22, 34]
        },
        {
          name: this.turnoverRateReasonsDataX[3] || "SO",
          type: "bar",
          label: labelOption,
          barWidth: 12,
          data: this.turnoverRateReasonsData[3] || [135, 43, 65, 34, 17]
        },
        {
          name: this.turnoverRateReasonsDataX[4] || "National Total",
          type: "bar",
          label: labelOption,
          barWidth: 12,
          data: this.turnoverRateReasonsData[4] || [122, 42, 56, 32, 86]
        },
        {
          name: this.turnoverRateReasonsDataX[5] || "WE1",
          type: "bar",
          label: labelOption,
          barWidth: 12,
          data: this.turnoverRateReasonsData[5] || [98, 77, 101, 99, 40]
        },
        {
          name: this.turnoverRateReasonsDataX[6] || "WE2",
          type: "bar",
          label: labelOption,
          barWidth: 12,
          data: this.turnoverRateReasonsData[6] || [98, 77, 101, 99, 40]
        },
        {
          name: this.turnoverRateReasonsDataX[7] || "WE3",
          type: "bar",
          label: labelOption,
          barWidth: 12,
          data: this.turnoverRateReasonsData[7] || [98, 77, 101, 99, 40]
        },
        {
          name: this.turnoverRateReasonsDataX[8] || "WE4",
          type: "bar",
          label: labelOption,
          barWidth: 12,
          data: this.turnoverRateReasonsData[8] || [98, 77, 101, 99, 40]
        },
        {
          name: this.turnoverRateReasonsDataX[9] || "WE5",
          type: "bar",
          label: labelOption,
          barWidth: 12,
          data: this.turnoverRateReasonsData[9] || [98, 77, 101, 99, 40]
        }
      ]
    };
    return option
  },
  //离职原因分布条形图
  augTurnoverRateReasonOption: {
    tooltip: {
      trigger: "axis",
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: "shadow"        // 默认为直线，可选为："line" | "shadow"
      }
    },
    legend: {
      data: ["个人原因", "业务淘汰", "劳动强度", "门店原因", "自然流失", "薪资原因"],
      icon: "circle",
      x: "left",
      left: "1%",
      bottom: "0%"
    },
    grid: {
      top: "1%",
      left: "7%",
      right: "4%",
      bottom: "10%",
      // containLabel: true
    },
    xAxis: {
      show: false,
      type: "value",

      axisLine: {
        lineStyle: {
          color: "#888",
        }
      },
    },
    yAxis: {
      type: "category",
      data: ["Total", "SO", "WE", "NO", "EA"],
      axisLine: {
        lineStyle: {
          color: "#888",
        }
      },
      axisLabel: {
        // show:false,
        align: "left",
        margin: 38,
      },
    },
    series: [
      {
        name: "个人原因",
        type: "bar",
        stack: "总量",
        barWidth: 25,
        // barWidth: 20,//16:10版本
        color: "#2B93C7",

        label: {
          normal: {
            show: true,
            position: "insideRight",
            fontSize: 14,
            fontFamily: "SourceHanSansCN ExtraLight",
            formatter: "{c}%"
          }
        },
        data: [0.8, 0.7, 1.2, 1.3, 0.6]
      },
      {
        name: "业务淘汰",
        type: "bar",
        stack: "总量",
        color: "#2BB9C7",
        label: {
          normal: {
            show: true,
            position: "insideRight",
            fontSize: 14,
            fontFamily: "SourceHanSansCN ExtraLight",
            formatter: "{c}%"
          }
        },
        data: [0.8, 0.7, 1.2, 1.3, 0.6]
      },
      {
        name: "劳动强度",
        type: "bar",
        stack: "总量",
        color: "#58CFDB",
        label: {
          normal: {
            show: true,
            position: "insideRight",
            fontSize: 14,
            fontFamily: "SourceHanSansCN ExtraLight",
            formatter: "{c}%"
          }
        },
        data: [0.8, 0.7, 1.2, 1.3, 0.6]
      },
      {
        name: "门店原因",
        type: "bar",
        stack: "总量",
        color: "#82DFE7",
        label: {
          normal: {
            show: true,
            position: "insideRight",
            fontSize: 14,
            fontFamily: "SourceHanSansCN ExtraLight",
            formatter: "{c}%"
          }
        },
        data: [0.8, 0.7, 1.2, 1.3, 0.6]
      },
      {
        name: "自然流失",
        type: "bar",
        stack: "总量",
        color: "#90E3B9",
        label: {
          normal: {
            show: true,
            position: "insideRight",
            fontSize: 14,
            fontFamily: "SourceHanSansCN ExtraLight",
            formatter: "{c}%"
          }
        },
        data: [0.8, 0.7, 1.2, 1.3, 0.6]
      },
      {
        name: "薪资原因",
        type: "bar",
        stack: "总量",
        color: "#FFDD96",
        label: {
          normal: {
            show: true,
            position: "insideRight",
            fontSize: 14,
            fontFamily: "SourceHanSansCN ExtraLight",
            formatter: "{c}%"
          }
        },
        data: [0.8, 0.7, 1.2, 1.3, 0.6]
      }
    ]
  },
  //离职人员年龄分布
  auglackOfPostsReasonsOtion: {
    tooltip: {
      trigger: "axis",
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: "shadow"        // 默认为直线，可选为："line" | "shadow"
      }
    },
    grid: {
      top: "12%",
      left: "2%",
      right: "4%",
      bottom: "16%",
      // containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["18-25", "26-35", "36-45", "46-55", "55以上"],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        show: false
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        // color: ["#2B93C7","#2BB9C7","#58CFDB","#82DFE7","#90E3B9"],
        itemStyle: {
          normal: {
            //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
            color: function (params) {
              // build a color map as your need.
              let colorList = ["#2B93C7", "#2BB9C7", "#58CFDB", "#82DFE7", "#90E3B9"];
              return colorList[params.dataIndex]
            },
            //以下为是否显示，显示位置和显示格式的设置了

          }
        },
        barWidth: "60%",
        data: [10, 52, 200, 334, 390],
        label: {
          normal: {
            show: true,
            color: "#000",
            position: "top"

          }
        },
      }
    ]
  },
  auglackOfPostsReasonsTimeOption: {
    color: ["#3398DB"],
    tooltip: {
      trigger: "axis",
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: "shadow"        // 默认为直线，可选为："line" | "shadow"
      }
    },
    grid: {
      top: "12%",
      left: "2%",
      right: "4%",
      bottom: "16%",
      // containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["18-25", "26-35", "36-45", "46-55", "55以上"],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        show: false
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "60%",
        itemStyle: {
          normal: {
            //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
            color: function (params) {
              // build a color map as your need.
              let colorList = ["#2B93C7", "#2BB9C7", "#58CFDB", "#82DFE7", "#90E3B9"];
              return colorList[params.dataIndex]
            },
            //以下为是否显示，显示位置和显示格式的设置了

          }
        },
        label: {
          normal: {
            show: true,
            color: "#000",
            position: "top"

          }
        },
        data: [10, 52, 200, 334, 390]
      }
    ]
  },
}

