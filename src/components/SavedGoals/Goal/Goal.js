import React from 'react';
import config from "../../../config";
import TokenService from '../../../services/token-services';

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
        <li className="Goal__li">
            <div className="listItem">
                <span>
                    {/* <p>{goal.id}</p> */}
                    {/* <span>id #:</span><span> {goal.id}</span> */}
                    <br />
                    <span className="Goal__timeframe">During</span><span> {goal.timeframe},</span>
                    <br />
                    <span>You plan to read</span><span> {goal.tbr_number}</span><span> books!</span>
                    <br />
                    <span className="readingDetails__span">Here's some details about your reading goals:</span><span> {goal.reading_goals}</span>
                </span>
                {/* <pre>{JSON.stringify(goal, null, 2)}</pre> */}
                <div>
                    <button
                        className="deleteGoal__btn"
                        type="button"
                        onClick={handleClickDelete}

                    >delete</button>
                    {/* <button
                    className="btn-edit-task-btn"
                // onClick={this.handleClickEdit}
                >edit</button> */}
                </div>
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