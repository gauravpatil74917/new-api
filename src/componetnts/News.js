import React, { Component } from 'react'
import NewsItem from './News_items';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page:1
    };
  }
  async componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e4144984c2d5450dbae8ef335e0760d3';
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles
    });
  }
  

  handleNextClick = async ()=>{
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e4144984c2d5450dbae8ef335e0760d3&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({page:this.state.page + 1,articles: parsedData.articles});
  }}
  handlePreClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e4144984c2d5450dbae8ef335e0760d3&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page:this.state.page - 1,
      articles: parsedData.articles
    });

  }


  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem 
                  title={element.title ? element.title.slice(0, 45) : ""} 
                  description={element.description ? element.description.slice(0,88):""} 
                  imgurl={element.urlToImage} 
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className='container' class="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-danger" onClick={this.handlePreClick}>&larr;previous</button>
        <button type="button" class="btn btn-primary" onClick={this.handleNextClick}>next &rarr;</button>

        </div>
      </div>
    );
  }
}

export default News;