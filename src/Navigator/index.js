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

export function setNavigator(container: NavigationContainerComponent) {
  navigationContainer = container;
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

export default {
  setNavigator,
  navigate,
  goBack,
  pop,
  push
};
