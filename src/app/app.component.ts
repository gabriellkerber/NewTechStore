import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Produto } from './models/produto.model';
import { Modelo } from './models/modelo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'TechStore';

  constructor(private firestore: AngularFirestore){

  }

  async ngOnInit() {
  }
}
