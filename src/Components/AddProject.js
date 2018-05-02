import React, { Component } from 'react';  
import uuid from 'uuid';

class AddProject extends Component { 
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }
  static defaultProps = {
    categories: ['Musing Blockchain', 'Web Dev Affairs', 'Sociology Tomorrow!','April', 'March', 'February']
  }

  handleSubmit(e){
   if(this.refs.title.value === ''){
    alert('Type Title to add Blog Post');
  } else {
    this.setState({newProject:{
      id:uuid.v4(),
      title: this.refs.title.value,
      category: this.refs.category.value
    }}, function(){
     // console.log(this.state);
      this.props.addProject(this.state.newProject);
    });
  }
   console.log(this.refs.title.value);
   console.log(this.refs.category.value);
   // document.write('submitted@ successfully!');
    e.preventDefault();
  }
  
  render() { 
    
    let style3 = {  
     padding:'2rem', 
     backgroundColor: 'rgba(0, 247, 255, 0.4)'
     };
    let categoryOptions = this.props.categories.map(category => {
        return <option key = {category} value={category}>{category} </option>
    });
    return (
      <div  style={style3} > 
       <h3> Add Post</h3>         
       <form onSubmit={this.handleSubmit.bind(this)}>
       <div>
       <label>Title  </label><br />
       <input type="text" ref="title" /> <br />
       </div>
       <div>
       <label>Category  </label><br />
       <select  ref="category" > 
       {categoryOptions}
       </select>
       </div>
       <input type="submit" value="Submit" />
       </form>   
      </div>
    );
  }
}

export default AddProject;
