/**
 * 
 * @author ZHY
 * jquery PC翻屏插件
 * 依赖jquery.mousewheel
 * @mail zhy@meitu.com
 */

;(function($,window,document,undefined){

    $.fn.scrollPage=function(params){
        return this.each(function() {
            $(this).data('scrollPage', new scrollPage($(this)[0], params));
        });
    }

    function scrollPage(el,params){
        var ops = {
                cls:'.section',
                index:0,
                timer:1,
                navWrap:'#pageSideNav',
                hashArray:[],
                len:0
            },
            EL ={
                self:$(el),
                item:$(el).find(ops.cls),
                nav:$(ops.navWrap),
                navItem:''

            };
        ops.len = EL.item.length;   
        this.config = $.extend(ops,params);
        this.EL = EL;
        this.init();
    }

    scrollPage.prototype = {
        init:function(){
            //初始化侧边nav
            var navHtml = '';
            for(var i=0;i<this.config.len;i++){
                navHtml+='<a href="javascript:;" title="'+this.EL.self.eq(i).attr('content')+'" class="page-side-nav-item"></a>'
                this.config.hashArray.push(i);
            }
            this.EL.nav.append(navHtml);
            this.EL.navItem = this.EL.nav.find('a');

            //初始化页面hash
            var hash = location.hash.substr(1);
            if(hash && $.inArray(hash,this.config.hashArray)){
                this.moveTo(hash);
                this.config.index = hash;
            };
            this.EL.navItem.eq(this.config.index).addClass('current');
            this.bindEvent();
            return this;
        },
        bindEvent:function(){
            var isAnimating = false,
                _this = this;
                $this = this.EL.self;
            $this.mousewheel(function(event, delta) {
                event.stopPropagation();
                event.preventDefault();
                if($this.is(":animated") || isAnimating) return;   
                console.log(isAnimating) 
                isAnimating = true;
                setTimeout(function(){
                    isAnimating = false;
                },_this.config.timer*1200);
                var direction = delta>0? -1:1;
                _this.config.index=parseInt(_this.config.index)+direction;

                if(_this.config.index<0){
                    _this.config.index = 0;
                    return;
                }
                if(_this.config.index>_this.config.len-1){
                    _this.config.index = _this.config.len-1;
                    return;
                }

                _this.moveTo(_this.config.index);
                _this.EL.navItem.removeClass('current').eq(_this.config.index).addClass('current');
            });

            //navItem侧边栏点击
            var $navItem = this.EL.navItem;
            $navItem.on('click',function(){
                var i = $(this).index();
                $navItem.removeClass('current')
                $(this).addClass('current');
                _this.moveTo(i);
            });

            return this;
        },
        moveTo:function(index){
            var timer =this.config.timer;
            location.hash=index;
            var moveY = index*-100+'%';
            if(this.isSupportCss3){
                this.EL.self.css({
                    '-webkit-transform':'translateY('+moveY+')',
                    '-moz-transform':'translateY('+moveY+')',
                    '-ms-transform':'translateY('+moveY+')',
                    '-o-transform':'translateY('+moveY+')',
                    'transform':'translateY('+moveY+')',
                    '-webkit-transition': timer +'s',
                    '-moz-transition': timer +'s',
                    '-ms-transition': timer +'s',
                    '-o-transition': timer +'s',
                    'transition': timer +'s'
                });
            }else{
                this.EL.self.animate({
                    top:moveY
                },timer*1000)
            }
        },
        isSupportCss3:function(){
            var temp = document.createElement('div');
            var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
            for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
            return false;
        }
    }
})(jQuery,window,document);