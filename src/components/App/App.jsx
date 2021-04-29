import React, {Component} from 'react';
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

export default class App extends Component{

  render() {

    return (
      <div>
        <ErrorBoundry>
          <Spinner />
          <ErrorIndicator />
        </ErrorBoundry>
      </div>
    );
  }
}