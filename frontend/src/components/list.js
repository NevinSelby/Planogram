import React from 'react';
import {Link} from 'react-router-dom';

class List extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/')
        .then(response = response.json)
        .then((data)=>{
            this.setState({
                data:data
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        const rowcolindex = this.state.data;
        const rowcolindex2 = rowcolindex.map((planogrambox.boxindex));

        return (
            <table className="storedVal">
                

            </table>
        );
    }
}

export default List;
