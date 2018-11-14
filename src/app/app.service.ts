import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { apiConstant } from './baseData/apiUrl';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  // 获取模拟数据
  getData = (): Observable<any> => {
    const url = apiConstant.userInfo;
    // 拼接请求地址
    return this.http.get(url).map(res => res);
  }

}
