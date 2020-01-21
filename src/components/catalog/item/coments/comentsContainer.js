import React from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {addCommentActionCreator, setLoadingActionCreator, setComentsActionCreator,changeInputTextActionCreator } from '../../../../redux/reducers/coments-reducer'
import Comments from './coments'
 
class ComentsContainer extends React.Component{
  componentDidMount() {  
    axios.get(`http://localhost:3000/coments?propertyId=${this.props.id}`)
    .then(res => {    
        this.props.setComents(res.data);
    })
}
  render (){   
    return(
      <div>
        <Comments {...this.props}></Comments>
      </div>
    )
    
  }
}

let mapStateToProps = (state) =>{
    return{
      isLoading: state.commentsPage.isLoading,
      coments: state.commentsPage.coments,
      inputComentText: state.commentsPage.comentsText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        setComents: (coments) =>{ 
            dispatch(setComentsActionCreator(coments));
        },
        setLoading: (isLoading) => {
            dispatch(setLoadingActionCreator(isLoading));
        },
        addComment: (text, propertyId) => {
            
            let now = new Date(); 
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            let coment= {
                id: getRandomInt(400),
                propertyId: propertyId,
                coment: text,
                published: `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`
            } 
            dispatch(addCommentActionCreator(coment));
        },
        changeInputText: (text)=>{
            dispatch(changeInputTextActionCreator(text));
        }
    }
}
// let  WithUrlDataContainer = withRouter(ComentsContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ComentsContainer);
 

 