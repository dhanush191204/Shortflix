import React from 'react'
import Feedbanner from './Feedbanner'
import Feedcontentlist from './Feedcontentlist'

function Feed() {
    return (
      
        <div className='col-span-3 flex flex-col'>
          <Feedbanner />
          <Feedcontentlist />
        </div>
      
    );
}

export default Feed