import React from 'react'

//styled-components
import styled from "styled-components"

const Div = styled.div`
position: fixed;
top: 0;
left: 0;
display: none;
bottom: 0;
width: 60%;
background-color: ${({ open }) => (open ? "rgba(0, 0, 0, 0.5)" : "")};


@media (max-width:768px){
display: block;
}

@media (max-width:576px){
  width: 50%;
}

`

const Backdrop = ({open , close}) => {
  return (
    <div>
        {open && <Div open={open} onClick={close}></Div>}
    </div>
  )
}

export default Backdrop