import { InjectionToken } from "@angular/core";

export interface IEnvironmentConfig {
    typicodeUrl: string
}

export const ENV_CONFIG = new InjectionToken<IEnvironmentConfig>('EnvironmentConfig');