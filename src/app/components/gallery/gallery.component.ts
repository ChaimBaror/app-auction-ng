import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  array = [
    { name: "chaim" },
    { name: "yosef" },
    { name: "yossi" },
    { name: "baror" },
    { name: "noni" },
    { name: "noa" },
    { name: "david" },
    { name: "shira" }]
  constructor() { }

  ngOnInit(): void {
  }

}
