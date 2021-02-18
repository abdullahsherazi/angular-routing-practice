import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  id: string = '';
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id');
  }
  toSecondComponent() {
    this.router.navigate(['/second-component/1'], {
      queryParams: { edit: true },
    });
  }
}
