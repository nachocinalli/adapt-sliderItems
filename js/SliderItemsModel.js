import ItemsComponentModel from 'core/js/models/itemsComponentModel';

export default class SliderItemsModel extends ItemsComponentModel {

  setActive(index) {
    this.resetActiveItems();
    const item = this.getItem(index);
    item.set({ _isVisited: true, _isActive: true });
  }

}
