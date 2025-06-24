function fetchdata() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data feched successfully")
            }else{
                reject("Error fecting dada");
            }
        }, 3000);
    })
}

fetchdata()
.then((data)=>{
    console.log(data);
    return `Suyash`
    
})
.catch((error)=>console.error(error)
);
