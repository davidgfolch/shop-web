import React from 'react';

export default class RestClient extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            restClient: 'Axios',
            isRestClientAxios: true
        }
    }

    toggleRestClient() {
        this.setState({restClient: this.state.restClient==='Axios'?'Fetch':'Axios' },
            () => this.setState({isRestClientAxios: this.state.restClient==='Axios'}))
        
    }

    render() {
        return (
            <p>{this.state.restClient} Rest Client:&nbsp;
                <button type="button" className={'btn  btn-sm '+(this.state.isRestClientAxios?'btn-primary':'btn-outline-primary')} onClick={()=>this.toggleRestClient()}>Axios</button>
                <button type="button" className={'btn  btn-sm '+(!this.state.isRestClientAxios?'btn-primary':'btn-outline-primary')} onClick={()=>this.toggleRestClient()}>Fetch</button>
            </p>
        );
    }
}
