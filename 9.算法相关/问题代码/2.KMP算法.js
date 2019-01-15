
    // 计算next数组   //结果为类似[-1,-1,0,1,2,-1,0]这样的数组,1表示长度为2\最长前缀和最长后缀的长度
    function calcNext(str){ 
      let next = [-1],          //定义转移数组  
          len = str.length,     //字符串的长度
          i = 1,                //next的index索引
          j = -1;               //字符串相同最长前缀和最长后缀的长度
  
      for (i = 1; i < len; i++) {
        while (str[i] !== str[j+1] && j > -1) {
          j = next[j];            
        }
  
        if (str[j+1] === str[i]) {
          j = j + 1;
        }
        next[i] = j;
  
      }
  
      return next;           //返回next数组  next[3]是代表字符'aba'的前缀后缀长为1
    }
    console.log(calcNext('ababaca'))
    console.log('------------------')
    // source 源字符串
    // match 要匹配的字符串
    // res 保存匹配位置的数组
    function search(source, match){
      let next = calcNext(match),
          m = source.length,
          n = match.length,
          i = 0,
          j = 0,
          res = [];
  
      while (i < m-n) {
        if (source[i] === match[j]) {
          i++;
          j++;
  
          if (j === n) {
            res.push(i-n);
            j = next[j-1] + 1;
          }
        } else {
          if (j === 0) {
            i++;
          } else {
            j = next[j-1] + 1;
          }
        }
      }
  
      return res;
    }
  
    let source = '451199729199719979865119972119971997',
        match = '1997';
  
    let res = search(source, match);
    console.log(res);