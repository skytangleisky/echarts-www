const path = require('path');
const config = require('./common');

// config.host = 'http://localhost/echarts-website';
config.host = '/echarts-website';
// config.host = 'http://localhost:8000/echarts/echarts-website';

config.cdnPayRootMap = {
    zh: config.host,
    en: '/echarts-website/'
};
config.cdnFreeRootMap = {
    zh: config.host,
    en: config.host
};

// config.galleryPath = 'https://echarts.apache.org/examples/';//tanglei
config.galleryPath = '/echarts-website/examples/';
config.releaseDestDir = path.resolve(__dirname, '../../echarts-website');

module.exports = config;
