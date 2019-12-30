export default {

  "unemployedPeople": {
    "legend": ["National Total", "FM", "HPC UP", "BC UP", "Laundry UP", "NEW SP", "Laundry WSP", "USP", "SSP DT"],
    "xAxis": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul WK1"],
    "series": [{ "name": "National Total", "data": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 524.0] }, {
      "name": "FM",
      "data": [27.0]
    }, { "name": "HPC UP", "data": [19.0] }, { "name": "BC UP", "data": [23.0] }, {
      "name": "Laundry UP",
      "data": [43.0]
    }, { "name": "NEW SP", "data": [60.0] }, { "name": "Laundry WSP", "data": [21.0] }, {
      "name": "USP",
      "data": [59.0]
    }, { "name": "SSP DT", "data": [263.0] }]
  },
  "unemployedReasonPercent": {
    "legend": ["3P管理问题", "销售卖进不成功", "PMG未及时招募到位", "门店状态异常"],
    "yAxis": ["FM", "HPC UP", "BC UP", "Laundry UP", "NEW SP", "Laundry WSP", "USP", "SSP DT", "Total"],
    "series": [{
      "name": "3P管理问题",
      "data": [2.2, 1.9, 1.9, 2.9, 0.0, 0.4, 2.1, 4.9, 2.5]
    }, { "name": "销售卖进不成功", "data": [0.1, 0.1, 1.6, 0.1, 11.0, 2.2] }, {
      "name": "PMG未及时招募到位",
      "data": [0.1, 0.4, 1.4, 0.0, 0.4, 1.0, 0.7]
    }, { "name": "门店状态异常", "data": [0.2, 0.0, 1.0, 0.2, 0.4] }]
  },
  "unemployedReasonAnalysis": {
    "headArray": ["3P管理问题", "销售卖进不成功", "PMG未及时招募到位", "门店状态异常"],
    "rows": [[{ "key": "Region", "value": "FM" }, { "key": "3P管理问题", "value": 2.2 }, {
      "key": "销售卖进不成功",
      "value": 0.1
    }, { "key": "PMG未及时招募到位", "value": 0 }, { "key": "门店状态异常", "value": 0 }], [{
      "key": "Region",
      "value": "HPC UP"
    }, { "key": "3P管理问题", "value": 1.9 }, { "key": "销售卖进不成功", "value": 0 }, {
      "key": "PMG未及时招募到位",
      "value": 0.1
    }, { "key": "门店状态异常", "value": 0 }], [{ "key": "Region", "value": "BC UP" }, {
      "key": "3P管理问题",
      "value": 1.9
    }, { "key": "销售卖进不成功", "value": 0.1 }, { "key": "PMG未及时招募到位", "value": 0.4 }, {
      "key": "门店状态异常",
      "value": 0
    }], [{ "key": "Region", "value": "Laundry UP" }, { "key": "3P管理问题", "value": 2.9 }, {
      "key": "销售卖进不成功",
      "value": 0
    }, { "key": "PMG未及时招募到位", "value": 1.4 }, { "key": "门店状态异常", "value": 0.2 }], [{
      "key": "Region",
      "value": "NEW SP"
    }, { "key": "3P管理问题", "value": 0.0 }, { "key": "销售卖进不成功", "value": 0 }, {
      "key": "PMG未及时招募到位",
      "value": 0.0
    }, { "key": "门店状态异常", "value": 0.0 }], [{ "key": "Region", "value": "Laundry WSP" }, {
      "key": "3P管理问题",
      "value": 0.4
    }, { "key": "销售卖进不成功", "value": 1.6 }, { "key": "PMG未及时招募到位", "value": 0.4 }, {
      "key": "门店状态异常",
      "value": 1.0
    }], [{ "key": "Region", "value": "USP" }, { "key": "3P管理问题", "value": 2.1 }, {
      "key": "销售卖进不成功",
      "value": 0.1
    }, { "key": "PMG未及时招募到位", "value": 1.0 }, { "key": "门店状态异常", "value": 0.2 }], [{
      "key": "Region",
      "value": "SSP DT"
    }, { "key": "3P管理问题", "value": 4.9 }, { "key": "销售卖进不成功", "value": 11.0 }, {
      "key": "PMG未及时招募到位",
      "value": 0
    }, { "key": "门店状态异常", "value": 0 }], [{ "key": "Region", "value": "National" }, {
      "key": "3P管理问题",
      "value": 2.5
    }, { "key": "销售卖进不成功", "value": 2.2 }, { "key": "PMG未及时招募到位", "value": 0.7 }, {
      "key": "门店状态异常",
      "value": 0.4
    }]]
  },
  "onDutyRate": {
    "indicator": [{ "name": "FM", "max": 100 }, {
      "name": "HPC UP",
      "max": 100
    }, { "name": "BC UP", "max": 100 }, { "name": "Laundry UP", "max": 100 }, {
      "name": "NEW SP",
      "max": 100
    }, { "name": "Laundry WSP", "max": 100 }, { "name": "USP", "max": 100 }, {
      "name": "SSP DT",
      "max": 100
    }, { "name": "东区联合导购", "max": 100 }, { "name": "National Total", "max": 100 }],
    "series": [{
      "name": "预算 vs 开销（Budget vs spending）",
      "data": [{
        "name": "预算分配（Allocated Budget）",
        "value": [98.0, 98.0, 98.0, 96.0, 83.0, 97.0, 97.0, 84.0, 0.0, 94.0]
      }]
    }]
  },
  "onDutyPeople": {
    "legend": ["GAP", "计划", "实际"],
    "yAxis": ["FM", "HPC UP", "BC UP", "Laundry UP", "NEW SP", "Laundry WSP", "USP", "SSP DT", "东区联合导购", "National Total"],
    "series": [{
      "name": "GAP",
      "data": [-27, -19, -23, -43, -60, -21, -59, -263, 0, -524],
      "position": "inside"
    }, { "name": "计划", "data": [1176, 926, 961, 962, 361, 618, 1726, 1648, 0, 9001] }, {
      "name": "实际",
      "data": [1149.0, 907.0, 938.0, 919.0, 301.0, 597.0, 1667.0, 1385.0, 0.0, 8477.0],
      "position": "inside"
    }]
  }
}

