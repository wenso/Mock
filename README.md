# Mock
一个基于mockjs极简的实现，通过扩展可以用于接口测试。

#初始化依赖库
#仅使用了mockjs和supervisor
npm install

#配置
可在https.js中修改定义port


#运行
npm run mock


#其它
1、数据可在services目录中添加数据实例
2、需要使用的数据实例需要在services/index.js统一配置
3、common/interfaceMap.js,配置接口与数据实例的基础关联关系
4、common/interfaceFilter.js,配置接口与数据过滤函数的关联关系，用于制造一些随机数据
5、https.js定义服务，配置http服务相关逻辑，详见注释
