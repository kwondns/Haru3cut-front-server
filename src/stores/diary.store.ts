import { makeAutoObservable } from 'mobx';
import { diaryInterface } from 'interfaces';
import RootStore from './root.store';

export default class DiaryStore {
  rootStore: RootStore;

  selectedImage = { imageFile: {}, preview: '' };

  privateCheck = false;

  tagList: string[] = [];

  selectedTag: diaryInterface.Option[] = [];

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

  get getPrivateCheck() {
    return this.privateCheck;
  }

  togglePrivateCheck() {
    this.privateCheck = !this.privateCheck;
  }

  setPrivateCheck(privateDiary: boolean) {
    this.privateCheck = privateDiary;
  }

  get getTagList() {
    return this.tagList;
  }

  setTagList(tagList: string[]) {
    this.tagList = tagList;
  }

  get getSelectedTag() {
    return this.selectedTag;
  }

  setSelectedTag(selectedTag: diaryInterface.Option[]) {
    this.selectedTag = selectedTag;
  }
}
