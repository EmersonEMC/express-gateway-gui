import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiEndpointService } from './api-endpoint.service';
import { Iapiendpoint } from 'src/app/interfaces/iapiendpoint';
import { Iproperties } from 'src/app/interfaces/iproperties';

const ELEMENT_DATA: Iproperties[] = [
  {
    host: '*',
    paths: '/api/auth/*',
    methods: [
      'POST',
      'OPTIONS'
    ]
  },
  {
    host: '*',
    paths: '/api/user/*',
    methods: [
      'POST',
      'GET',
      'PUT',
      'OPTIONS'
    ]

  }
];


@Component({
  selector: 'egg-api-endpoint',
  templateUrl: './api-endpoint.component.html',
  styleUrls: ['./api-endpoint.component.scss']
})
export class ApiEndpointComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['host', 'paths', 'methods'];
  dataSource: Iproperties[] = ELEMENT_DATA;

  private sub!: Subscription;

  constructor(private endpointService: ApiEndpointService) { }

  ngOnInit(): void {
    // this.sub = this.endpointService.getAllApiEndPoint().subscribe((values: Iapiendpoint[]) => {
    //   this.dataSource = values;
    // });
  }

  ngOnDestroy(): void {
    if (this.sub) { this.sub.unsubscribe(); }
  }
}
