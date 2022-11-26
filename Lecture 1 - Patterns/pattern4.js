let n = 6;
for(let i = n;i>0;i--){
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