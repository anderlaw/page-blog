(function () {
    //添加导航hover事件
    let navList = document.querySelectorAll('nav .list > li');
    for (let item of navList) {
        item.onmouseover = function () {
            for (let item of navList) {
                item.classList.remove('active')
            }
            this.classList.add('active')
        }
        item.onmouseout = function () {
            this.classList.remove('active')
        }
    }
    //父导航的hover bug修复
    let tempClearIden = null;
    let parentOfList = document.querySelector('nav li.haschild');
    parentOfList.onmouseover = function(){
        //如果存在延迟调用直接清除
        if(tempClearIden){
            clearTimeout(tempClearIden)
        }
        this.classList.add('active')
    }
    parentOfList.onmouseout = function () {
        //先清除之前的延迟调用
        if(tempClearIden){
            clearTimeout(tempClearIden)
        }
        //重新设置延迟调用
        tempClearIden = setTimeout(function () {
            parentOfList.classList.remove('active')
        }, 300)

    }
    //子导航hover
    let childList = document.querySelectorAll('nav .childList > li');
    for (let item of childList) {
        item.onmouseover = function () {
            for (let item of navList) {
                item.classList.remove('active')
            }
            this.classList.add('active')

        }
        item.onmouseout = function () {
            item.classList.remove('active')
        }
    }
    //搜索框事件
    let searBtn = document.querySelector('nav .list li.search > a');
    let ipt = document.querySelector('nav .list li.search > input');
    searBtn.onclick = function(eve){
        //显示输入框
        document.querySelector('nav .list li.search > input').style.display = 'block';
        //隐藏按钮
        searBtn.style.display = 'none';
        return false;
        
    }
    ipt.onblur = function(){
        //隐藏输入框 
        this.style.display = 'none';
        //显示按钮
        searBtn.style.display = 'inline-block';
    }
    ///设置 图片的居中显示
    let picCenterEle = document.querySelector('#whychose .picture');
    window.onresize = function(){
        //获取视口宽度
        let viewWidth = document.body.clientWidth;
        //宽度为1170
        let left = (viewWidth-1170)/2;
        picCenterEle.style.left = left;
        debugger
    }
})()