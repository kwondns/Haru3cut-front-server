import { makeAutoObservable } from 'mobx';
import RootStore from './root.store';

export default class DiaryStore {
  rootStore: RootStore;

  selectedImage = { imageFile: {}, preview: '' };

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get getSelectedImage() {
    return this.selectedImage;
  }

  setSelectedImage(imageFile: object, preview: string) {
    this.selectedImage = { imageFile, preview };
  }
}
