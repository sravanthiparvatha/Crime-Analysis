
import React from 'react';



class SlideImages extends React.Component
{
    render(){
        return(<div id="myCarousel" class="carousel slide" data-ride="carousel">
        
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="item active">
            <img src="crime2.jpg" alt="Los Angeles" style="width:100%;"/>
          </div>
          <div class="item">
            <img src="chicago.jpg" alt="Chicago" style="width:100%;"/>
          </div>
        
          <div class="item">
            <img src="ny.jpg" alt="New york" style="width:100%;"/>
          </div>
        </div>
        </div>)
    }
}
export default SlideImages;