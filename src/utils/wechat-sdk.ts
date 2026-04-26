/**
 * 微信 JS-SDK 封装
 * 用于定制微信分享内容（标题、描述、图标）
 * 
 * 使用说明：
 * 1. 在微信公众平台（https://mp.weixin.qq.com）注册域名 xiker-tech.com
 * 2. 获取 AppID 和 AppSecret
 * 3. 后端提供签名接口 /api/wechat-signature?url=当前页面URL
 * 4. 调用 initWechatShare() 即可
 */

export interface WechatShareConfig {
  appId: string;
  timestamp: string;
  noncestr: string;
  signature: string;
}

export interface ShareContent {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
}

/**
 * 初始化微信分享配置
 * @param config 微信签名配置（从后端获取）
 * @param shareContent 分享内容
 */
export function initWechatShare(
  config: WechatShareConfig,
  shareContent: ShareContent
) {
  // 检查是否在微信浏览器中
  if (!isWechatBrowser()) {
    console.log('非微信浏览器，跳过微信 SDK 初始化');
    return;
  }

  // 等待 wx 对象加载
  if (typeof (window as any).wx === 'undefined') {
    console.warn('微信 JS-SDK 未加载');
    return;
  }

  const wx = (window as any).wx;

  // 配置微信 JS-SDK
  wx.config({
    debug: false, // 生产环境设为 false
    appId: config.appId,
    timestamp: config.timestamp,
    nonceStr: config.noncestr,
    signature: config.signature,
    jsApiList: [
      'updateAppMessageShareData', // 分享给好友
      'updateTimelineShareData',  // 分享到朋友圈
    ],
  });

  wx.ready(function () {
    // 分享给好友
    wx.updateAppMessageShareData({
      title: shareContent.title,
      desc: shareContent.desc,
      link: shareContent.link,
      imgUrl: shareContent.imgUrl,
      success() {
        console.log('分享给好友配置成功');
      },
    });

    // 分享到朋友圈
    wx.updateTimelineShareData({
      title: shareContent.title,
      link: shareContent.link,
      imgUrl: shareContent.imgUrl,
      success() {
        console.log('分享到朋友圈配置成功');
      },
    });
  });

  wx.error(function (err: any) {
    console.error('微信 SDK 配置失败：', err);
  });
}

/**
 * 从后端获取微信签名
 * @param url 当前页面 URL
 * @returns 微信签名配置
 */
export async function fetchWechatSignature(url: string): Promise<WechatShareConfig> {
  // 替换为你的后端接口
  const apiUrl = `/api/wechat-signature?url=${encodeURIComponent(url)}`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('获取微信签名失败');
    }
    return await response.json();
  } catch (error) {
    console.error('获取微信签名出错：', error);
    throw error;
  }
}

/**
 * 检查是否在微信浏览器中
 */
export function isWechatBrowser(): boolean {
  if (typeof navigator === 'undefined') return false;
  return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
}

/**
 * 默认分享内容
 */
export const defaultShareContent: ShareContent = {
  title: 'Xiker Technology - 高端3C电子产品',
  desc: '深圳市烯氪创新科技有限公司，专注高端3C电子产品：鼠标、键盘、耳机',
  link: 'https://xiker-tech.com',
  imgUrl: 'https://xiker-tech.com/images/logo.png',
};
