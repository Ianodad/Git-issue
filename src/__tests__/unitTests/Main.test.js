import React from "react";
import { BrowserRouter, Switch } from 'react-router-dom';

import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import Main from "../../pages/Dashboard/Main";

import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import rootReducer from '../../_reducers';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { gitHubApiActions } from "../../_actions";
import {GET_SEARCH_USER, GET_ALL_OWNER_REPOS, GET_ALL_OWNER_ISSUES, GET_ALL_OWNER_REPO_ISSUES, GET_ONE_OWNER_ISSUE, GET_REPO_ISSUES_COMMENTS ,GET_REPO_ISSUE_COMMENTS } from "../../_actions/types";

const { getAllOwnerRepoIssues, getAllOwnerRepos }= gitHubApiActions;


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const getAllOwnerRepo = () => ({ type: GET_ALL_OWNER_REPOS })


describe("<Main/> testing component", () => {
  let store;
  let wrapper;    
  let state = {
    gitHubApiData:{
      repoIssues:"",
      allOwnerRepos:"",
      allOwnerRepoIssues: "",
      // oneOwnerIssue: "",
      }
    }
    beforeEach(() => {
    store = mockStore(state);

     // Dispatch the action
    // store.dispatch(getAllOwnerRepoIssues())
     store.dispatch = (getAllOwnerRepos());

    wrapper = render(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Main />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  });

    describe("Check component renders", () => {
         it('should render with given state from Redux store', () => {
          expect(Wrapper).toMatchSnapshot();
        });
    });
});
