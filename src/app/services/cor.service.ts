import { Injectable } from '@angular/core';
import { Cor } from '../models/cor.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CorService {

  constructor(private firestore: AngularFirestore) { }

  // private convertToMarca(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Marca{
    
  // }

  async add(cor: Cor): Promise<Cor>{

   const docRef = await this.firestore.collection<Cor>('cores').add(cor);
   const doc = await docRef.get();

   return {
     id: doc.id,
     ...doc.data()
   } as Cor;
  }

  getObservable(): Observable<Cor[]>{
    return this.firestore.collection<Cor>('cores').valueChanges({idField: 'id'});
  };

  async get(id: string): Promise<Cor>{
    const doc =  await this.firestore.collection<Cor>('cores').doc(id).get().toPromise();
    return {
      id: doc.id,
      ...doc.data()
    } as Cor;
  }

  async update(id: string, cor: Cor): Promise<void> {

    await this.firestore.collection<Cor>('cores').doc(id).update(cor);
  }

  async delete(cor: Cor): Promise<void>{
    await this.firestore.collection('cores').doc(cor.id).delete();
  }
}
