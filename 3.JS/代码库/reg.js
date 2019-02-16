// 关于正则  你真的需要练手一波
// let  a = '0951    "999" -g;ddd     ssd ';

// 关于正则的一些函数，  及匹配规则

// var str = "Is is the cost of of gasoline going up up";
// var patt1 = /\b([a-z]+) \1\b/ig;

// 分析一波 上面的   
// 一个patt  就是一个字符串模板    
// 以   // 开头和结尾 
// i / g / 还有个
// i 不区分大小写

// i
// g  全局查找
// m 多行匹配

// \b  单词边界

// ^[0-9a-z_-]{1,3}$   

// 开始结束 ^ $;

// document.write(str.match(patt1));

// 字符后缀： 
//  ？  匹配0个或1个字符
// *  0个或多个
//  + 至少出现一次

// \n 换行符
// \s 回车
// \w 匹配a-z 0-9 _ 或汉字
//   \s  任意的空白符   \s \t \n
// 0-9 \d

// 非    \W \S \D \B
// [^x] 除了 x以外的任意字符
// .可以匹配任意字符

// 要做更精确地匹配，可以用[]表示范围
// A|B可以匹配A或B


// search() 方法 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置
// replace() 方法 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。


// 总结： 
// 正则的两个方法  
//.test('目标字符串')      如果匹配就返回true
//.exec('目标字符串')      如果匹配就返回匹配的结果,索引，还有完整字符串,如果未找到匹配，则返回值为 null。
// \b : 匹配边界 字符串的开头和结尾 空格的两边都是边界 => 不占用字符串位数

// let  reg = /^[h].?[w$]/;
// let  a = 'hbw is a good fe';
// console.log(reg.exec('hbw is a good fe'));  //[ 'hbw', index: 0, input: 'hbw is a good fe', groups: undefined ]
// console.log(a.match(reg))                   // 跟exec的之下是相反的

// 0:"123" 表示我们捕获到的字符串
// index:3 表示捕获开始位置的索引
// input 表示原有的字符串

// let a = ' 我是要处理的数据   ';
// let reg = /\s+ | \s$/;
// var str ='  我是空格君  ';
// var reg = /^\s*|\s*$/g; //匹配开头结尾空格
// // var res = str.replace(reg,'');    //字符串的relace()方法
// console.log(str.match(reg));
// // console.log('('+res+')')  //(我是空格君)

// let  a  = '9999 6666 ';
// let res = a.split();  把整个字符串放到数组里面
// console.log(res);

// 每次调用exec方法时,捕获到的字符串都不相同
// lastIndex ：这个属性记录的就是下一次捕获从哪个索引开始。
// 当未开始捕获时，这个值为0。          
// 如果当前次捕获结果为null。那么lastIndex的值会被修改为0.下次从头开始捕获。
// 而且这个lastIndex属性还支持人为赋值。

// exec的捕获还受分组()的影响

// var str = '2017-01-05';
// var reg = /-(\d+)/g
// // ["-01", "01", index: 4, input: "2017-01-05"]
// "-01" : 正则捕获到的内容
// "01"  : 捕获到的字符串中的小分组中的内容

// 例如：求出这个字符串'abAAbcBCCccdaACBDDabcccddddaab'中出现最多的字母,并求出出现多少次(忽略大小写)。
// var str = 'abbbbAAbcBCCccdaACBDDabcccddddaab';
//     str = str.toLowerCase().split('').sort(function(a,b){return a.localeCompare(b)}).join('');
//     // console.log(str);
//     var reg = /(\w)\1+/ig;
//     var maxStr = '';
//     var maxLen = 0;
//     str.replace(reg,function($0,$1){
//         console.log($0)
//         console.log($1)
//         var regLen = $0.length;
//         if(regLen>maxLen){
//             maxLen = regLen;
//             maxStr = $1;
//         }else if(maxLen == regLen){
//             maxStr += $1;
//         }
//     })
//     console.log(`出现最多的字母是${maxStr},共出现了${maxLen}次`)

    // 当我们加()只是为了提高优先级而不想捕获小分组时，可以在()中加?:来取消分组的捕获

    // 如果我们需要替换replace中正则找到的字符串，函数中需要一个返回值去替换正则捕获的内容

// let  a = 'https://www.baidu.com?a=1&b=2';
// let reg = /([^#+?&]+)=([^?&#+]+)/g;
// let obj = {};
// let res = a.replace(reg, ($0,$1,$2) => {
//     // console.log($0 , $1)
//     obj[$1] = $2;
//     return obj;
// })
// console.log(res)

// 断言 

// (？=/reg/)   右边必须匹配到这个表达式
// (?!exp)     右边不能是这个表达式
// （？<=exp)  左边要是这个表达式
// （？《！exp)  左边不能是这个表达式
// m 多行匹配，即在到达一行文本末尾时还会继续寻常下一行中是否与正则匹配的项

// 字符串的方法 split
