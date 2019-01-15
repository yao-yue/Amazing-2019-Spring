function Next(p) {
    let next = [-1],
    j = 0;
    k = -1;
    while(j< p.length -1) {
        if( k == -1 || p[j] == p[k]) {
            if(p[++j] == p[++k]) {
                next[j] = next[k];
            }else {
                next[j] = next[k]
            }
        }else {
            k = next[k]
        }
    }
    return next;
}

console.log(Next('ababaca'))