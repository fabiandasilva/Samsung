import React from 'react'
import ItemCount from './ItemCount'

function Item() {
  return (
     <article className='samsung__card'>
     <div className='container__img'>
          <img src="https://i.ibb.co/qCHVJLT/hero.png" alt='' className='samsumg__img' />
     </div>
     <span className='samsung__name'>dasdasdas</span>
     <span className='samsung__price'>dasdasd</span>
     <div className='samsung__colors'>
          <span className='samsung__color--black' />
          <span className='samsung__color--blue' />
          <span className='samsung__color--peach' />
     </div>
     <button className='learn-more'>
          <span className='circle' aria-hidden='true'>
               <span className='icon arrow' />
          </span>
          <span className='button-text'>
                Comprar 
          </span>
     </button>
               <ItemCount/>
</article>
  )
}

export default Item