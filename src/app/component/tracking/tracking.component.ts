import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/services/tracking.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  ordenes: any[] = [];

  token = {
    token: localStorage.getItem('token')
  }

  constructor(private trackingService: TrackingService) { }

  ngOnInit(): void {
    this.trackingService.getTracking(this.token).subscribe(
      (data) => {
        this.ordenes = data;
        console.log(this.ordenes);
      },
      (error) => {
        console.error('Error al obtener las ordenes', error);
      }
    );
  }

}
