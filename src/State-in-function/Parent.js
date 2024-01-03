import React from 'react'
import { useState } from 'react'

import Child from './Child.js'
// import funt from 'Parent.js'


import f1 from '../image/f1.jpg'
import f2 from '../image/f2.jpg'
import f3 from '../image/f3.jpg'
import f4 from '../image/f4.jpg'
import f5 from '../image/f5.jpg'
import f6 from '../image/f6.jpg'
import f7 from '../image/f7.jpg'
import f8 from '../image/f8.jpg'

const Parent = () => {
    let phone = [
        {
            src: f1,
            id:1,
            boo:"true",
            name: "Never",
            color: "Green",
            rate: "RS. 15,000",
            count:0
        },

        {
            src: f2,
            id:2,
            boo:"true",
            name: "Never Settle",
            color: "Blue",
            rate: "Rs. 14,500",
            count:0
        },

        {
            src: f3,
            name: "Real Me",
            boo:"true",
            id:3,
            color: "Blue with white",
            rate: "Rs. 16,000",
            count:0
        },

        {
            src: f4,
            name: "Vivo Y12",
            boo:"true",
            id:4,
            color: "Light Green",
            rate: "Rs. 20,000",
            count:0
        },

        {
            src: f5,
            id:5,
            boo:"true",
            name: "Oppo",
            color: "Pink with Skyblue",
            rate: "Rs. 22,000",
            count:0
        },

        {
            src: f6,
            id:6,
            boo:"true",
            name: "Vivo",
            color: "Red",
            rate: "Rs. 55,000",
            count:0
        },

        {
            src: f7,
            id:7,
            name: "Oppo A78",
            color: "Black",
            boo:"true",
            rate: "Rs. 25,000",
            count:0
        },

        {
            src: f8,
            id:8,
            boo:"true",
            name: "Vivo Y56",
            color: "Yellow",
            rate: "Rs. 30,000",
            count:0
        }

    ]

    const [obj, setObj]=useState(phone)

    const del=(id)=>{

        let carddel=obj.map((e)=>{
            return e.id===id?e.boo==="false":e

        })
        console.log(carddel)
        setObj(carddel)
    }


    return <section>

        <div style={{ textAlign: "center" }}>

            <h2>
                STATE-IN-FUCTION
            </h2>

            <p>
                card-display
            </p>

            <Child mobile={obj} delfun={del}/>




        </div>



    </section>
}

export default Parent