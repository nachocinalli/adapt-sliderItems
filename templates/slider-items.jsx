import React from 'react';
import { templates, classes, html, compile } from 'core/js/reactHelpers';

export default function slideritems({
  onSliderChange,
  _items,
  ...props
}) {
  let _activeIndex = 0;
  const _max = _items.length - 1;
  const itemActive = props.model.getActiveItem();
  if (itemActive) {
    _activeIndex = itemActive.get('_index');
  };

  return (
    <div className='component__inner slideritems__inner'>
      <templates.header {...props} />
      <div className='component__widget slideritems__widget'>
        <div className='slideritems__slider'>
          <input
            className='slideritems__slider-input'
            type='range'
            step='1'
            min='0'
            max={_max}
            value={_activeIndex}
            aria-valuemin='1'
            aria-valuemax={_max}
            aria-valuenow={_activeIndex}
            aria-valuetext={itemActive ? itemActive.get('title') : ''}
            onChange={onSliderChange}
            list='inputData'>
          </input>
          <datalist id='inputData'>
            {_items.map(({ _index, title }, index) => (
              <option onClick={onSliderChange} className={_activeIndex === _index ? 'is-active' : ''} key={index} value={_index}> {title}</option>

            ))}
          </datalist>
        </div>
        <div className='slideritems__container-items' role='list'>
          {_items.map(({ title, body, _graphic, _isActive, _isVisited, _classes }, _index) => (
            <div
              className={classes([
                'slideritems__item',
                _graphic.src && 'has-image',
                _isActive && 'is-active',
                _isVisited && 'is-visited',
                _classes
              ])}
              key={_index}
              data-index={_index}
              role="listitem"
            >

              {title && (
                <div className='slideritems__item-title'>
                  {html(compile(title))}
                </div>
              )}
              {body && (
                <div className='slideritems__item-body'>
                  {html(compile(body))}
                </div>
              )}
              {
                <templates.image {..._graphic}
                  classNamePrefixes={[
                    'component',
                    'slideritems'
                  ]}
                />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
