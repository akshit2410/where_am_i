const map = L.map('maps').setView([0, 0],2);
const attribution = '&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl,{attribution});
tiles.addTo(map);
const myIcon=L.icon({
				iconUrl:'marker.jpg',
			    iconSize: [50, 50],
			    iconAnchor: [25, 16],
			    popupAnchor: [-3, -76],
})
const marker = L.marker([0,0],{icon:myIcon}).addTo(map);
async function  getdata(){
	if('geolocation' in navigator)
		{
			console.log('geolocation is available');
			navigator.geolocation.getCurrentPosition((position) => {
			console.log(position);
			const latitude=position.coords.latitude;
			const longitude=position.coords.longitude;
			marker.setLatLng([latitude,longitude]);
			map.setView([latitude,longitude],14);
			document.getElementById("lat").textContent=latitude;
			document.getElementById("lon").textContent=longitude;

		});
		
		} else{
			console.log('geolocation IS NOT available');
		}
}
getdata();

				