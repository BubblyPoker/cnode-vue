"use strict";

import tool from "./libs/tool.js";

exports.getDateFromNow = (time) => {
  return tool.dateFromNow(new Date() - new Date(time));
};
exports.formatDate = (time) => {
  return tool.formatDate.msToDate(new Date(time).getTime(), "yyyy-MM-dd hh:mm");
};

exports.getArticleType = (top, good, tab) => {
  if(top){
    return "置顶";
  }else if(good){
    return "精华";
  }else if(tab === "ask"){
    return "问答";
  }else if(tab === "share"){
    return "分享";
  }else if(tab === "job"){
    return "招聘";
  }else{
    return "未知";
  }
};

exports.getTypeClass = (top, good, tab) => {
  if(top || good){
    return "hasColor";
  }else if(!top && !good && !tab){
    return "hidden";
  }else {
    return "noColor";
  }
};