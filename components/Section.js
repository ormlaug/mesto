export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(this._containerSelector);
  }

  addItem(item) {
    this._container.append(item);
  }
  
  renderItems() {
    this.clear();
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}