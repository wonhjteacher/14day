//for (초기값 ; 최종조건식 ; 증감식) { 실행문 }
/* for (let i = 1 ; i<5 ; i++) { 
    console.log(i)
} */

for (let i = 1 ; i<10 ; i++){
    if(i===5){
        break;
    }
    console.log(`2X${i}=${i*2}`)
   // console.log(i+'x2='+(i*2)) 
}

for(let dan=2; dan<5 ; dan ++){
    console.log(`${dan}단 출력`)
    for(let num=1;num<10;num++){
        console.log(`\t${num}x${dan}=${num*dan}`)
    } //inner for 
}//outer for



for (let i = 1 ; i<10 ; i++){
    if(i%2===0){
        continue;
    }
    console.log(`2X${i}=${i*2}`)
}
