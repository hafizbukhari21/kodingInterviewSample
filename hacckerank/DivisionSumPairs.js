function divisibleSumPairs(n, k, ar) {
    let factor = 0
    for(let i=0; i<ar.length;i++){
        for(let j=i+1 ; j<ar.length;j++){
            
            let res = ar[j]+ar[i]
            if(res%k==0) {
                
                factor++
            }
            
        }
        
    }
    
    return factor
}

let arr = [1, 3, 2, 6, 1, 2]
console.log(divisibleSumPairs(6,3,arr))
