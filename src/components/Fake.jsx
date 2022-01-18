import React from 'react'
import { useMemo,useState,useLayoutEffect,useRef,useCallback } from 'react'

//usememoo
//tranh rerender 
//

export default function Fake() {
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [products, setproducts] = useState([])

    const nameref = useRef()

    const handleSubmit=()=>{
        setproducts([...products,{
            name,
            price : +price
        }])
        setname('')
        setprice('')

        nameref.current.focus()

    }

    const total = useMemo(() => {
        const result = products.reduce((result,product)=>{
            console.log('tinhh');
            return result +product.price
        },0)

        return result
    }, [products])
    



    return (
        <div style={{padding :20}}>
            <input ref={nameref} value={name} onChange={e=>setname(e.target.value)} placeholder='enter name'/>

            <input value={price} onChange={e=>setprice(e.target.value)} placeholder='enter price'/>

            <br/>

            <button onClick={handleSubmit}>submit</button>

            <br/>
            total:{total}
            <ul>
                {
                    products.map((product,i)=>(
                        <li key={i}>{product.name}-{product.price}</li>
                    )
                    )
                }
            </ul>

        </div>
    )
}
