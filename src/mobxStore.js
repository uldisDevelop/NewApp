import Shows from './app/shows/module';

class AppStore {
  constructor() {
    this.shows = new Shows();
  }
}

const app = new AppStore();

window.app = app;

export default app;
