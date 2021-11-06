import { ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PartialUpdate } from '../shared/models/partial-update';
import { SupportsIndicator } from "./SupportsIndicator";

export class FieldUpdate {
  messageBus: ReplaySubject<PartialUpdate> | undefined;

  constructor(parentObject: SupportsIndicator, private id: string) {
    if (!parentObject || !parentObject.fieldUpdateMessageBus) {
      return;
    }

    parentObject.fieldUpdateMessageBus.messageBus?.pipe(
      filter((u: PartialUpdate) => u.id === this.id || this.id === null)
    ).subscribe((message: PartialUpdate) => {
      if (this.messageBus) {
        this.messageBus.next(message);
      }
    });
  }

  toJSON(): any {
    return {};
  }
}
