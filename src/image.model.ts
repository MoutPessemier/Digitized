export class Image {
  constructor(
    private _iso: number,
    private _shutter: number,
    private _aperture: number
  ) {}

  get iso(): number {
    return this._iso;
  }

  get shutter(): number {
    return this._shutter;
  }

  get aperture(): number {
    return this._aperture;
  }

  static fromJson(json: any): Image {
    return new Image(json.iso, json.shutter, json.aperture);
  }
}
