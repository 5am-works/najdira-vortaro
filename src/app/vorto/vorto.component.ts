import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vorto',
  templateUrl: './vorto.component.html',
  styleUrls: ['./vorto.component.scss']
})
export class VortoComponent implements OnInit {
  private vorto: string;

  constructor(private vojo: ActivatedRoute) {
    this.vorto = vojo.snapshot.paramMap.get("vorto");
  }

  ngOnInit() {
  }

}
