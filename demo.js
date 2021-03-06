var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var isApp = true;
//function setupWebViewJavascriptBridge(callback) {
//    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
//    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
//    window.WVJBCallbacks = [callback];
//    var WVJBIframe = document.createElement('iframe');
//    WVJBIframe.style.display = 'none';
//    WVJBIframe.src = 'https://__bridge_loaded__';
//    document.documentElement.appendChild(WVJBIframe);
//    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0);
//}
//function iosDo2(callHandlerName,param,callbackFuncName){
//    try {
//        setupWebViewJavascriptBridge(function(bridge) {
//            //H5调用iOS原生
//            bridge.callHandler(callHandlerName, param, function(response) {
//                log('JS callHandler', response);//iOS回传：
//                // addCartCallback(response);//这个需要商定好
//            });
//            //iOS调用H5
//            bridge.registerHandler(callbackFuncName, function(data, responseCallback) {
//                var responseData = { 'Javascript Says':callbackFuncName };
//                responseCallback(responseData);//回传
//                var js="var result= "+callbackFuncName+"("+data+"); return result;";
//                (new Function(js))();
//            });
//        });
//    }catch (e) {
//        iosDo(callHandlerName,param);
//    }
//}
function iosDo(event,param){
    try {
        log("a");
        var paramstr="null";
        if(param){
            var t=typeof(param);
            log("t is "+t );
            if(t=='string'){
                paramstr="'"+param+"'";
            }else if(t=="object"){
                paramstr= JSON.stringify(param);
            }
        }
        var js="var result= window.webkit.messageHandlers."+event+".postMessage("+paramstr+"); return result;";
        log("p0 is "+paramstr );
        log("js0 is "+js );
        (new Function(js))();
    } catch (error) {
        log(error);
        try {

            log("b");
            var paramstr="";
            if(param){
                var t=typeof(param);
                log("t is "+t );
                if(t=='string'){
                    paramstr="'"+param+"'";
                }else if(t=="object"){
                    var s="";
                    for(var o in param){
                        var t=typeof(param[o]);
                        if(t=="string"){
                            s+="'"+param[o]+"',";
                        }else{
                            s+=param[o]+",";
                        }
                    }
                    paramstr= s.substring(0,s.length-1);
                }
            }
            var js="return OCmodel."+event+"("+paramstr+");";

            log("p1 is "+paramstr );
            log("js1 is "+js );
            (new Function(js))();
            return;

        } catch (error) {
            log(error);
        }
    }
    log("c");
    return null;
}
function downloadIamge(imgsrc, name) {//下载图片地址和图片名
    let image = new Image();
    // 解决跨域 Canvas 污染问题
    image.setAttribute("crossOrigin", "anonymous");
    // image.onload = function() {
    //     let canvas = document.createElement("canvas");
    //     canvas.width = image.width;
    //     canvas.height = image.height;
    //     let context = canvas.getContext("2d");
    //     context.drawImage(image, 0, 0, image.width, image.height);
    //     let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
    //     let a = document.createElement("a"); // 生成一个a元素
    //     let event = new MouseEvent("click"); // 创建一个单击事件
    //     a.download = name || "photo"; // 设置图片名称
    //     a.href = url; // 将生成的URL设置为a.href属性
    //     a.dispatchEvent(event); // 触发a的单击事件
    // };
    image.src = imgsrc;
}
//初始化
function initApp() {
    log("begin initApp ");
    var i = 0
    while (i<1000){
        i++
        console.log(i)
        downloadIamge('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F01%2F59%2F32%2F015748571fb4bd6.jpg&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612512962&t=225518b3c63ca4057a475eca64dbc93e'+'&x='+i,'name')
    }
    try {
        if (isAndroid) {
            window.OCmodel.getAppInfo(); //调用原生方法
        }
        if (isiOS) {
            iosDo('getAppInfo');
        }
    } catch (error) {
        log("initApp error");
        log(error);
    }
}
//设置原生app的头名称
function setInnerTitle(title) {
    log("begin setInnerTitle " + title);
    try {
        if (isAndroid) {
            window.OCmodel.setInnerTitle(title); //调用原生方法：设置app的头名称
        }
        if (isiOS) {
            iosDo('setInnerTitle',title);
        }

    } catch (error) {
        log("setInnerTitle error");
        log(error);
    }
}
//调用原生app的分享
function appShareUrl(shareData) {
    log("begin appShareUrl shareData=" + JSON.stringify(shareData));
    try {
        if (isAndroid) {
            window.OCmodel.goShareUrl(JSON.stringify(shareData)); //调用原生方法：分享
        }
        if (isiOS) {
            //调用原生方法：分享
            // iosDo('goShareUrl',shareData);
            window.OCmodel.goShareUrl(shareData);
        }
    } catch (error) {
        log("appShareUrl error");
        log(error);
    }
}

