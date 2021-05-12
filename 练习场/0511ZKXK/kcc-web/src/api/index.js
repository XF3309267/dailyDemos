import {
  request
} from '../utils/request';

/* 获取主页轮播图 */
export const requestBannerList = params => {
  return request('/visitor/indexInfo/getBannerList', params);
};

/* 获取所有技术列表 */
export const requestScienceInfo = params => {
  return request('/visitor/indexInfo/getScienceInfo', params);
};

/* 获取活动轮播图列表 */
export const requestActivityBannerList = params => {
  return request('/visitor/activityInfo/getBannerList', params);
};

/* 获取活动列表 */
export const requestActivityList = params => {
  return request('/visitor/activityInfo/getActivityList', params);
};

/* 获取投资列表 */
export const requestFinancingList = params => {
  return request('/visitor/financingInfo/getFinancingList', params);
};

/* 获取融资列表 */
export const requestInvestList = params => {
  return request('/visitor/investInfo/getInvestList', params);
};

/* 获取资讯轮播图列表 */
export const requestMessageBannerList = params => {
  return request('/visitor/messageInfo/getBannerList', params);
};

/* 获取资讯分类列表 */
export const requestMessageTypeList = params => {
  return request('/visitor/messageInfo/getMessageTypeList', params);
};

/* 获取资讯列表 */
export const requestMessageList = params => {
  return request('/visitor/messageInfo/getMessageList', params);
};

/* 获取企业联系方式 */
export const requestRelationWay = params => {
  return request('/visitor/companyManageInfo/getRelationWay', params);
};

/* 获取技术需求列表 */
export const requestScienceNeedList = params => {
  return request('/visitor/scienceNeed/getScienceNeedList', params);
};

/* 获取技术成果分类列表 */
export const requestScienceResultTypeList = params => {
  return request('/visitor/scienceResultInfo/getScienceResultTypeList', params);
};

/* 获取技术成果列表 */
export const requestScienceResultList = params => {
  return request('/visitor/scienceResultInfo/getScienceResultList', params);
};

/* 获取技术专家列表 */
export const requestScienceExpertList = params => {
  return request('/visitor/scienceExpert/getScienceExpertList', params);
};

/* 添加用户客服请求 */
export const requestAddUserRequestInfo = params => {
  return request('/visitor/scienceExpert/addUserRequestInfo', params);
};

/* 获取科技服务轮播图列表 */
export const requestScienceBannerList = params => {
  return request('/visitor/scienceInfo/getBannerList', params);
};

/* 获取独角兽管理分类列表 */
export const requestUnicornManageTypeList = params => {
  return request('/visitor/unicornManageInfo/getUnicornManageTypeList', params);
};

/* 获取独角兽管理内容 */
export const requestUnicornManageInfoList = params => {
  return request('/visitor/unicornManageInfo/getUnicornManageInfoMap', params);
};

/* 获取公司动态列表 */
export const requestCompanydynamicsList = params => {
  return request('/visitor/fundInfo/getCompanydynamicsList', params);
};

/* 报名独角兽学院 */
export const requestUnicornCollegeApply = params => {
  return request('/visitor/unicornCollegeInfo/addUnicornCollegeApply', params);
};

/* 获取独角兽学院导师列表 */
export const requestUnicornCollegeMentorList = params => {
  return request('/visitor/unicornCollegeInfo/getUnicornCollegeMentorList', params);
};

/* 获取独角兽学院学员分类列表 */
export const requestUnicornCollegeTypeList = params => {
  return request('/visitor/unicornCollegeInfo/getUnicornCollegeTypeList', params);
};

/* 获取独角兽学院学员列表 */
export const requestUnicornCollegeStudentList = params => {
  return request('/visitor/unicornCollegeInfo/getUnicornCollegeStudentList', params);
};

/* 获取政府服务轮播图列表 */
export const requestGovernmentBannerList = params => {
  return request('/visitor/governmentInfo/getBannerList', params);
};
