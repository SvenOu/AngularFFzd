import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private static baseUrl = 'http://app.yuedaotech.cn:25603/API_ROP';
  private static operatingPageUrl = '/page/get';
  private static imageUrl = '/HD/';
  constructor() { }
  static getOperatingPageUrl(): string {
    return this.baseUrl + this.operatingPageUrl;
  }
  static getImageUrl(imageId: string): string {
    return this.baseUrl + this.imageUrl + imageId;
  }
}
