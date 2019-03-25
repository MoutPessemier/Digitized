import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input('src') public videoUrl: string;
  constructor() {}

  ngOnInit() {}

  get url(): string {
    return this.videoUrl;
  }
}
