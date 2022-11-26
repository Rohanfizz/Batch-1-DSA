let n = 6;
for(let i = 1;i<=n;i++){
    let spaces = n-i;
    let stars = i;

    while(spaces>0){
        process.stdout.write(" ");
        spaces--;
    }

    while(stars>0){
        process.stdout.write("*");
        stars--;
    }
    process.stdout.write("\n");
}