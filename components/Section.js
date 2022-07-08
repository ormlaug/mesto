export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(this._containerSelector);
  }

  addItem(item) {
    this._renderedItems.push(item);
    this._renderedItems();
  }
  
  renderItems() {
    this._renderedItems.forEach(item => {
      const renderedItem = this._renderer(item);
      this._container.append(renderedItem);
    });
  }
}