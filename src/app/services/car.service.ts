import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/cardetails';
import { ListResponseModel } from '../models/listReponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44363/api/";
  
  constructor(private httpClient: HttpClient) {}

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails'
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbybrandid?brandId='+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycolorid?colorId='+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycarid?carid=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarForBrandAndColor(brandId:number, colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getbybrandandcolorid?brandId='+brandId+'&colorId='+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
