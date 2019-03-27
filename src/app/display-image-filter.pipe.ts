import { Pipe, PipeTransform } from '@angular/core';
import { Image } from 'src/image.model';

@Pipe({
  name: 'displayImageFilter'
})
export class DisplayImageFilterPipe implements PipeTransform {
  transform(images: Image[], country: string): Image[] {
    if (!name || country.length === 0) {
      return images;
    }
    return images.filter(i =>
      i.country.toLowerCase().startsWith(country.toLowerCase())
    );
  }
}
