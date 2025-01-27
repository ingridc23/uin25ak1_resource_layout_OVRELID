console.log("køjer")

// føerst tenger jeg å bytte innhol på info-seksjoen


//for å skrive ut det som er i map til html struktur har jeg en let
const ressurserHTML= document.getElementById("info")
// lage en veriabel som endet resources.category med å tykke på "a" i #top
let hvaErinfo = "HTML"


//Jeg lager en funksjon for å bruk til "addEventListener" 
function kodehjem() {


//jeg tenker å ha en filter/funksjon som gjør det blir en skrift ut 
const filter = resources.filter((resources) => resources.category === hvaErinfo)
// OBJKTEter er laget i filen ressurser.js, for å hetter dataen bruker map
// for hetter opp hva som i sources ha en til map
.map((resources) => 
    ressurserHTML.innerHTML += `
            <h1>${resources.category}</h1>
            <p>${resources.text}</p>
            <nav>
                <lu>
            ${resources.sources.map(source => 
                `<li><a href=${source.url}>${source.title}</a></li>`).join("")}
                </lu>
            </nav>`
)

    console.log(filter)

    console.log("funker det?")
}

kodehjem() 

// jeg ..... for å sette tekte også putte ny tekst





// // gjør #top dynamisk med map.
resources.map( top => 
document.getElementById("top").innerHTML += 
`
<li><a id=${top.category.replaceAll(' ', '')}>${top.category}</a></li>
`)



//gjør knappene trykk-bare først med lage variabel
const html = document.getElementById("HTML")
const css = document.getElementById("CSS")
const js = document.getElementById("JavaScript")
const react = document.getElementById("React")
const cms = document.getElementById("SanityandheadlessCMS")

html.addEventListener( "click", function() {
    
    hvaErinfo = "HTML"
    ressurserHTML.innerHTML =  ""
    
    kodehjem() 
    console.log("html")
}  )

css.addEventListener( "click", function() {
    
    hvaErinfo = "CSS"

    ressurserHTML.innerHTML = ""
    kodehjem() 
    console.log("css")
}  )

js.addEventListener( "click", function() {

    hvaErinfo = "JavaScript"
    ressurserHTML.innerHTML = ""

    kodehjem() 
    console.log("javascrip")
}  )

react.addEventListener( "click", function() {

    hvaErinfo = "React"
    ressurserHTML.innerHTML = ""
    kodehjem() 
    console.log("React")
}  )


cms.addEventListener( "click", function() {
    hvaErinfo = "Sanity and headless CMS"
    ressurserHTML.innerHTML = ""
    kodehjem() 
    console.log("Sanity and headless CMS")
}  )



