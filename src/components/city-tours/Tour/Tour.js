import React, { Component } from 'react';
import './Tour.scss';

class Tour extends Component {
	constructor() {
		super();
		this.state = {
			showInfo: false,
		};
	}

	handleInfo = () => {
		this.setState({
			showInfo: !this.state.showInfo,
		});
	};

	render(props) {
		const { id, city, img, name, info } = this.props.tour;
		return (
			<article className="tour">
				<div className="img-container">
					<img src={img} alt="" />
					<span className="close-btn">
						<i className="fas fa-window-close" onClick={() => this.props.removeTour(id)} />
					</span>
					<div className="tour-info">
						<h3>{city}</h3>
						<h4>{name}</h4>
						<h5>
							info{' '}
							<span onClick={this.handleInfo}>
								<i className="fas fa-caret-square-down" />
							</span>
							{this.state.showInfo && <p>{info}</p>}
						</h5>
					</div>
				</div>
			</article>
		);
	}
}

export default Tour;
