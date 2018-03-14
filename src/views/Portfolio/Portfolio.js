import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from 'material-ui/MenuItem';

import projectActions from '../../store/project/actions';

import ProjectTile from '../../containers/ProjectTile';
// import SingleProject from '../../containers/SingleProject';

import {
  AlignToDropdown,
  FilterIcon,
  ProjectsWrapper,
  FilterWrapper,
  SkillDropdownMenu,
  CategoryDropdownMenu,
  PortfolioWrapper,
  SingleProjectWrapper,
  ScrollingCardRight,
  ScrollingCardLeft,
} from './Portfolio.styles';

export class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCategory: 0,
      selectedSkill: 0,
      isProjectOpen: false,
    }
  }

  handleCategoryChange = (event, index, value) => this.setState({
    selectedCategory: value,
    selectedSkill: 0,
  });

  handleSkillChange = (event, index, value) => this.setState({
    selectedSkill: value,
    selectedCategory: 0
  });

  openProject = (id) => {
    const {
      setSelectedProject,
    } = this.props;

    window.scrollTo(0,0);

    setSelectedProject(id);
    this.setState({ isProjectOpen: true });
  };

  closeProject = () => {
    this.setState({ isProjectOpen: false });
  }

  render() {
    const {
      projects,
      project,
      loaded,
      skills,
      categories,
    } = this.props;

    const {
      selectedCategory,
      selectedSkill,
      isProjectOpen,
    } = this.state;

    const CategoryItems = Object.values(categories).map(c => {
      return <MenuItem value={c.id} key={c.id} primaryText={c.name}/>
    });

    const CategoryDropdown = (
      <CategoryDropdownMenu autoWidth={false} value={this.state.selectedCategory} onChange={this.handleCategoryChange}>
        <MenuItem value={0} key={0} primaryText={'Filter by Category'}/>
        {CategoryItems}
      </CategoryDropdownMenu>
    );

    // TODO could be helpful to have Skill (Count) on the dropdown
    const SkillsItems = Object.values(skills).map(s => {
      return <MenuItem value={s.id} key={s.id} primaryText={s.name}/>
    });

    const SkillsDropdown = (
      <SkillDropdownMenu autoWidth={false} value={this.state.selectedSkill} onChange={this.handleSkillChange}>
        <MenuItem value={0} key={0} primaryText={'Filter by Skill'}/>
        {SkillsItems}
      </SkillDropdownMenu>
    );

    const selectedProjects = Object.values(projects).filter(p => {
      const isInCategory = selectedCategory !== 0 ? p.category.includes(selectedCategory) : true;
      const isInSkill = selectedSkill !== 0 ? p.skill.includes(selectedSkill) : true;
      return (isInCategory && isInSkill)
    }).map(p => {
      return <ProjectTile
        key={ p.id }
        projectId={ p.id }
        openProject={ this.openProject }
      />;
    });

    const SingleProjectDetails = Object.keys(project).map(d => {
      console.log(d);
      return (
        <p>
          <b>{d}</b> {String(project[d])}
        </p>
      );
    })

    return (
      <PortfolioWrapper>
        <ScrollingCardLeft title="Portfolio" isProjectOpen={ isProjectOpen }>
          <FilterWrapper>
            <FilterIcon /> {CategoryDropdown} <AlignToDropdown>Or</AlignToDropdown> {SkillsDropdown}
          </FilterWrapper>
          <ProjectsWrapper>
            {selectedProjects}
          </ProjectsWrapper>
        </ScrollingCardLeft>

        <ScrollingCardRight title={project.name} isProjectOpen={ isProjectOpen }>
          <button onClick={ this.closeProject }>Close me</button>
          { SingleProjectDetails }
        </ScrollingCardRight>
      </PortfolioWrapper>
    )
  }
}

export default connect((state) => ({
  projects: state.project.all,
  project: state.project.all[state.project.selected],
  categories: state.category.all,
  skills: state.skill.all,
}), {
  setSelectedProject: projectActions.setSelectedProject,


})(Portfolio);
