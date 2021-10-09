const { createDecipheriv } = require("crypto");
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var filename = "";
var conten = "";

var createdir = () =>{
    rl.question("Enter Name Directory :- ",(ans) => {
        fs.mkdir(ans,(err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Directory is Created");
            }
            repeat();
        });
    });
};

var removedir = () => {
    rl.question("Enter Name Of Directory :- ",(ans) => {
        fs.rmdir(ans,(err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Directory Deleted...");
            }
            repeat();
        });
    });
};

var writef = () => {
    rl.question("Enter File Name :- ",(ans) => {
        filename = ans +".txt";
        rl.question("Enter Data :- ",(content) => {
            
            fs.writeFile(filename, content,(err) => {
                
                if (err) {
                    console.log(err);
                } else {
                    console.log("File saved Successfully...");
                }
                repeat();
            });

        });
    });
};


var readf = () => {
    rl.question("Enter File Name :- ",(ans) => {
        filename = ans+".txt";
        fs.readFile(filename,"utf8",(err,data) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File Data is :- "+data);
            }
            repeat();
        });
    });
};

var deletef = () => {
    rl.question("Enter File Name :- ",(ans) => {
        filename = ans+".txt";
        fs.unlink(filename,(err) =>{
            if(err){
                console.log(err);
            }else{
                console.log("File Deleted Successfully.....!!");
            }
            repeat();
        });
    });
};

var appd = () => {
    rl.question("Enter File Name :- ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter Data :- ", (content) => {

            fs.appendFile(filename, content, (err) => {

                if (err) {
                    console.log(err);
                } else {
                    console.log("Data Add Successfully...");
                }
                repeat();
            });

        });
    });
};


var updatef = () => {
    rl.question("Enter File Name :- ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter the Replace File Name :- ", (replacefilename) => {
            replacefilename = replacefilename+".txt";
            fs.rename(filename, replacefilename, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("File Replace Successfully...");
                }
                repeat();
            });

        });
    });
};


var renamef = () => {
    rl.question("Enter Rename File Name :- ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter the New Name :- ", (content) => {
            content = content+".txt";
            fs.rename(filename, content, (err) => {

                if (err) {
                    console.log(err);
                } else {
                    console.log("Data Add Successfully...");
                }
                repeat();
            });

        });
    });
};


var instruction = () => {
    console.log("\nEnter 1 to Create Directory");
    console.log("Enter 2 to Remove Directory");
    console.log("Enter 3 Write File");
    console.log("Enter 4 Read File");
    console.log("Enter 5 Delete File");
    console.log("Enter 6 Append Data to File");
    console.log("Enter 7 Update/Replace File With New File");
    console.log("Enter 8 Rename File");
    console.log("Enter 9 Exit..");
};

var action = () => {
    rl.question("Enter Your Choice :- ",(ans) =>{
        if(ans === "1"){
            createdir();
        }else if(ans === "2"){
            removedir();
        } else if (ans === "3") {
            writef();
        } else if (ans === "4") {
            readf();
        } else if (ans === "5") {
            deletef();
        } else if (ans === "6") {
            appd();
        } else if (ans === "7") {
            updatef();
        } else if (ans === "8") {
            renamef();
        } else if (ans === "9") {
            rl.close();
        }
    });
};

var repeat = () => {
    instruction();
    action();
};

console.log("Welcome To HRK File System...!!");
repeat();
