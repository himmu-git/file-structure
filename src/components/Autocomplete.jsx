import React, {useEffect, useRef, useState} from 'react'



function Autocomplete({autoCompleteData}) {
    const [data,setData] = useState(autoCompleteData);
    const [selectedChips, setSelctedChips] = useState([]);
    const inputRef = useRef();
    useEffect(()=>{
        setData(autoCompleteData)
    },[autoCompleteData])
    const [inputValue, setInputValue] = useState('');
    const filterOutResults = (key) => {
        if(key) {
            setData(()=>{
                return autoCompleteData.filter(({text}) => { 
                   return text.indexOf(key) > -1
                })
            })
        }
        else {
            setData(autoCompleteData)
        }
         
    }
    const onSelection = ({id,text}) =>{
        setSelctedChips((chips)=>{
            return [...chips,...[{id,text}]]
        })
    }
    const handleOnInputChange = (e) => {
        setInputValue(()=>{
            filterOutResults(e.target.value)
            return e.target.value;
        })
    }
    
    return (
        <>
        <input ref={inputRef}  value={inputValue} onChange={handleOnInputChange} />
        <div>
            {selectedChips.map(({id,text})=>{
                return <div key={id}  >{text} <span onClick={()=>{
                    setSelctedChips((chips)=> {
                        return [...chips.filter(({id:idInFilter}) => { return idInFilter != id })]
                    })
                }}>delete</span></div> 
            })}
        </div>
       {inputValue &&  <ul>
            {data.map(({id,text})=>{
                return <li   key={id} onClick={()=>{
                    onSelection({id,text})
                }}>{text}</li>
            })}
        </ul>}
        </>
    );
}

export default Autocomplete