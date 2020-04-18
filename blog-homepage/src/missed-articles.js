import React from 'react';
import PropTypes from 'prop-types';
import missedArticlesData from './missed-articles.json';

function LinkedImage(props) {
  return(
    <a className='missed-article link' href={props.source.link}>
      <img className='missed-article image' src={props.source.image} alt={props.source.image}/>
    </a>
  )
}

function TitleDescriptionBlock(props){
  return(
    <div>
     <h2 className='missed-article title'>{props.source.title}</h2>
     <div className='missed-article description'>{props.source.description}</div>
    </div>
  )
}

function AuthorBio(props) {
  const isMediumMember = props.source.isMediumMember;
  return(
  <div>
   <h3 className='missed-article author-name'>{props.source.name}</h3>
   <img
    className='missed-article author-image'
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
      <div className='missed-article-article date-readtime'>{postedDate} - {props.source.minutesToRead} Min read</div>
    </div>
  )
}

function HasAudio(props) {
  const hasAudio = props.name.hasAudioAvailable;
  if (hasAudio) {
    return <div className='missed-article audio'><b>Audio available</b></div>
  } return (null)
}

function HasPreview(props) {
  const hasPreview = props.name.memberPreview;
  if (hasPreview) {
    return <div className='missed-article preview'><b>Member preview</b></div>
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

class MissedArticles extends React.Component {
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
        <h1>In case you missed</h1>
        <div className='wrapper'>
          {missedArticlesData.map((article, index) => {return (
            <div className='missed-article container' key={index}>
              <LinkedImage source={article}/>
              <div className='missed-article info-container'>
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

export default MissedArticles
