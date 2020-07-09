import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiEndpointService } from './api-endpoint.service';
import { Iapiendpoint } from 'src/app/interfaces/iapiendpoint';
import { Iproperties } from 'src/app/interfaces/iproperties';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// const ELEMENT_DATA: Iproperties[] = [
//   {
//     name: 'login',
//     host: '*',
//     paths: '/api/auth/*',
//     methods: [
//       'POST',
//       'OPTIONS'
//     ]
//   },
//   {
//     name: 'usuario',
//     host: '*',
//     paths: '/api/user/*',
//     methods: [
//       'POST',
//       'GET',
//       'PUT',
//       'OPTIONS'
//     ]
//   }
// ];


@Component({
  selector: 'egg-api-endpoint',
  templateUrl: './api-endpoint.component.html',
  styleUrls: ['./api-endpoint.component.scss']
})
export class ApiEndpointComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['name', 'host', 'paths', 'methods', 'actions'];
  dataSource = new MatTableDataSource<Iproperties>([]);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  private sub!: Subscription;

  constructor(private endpointService: ApiEndpointService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.sub = this.endpointService.getAllApiEndPoint().subscribe((values: Iapiendpoint[]) => {
      this.dataSource = new MatTableDataSource<Iproperties>(this.jsonToInterface(values));
    });
  }

  private jsonToInterface(values: Iapiendpoint[]): Iproperties[] {
    const listInterf: Iproperties[] = [];
    let interf!: Iproperties;

    for (const iterator of values) {
      for (const key in iterator) {
        if (iterator.hasOwnProperty(key)) {
          interf = {} as Iproperties;
          interf.name = key;
          interf.host = iterator[key].host;
          interf.methods = iterator[key].methods;
          interf.paths = iterator[key].paths;
          listInterf.push(interf);
        }
      }
    }

    return listInterf;
  }

  ngOnDestroy(): void {
    if (this.sub) { this.sub.unsubscribe(); }
  }
}
