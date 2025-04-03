import { Component, Input, OnInit } from '@angular/core';
import { Goodie } from '../models/goodie.model';
import { GoodiesService } from '../services/goodies.service';

@Component({
  selector: 'app-goodie',
  standalone: false,
  templateUrl: './goodie.component.html',
  styleUrl: './goodie.component.scss'
})
export class GoodieComponent implements OnInit {

  @Input() Goodie!: Goodie;
  listGoodie!:Goodie[];

  constructor(private myGoodiesService: GoodiesService){}
  
  ngOnInit():void{
    this.myGoodiesService.getGoodies().subscribe((Goodies) => {this.listGoodie = Goodies;});
  }
}
