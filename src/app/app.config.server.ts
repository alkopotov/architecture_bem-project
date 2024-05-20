import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { StorageServerService } from './services/storage-server.service';
import { provideClientHydration } from '@angular/platform-browser';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: StorageServerService,
      useClass: StorageServerService,
    },
    provideClientHydration()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
