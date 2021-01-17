import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../users/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 
  products = products;


  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(){
    //this.route.paramMap.subscribe(params=>{
      //let id= params.get('id')});//route params 
    //let id =this.route.snapshot.paramMap.get('id');

    //query params

    this.route.queryParamMap.subscribe(params=>{
      // burasi
      console.log('test');
    })

    let page = this.route.snapshot.queryParamMap.get('page');
    console.log(page)

    
}
  loadProducts(){
    this.router.navigate(['products'],{
      queryParams:{
        page:1
      }
    });}
}