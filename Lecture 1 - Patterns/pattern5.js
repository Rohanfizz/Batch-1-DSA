let n = 111;
let space = n/2;
let star = 1;

for(let i = 1;i<=n;i++){
    for(let j = 1;j<=space;j++){
        process.stdout.write(" ");
    }
    for(let j = 1;j<=star;j++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
    if(i<=n/2){
        star+=2;
        space--;
    }else{
        star-=2;
        space++;
    }
}