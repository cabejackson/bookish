import React, { Component } from 'react';
//example from readings - https://courses.thinkful.com/ei-node-postgres-v1/checkpoint/17
export default class EditArticleForm extends Component {
    /* state for inputs etc... */

    handleSubmit = e => {
        e.preventDefault()
        // validation not shown
        fetch(`https://localhost:8000/api/articles/${this.props.match.params.articleId}`, {
            method: 'PATCH',
            body: JSON.stringify(this.state.inputValues)
        })
            .then(/* some content omitted */)
            .then(responseData => {
                this.context.updateArticle(responseData)
            })
    }
    componentDidMount() {
        const articleId = this.props.match.params.articleId
        fetch(`https://localhost:8000/api/articles/${articleId}`, {
            method: 'GET'
        })
            .then(/* some content omitted */)
            .then(responseData => {
                this.setState({
                    /* fields state updates here */
                })
            })
            .catch(error => {/* some content omitted */ })
    }
    render() {
        const { title, style, content } = this.state
        return (
            <section className='EditArticleForm'>
                <h2>Edit article</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id='title'
                        type='text'
                        name='title'
                        placeholder='Great article!'
                        required
                        value={title}
                        onChange={this.handleChangeTitle}
                    />
                </form>
            </section>
        )
    }
}