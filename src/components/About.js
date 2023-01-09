import { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        backgroundColor : "white",
        padding : "7.5px",
        color : "black"
    });
    const[darkmode, setDarkMode] = useState(false)
    const EnableDrk = () => {
        setDarkMode((pre) => 
            !pre
        )   
    }
   
  
  return (
    <div className='container' style={myStyle} data-bs-theme={darkmode?"dark": "light"}>
        <h3>About Us</h3>
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eveniet, culpa repellat eius accusamus pariatur enim et perferendis accusantium dicta quaerat natus. demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis facilis magni non ipsum ipsa dolores eligendi optio voluptatum odio fugit, reprehenderit aliquid quis omnis ratione veniam? Porro odio itaque officia illum magnam?Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more excit Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptate aut obcaecati sit? Doloremque nobis eaque voluptate voluptatem rem officia, ipsam dolorem odio voluptates repellendus quibusdam dolores est quia, impedit aspernatur? Rem a non sed eos dignissimos! Nobis maxime, consectetur corrupti dignissimos nesciunt ex rem maiores nam inventore doloribus ullam minima in. Nesciunt atque dignissimos at.ing happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div className="container my-3">
  <button type="button" className="btn btn-dark" onClick={EnableDrk}>{darkmode?"Enable light mode": "Enable dark mode"}</button>
  </div>
</div>
    </div>
  )
}
