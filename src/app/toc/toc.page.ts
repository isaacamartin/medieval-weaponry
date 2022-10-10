import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
public chapters = [
    {
      title: "Chapter 1: History of The Crossbow",
      url: "/chapter1",
      id:1
    },
    {
      title: "Chapter 2: History of Bec de corbin",
      url: "/chapter2",
      id:2
    },
    {
      title: "Chapter 3: History of The Glaive",
      url: "/chapter3",
      id:3
    }
];
  constructor() { }

  ngOnInit() {
  }

}
