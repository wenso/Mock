const path = '/mock'

//创建一些假数据数组
let sexArr=["1","0","2"]
let ageArr=[16,28,32,46,66]
let nameArr=["Jack","Kevin","Jone","Make","Jessica"]
let cityArr=["024","027","010","0427"]
let brithdayArr=["10-24","05-06","07-21","08-01"]
let stateArr=[0,1]

//一个随机获取数据内元素的方法
const getArrObj=(arr)=>{
    let index=Math.floor((Math.random()*arr.length))
    return arr[index]
}

module.exports = {
    //路径对应到生成userList数据的方法
    [`${path}/apis/getuserlist`]: function (mockData, request) {
        console.log('data=>'+mockData)
        mockData.result.list = mockData.result.list.map((one) => {
            //生成随机数据
            const _username=getArrObj(nameArr)
            const _age=getArrObj(ageArr)
            const _sex=getArrObj(sexArr)
            const _city=getArrObj(cityArr)
            const _brithday=(new Date().getFullYear()-_age)+"-"+getArrObj(brithdayArr)
            const _state=getArrObj(stateArr)

            //返回合成的假数据
            return Object.assign({}, one, {
                username:_username,
                age:_age,
                sex:_sex,
                city:_city,
                brithday:_brithday,
                state:_state
            })
        })
        return mockData
    },
    //路径对应到生成userInfo数据的方法
    [`${path}/apis/getuserinfo`]:function(mockData,request){
        //随机年龄
        let age=getArrObj(ageArr)
        //合成数据
        mockData.result=Object.assign({},mockData.result,{age:age})
        //返回数据
        return mockData
    },
    //路径对应到生成userInfo数据的方法
    [`${path}/apis/getsmscode`]:function(mockData,request){

        //合成数据,不需要result
        //mockData.result=Object.assign({},mockData.result,{})
        //返回数据
        return mockData
    }
}