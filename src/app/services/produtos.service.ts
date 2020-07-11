import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  idVoltado;

  constructor(private firestore: AngularFirestore) { }

  async add(produto: Produto): Promise<Produto>{

    const docRef = await this.firestore.collection<Produto>('produto').add(produto);
    const doc = await docRef.get();
    this.idVoltado = doc.id;

    return {
      id: doc.id,
      ...doc.data()
    } as Produto;

   }

   async get(id: string): Promise<Produto>{
    const doc =  await this.firestore.collection<Produto>('produto').doc(id).get().toPromise();
    return {
      id: doc.id,
      ...doc.data()
    } as Produto;
  }

  async update(id: string, produto: Produto): Promise<void> {

    await this.firestore.collection<Produto>('produto').doc(id).update(produto);

}

  getObservable(): Observable<Produto[]> {
    return this.firestore.collection<Produto>('produto').valueChanges({ idField: 'id' });
  }

  returnID(){
    return this.idVoltado;
  }

  async delete(produto: Produto): Promise<void>{
    await this.firestore.collection('produto').doc(produto.id).delete();
  }
}
