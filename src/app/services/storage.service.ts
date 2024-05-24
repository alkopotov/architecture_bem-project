import { Inject, Injectable, InjectionToken } from '@angular/core';

// export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
//   providedIn: 'root',
//   factory: () => localStorage
// });

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // constructor(@Inject(BROWSER_STORAGE) public storage: Storage) { }

  get(key: string) {
    return localStorage.getItem(key);
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  keys() {
    return Object.keys(localStorage);
  }
}
