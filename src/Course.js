import React from 'react'

function Course (props) {
    console.log(props);
    const title=props.title;
    const description=props.description
    const image=props.image
    // const {title,description}=props
    return (
    <div>
      <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={image} alt=""/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
     
      <div class="media-content">
        <p class="title is-4">{title}</p>
        
      </div>
    </div>

    <div class="content">
      {description}
    </div>
  </div>
</div>

    </div>
   
    )
}

export default Course ;

