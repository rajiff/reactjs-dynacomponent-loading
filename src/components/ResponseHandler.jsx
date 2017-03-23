import React from 'react';
import ResponseViewContextUtil from  './ResponseViewContextUtil.jsx';
import ImageListResponse from './ImageListResponse.jsx';
import ShortTextResponse from './ShortTextResponse.jsx';

export default class ResponseHandler extends React.Component {
  constructor() {
    super();

    this.state = {
      responses: [
        {
          contentType: 'imagelist',
          image:'/images/IMG_5774.jpg'
        },
        {
          contentType: 'shorttext',
          content:'Lorem ipsum Magna ex cillum mollit voluptate consectetur do sint eu sunt aliqua non aute laboris labore pariatur in in Ut nostrud ad.'
        }
      ],
      error: ''
    };
  }
  getResponseRendererMap() {
    return {
      shorttext: <ShortTextResponse/>,
      imagelist: <ImageListResponse/>
    };
  }

  render() {
    console.log("inside");
    return (
      <div>
        {
          this.state.responses.map((respObj) => {
            return (
              <div key={respObj.contentType}>
              <ResponseViewContextUtil response={respObj}>
                {
                  this.getResponseRendererMap()[respObj.contentType]
                }
              </ResponseViewContextUtil>
              </div>
            )
          })
        }
      </div>
    );
  }
}

