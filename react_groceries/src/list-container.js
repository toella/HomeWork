import React from "react";
import listFilter from './listFilter';
import list from './list';
import { filter } from "minimatch";
import { render } from "@testing-library/react";

class listContainer extends React.Component{
    constructor(props);
    super(props)
    this.state = {
        filter: 'not purchased',
    }


    handleFilterChange = (filter) => {
        this.setstate = (
             {
                filter = filter,
            }
        )
    }

    render(){

        return(
            <div className= 'container listContainer'>
                <listFilter onFilterChange={this.handleFilterChange}/>
                <list groceries= {this.props.groceries}/>
            </div>
        );
    }
        
}
export default listContainer;