
import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 0,
        imagegUrl: 'https://picsum.photos/200',
        tags: ['Books', 'Manuals', 'ShortHistory'],
        
       
    };

    // constructor(){
    //     super();
    //     this.handleIncrement= this.handleIncrement.bind(this);
    // }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key ={tag}>{ tag }</li>)}</ul>
    }

    handleIncrement = (product) => {
        console.log(product);
        this.setState({count: this.state.count + 1});
    };
    
    doHandleIncrement = () => {
        this.handleIncrement({id:1});
    }


   

    render() { 
        
        let classes = this.getBadgeClasses();
        return (
          <div>
             
             <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
             <button
              onClick = {() => this.doHandleIncrement} 
              className ="btn btn-secondary btn-sm"
              >
                 Increment
                 </button> 

             {this.state.tags.length === 0 && 'Please create a new tag!'}
             {this.renderTags() }
          </div>


          );
    
    
        }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

        formatCount() {
            const {count} = this.state;
            return count === 0 ? "Zero": count;
        }


}
 
export default Counter;