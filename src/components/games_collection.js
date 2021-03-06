import React, { Component } from 'react';
import Slider from 'react-slick';

import Navbar from './navbar';
import './games_collection.css';

class GamesCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideOpts: {
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        dots: false,
        focusOnSelect: false,
        infinite: true,
        initialSlide: 0,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 1024, settings: { slidesToShow: 4 } },
          { breakpoint: 1366, settings: { slidesToShow: 6 } },
          { breakpoint: 10000, settings: { slidesToShow: 6 } },
        ],
        slidesToScroll: 1,
        speed: 500,
      },
    };
  }

  componentDidMount() {
    this.props.onHandleMenuClick();
  }
  componentWillUnmount() {
    this.props.onHandleMenuClick();
  }

  render() {
    const { games, onMenuClick } = this.props;

    return (
      <React.Fragment>
        <div className="row-slider">
          <Slider {...this.state.slideOpts}>
            {
              games.map((data) => {
                return (
                  <div className="game-cover fade-in" key={data.title}>
                    <a href="/check">
                      <img src={data.imageUrl} style={{ width: '100%' }} alt={data.title} />
                    </a>
                    <p className="game-title">{data.title}</p>
                  </div>
                );
              })
            }
          </Slider>
        </div>
        <Navbar isMenuClicked={onMenuClick} />
      </React.Fragment>
    );
  }
}

export default GamesCollection;
