const { dk } = require('@serverless-devs/dk');
const { Request } = require('./request');
const DEFAULT_BASEURL = 'http://registry.devsapp.cn';
const _request = new Request(DEFAULT_BASEURL);


const searchApp = async (ctx) => {
  try {
    const { content } = ctx.req.body;
    const apps = await _request.post('/package/search', content);
    return {
      code: 200,
      apps
    };
  } catch (e) {
    return {
      code: 500,
      message: e.message
    }
  }
}

const getSpecialApp = async () => {
  try {
    const apps = await _request.get('/package/special');
    return {
      code: 200,
      apps
    };
  } catch (e) {
    return {
      code: 500,
      message: e.message
    }
  }
}

// appCenter/getTags
const getTags = async (ctx) => {
  try {
    const apps = await _request.get('/common/tags');
    return {
      code: 200,
      apps
    };
  } catch (e) {
    return {
      code: 500,
      message: e.message
    }
  }
}

// appCenter/getCategory
const getCategorys = async () => {
  try {
    const apps = await _request.get('/common/category');
    return {
      code: 200,
      apps
    };
  } catch (e) {
    return {
      code: 500,
      message: e.message
    }
  }
}

// appCenter/getAppDetail
const getAppDetail = async (ctx) => {
  try {
    const { content } = ctx.req.body;
    const { name } = content;
    const apps = await _request.post('/package/content', { name });
    return {
      code: 200,
      apps
    };
  } catch (e) {
    return {
      code: 500,
      message: e.message
    }
  }
}


/**
 * 获取专题详情
 * @param channel 
 * @param content 
 */

const getSpecialDetail = async (ctx) => {
  try {
    const { content } = ctx.req.body;

    const apps = await _request.post('/package/special/detail', content);
    return {
      code: 200,
      apps
    };
  } catch (e) {
    return {
      code: 500,
      message: e.message
    }
  }
}

const baseHandler = async (ctx) => {
  // ctx 包含 ctx.req 可获取入参信息
  const { path } = ctx.req;
  let data = {};
  if (path === '/appCenter/getSpecial') { // 查询专题页
    data = await getSpecialApp(ctx);
  }
  if (path === '/appCenter/getSpecialDetail') { // 获取专题详情
    data = await getSpecialDetail(ctx);
  }

  if (path === '/appCenter/getAppDetail') { // 获取应用详情
    data = await getAppDetail(ctx);
  }

  if (path === '/appCenter/getCategory') { // 获取分类
    data = await getCategorys();
  }

  if (path === '/appCenter/getTags') { // 获取标签
    data = await getTags();
  }

  if (path === '/appCenter/getApps') { //获取应用列表
    data = await searchApp(ctx);
  }
  return {
    json: data
  }

};



const handler = dk(baseHandler);

exports.handler = handler;
