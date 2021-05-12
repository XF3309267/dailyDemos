import Mock from 'mockjs'

export default {
  mockData () {
    const BASE_PATH = process.env.BASE_URL.endsWith('/')
      ? process.env.BASE_URL.substr(0, process.env.BASE_URL.length - 1)
      : process.env.BASE_URL
    Mock.mock(BASE_PATH + '/indexInfo/getBannerList', {
      code: 1,
      data: [{
        id: 1,
        redirect: '/detail/',
        title: '[拐点]巨头的新生意',
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3412564135,1876356398&fm=26&gp=0.jpg'
      }, {
        id: 2,
        redirect: '/detail/',
        title: '[拐点]巨头的新生意2',
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1032090787,3027113824&fm=26&gp=0.jpg'
      }, {
        id: 3,
        redirect: '/detail/',
        title: '[拐点]巨头的新生意3',
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2387296049,4035594974&fm=26&gp=0.jpg'
      }, {
        id: 4,
        redirect: '/detail/',
        title: '[拐点]巨头的新生意4',
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2927909622,3256932375&fm=26&gp=0.jpg'
      }]
    })
  }
}
