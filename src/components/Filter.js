import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <section className="filter-component">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="form-control">
                {/* <b># of Products:</b> &nbsp;
                <b className="text-danger"> {this.props.count}</b> &nbsp; &nbsp; */}
                <b>Sort by price:</b> &nbsp;
                <select
                  className="col-sm-2"
                  value={this.props.size}
                  onChange={this.props.sortProducts}
                >
                  &nbsp;
                  <option disabled>Select one</option>
                  <option>Latest</option>
                  <option value="lowest">Lowest</option>
                  <option value="highest">Highest</option>
                </select>
                &nbsp; &nbsp;
                <b>Filter by Size</b> :&nbsp; &nbsp;
                <select
                  className=" col-sm-2"
                  value={this.props.size}
                  onChange={this.props.filterProducts}
                >
                  <option disabled>Select one</option>
                  <option value="">ALL</option>
                  <option value="M">M</option>
                  <option value="S">S</option>
                  <option value="L">L</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Filter;
