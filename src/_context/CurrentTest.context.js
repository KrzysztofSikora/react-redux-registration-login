import React, { Component } from 'react'

const CurrentTestContext = React.createContext()

export class CurrentTestProvider extends Component {


    state = {
        age: 1,
    }



    functionAge = () => {
        console.log("set state age:2")
        return this.setState({age: this.state.age+1})

    }

    render() {
        const { children } = this.props;

        return (
            <CurrentTestContext.Provider
                value={{
                    functionAge: this.functionAge,
                    age: this.state.age,

                }}
            >
                {children}
            </CurrentTestContext.Provider>
        );
    }


}


export const CurrentTestConsumer = CurrentTestContext.Consumer