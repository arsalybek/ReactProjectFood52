import React, { Component, ComponentType } from "react";
import axios from "../../api/axios";
import { RecipeModel } from "../../models/Recipe";

interface Props {
  fetchUrl?: string,
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
        curRecipeList: [],
      };
    }

    async fetchData() {
      const result = axios.get(props.fetchUrl!);
      console.log(result);
      (await result).data.map((recipe: RecipeModel) => {
        if (recipe.categoty_id == props.categoryId) {
          this.state.curRecipeList.push(recipe);
          this.setState({ curRecipeList: this.state.curRecipeList })
        };
      })
    }

    async componentDidMount() {
      this.fetchData();
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
