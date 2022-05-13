function solution(s) {
    var answer = '';
    return s.length % 2 ? s.slice(parseInt(s.length)/2,parseInt(s.length/2+1))
        : s.slice(s.length/2-1,s.length/2+1)
   
}
console.log(solution("1245"))