/**
 * Created by 佳锐 on 2017/3/19.
 */
window.onload = function(){
    /*获取元素并且保存在对应的变量里面*/
    /*获取屏幕元素，记得要加后面的[0]*/
    var txt = document.getElementsByClassName("txt")[0];
    /*获取删除键和退格键*/
    var btn_click = document.getElementsByClassName("btn_click");
    /*获取按钮元素*/
    var btn_txt = document.getElementsByClassName("btn");
    /*定义数组，用于接受用户按的数字和符号*/
    var res = [];
    /*首先对AC键与DEL键添加事件*/
    for(var i=0;i<btn_click.length;i++){
        btn_click[i].onclick = function(){
            /*如果是AV键，将res数组和txt内容清空*/
            if(this.value == "AC"){
                res = [];
                txt.value = "";
            } else{
                /*如果是DEL键，将txt内容中的最后一个字符删除掉，使用substr方法*/
                txt.value = txt.value.substr(0,txt.value.length-1);
            }
        }
    }
    /*然后对其他键添加事件*/
    for(var j=0;j<btn_txt.length;j++){
        btn_txt[j].onclick = function(){
            /*首先判断按钮是不是点，如果一开始屏幕上没有点，就使txt内容为“0.”*/
            if(txt.value == ""&& this.value == "."){
                txt.value = "0.";
            } else{
                if(!isNaN(this.value)||this.value == "."){
                    /*用户输入的是数字或者点，如果是点的话，只能有一个点，如果是数字就直接拼接到txt.value中*/
                    if(txt.value.indexOf(".") !=  -1){
                        if(this.value != "."){
                            txt.value += this.value;
                        }
                    } else{
                        txt.value += this.value;
                    }
                } else{
                    /*接下来判断的是字符，其中特殊的是等号*/
                    if(this.value != "="){
                        /*如果不是等号，先将 txt中的内容 和 按的键的值 存进数组中，然后将屏幕清空*/
                        res.push(txt.value);
                        res.push(this.value);
                        txt.value = "";
                    } else{
                        /*如果是等号，先将txt的值存进数组中*/
                        /*然后将数组的内容转化为字符串*/
                        /*使用eval（）方法对字符串进行计算*/
                        /*把得到的结果返回到屏幕上，然后将数组清空，以便执行下一次计算*/
                        res.push(txt.value);
                        txt.value = eval(res.join(""));
                        res = [];
                    }
                }
            }
        }
    }

}