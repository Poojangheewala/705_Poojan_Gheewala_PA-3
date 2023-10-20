import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: any = {};

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id') || ''; // Handle null value
    this.productService.getProductById(productId).subscribe((data) => {
      this.product = data;
    });
  }

  onSubmit() {
    this.productService.updateProduct(this.product._id, this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
