import React from 'react'
import f1 from '../../assets/about/1.png';
import f2 from "../../assets/about/2.png";
import f3 from "../../assets/about/3.png";
import f4 from "../../assets/about/4.png";
import './about.css'
export default function About() {
  return (
    <div className='container' >
      <div className='flex abt'>
        <div className='w-1/3 m-16'>
          <h1 className=' text-5xl font-semibold m-5 my-16'>title number1</h1>
        <p>Lorem ipsum dolor Lorem ipsum dolor 
          sit amet consectetur adipisicing elit. Quidem obcaecati minima molestiae rerum ipsam fugiat dicta dolorum nulla sint ducimus, quam repellat, beatae laboriosam perferendis maxime exercitationem at cumque nesciunt!sit amet consectetur
           adipisicing elit. Sequi amet voluptas, 
           ducimus consequuntur nobis consequatur 
           velit deserunt at corrupti magnam ipsa
           reprehenderit? Vel minima impedit
            beatae amet in nisi officiis.</p></div>
            <img src={f1} alt="" className='w-1/2' />
      </div>
      
      <div className='abt'>
       <img src={f2} alt="" className='w-1/2' />
        <div className='w-1/3 m-16'>
          <h1 className=' text-5xl font-semibold m-5 my-16'>title number2</h1>
        <p>Lorem ipsum dolor Lorem ipsum dolor 
          sit amet consectetur adipisicing elit. Quidem obcaecati minima molestiae rerum ipsam fugiat dicta dolorum nulla sint ducimus, quam repellat, beatae laboriosam perferendis maxime exercitationem at cumque nesciunt!sit amet consectetur
           adipisicing elit. Sequi amet voluptas, 
           ducimus consequuntur nobis consequatur 
           velit deserunt at corrupti magnam ipsa
           reprehenderit? Vel minima impedit
            beatae amet in nisi officiis.</p></div>
      </div>
      
      <div className='flex abt'>
        <div className='w-1/3 m-16'>
          <h1 className=' text-5xl font-semibold m-5 my-16'>title number3</h1>
        <p>Lorem ipsum dolor Lorem ipsum dolor 
          sit amet consectetur adipisicing elit. Quidem obcaecati minima molestiae rerum ipsam fugiat dicta dolorum nulla sint ducimus, quam repellat, beatae laboriosam perferendis maxime exercitationem at cumque nesciunt!sit amet consectetur
           adipisicing elit. Sequi amet voluptas, 
           ducimus consequuntur nobis consequatur 
           velit deserunt at corrupti magnam ipsa
           reprehenderit? Vel minima impedit
            beatae amet in nisi officiis.</p></div>
            <img src={f3} alt="" className='w-1/2' />
      </div>
     
      <div className='abt'>
       <img src={f4} alt="" className='w-1/2' />
        <div className='w-1/3 m-16'>
          <h1 className=' text-5xl font-semibold m-5 my-16'>title number4</h1>
        <p>Lorem ipsum dolor Lorem ipsum dolor 
          sit amet consectetur adipisicing elit. Quidem obcaecati minima molestiae rerum ipsam fugiat dicta dolorum nulla sint ducimus, quam repellat, beatae laboriosam perferendis maxime exercitationem at cumque nesciunt!sit amet consectetur
           adipisicing elit. Sequi amet voluptas, 
           ducimus consequuntur nobis consequatur 
           velit deserunt at corrupti magnam ipsa
           reprehenderit? Vel minima impedit
            beatae amet in nisi officiis.</p></div>
      </div>
      
    </div>
  )
}
