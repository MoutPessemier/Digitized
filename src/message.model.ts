export class Message {
  constructor(
    private _topic: string,
    private _message: string,
    private _date = new Date()
  ) {}

  get topic(): string {
    return this._topic;
  }

  get message(): string {
    return this._message;
  }

  get date(): Date {
    return this._date;
  }

  toJSON(): any {
    return {
      topic: this.topic,
      message: this.message,
      date: this.date
    };
  }
}
