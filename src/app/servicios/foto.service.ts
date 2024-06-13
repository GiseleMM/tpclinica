import { Injectable } from '@angular/core';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor() { }
}
