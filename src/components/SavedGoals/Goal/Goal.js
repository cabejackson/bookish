import React from 'react'
import config from "../../../config";
import TokenService from '../../../services/token-services'

const Goal = ({ goal, handleDeleteGoal }) => {



    const handleClickDelete = (e) => {
        const goalId = goal.id;

        fetch(`${config.API_ENDPOINT}/goals/saved-reading-goals/user/${TokenService.getCredentials().userId}/${goalId}`, //make dynamic
            {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    'Authorization': `bearer ${TokenService.getCredentials().tokenKey}`,

                }
            })
            .then(() => {
                handleDeleteGoal(goalId);
                // or m aybe this below:
                // this.props.deleteNote(goalId);
            })
            .catch((error) => {
                console.error({ error });
            });
    };

    // handleClickEdit = (e) => {
    //     e.preventDefault();

    //     fetch(`${config.API_ENDPOINT}/goals/saved-reading-goals/user/${TokenService.getCredentials().userId}/${goalId}`, //make dynamic
    //         {
    //             method: "PATCH",
    //             headers: {
    //                 "content-type": "application/json",
    //                 'authorization': `bearer ${TokenService.getCredentials().tokenKey}`,
    //             }
    //         })
    //         .then(() => {
    //             this.context.deleteNote(noteId);
    //             // allow parent to perform extra behaviour
    //             this.props.onDeleteNote(noteId);
    //         })
    //         .catch((error) => {
    //             console.error({ error });
    //         });
    // };


    return (
        <li className="list-item">
            {/* <span>timeframe</span> */}

            <span>
                {/* <p>{goal.id}</p> */}
                <span>id #:</span><span> {goal.id}</span>
                <br />
                <span>Timeframe:</span><span> {goal.timeframe}</span>
                <br />
                <span>TBR Goal:</span><span> {goal.tbr_number}</span>
                <br />
                <span>My Reading Goals:</span><span> {goal.reading_goals}</span>
            </span>
            {/* <pre>{JSON.stringify(goal, null, 2)}</pre> */}
            <div>
                <button
                    className="btn-delete-task-btn"
                    type="button"
                    onClick={handleClickDelete}

                >delete</button>
                <button
                    className="btn-edit-task-btn"
                // onClick={this.handleClickEdit}
                >edit</button>
            </div>
        </li>
    )
}

export default Goal
// return (
//     <img
//         src={
//             state
//                 ? "//placehold.it/100?text=" + cardId
//                 : "//placehold.it/100?text=Back"
//         }
//         alt={state ? "Front" : "Back"}
//         onClick={() => {
//             setState(!state);
//         }}
//     />
// );