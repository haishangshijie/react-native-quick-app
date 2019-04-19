import {
  NavigationActions,
  NavigationContainerComponent,
  NavigationLeafRoute,
  NavigationParams,
  StackActions
} from "react-navigation";

let navigationContainer: NavigationContainerComponent;
let lastNavigateTime = Date.now();
let navigationParams: { [key: string]: any } = {};

export function tabNeedAuth(routeName: string) {
  return /None/.test(routeName);
}

export function setNavigator(container: NavigationContainerComponent) {
  navigationContainer = container;
}

export function getNavigator() {
  return navigationContainer;
}

export function setNavigationParams(params: any) {
  navigationParams = params;
}

export function getNavigationParams() {
  return navigationParams;
}

export function navigateReset(routeName: string, params?: NavigationParams) {
  if (navigationContainer) {
    navigationContainer.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName,
            params
          })
        ]
      })
    );
  }
}

export function navigate(
  routeName: string,
  params?: NavigationParams,
  key: string = ""
) {
  if (navigationContainer && lastNavigateTime + 500 < Date.now()) {
    navigationContainer.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
        key
      })
    );
    lastNavigateTime = Date.now();
  }
}

export function push(routeName: string, params?: NavigationParams) {
  if (navigationContainer && lastNavigateTime + 500 < Date.now()) {
    navigationContainer.dispatch(
      StackActions.push({
        routeName,
        params
      })
    );
    lastNavigateTime = Date.now();
  }
}

export function findRoute(
  navState: NavigationLeafRoute<NavigationParams>,
  previous = false
) {
  const prevIndex = previous && navState.index - 1 > 0 ? navState.index - 1 : 0;
  return navState.routes[previous ? prevIndex : navState.index];
}

export function getPreviousRouteName() {
  const currentNav = navigationContainer.state.nav;
  // Get the current active navigation container
  const parentState = currentNav.routes[currentNav.index];
  return findRoute(parentState, true).routeName;
}

export function getCurrentRouteName() {
  const currentNav = navigationContainer.state.nav;
  // Get the current active navigation container
  const parentState = currentNav.routes[currentNav.index];
  return findRoute(parentState).routeName;
}

export function getCurrentRoute() {
  const currentNav = navigationContainer.state.nav;
  // Get the current active navigation container
  const parentState = currentNav.routes[currentNav.index];
  return findRoute(parentState);
}

export function goBack(): boolean {
  navigationContainer.dispatch(NavigationActions.back());
  return true;
}

export function pop(numToPop: number) {
  navigationContainer.dispatch(
    StackActions.pop({
      n: numToPop
    })
  );
}

export function replacePrevious(routeName: string, params?: NavigationParams) {
  if (navigationContainer && lastNavigateTime + 500 < Date.now()) {
    navigationContainer.dispatch(
      StackActions.replace({
        routeName,
        params
      })
    );
    lastNavigateTime = Date.now();
  }
}

export default {
  setNavigator,
  getNavigator,
  setNavigationParams,
  getNavigationParams,
  navigate,
  navigateReset,
  goBack,
  getCurrentRouteName,
  getPreviousRouteName,
  pop,
  tabNeedAuth,
  replacePrevious
};
