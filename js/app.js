import React from 'react'
import SomeForm from './someForm'

export default () => <div>
    <h1>This the title!</h1>
    <SomeForm initialFieldValue="HI!"/> 
    <br />
    <SomeForm initialFieldValue="This is the power of React"/>
    <br />
    <SomeForm initialFieldValue="Having multiple instances of components"/>
    <br />
    <SomeForm initialFieldValue="With so few lines!"/>
</div>