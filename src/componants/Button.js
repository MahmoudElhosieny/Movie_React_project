// import { Button } from "bootstrap";


export default function Button(props){
    return (
        <>
            <button
                className={`btn ${props.color} col-2 ${props.offset}`} 
                
                onClick={ props.function}
              >
                {props.name }
              </button>
        </>
    );

};