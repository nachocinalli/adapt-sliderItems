import ComponentView from 'core/js/views/componentView';

class SliderItemsView extends ComponentView {

  initialize(...args) {
    this.onSliderChange = this.onSliderChange.bind(this);

    super.initialize(...args);
  }

  postRender () {
    this.$('.component__widget').imageready(() => {
      this.setReadyStatus();
    });
    if (this.model.get('_setCompletionOn') === 'inview') {
      this.setupInviewCompletion('.component__widget');
    }
    const items = this.model.getChildren();
    if (!items || !items.length) return;
    const activeItem = this.model.getActiveItem();
    if (!activeItem) {
      this.model.setActive(this.model.get('_startValue'));
    } else {
      items.trigger('change:_isActive', activeItem, true);
    }

  }

  onSliderChange(event) {
    const $slider = $(event.currentTarget);
    const itemIndex = parseInt($slider.val());

    if (itemIndex === this.model.getActiveItem()._index) return;

    this.model.setActive(itemIndex);
  }
}

SliderItemsView.template = 'slider-items.jsx';

export default SliderItemsView;
