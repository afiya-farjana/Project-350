import React from 'react';
import Footer from '../Footer/Footer';
import { Link } from 'react-router';
import '../../App/app.scss';
import './dashboard-view.scss';

var DashboardView = React.createClass({

    propTypes: {
        username: React.PropTypes.string,
        handleClearItemsFromOrder: React.PropTypes.func
    },

    render: function() {
        return (
            <div className='dashboard-container'>
                <div className='title-cover'>
                <h1>Hey {this.props.username}!</h1>
                <h1>Your coffee is just minutes away.</h1>
                </div>

                <div className='main-wrap'>
                        <Link to='/select-shop' className='start-button-wrap'>
                            <button
                                onClick={this.props.handleClearItemsFromOrder}
                                className='next-button start-button'>
                                <i className='fa fa-coffee' aria-hidden='true'></i>
                                    Start
                            </button></Link>
                </div>
                <div className='dash-landing-icon-wrap'>
                    <div className='dash-landing-icon dash-landing-icon-1'>
                        <img src='/img/landing-icon-1.png' />
                        <h2>Select a shop</h2>
                    </div>
                    <div className='dash-landing-icon dash-landing-icon-2'>
                        <img src='/img/landing-icon-2.png' />
                        <h2>Place your order</h2>
                    </div>
                    <div className='dash-landing-icon dash-landing-icon-3'>
                        <img src='/img/landing-icon-3.png' />
                        <h2>Ready when you arrive!</h2>
                    </div>
                    <div className='dash-landing-icon dash-landing-icon-4'>
                        <img src='/img/landing-icon-3.png' />
                        <h2>Or get delivery!</h2>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
});

module.exports = DashboardView;


_react2.default.createElement(
    'div',
    {className: 'wrapper'},
     _react2.default.createElement(
      'div',
      { className: 'link_wrapper'},
       _react2.default.createElement(
        'p', 
        null,
         'Let\'s Start!'
      ),
       _react2.default.createElement(
        'div',
        {className: 'icon'},
         _react2.default.createElement(
          'svg',
          {xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 268.832 268.832'},
           _react2.default.createElement('path', {
            d:
              'M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z'
          })
        )
      )
    )
  )
