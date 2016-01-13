export var func = {
    preLoadImg: function(arr,callback){
        let len = arr.length,
            loaded = 0,
            handle,
            timeout = 10000, //超时也执行回调
            timeoutIndex = 0,
            cbk = callback || function(){};
        
        for(var i=0;i<len;i++){
            var img = new Image();
            img.onload=function(){
                loaded++;
            }
            img.src = arr[i];
        }
        handle = setInterval(function(){  //为了兼容超时也执行回调 改成setInterval调用
            timeoutIndex++;
            if(loaded==len || (timeoutIndex*500>timeout)){
                cbk();
                clearInterval(handle);
            }
        },500);
    }
}
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
    this.splice(index, 1);
    }
};