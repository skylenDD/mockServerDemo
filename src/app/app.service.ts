import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { apiConstant } from './baseData/apiUrl';


@Injectable()
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  // 重写禁用方法
  getData() {
    const url = apiConstant.projects;
    // 拼接请求地址
    return this.http.get(url).map(res => res);
  }

}
