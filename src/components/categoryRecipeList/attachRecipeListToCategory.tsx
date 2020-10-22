import React, { Component, ComponentType } from "react";
import {RecipeModel, recipeList} from "../../models/Recipe";

interface Props {
  categoryId?: number;
}
interface State {
  curRecipeList: RecipeModel[]; 
}

const withDataFetching = (props: Props) => (
  WrappedComponent: ComponentType<State>
) => {
  class WithDataFetching extends Component<Props, State> {
    constructor() {
      super(props);
      this.state = {
        curRecipeList: []
      };
    }

    fetchList() {
    recipeList.map((recipe) => {if (recipe.categoty_id == props.categoryId){
        this.state.curRecipeList.push(recipe);
        this.setState({curRecipeList:this.state.curRecipeList })
      };})
    }

    async componentDidMount() {
      this.fetchList();
    }

    render() {
      const { curRecipeList } = this.state;

      return (
        <WrappedComponent
          curRecipeList={curRecipeList}
          {...this.props}
        />
      );
    }
  }

  return WithDataFetching;
};

export default withDataFetching;
