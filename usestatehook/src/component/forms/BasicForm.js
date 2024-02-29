import React from 'react'

const BasicForm = () => {
  return (
   <>
    <form action=''>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name="email" id="email"/>
        </div>

        <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name="password" id="password"/>
        </div>

        <button type='submit'>Login</button>

    </form>


   </>
  )
}

export default BasicForm