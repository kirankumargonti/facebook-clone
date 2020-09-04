import React from 'react';

function Widgets() {
  return (
    <div className='widget'>
      <iframe
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkirankumargonti225%2F&tabs=timeline&width=340&height=2500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=136806330845993'
        width='340'
        height='2500'
        title='iFrame'
        style={{border: 'none', overflow: 'hidden'}}
        scrolling='no'
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
      ></iframe>
    </div>
  );
}

export default Widgets;
