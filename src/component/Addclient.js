 import React, {useState,useEffect } from 'react'
import "./Addclient.css"



let getLocalData = ()=>{
    const list = localStorage.getItem("myList")
    if(list){
      return JSON.parse(list)
    }
    else {
      return []
    }
   }
  export default function Addclient() {
      
          const [inputdata, setInputData] = useState("");
          const [items, setItems] = useState(getLocalData());
          const [iseditItem, setiseditItem] = useState("");
          const [toggleButton, settoggleButton] = useState("false")
          // add item function
          const addItem = ()=>{
            if(!inputdata){
              alert("plz fill the data")
            }
            else if (inputdata && toggleButton){
              setItems(
                items.map((curElem) => {
                  if(curElem.id=== iseditItem){
                     return {...curElem,name:inputdata}
                  }
                  return curElem
                })
              )
              setInputData("")
            setiseditItem(null)
            settoggleButton(false)
            }
            else{
              const myInputData = {
                id:new Date().getTime().toString(),
                name :inputdata
              }
              setItems([...items ,myInputData])
              setInputData("")
            }
          }
  
          // edit item 
  
          const editItem = (index)=>{
            const todoEdit = items.find((curElem)=>{
              return curElem.id ===index
            })
            setInputData(todoEdit.name)
            setiseditItem(index)
            settoggleButton(true)
          }
  
  
            // delteItem function 
            const deleteItem = (index) =>{
              let upDateditems = items.filter((curElem) =>{
                return curElem.id !== index
              })
              setItems(upDateditems)
            }
             const removeAll = ()=>{
              setItems([])
             }
             useEffect(()=>{
              localStorage.setItem("myList",JSON.stringify(items))
             },[items])
  
    return (
      <>
      
      <div className="main-div">
          <div className="child-div">
            <figure>
              
              <figcaption>Add Your List Here </figcaption>
            </figure>
            <div
                className="addItems">
            <input
                type="text"
                placeholder=" Add Item"
                className="form-control"
                value={inputdata}
                onChange={(event) => setInputData(event.target.value)}
              />
              {toggleButton ? (<i className="far fa-edit add-btn" onClick={addItem}></i>):(<i className="fa fa-plus add-btn" onClick={addItem}></i>)
  
  }
  
              </div>
  
              <div className="showItems">
              {items.map((curElem) =>{
                    return (
                  <div className="eachItem" key ={curElem.id}>
                      <h3>{curElem.name}</h3>
                      <div className="todo-btn">
                      <i className="far fa-edit add-btn" onClick={()=>editItem(curElem.id)}></i>
                      <i className="far fa-trash-alt add-btn" onClick={() =>deleteItem(curElem.id)}></i>
  
                      </div>
                  </div>
                    )
                  })}
              </div>
  
  
               {/* rmeove all button  */}
              <div className="showItems">
                  <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span></button>
              </div>
      </div>
  
      </div>
      </>
    )
  }
   