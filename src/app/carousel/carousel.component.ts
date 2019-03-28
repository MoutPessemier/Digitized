import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/video.model';
import { Observable } from 'rxjs';
import { VideoDataService } from '../video-data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public videos: Video[];
  private _fetchVideos$: Observable<Video[]> = this._videoDataService.videos$;

  constructor(private _videoDataService: VideoDataService) {}

  ngOnInit() {}

  get videos$(): Observable<Video[]> {
    return this._fetchVideos$;
  }

  previous() {
    console.log('previous');
  }

  next() {
    console.log('next');
  }
}
