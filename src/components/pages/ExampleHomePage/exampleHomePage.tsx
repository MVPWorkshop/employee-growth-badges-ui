import React, { Component } from 'react';
import Button from '../../atoms/Button/Button';
import TextInput from '../../atoms/TextInput/TextInput';
import Dropdown from '../../molecules/Dropdown/Dropdown';
import SelectTag from '../../atoms/SelectTag/SelectTag'

class ExampleHomePage extends Component {
state = {
   Name:"",
    country:"",
}

onChangeHandler = (value:string, name:string) => {
    this.setState({
        [name]:value
    })
}
  render() {
    console.log(this.state)
    return (
      <div className='container'>
        <Button/>
           <TextInput name={"Name"} label={'Name'} value={this.state.Name} onChange={this.onChangeHandler} placeholder={"Enter your Name"}/>
           {/*<Dropdown*/}
           {/*    options={['prvi','drugi','treci']}*/}
           {/*    toggleLabel={'Dugme'}*/}
           {/*/>*/}

           <SelectTag
               label={'Chose country'}
               value={this.state['country']}
               name={'country'}
               options={['USA','Afganistan','France','Serbia']}
               onChange={this.onChangeHandler}
           />
      </div>


    )
  }
}

export default ExampleHomePage;
