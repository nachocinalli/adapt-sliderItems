import Adapt from 'core/js/adapt';
import SliderItemsModel from './SliderItemsModel';
import SliderItemsView from './SliderItemsView';

export default Adapt.register('sliderItems', {
  model: SliderItemsModel,
  view: SliderItemsView
});
