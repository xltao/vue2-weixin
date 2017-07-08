# vue2-weixin

> weixin for vue

### vuex的引入 
 > 含义：vuex专为Vue.js应用程序开发的状态管理模式
 
 > 安装：npm install vuex --save
 
 > 举例：user.js，不做过多解释，[详情参考官方文档](https://vuex.vuejs.org/zh-cn/structure.html)
 ```
  const user = {
    state:{
      name:'zyzhang'
    },
    
    mutations:{
      SET_NAME:(state,name) => {
        state.name = name
      }
    },
    
    actions:{
      // 获取用户信息
      GetInfo({commit, state}) {
        //执行异步请求，返回用户信息(data) 如下保存用户姓名
        //return new Promise((resolve, reject) => {
           commit('SET_NAME', data.name);
           // ...
        //}
      }
    }
    
  }
  export default user;
  
  //外部引用也很简单如下这种(也可使用mapActions写法)
  store.dispatch('GetInfo')
    //.then(res => {})
    //.catch(err => {});
 ```
 > 在vue页面中获取state值
 
    mapState 辅助函数 , mapGetters 辅助函数
    mapState 工具函数会将 store 中的 state 映射到局部计算属性中。
    mapGetters 工具函数会将 store 中的 getter 映射到局部计算属性中。它的功能和 mapState 非常类似
    两者不同的地方：mapState把传入的 states 转换成由 {key, val} 对象构成的数组,接着调用 forEach 方法遍历这个数组，
    构造一个新的对象，这个新对象每个元素都返回一个新的函数 mappedState，函数对 val 的类型判断，
    如果 val 是一个函数，则直接调用这个 val 函数，把当前 store 上的 state 和 getters 作为参数，返回值作为 mappedState 的返回值；
    否则直接把 this.$store.state[val] 作为 mappedState 的返回值。
    而mapGetters它的val 不能是函数，只能是一个字符串，
    
    mapGetters使用如下：
    
     getters.js部分：
       name: state => state.user.name
     
     js部分
       import {mapGetters} from 'vuex';
       computed: {
         ...mapGetters(['name'])
        }
 
 > vuex中其它辅助函数：mapActions,mapMutations
                          

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
