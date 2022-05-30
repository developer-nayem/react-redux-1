import React, { useReducer } from 'react';
import { PatientReducer, patientState } from '../../reducers/PatientReducer';
import { useRef } from 'react';
const PatientManagement = () => {
    const nameRaf = useRef();
    const [state, dispatch] = useReducer(PatientReducer, patientState);
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
          type: 'ADD_PATIENT',
          name: nameRaf.current.value, 
          id: state.patients.length + 1
        })
        nameRaf.current.value = '';
    }
    return (
        <div>
            <h1>Patient Management: {state.patients.length} </h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRaf}></input>
            </form>
            {
                state.patients.map(pt => <li
                      key={pt.id}
                      onClick={() => dispatch({type: 'REMOVE_PATIENT', id: pt.id})}
                      >{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;