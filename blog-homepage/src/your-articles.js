import React from 'react';
import PropTypes from 'prop-types';
import yourArticlesData from './your-articles.json';

function LinkedImage(props) {
  return(
    <a className='your-article link' href={props.source.link}>
      <img className='your-article image' src={props.source.image} alt={props.source.image}/>
    </a>
  )
}

function TitleDescriptionBlock(props){
  return(
    <div>
     <h2 className='your-article title'>{props.source.title}</h2>
     <div className='your-article description'>{props.source.description}</div>
    </div>
  )
}

function AuthorBio(props) {
  const isMediumMember = props.source.isMediumMember;
  return(
  <div>
   <h3 className='your-article author-name'>{props.source.name}</h3>
   <img
    className='your-article author-image'
    style={ isMediumMember ? {border: '5px solid green'} : {}}
    src={props.source.image}
    alt={props.source.image}
   />
  </div>
  )
}

function DateAndDuration(props) {
  const dateString = props.source.postedDate
  const postedDate = new Date(dateString).toLocaleDateString()
  return(
    <div>
      <div className='your-article-article date-readtime'>{postedDate} - {props.source.minutesToRead} Min read</div>
    </div>
  )
}

function HasAudio(props) {
  const hasAudio = props.name.hasAudioAvailable;
  if (hasAudio) {
    return <div className='your-article audio'><b>Audio available</b></div>
  } return (null)
}

function HasPreview(props) {
  const hasPreview = props.name.memberPreview;
  if (hasPreview) {
    return <div className='your-article preview'><b>Member preview</b></div>
  } return (null)
}

function Availability(props) {
  return(
    <div>
      <HasAudio name={props.source}/>
      <HasPreview name={props.source}/>
    </div>
  )
}

class YourArticles extends React.Component {
  static propTypes = {
    source: PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            isMediumMember: PropTypes.bool.isRequired
          }).isRequired,
          postedDate: PropTypes.string.isRequired,
          minutesToRead: PropTypes.number.isRequired,
          hasAudioAvailable: PropTypes.bool.isRequired,
          memberPreview: PropTypes.bool.isRequired
        })
}

  render(){
    const {source} = this.props;

    return(
      <div>
        <h1>For you</h1>
        <hr/>
        <div className='wrapper'>
          {yourArticlesData.map((article, index) => {return (
            <div className='your-article container' key={index}>
              <div className='your-article image-container'>
              <LinkedImage source={article}/>
              </div>
              <div className='your-article info-container'>
                <Availability source={article}/>
                <TitleDescriptionBlock source={article}/>
                <AuthorBio source={article.author}/>
                <DateAndDuration source={article}/>
                <div><b>Bookmark</b></div>
              </div>
            </div>
          )})}
        </div>
      </div>
    );
  }
}



export default YourArticles