//调用原生app的分享
function openWXMiniProgram(wxLiteData) {
    alert(JSON.stringify(wxLiteData))
    log("begin openWXMiniProgram wxLiteData=" + JSON.stringify(wxLiteData));
    try {
        if (isAndroid) {
            window.OCmodel.openWXMiniProgram(JSON.stringify(wxLiteData)); //调用原生方法：分享
        }
        if (isiOS) {
            //调用原生方法：分享
            // iosDo('openWXMiniProgram',wxLiteData);
            alert(JSON.stringify(wxLiteData))
            OCmodel.openWXMiniProgram(wxLiteData);
        }
    } catch (error) {
        log("shareItem error");
        log(error);
    }
}
//调用原生app的分享
function shareItem(shareData) {
    alert(JSON.stringify(shareData))
    log("begin shareItem shareData=" + JSON.stringify(shareData));
    try {
        if (isAndroid) {
            window.OCmodel.shareItem(JSON.stringify(shareData)); //调用原生方法：分享
        }
        if (isiOS) {
            //调用原生方法：分享
            iosDo('shareItem',shareData);
            // OCmodel.shareItem(shareData);
        }
    } catch (error) {
        log("shareItem error");
        log(error);
    }
}

//原生app内跳转到商品详情页
function goItem(itemInfoId) {
    log("begin goItem " + itemInfoId);
    try {
        if (isAndroid) {
            window.OCmodel.goItem(itemInfoId); //调用原生方法：跳转到原生商品详情页
        }
        if (isiOS) {
            //调用原生方法：跳转到原生商品详情页
            iosDo('goItem',itemInfoId);
        }
    } catch (error) {
        log("goItem error");
        log(error);
    }
}
//原生app去登录
function showLoginPopup() {
    log("begin showLoginPopup ");
    try {
        if (isAndroid) {
            window.OCmodel.showLoginPopup(); //调用原生方法：去登录
        }
        if (isiOS) {
            //调用原生方法：去登录
            iosDo('showLoginPopup');
        }
    } catch (error) {
        log("showLoginPopup error");
        log(error);
    }
}
//调用原生去支付
function goPay(paywaycode, paydata) {
    log("begin goPay " + paywaycode + "  " + paydata);
    try {
        if (paywaycode == "Alipay_App") {
            if (isAndroid) {
                window.OCmodel.AliPay(paydata); //调用原生方法:支付宝支付
            }
            if (isiOS) {
                //调用原生方法:支付宝支付
                iosDo('AliPay',paydata);
            }
        }
        if (paywaycode == "WxPay_App") {
            if (isAndroid) {
                window.OCmodel.WeChatPay(JSON.stringify(paydata)); //调用原生方法:微信支付
            }
            if (isiOS) {
                //调用原生方法:微信支付

                OCmodel.WeChatPay(paydata);
            }
        }
    } catch (error) {
        log("goPay error");
        log(error);
    }
}

//判断是否启用app通知
function IsEnableAppNotice() {
    log("begin IsEnableAppNotice ");
    try {
        if (isAndroid) {
            return window.OCmodel.isEnableAppNotice(); //调用原生方法:判断是否启用app通知
        }
        if (isiOS) {
            //调用原生方法:判断是否启用app通知
            return iosDo('isEnableAppNotice');
        }
    } catch (error) {
        log("IsEnableAppNotice error");
        log(error);
    }
    return false;
}
//弹出去设置开启提醒的alert
function showEnableAppNoticeAlert() {
    log("begin showEnableAppNoticeAlert ");
    try {
        if (isAndroid) {
            window.OCmodel.showEnableAppNoticeAlert(); //调用原生方法:弹出去设置开启提醒的alert
        }
        if (isiOS) {
            //调用原生方法:弹出去设置开启提醒的alert
            iosDo('showEnableAppNoticeAlert');
        }
    } catch (error) {
        log("showEnableAppNoticeAlert error");
        log(error);
    }
}
//保存图片到本地
function savePhotoToAlbum(imgbase64str) {
    // log("begin savePhotoToAlbum " + imgbase64str);
    alert('baocun')
    try {
        if (isAndroid) {
            window.OCmodel.savePhotoToAlbum(imgbase64str); //调用原生方法:弹出保存图片
        }
        if (isiOS) {
            //调用原生方法:弹出保存图片
            // iosDo('savePhotoToAlbum',imgbase64str);
            OCmodel.savePhotoToAlbum(imgbase64str)
            // saveAs('https://i1.lifevccdn.com//upload/AppItemHeaders/8395006666be41d5bfaf348ac0d2668e.jpg')
        }
    } catch (error) {
        log("savePhotoToAlbum error");
        log(error);
    }
}
var triggerEvent = "touchstart"; //指定下载方式

