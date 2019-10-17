function isCommonPrefix(strs,middle){
    const Prefix=strs[0].substring(0,middle)
    for(let i=1;i<strs.length;i++){
        if(!strs[i].startswith(prefix)) return false;
    }
    
}
/**
 * @author zph
 * @func 返回最长公共子串
 * @param  strs 字符串数组
 * @return 字符中
 */
const longestCommonPrefix=(strs)=>{
    //最长公共子串，绝对不能比最短的一个字符串长
    if(strs.length===0) return '';
    if(strs.length===1) return strs[0];

    let minLen=Number.MIN_VALUE;
    for(let i=0; i<strs.length;i++){
        if(strs[i].length<minLen){
            minLen=Math.min(minLen,strs[i].length);
        }
    }
   //console.log(minLen);

   let low=0;//动态的  左侧
       high=minLen;

    while(low<=high){
        const middle=(low+high)>>1;//中间
        //功能独立，公共子串
        if(isCommonPrefix(strs,middle))
        low=middle+1;
    }else{
        high=middle-1;
    }
   // low>high;

    return strs[0].substring(0,(low+high)>>1);
}
const strs=['flower','flow','flight'];
Console.log(longestCommonPrefix(strs));