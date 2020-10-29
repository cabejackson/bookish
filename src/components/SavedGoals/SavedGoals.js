import React, { Component, useState, useEffect } from 'react';
import "./SavedGoals.css";
import config from "../../config";
import TokenService from '../../services/token-services';
import Goal from "./Goal/Goal";




export default class savedGoals extends Component {

    state = {
        error: null,
        isLoaded: false,
        data: [],
        tbr_number: ""
    };



    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/goals/saved-reading-goals/user/${TokenService.getCredentials().userId}`,
            {

                headers:
                {
                    'content-type': 'application/json',
                    'authorization': `bearer ${TokenService.getCredentials().tokenKey}`,
                }
            })
            .then((res) => res.json())
            .then((result) => {
                console.log("this is data:", result)
                this.setState({
                    isLoaded: true,
                    data: result
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });

                    // setData(data)
                    // this.props.data
                    // this.setState(data)
                })
            .catch((error) => {
                console.log(error.message)
            })
    }
    handleDeleteGoal = (goalId) => {
        this.setState({
            data: this.state.data.filter((data) => data.id !== goalId)
        })
    }



    render() {
        const { error, isLoaded, data } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul className="goal-list___ul">
                    {data && data.map(item => (
                        <Goal goal={item} key={item.id} handleDeleteGoal={this.handleDeleteGoal} />

                    ))}

                </ul>
            );
        }
    }
}

//         return (
//             <div>
//                 <p>test</p>
//                 <ul>
//                     {/* {data.map((item) => {
//                         return <li key={item.id}>{item.reading_goals}</li>
//                     })} */}
//                     {/* {data} */}

//                 </ul>
//             </div>
//         )
//     }
// }












// // export default function SavedGoals() {


// //     // GET request for users goals would go in this component

// //     // Users can make PATCH requests to update their goals

// //     // Users can make DELETE requests to delete their goals

// //     // const getUserGoals = (bnb_users_id) => {
// //     //     // const user = bnb_users_id
// //     //     fetch(`${config.API_ENDPOINT}/goals/saved-reading-goals/user/$`, //{bnb_users_id}
// //     //         {

// //     //             headers: {
// //     //                 'content-type': 'application/json',
// //     //                 'authorization': `basic ${TokenService.getAuthToken()}`,
// //     //             }
// //     //         }
// //     //             .then((res) => res.json())
// //     //             .then((data) => {

// //     //                 console.log("this is data:", data)

// //     //             })

// //     //             .catch((error) => {
// //     //                 console.log(error.message)
// //     //             })
// //     //     )

// //     // }


// //     return (
// //         <ApiContext.Consumer>
// //             {context => {
// //                 return (
// //                     <div>
// //                         <h2>Here’s a list of your saved goals.</h2>
// //                         <h3>You may edit/delete them.</h3>
// //                         <p>[table of goals would go here]
// //                 <br />
// //                 until then here's a list of everyone's goals from server:
// //             </p>
// //                         {context.goals.map((item) => {
// //                             return <li key={item.id}>{item.reading_goals}</li>
// //                         })}


// //                         {/* {goals.map(g => (<p key={g.id}>
// //                             {
// //                                 // g.tbr_number,
// //                                 // g.timeframe,
// //                                 g.reading_goals
// //                                 // p.bnb_users_id,

// //                             }
// //                         </p>))} */}
// //                         {/* {context.goals.map(g => (<p key={g.id}>
// //                             {
// //                                 // g.tbr_number,
// //                                 g.timeframe
// //                                 // g.reading_goals
// //                                 // p.bnb_users_id,

// //                             }
// //                         </p>))}
// //                         {context.goals.map(g => (<p key={g.id}>
// //                             {
// //                                 g.tbr_number
// //                                 // g.timeframe,
// //                                 // g.reading_goals
// //                                 // p.bnb_users_id,

// //                             }
// //                         </p>))} */}

// //                         <h3>Here's a link to update a goal</h3>
// //                         {/* <Link to={`/edit/${props.id}`}>Edit Reading Goal</Link> */}

// //                         {/* <Link to={`/edit/${props.bnb_users_id}`}>Edit Reading Goal</Link> */}


// //                         {/* <!-- how do I show a list of tables? -->
// //             <!-- a bunch of ordered li tags maybe?--> */}
// //                         {/* <table >
// //                 <tr>
// //                     <th>SAVED TITLE</th>
// //                     <th>DATE OF GAME</th>
// //                     <th></th>
// //                     <th></th>
// //                 </tr>
// //                 <tr>
// //                     <td>exampleTitle1</td>
// //                     <td>01/01/1970</td>
// //                     <td>✏️</td>
// //                     <td><span role="img">🗑</span></td>
// //                 </tr>
// //                 <tr>
// //                     <td>exampleTitle2</td>
// //                     <td>11/09/2016</td>
// //                     <td>✏️</td>
// //                     <td><span role="img">🗑</span></td>
// //                 </tr>
// //             </table> */}
// //                         <h3>You can start a new goal by clicking the button below:</h3>
// //                         <button id="button-restart-game">
// //                             <NavButton
// //                                 tag={Link}
// //                                 to="/tbr-game"
// //                                 type="button"
// //                                 className="NavButton__to-restart-tbr-games-button"
// //                             >
// //                                 {/* <FontAwesomeIcon icon="plus" /> <br /> */}
// //             NEW GOAL
// //                 </NavButton>
// //                         </button>

// //                     </div>
// //                 )
// //             }}
// //         </ApiContext.Consumer>
// //     )
// // }

