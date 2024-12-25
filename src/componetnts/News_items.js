import React, { PureComponent } from 'react'

export default class News_items extends PureComponent {
  render() {
    let {title,description,imgurl,url}=this.props;
    return (
      <div className='my-4'>
        <div className="card" style={{width: "18rem"}}>
        <img src={imgurl} className="card-img-top" alt="..."/>
        <div classname="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={url} target='_blank' className="btn btn-sm btn-dark">read more</a>
        </div>
        </div>
      </div>
    )
  }
}
