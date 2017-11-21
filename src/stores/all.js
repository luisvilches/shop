import { restar, sumar } from '../actions/actions';

const mapStateToProps = state => {
    return { 
        num: state.num
    }
}

const mapDispachToProps = dispatch => {
    return {
        sumar(sum){
            dispatch(sumar(sum));
        },
        restar(res){
            dispatch(restar(res));
        }
    }
}


export {mapDispachToProps,mapStateToProps}