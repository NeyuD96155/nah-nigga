// import React, { Component } from 'react'

// export default class Count extends Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     }
//     render() {
//         return (
//             <div>
//                 CountClassCom
//                 <p>Count:{this.state.count} </p>
//                 <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click</button>
//             </div>
//         )
//     }
// }
import React, { useState } from 'react'

export default function Count() {
    const [car, setCount] = useState({
        brand: "hyndai",
        color: "black"
    }
    )
    return (
        <div> count function com
            <p>{car.color}</p>
            <button onClick={() => setCount({ color: "NIGGER" })}>Click</button>
        </div>
    )
}
