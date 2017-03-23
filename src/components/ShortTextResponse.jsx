import React from 'react';

export default class ShortTextResponse extends React.Component {
    constructor() {
      super();
    }

   static get contextTypes() {
      return { response: React.PropTypes.object.isRequired };
    }

   render() {
      return (
        <div>
          <p>{this.context.response.content}</p>
        </div>
      )
    }
}