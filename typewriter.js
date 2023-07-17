const sentence = "hello there from lighthouse labs \n";

let later = 0;
for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(char)
    }, later);
    later += 50;
}