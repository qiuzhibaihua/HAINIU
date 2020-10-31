import Net from '../util/request';
// 长者月度账单
export function OpcBillDetailCheck() {
    return Net({
      url: '/opapi_hctest/OpcBillDetailCheck/BillLis',
      method: 'get',
      data:{}
    })
  }
//  健康信息接口

export function AppTpr(data) {
    return Net({
      url: '/scapi_hctest/api/App/Tpr',
      method: 'get',
      data
    })
  }
  