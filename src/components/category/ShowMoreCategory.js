import React from 'react'
import { SHOW_MORE_CATEGORY } from '@/src/utility/showMoreCardsData'
/**
 * File: src/components/category/ShowMoreCategory.js
 * Description: more business category popup.
 * Data: 18/03/2023
 * Author: Renu singroha
 */
const ShowMoreCategory = () => {
  return (
    <div className='relative bg-white'>
        <div className='left-[39px] absolute -top-4 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white border-l border-t border-slate-400'></div>
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4  gap-5 bg-white border border-slate-400 rounded-md p-4">
            {
              SHOW_MORE_CATEGORY.map((card_data)=>{
                const {id, data } = card_data;
                return(
                    <div key={id}>
                      <p>{data}</p>
                    </div>
                )
              })
            }
          
        </div>
    </div>
  )
}

export default ShowMoreCategory