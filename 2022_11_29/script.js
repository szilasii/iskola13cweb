const tanulok = [{nev: "Maci Laci",
                cime: "Yellowstone",
                kedvenc: "Méz",
                kiirLog: function() {
                    console.log("A tanulo neve: ",this.nev)
                    console.log("A tanulo címe: ",this.cime)
                    console.log("A tanulo kedvenc étele: ", this.kedvenc) 
                },
                kiirInnerHtml: function() {
                    return "A tanulo neve: " + this.nev +"<br>" +
                    "A tanulo címe: " + this.cime + "<br>" +
                    "A tanulo kedvenc étele: " + this.kedvenc
                }
            },{nev: "Maci Laci2",
            cime: "Yellowstone",
            kedvenc: "Méz",
            kiirLog: function() {
                console.log("A tanulo neve: ",this.nev)
                console.log("A tanulo címe: ",this.cime)
                console.log("A tanulo kedvenc étele: ", this.kedvenc) 
            },
            kiirInnerHtml: function() {
                return "A tanulo neve: " + this.nev +"<br>" +
                "A tanulo címe: " + this.cime + "<br>" +
                "A tanulo kedvenc étele: " + this.kedvenc
            }
        }]

tanulo.kiirLog()

tanulo.kedvenc ="Mézes puszedli"
console.log("A tanulo kedvenc étele: ", tanulo["kedvenc"])