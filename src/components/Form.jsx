import React from 'react'
import './form.css'
import Button from './Button'
export default function form() {
  return (
    <>
       <form action="" method="post" id="form">
        <div className="form">
            <h1>Registro</h1>
            <div className="grupo">
                <input type="text" name="" id="name" required/><span className="barra"></span>
                <label for="">Nombre</label>
            </div>
            <div className="grupo">
                <input type="email" name="" id="" required/><span className="barra"></span>
                <label for="">Email</label>
            </div>
            <div className="grupo">
                <input type="text" name="" id="" required/><span className="barra"></span>
                <label for="">Password</label>
            </div>
            <Button></Button>
        </div>
    </form> 
    </>
  )
}