function saveAs(Url){
    alert('saveAs')
    var blob=new Blob([''], {type:'application/octet-stream'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = Url;
    a.download = Url.replace(/(.*\/)*([^.]+.*)/ig,"$2").split("?")[0];
    var e = document.createEvent('MouseEvents');
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
    URL.revokeObjectURL(url);
}

var imgs = document.getElementsByTagName("img");
for(var i = 0,o;o = imgs[i];i++){
    o.addEventListener(triggerEvent,function(){
        var url = this.getAttribute("src");
        saveAs(url);
    },false);
}
//呼出相册
function callAlbum() {
    log("begin callAlbum ");
    try {
        if (isAndroid) {
            window.OCmodel.callAlbum(); //调用原生方法:呼出相册
        }
        if (isiOS) {
            //调用原生方法:呼出相册
            iosDo('callAlbum');
        }
    } catch (error) {
        log("callAlbum error");
        log(error);
    }
}

//重新刷新webView
function reloadWebView() {
    log("begin reloadWebView ");
    try {
        if (isAndroid) {
            window.OCmodel.reloadWebView(); //调用原生方法:呼出相册
        }
        if (isiOS) {
            //调用原生方法:呼出相册
            iosDo('reloadWebView');
        }
    } catch (error) {
        log("reloadWebView error");
        log(error);
    }
}
//获取用户信息
function getUserInfo() {
    log("begin getUserInfo ");
    try {
        if (isAndroid) {
            window.OCmodel.getUserInfo(); //调用原生方法:获取用户信息
        }
        if (isiOS) {
            //调用原生方法:获取用户信息
            iosDo('getUserInfo');
        }
    } catch (error) {
        log("getUserInfo error");
        log(error);
    }
}
//加入购物车
function addCart(itemId) {
    log("begin addCart ");
    try {
        if (isAndroid) {
            window.OCmodel.addCart(itemId); //调用原生方法:加入购物车
        }
        if (isiOS) {
            //调用原生方法:加入购物车
            //方法一：
            iosDo('addCart',itemId);
//            iosDo2('addCart',itemId,'addCartCallback');
//            return;
//            //方法二：
//            setupWebViewJavascriptBridge(function(bridge) {
//                //H5调用iOS原生
//                bridge.callHandler('addCart', itemId, function(response) {
//                    log('JS addCart', response);//iOS回传：
//                    addCartCallback(response);//这个需要商定好
//                });
//                //iOS调用H5
//                // bridge.registerHandler('addCartCallback', function(data, responseCallback) {
//                //     var responseData = { 'Javascript Says':'addCartCallback!' };
//                //     responseCallback(responseData);//回传
//                //     addCartCallback(data);
//                // });
//            });
        }
    } catch (error) {
        log("addCart error");
        log(error);
    }
}
//礼品券加入购物车
function addGiftCoupon(itemId,code,promotionId) {
    log("begin addGiftCoupon ");
    try {
        if (isAndroid) {
            window.OCmodel.addGiftCoupon(itemId,code,promotionId); //调用原生方法:礼品券加入购物车
        }
        if (isiOS) {
            //调用原生方法:礼品券加入购物车
            iosDo('addGiftCoupon',{itemId:itemId,code:code,promotionId:promotionId});
        }
    } catch (error) {
        log("addGiftCoupon error");
        log(error);
    }
}

//礼品券加入购物车
function addExperienceCoupon(itemId,code,promotionId) {
    log("begin addExperienceCoupon ");
    try {
        if (isAndroid) {
            window.OCmodel.addExperienceCoupon(itemId,code,promotionId); //调用原生方法:礼品券加入购物车
        }
        if (isiOS) {
            //调用原生方法:礼品券加入购物车
            iosDo('addExperienceCoupon',{itemId:itemId,code:code,promotionId:promotionId});
        }
    } catch (error) {
        log("addExperienceCoupon error");
        log(error);
    }
}


function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}


var ustr = "";


function log(l) {
    var s = $("#log").html();
    $("#log").html(s + "<br/>" + l);
    console.log(l);
};


$(function () {

    //step 1 初始化
    // setTimeout(function() {
    //     initApp();
    // }, 1000);
    initApp();


    $("a").each(function () {
        var obj = $(this);
        var text = obj.text();
        var href = obj.attr("href");
        obj.html("<span style='color:#000;'>" + text + "</span> (" + href + ")");
    });

    var r = getQueryString("r")||"1";
    $("#next").attr("href", "http://m.lifetest.com/test/test-app/index.html?r=" + (parseInt(r) + 1));
});
