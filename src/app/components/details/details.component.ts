import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  itemId: string = '';
  constructor(private route: ActivatedRoute,  //inject the activated route for getting parameter/s (id) 
    private router: Router) { }  // inject Router for navigating by code

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');  //use snapshot when we dont expect it to change later
    this.itemId += id;
  }

  /* navigate route using code. we imported Router for this: */
  onBack() {
    this.router.navigate(['/list']);
  }

}
