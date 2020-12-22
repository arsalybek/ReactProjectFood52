import React, { Component, ComponentType } from "react";
import axios from "../../api/axios";
import { MenuModel } from "../../models/food";

interface Props {
  fetchUrl?: string,
  categoryId?: number;
}
interface State {
  curRecipeList: MenuModel[];
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
      (await result).data.map((recipe: MenuModel) => {
        if (recipe.category_id == props.categoryId) {
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
