const lon = document.querySelector("#lon");
const lat = document.querySelector("#lat");
const alt = document.querySelector("#alt");
const vel = document.querySelector("#vel");

//var map = WE.map('map').setView([0, 0], 1);

var earth = new WE.map('earth_div');
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '© OpenStreetMap contributors'
    }).addTo(earth);
    

    //let flagPrimeira = true;

async function obterDados(){
    try{
        const resposta = await fetch ('https://api.wheretheiss.at/v1/satellites/25544');
        const dados = await resposta.json();
        
        var longitude = dados.longitude;
        var latitude = dados.latitude;
        var velocidade = dados.velocity;
        var altitude = dados.altitude;

        //if (flagPrimeira) {
            earth.setView([latitude, longitude]);
            
            //flagPrimeira = false;
        //}

        lon.innerHTML = longitude+"°";
        lat.innerHTML = latitude+"°";
        alt.innerHTML = altitude;
        vel.innerHTML = velocidade+' km/h'
        
    }catch(error){
    console.error("Erro ao obter dados: ", error);
    }
}

setInterval(obterDados , 3000);
