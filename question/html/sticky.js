/**
 * Description: sticky 吸顶模块
 * User: hank.online@foxmail.com
 * Date: 2018/8/2
 * Time: 下午4:40
 *
 */
class Sticky{
     constructor(...args){
         this.init.apply(Sticky,args);
         this.settings =  {
             targetElement:null,
             top:0,
             zIndex:10,
             androidPosition:'fixed',
             callback:null
         };
         this.inits.apply(this,args);
     }

     inits(options){
         Object.assign(this.settings,options);
         console.log(this.settings);
     }
}
Sticky.setting = {
    targetElement:null,
    top:0,
    zIndex:10,
    androidPosition:'fixed',
    callback:null
};
/**
 * 初始化
 * @param options
 */
Sticky.prototype.init=function (options) {
    //对象合并，深度拷贝
    Object.assign(this.setting,options);
    console.log(this.setting);
    // this.prototype.sticky();
};
/**
 * 判断设备
 * @returns {{isMobile: boolean, isIOS: boolean, isAndroid: boolean, isIpad: boolean, isIpod: boolean, isIphone: boolean, isWebView: boolean, isWeixin: boolean, isMozilla: boolean, pixelRatio: (*|number)}|*}
 */
Sticky.prototype.device=function () {
    let doc = window.document,
    ua = window.navigator && window.navigator.userAgent || '';

  let ipad = !!ua.match(/(iPad).*OS\s([\d_]+)/),
      ipod = !!ua.match(/(iPod)(.*OS\s([\d_]+))?/),
      iphone = !ipad && !!ua.match(/(iPhone\sOS)\s([\d_]+)/);
    device = {
        /**
         * 是否移动终端
         * @return {Boolean}
         */
        isMobile: !!ua.match(/AppleWebKit.*Mobile.*/) || 'ontouchstart' in doc.documentElement,
        /**
         * 是否IOS终端
         * @returns {boolean}
         */
        isIOS: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        /**
         * 是否Android终端
         * @returns {boolean}
         */
        isAndroid: !!ua.match(/(Android);?[\s\/]+([\d.]+)?/),
        /**
         * 是否ipad终端
         * @returns {boolean}
         */
        isIpad: ipad,
        /**
         * 是否ipod终端
         * @returns {boolean}
         */
        isIpod: ipod,
        /**
         * 是否iphone终端
         * @returns {boolean}
         */
        isIphone: iphone,
        /**
         * 是否webview
         * @returns {boolean}
         */
        isWebView: (iphone || ipad || ipod) && !!ua.match(/.*AppleWebKit(?!.*Safari)/i),
        /**
         * 是否微信端
         * @returns {boolean}
         */
        isWeixin: ua.indexOf('MicroMessenger') > -1,
        /**
         * 是否火狐浏览器
         */
        isMozilla: /firefox/.test(navigator.userAgent.toLowerCase()),
        /**
         * 设备像素比
         */
        pixelRatio: window.devicePixelRatio || 1
    };
    return device;
};

Sticky.prototype.sticky =function () {
    let targetElement=document.querySelector(this.setting.targetElement)
         , device = this.device();
    if(device.isAndroid){
       this.scroll();
    }else if(device.isIOS){
        targetElement.style.cssText = this.getStickyCss();
    }
};
/**
 * 生成fixed时的css样式
 * @returns {string}
 */
Sticky.prototype.getFixedCss = function() {
    return "position:fixed;top:" + this.setting.top + "px;z-index:" + this.setting.zIndex + ";";
};

/**
 * 给sticyNode设置position: sticky定位
 */
Sticky.prototype.getStickyCss = function() {
    return  "position:-webkit-sticky;position:sticky;top:" + this.setting.top + "px;z-index:" + this.setting.zIndex + ";";
};
/**
 *  Android 采用滚动事件
 */
Sticky.prototype.scroll = function () {
    let targetElement=document.querySelector(this.setting.targetElement);
    let elOffsetTop = targetElement.offsetTop;
    document.body.onscroll = function () {
        if(document.documentElement.scrollTop > elOffsetTop){
            targetElement.style.cssText = this.getFixedCss();
        }else{
            targetElement.style.cssText="";
        }
    }
};
new Sticky({top:12});
