const obj = {
    name: "jayram sangawt",
    grretmessage : function(){
        console.log(`Hello ${this.name} Welcome to the world of javascript`);
    },
    By(){
        console.log("Good Bye");
    }
}
console.log(obj);
obj.grretmessage;
obj.By();
