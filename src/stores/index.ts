import { ContextStore } from './context';

export class RootStore {
  static instance: RootStore;
  context: ContextStore;

  constructor(tag: string) {
    if (RootStore.instance) {
      return RootStore.instance;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      let self = this;
      this.context = new ContextStore();

      RootStore.instance = self;
      return this;
    }
  }
}
