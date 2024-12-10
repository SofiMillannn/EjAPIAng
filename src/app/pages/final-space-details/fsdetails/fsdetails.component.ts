// api-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FinalSpaceAPI} from "../../../common/fsinterface";



@Component({
  selector: 'fsdetails',
  templateUrl: './fsdetails.component.html',
  standalone: true,
  styleUrls: ['./fsdetails.component.css']
})
export class FsdetailsComponent implements OnInit {
  item: FinalSpaceAPI | undefined;  // Aquí almacenarás los detalles del personaje seleccionado
  id: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private finalSpaceAPI: FinalSpaceAPI
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');  // Obtener el ID del parámetro de la URL

  }


}
