import React, { Component } from 'react';
import { connect } from "react-redux";
import { ministriesData } from '../../../actions/index';
import { Link } from 'react-router-dom';
import './content.css'

class Content extends Component {
    componentWillMount(){
        this.props.ministriesData()
    }
    renContent = (ministries) => (
        ministries ? 
        ministries.map((min)=>(
            <Link to='/senders' key={min.id}>
                <div className='main-container'>
                    <div className='pic-holder'>
                        <img alt="app-pic" src={min.image} style={{height: '100%', width: '100%'}}/>
                    </div>
                    <div className='name-holder'><h4>{min.name}</h4></div>
                </div>
            </Link>
        )) : null
    )
    render() { 
        return ( 
            <div>
                {this.renContent(this.props.data.ministries)}
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return{
        data: state.ministries
    }
}
 
export default connect(mapStateToProps,{ ministriesData })(Content);