((window)=>{
    function useLive2dInit(cfg){
        window.use2dParam = cfg; //注入供全局使用
        let {path,modelType,canvasStyle} = cfg;
        // 创建人物所占空间元素节点 
        let domNode = `<div class="waifu" >
            <div class="waifu-tips"></div>
            <canvas id="live2d" class="live2d" width="300px" height="300px"></canvas>
        </div>`;
        $('body').prepend(domNode);
        document.querySelector('#live2d').cssText = canvasStyle;
        //请求依赖库，及成功后调用初始化方法
        $('head').append(`<link href='${path}/live2dCfg/waifu.css' rel="stylesheet"/>`);
        $.getScript(`${path}/depends/live2d.js`).then(()=>{
            return $.getScript(`${path}/live2dCfg/waifu-tips.js`)
        }).then(()=>{
            let modelCfgJson = `${path}/live2dModel/${modelType}/model.json`;
            console.log(modelCfgJson)
        
            loadlive2d("live2d", modelCfgJson);
            
        })
    }
    window.useLive2dInit = useLive2dInit;
})(window)


