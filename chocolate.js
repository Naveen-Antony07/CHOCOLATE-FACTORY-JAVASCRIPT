let arr=[4,5,0,1,9,0,5,0];
let N=8;
let ans=[];
let zerocount=0;
for(let i=0;i<N;i++){
    if(arr[i]!=0){
        ans.push(arr[i]);
    }
    else{
        zerocount++;
    }
}
for(let i=0;i<zerocount;i++){
    ans.push(0);
}
console.log(ans);