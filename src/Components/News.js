import React, {useEffect, useState} from 'react'
import Card from './Card'
import PropTypes from 'prop-types'
import Spinner from '../Spinner'
import thumbnail from '../thumb.png'
// import InfiniteScroll from "react-infinite-scroll-component"


export default function News(props) {
    let { mode  } = props;
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [totalResults, setTotalResults] = useState(0)


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    
    
    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        console.log(url)
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
        setLoading(false)
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - ParaNews`;
        updateNews(); 
        // eslint-disable-next-line
        
    }, [])

    // const fetchMoreData = async () => {   
    //     setPage(page+1) 
    //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     setArticles(articles.concat(parsedData.articles))
    //     setTotalResults(parsedData.totalResults)
        
    //   };
    
    return (
        <>
            <div className="container" >
                    <h2 className='titleName' style={mode}>{capitalizeFirstLetter(props.category)}-Top Headlines</h2>
                        <div className="container1">
                            {loading? (<Spinner/>):(
                    <div className="row" >
                        {/* {loading && <Spinner/>} */}
                        {/* <InfiniteScroll
                            dataLength={articles.length}
                            next={fetchMoreData}
                            hasMore={articles.length !== totalResults}
                            loader={<Spinner/>}
                        >  */}
                                        {/* </InfiniteScroll> */}
                    {articles.map((element) => {
                        return <div className="card" style={mode} key={element.url} >
                                        <Card title={element.title ? element.title : ""} description={element.description ? element.description : "UnAvailable"} imageUrl={element.urlToImage ? element.urlToImage : thumbnail } newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                                        
                                        </div>
                                        })}
                    </div>
                    )}
                    </div>
                </div>    
            </>
        )

}
                    
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}