import { Input, OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.scss']
})
export class NavitemComponent implements OnInit {

  @Input() component: string;

  constructor() { }

  ngOnInit(): void {

  }
}
