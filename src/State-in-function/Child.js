import React from 'react'

import './Child.css'




const Child = (props) => {

    return <section>
        <div>


            <div className="container">
                
                {props.mobile.map((a,b) => {    
                    return a.boo==='true'?(
                    
                        <div className="col" key={b}>
                            <div className="images">
                                <img src={a.src} alt="loading" />
                            </div>
                            <h2>{a.name}</h2>
                            <p>{a.color}</p>
                            <p>{a.rate}</p>

                            <div className='btn' onClick={()=>props.delfun(a.id)}>
                                 Delete
                            </div><br></br>
                            
                           

                        </div>
                        

                    ):''
                })} 
                
            </div>

        </div>




    </section>
}

export default Child