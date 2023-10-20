import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newProduct: any = {};

  constructor(private productService: ProductService, private router: Router) { }

  onSubmit() {
    this.productService.createProduct(this.newProduct).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
