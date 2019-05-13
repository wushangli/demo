/*
*使用localStorage存储数据的工具模块
* 1.函数
* 2.对象
*/

export default {
    readdata(){
       return JSON.parse(window.localStorage.getItem("item_key") || '[]')
    },
    saveData(val){
        window.localStorage.setItem('item_key', JSON.stringify(val))
    }
}
