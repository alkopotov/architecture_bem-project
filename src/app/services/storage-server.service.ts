import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class StorageServerService extends StorageService {

  constructor() { 
    super({
      clear: () => {},
      getItem: (key: string) => JSON.stringify({key}),
      key: (index: number) => index.toString(),
      length: 0,
      removeItem: (key: string) => {},
      setItem: (key: string, value: string) => JSON.stringify({[key]: value}),
      keys: () => []
    });
  }
}
