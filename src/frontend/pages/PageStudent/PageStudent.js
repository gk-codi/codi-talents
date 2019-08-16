// modules imports
import React, { Component } from 'react';
import { Button, Grid, Row } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactGA from 'react-ga';
// files imports
import PublicWrapper from '../../components/PublicWrapper';
import StudentForEach from '../../components/StudentForEach';
import StudentSelectedList from '../../components/StudentSelectedList';
import student_main_list from '../../Utils/graduatesData';
import FilterSection from '../../components/FilterSection';

const FilterSelected = ({ children }) => {
  return <h3 className="filterSelected">{children}</h3>;
};

export default class PageStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilterSelected: false,
      cityFilter: '',
      skillFilter: '',
      availableFilter: '',
      search: '',
      two: false,
      userSelectedList: [],
      show_selected_students: false,
    };
  }
  onChange = evt => {
    this.setState({ search: evt.target.value });
  };
  setCityFilter = cityFilter => {
    this.setState({
      cityFilter,
      two: '',
      show_selected_students: false,
      isFilterSelected: true,
      search: '',
    });
  };
  removeCityFilter = () => {
    // const cityFilter = this.state.cityFilter
    this.setState({
      cityFilter: '',
      two: '',
      show_selected_students: false,
      search: '',
    });
  };
  setSkillFilter = skillFilter => {
    this.setState({
      skillFilter,
      two: '',
      show_selected_students: false,
      isFilterSelected: true,
      search: '',
    });
  };
  removeSkillFilter = () => {
    this.setState({
      skillFilter: '',
      two: '',
      show_selected_students: false,
      search: '',
    });
  };
  setAvailabileFilter = availableFilter => {
    this.setState({
      availableFilter,
      two: '',
      show_selected_students: false,
      isFilterSelected: true,
      search: '',
    });
  };
  removeAvailabileFilter = () => {
    this.setState({
      availableFilter: '',
      two: '',
      show_selected_students: false,
      search: '',
    });
  };
  showAll = () => {
    this.setState({
      cityFilter: '',
      skillFilter: '',
      availableFilter: '',
      two: '',
      show_selected_students: false,
      search: '',
    });
  };
  showTwo = () => {
    this.setState({
      two: true,
      cityFilter: '',
      skillFilter: '',
      availableFilter: '',
      show_selected_students: false,
      search: '',
    });
  };
  showSelected = () => {
    this.setState({ show_selected_students: true, search: '' });
  };
  AddStudentToList = student => {
    const userSelectedList = this.state.userSelectedList.slice();
    userSelectedList.push(student);
    //  alert("Student has been added successfully")
    this.setState({ userSelectedList });
  };
  OnClickRemove = student => {
    const index = this.state.userSelectedList.indexOf(student);
    if (index < 0) {
      return;
    }
    const selected = this.state.userSelectedList.slice();
    selected.splice(index, 1);
    this.setState({ userSelectedList: selected });
  };

  componentDidMount() {
    ReactGA.initialize('UA-90768506-2');
    ReactGA.pageview('Home Page');
  }

  filterStudents() {
    const search = this.state.search.trim();
    if (!search) {
      return student_main_list;
    }
    const regex = new RegExp(search, 'i');
    return student_main_list.filter(student => regex.test(student.key));
  }

  renderFilteredStudents() {
    const students = this.filterStudents();
    const city = this.state.cityFilter;
    const skill = this.state.skillFilter;
    const available = this.state.availableFilter;
    const two = this.state.two;
    const filteredStudents = students.filter(student => {
      if (city) {
        if (student.city !== city) {
          return false;
        }
      }
      if (skill) {
        const student_has_skill = student.skills.some(
          student_skill => student_skill === skill,
        );
        if (student_has_skill === false) {
          return false;
        }
      }
      if (available) {
        if (student.availability !== available) {
          return false;
        }
      }
      return true;
    });
    const studentList = filteredStudents;
    const finalStudentList = two ? studentList.slice(0, 2) : studentList;
    const reactStudents = finalStudentList.map(student => (
      <StudentForEach
        linkedin={student.linkedin}
        looking_for={student.looking_for}
        OnClickAdd={() => this.AddStudentToList(student)}
        image={'/img/graduates/' + student.imagename + '.jpeg'}
        {...student}
        key={student.name}
      />
    ));
    return reactStudents;
  }

  renderSelectedStudents() {
    ReactGA.pageview('Selected student - (show list)');
    return this.state.userSelectedList.map(student => (
      <StudentSelectedList
        OnClickRemove={() => this.OnClickRemove(student)}
        OnClickAdd={() => this.AddStudentToList(student)}
        image={'/images/' + student.imagename + '.jpeg'}
        {...student}
        key={student.name}
      />
    ));
  }

  renderStudents() {
    if (this.state.show_selected_students) {
      return this.renderSelectedStudents();
    } else {
      return this.renderFilteredStudents();
    }
  }

  render() {
    const students_list = this.renderStudents();

    return (
      <PublicWrapper>
        <div>
          {/* Filter Section contains all the html and buttons begins here */}
          <div className="filter" style={{ width: '100%' }}>
            <FilterSection
              setCityFilter={this.setCityFilter}
              setSkillFilter={this.setSkillFilter}
              setAvailabileFilter={this.setAvailabileFilter}
              showAll={this.showAll}
              showSelected={this.showSelected}
              showTwo={this.showTwo}
              searchValue={this.state.search}
              onSearchChange={this.onChange}
            />
          </div>
          <div className="multipleFilters text-center">
            {this.state.cityFilter ||
            this.state.skillFilter ||
            this.state.availableFilter ? null : (
              <FilterSelected>No Filter Selected</FilterSelected>
            )}

            {this.state.cityFilter ? (
              <div className="block city-block">
                {this.state.cityFilter}
                <Button bsStyle="danger" onClick={this.removeCityFilter}>
                  X
                </Button>
              </div>
            ) : null}
            {this.state.skillFilter ? (
              <div className="block skill-block">
                {this.state.skillFilter}
                <Button bsStyle="danger" onClick={this.removeSkillFilter}>
                  X
                </Button>
              </div>
            ) : null}
            {this.state.availableFilter ? (
              <div className="block available-block">
                {this.state.availableFilter}
                <Button bsStyle="danger" onClick={this.removeAvailabileFilter}>
                  X
                </Button>
              </div>
            ) : null}
          </div>

          <div className="student">
            <Grid>
              <Row>
                <ReactCSSTransitionGroup
                  style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'center',
                  }}
                  transitionName={'student'}
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}
                >
                  {students_list.length ? (
                    students_list
                  ) : (
                    <div className="noResult">
                      <h1>no results...</h1>
                      <Button onClick={() => this.showAll()}>
                        Show All Students
                      </Button>
                    </div>
                  )}
                </ReactCSSTransitionGroup>
              </Row>
            </Grid>
          </div>
        </div>
      </PublicWrapper>
    );
  }
}
