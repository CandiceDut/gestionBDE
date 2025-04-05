import { Component, Input, OnInit } from '@angular/core';
import { Goodie } from '../models/goodie.model';
import { GoodiesService } from '../services/goodies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goodie',
  standalone: false,
  templateUrl: './goodie.component.html',
  styleUrl: './goodie.component.scss'
})
export class GoodieComponent implements OnInit {

  @Input() Goodie!: Goodie;
  listGoodie!:Goodie[];

  constructor(private myGoodiesService: GoodiesService, private router: Router){}
  
  ngOnInit():void{
    this.myGoodiesService.getGoodies().subscribe((Goodies) => {this.listGoodie = Goodies;});
  }
  
  goToCreateGoodie(){
    this.router.navigateByUrl('/');
  }
}
