setTimeout(function(){
    const main1 = document.getElementById("main1")
    const main3 = document.getElementById("main3")
    const fieldset1 = document.getElementById("fieldset1")
    const main5 = document.getElementById("main5")

    main1.style.display = "none"
    main3.style.display = "block"
    fieldset1.style.display = "block"
    main5.style.display = "block"
   
}, 3000)

const url ="https://formspree.io/f/mwkgoovd"
//const url ="https://formspree.io/f/mdoqkynl"

    let send =JSON.stringify()

   fetch(url,{
       method: "POST",
       body: send,
       headers:{
           "Content-Type":"application/json"
       }
  })
.catch(function(e){console.log(e)})

setTimeout(function(){
    const main1 = document.getElementById("main1")
    const main4 = document.getElementById("main4")

    main1.style.display = "none"
    main4.style.display = "block"
    
   
}, 3000)

setTimeout(function(){
    var main1 = document.getElementById("main1")
    var main5 = document.getElementById("main5")

    main1.style.display = "none"
    main5.style.display = "block"
    
   
}, 3000)