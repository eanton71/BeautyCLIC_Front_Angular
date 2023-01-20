import { Component } from '@angular/core';
import { Map, tileLayer, marker, map } from 'leaflet';
import { AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BeautyFront';
  

  ngAfterViewInit(): void{
    const map = new Map('map').setView([41.56499,2.02439], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    const markerItem = marker([41.56499,2.02439]).addTo(map).bindPopup("<strong>BeautyClic</strong>.<br>Centro de belleza.<br><i>Carrer de Joaquín Costa, 34,<br>08222 Terrassa, Barcelona</i>");
  
    map.fitBounds([
      [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
    ]);  
  }  
}



