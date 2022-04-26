import Emitter from './Emitter';

const LIST_EVENT = {
  APP_STATE_CHANGE: "APP_STATE_CHANGE"
};

export class EmitterManager {
  static getInstance() {
    if (!this._instance) {
      this._instance = new EmitterManager();
    }
    return this._instance;
  }

  static clear() {
    if (this._instance) {
      delete this._instance;
    }
  }

  static listEvent = LIST_EVENT;

  emit(eventName, ...args) {
    if (!eventName) {
      return;
    }
    return Emitter.emit(eventName, ...args);
  }

  on(eventName, cb) {
    if (!eventName || !cb) {
      return;
    }
    Emitter.on(eventName, cb);
  }

  off(eventName, cb) {
    if (!eventName) {
      return;
    }
    Emitter.off(eventName, cb);
  }

  once(eventName, cb, ctx) {
    if (!eventName || !cb) {
      return;
    }
    Emitter.once(eventName, cb, ctx);
  }
}
