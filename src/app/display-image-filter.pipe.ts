import { Pipe, PipeTransform } from '@angular/core';
import { Image } from 'src/image.model';

@Pipe({
  name: 'displayImageFilter'
})
export class DisplayImageFilterPipe implements PipeTransform {
  transform(images: Image[], name: string): Image[] {
    if (!name || name.length === 0) {
      return images;
    }
    return images.filter(i =>
      i.country.toLowerCase().startsWith(name.toLowerCase())
    );
  }
}
