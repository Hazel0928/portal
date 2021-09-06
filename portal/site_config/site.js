// 全局的一些配置
export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'dubbo.apache.org', // 站点部署域名，无需协议和path等
  defaultSearch: 'google', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'en-us',
  'en-us': {
    pageMenu: [
      {
        key: 'products', // 用作顶部菜单的选中
        text: 'Products',
        link: '/en-us/products/index.html',
        children: [{
          key: 'serverlessdesktop',
          text: 'Serverless Desktop',
          link: '/zh-cn/desktop/index.html'
        }, {
          key: 'serverlesscli',
          text: 'Serverless Cli',
          link: '/zh-cn/cli/index.html'
        }, {
          key: 'serverlesshub',
          text: 'Serverless Hub',
          link: ''
        }]
      },
      {
        key: 'developer',
        text: 'Developer',
        link: '/zh-cn/developer/index.html',
        children: [{
          key: 'doc',
          text: '文档',
          link: '/zh-cn/desktop/index.html'
        }, {
          key: 'getstart',
          text: '快速开始',
          link: ''
        }, {
          key: 'community',
          text: '社区活动',
          link: ''
        }, {
          key: 'opensource',
          text: '开源',
          link: 'https://github.com/Serverless-Devs/Serverless-Devs'
        }]
      },
      {
        key: 'serverlesshub',
        text: '应用中心',
        link: 'https://serverlesshub.resume.net.cn?spm=serverlessdevs.topbar.0.0.0',
      },
      {
        key: 'serverlessresolve',
        text: '企业级Serverless解决方案',
        link: '',
        children: [{
          key: 'fc',
          text: '函数计算 FC',
          link: 'https://www.aliyun.com/product/fc?spm=serverlessdevs.topbar.0.0.0'
        }, {
          key: 'sae',
          text: 'Serverless 应用引擎',
          link: 'https://www.aliyun.com/product/aliware/sae?spm=serverlessdevs.topbar.0.0.0'
        }]
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/en-us/blog/index.html',
      },
      {
        key: 'community',
        text: 'COMMUNITY',
        link: '/en-us/community/index.html',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'the disclaimer content',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Overview',
          link: '/en-us/docs/demo1.html',
        },
        {
          text: 'Quick start',
          link: '/en-us/docs/demo2.html',
        },
        {
          text: 'Developer guide',
          link: '/en-us/docs/dir/demo3.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/en-us/blog/index.html',
        },
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2018 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'products',
        text: '产品',
        link: '/zh-cn/products/index.html',
        children: [{
          key: 'serverlessdesktop',
          text: 'Serverless Desktop',
          link: '/zh-cn/desktop/index.html'
        }, {
          key: 'serverlesscli',
          text: 'Serverless Cli',
          link: '/zh-cn/cli/index.html'
        }, {
          key: 'serverlesshub',
          text: 'Serverless Hub',
          link: ''
        }]
      },
      {
        key: 'developer',
        text: '开发者',
        link: '/zh-cn/developer/index.html',
        children: [{
          key: 'doc',
          text: '文档',
          link: '/zh-cn/docs/intro.html'
        }, {
          key: 'getstart',
          text: '快速开始',
          link: '/zh-cn/docs/quickstart/desktop-quickstart.html'
        }, {
          key: 'community',
          text: '社区活动',
          link: '/zh-cn/community/index.html'
        }, {
          key: 'opensource',
          text: '开源',
          link: 'https://github.com/Serverless-Devs/Serverless-Devs'
        }]
      },
      {
        key: 'serverlesshub',
        text: '应用中心',
        link: 'https://serverlesshub.resume.net.cn?spm=serverlessdevs.topbar.0.0.0',
      },
      {
        key: 'serverlessresolve',
        text: '企业级Serverless解决方案',
        link: '',
        children: [{
          key: 'fc',
          text: '函数计算 FC',
          link: 'https://www.aliyun.com/product/fc?spm=serverlessdevs..topbar.0.0.0'
        }, {
          key: 'sae',
          text: 'Serverless 应用引擎',
          link: 'https://www.aliyun.com/product/aliware/sae?spm=serverlessdevs..topbar.0.0.0'
        }]
      },
      {
        key: 'blog',
        text: '博客',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'community',
        text: '社区',
        link: '/zh-cn/community/index.html',
      },
    ],
    disclaimer: {
      title: '免责声明',
      content: '免责声明的具体内容',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '概览',
          link: '/zh-cn/docs/demo1.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/demo2.html',
        },
        {
          text: '开发者指南',
          link: '/zh-cn/docs/dir/demo3.html',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '博客',
          link: '/zh-cn/blog/index.html',
        },
        {
          text: '社区',
          link: '/zh-cn/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2018 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
};
