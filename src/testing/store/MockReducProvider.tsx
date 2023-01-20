import { Provider } from "react-redux";

interface ReduxProviderProps {
  children: React.ReactNode;
  reduxStore: any;
}

const MockReduxProvider: React.FC<ReduxProviderProps> = ({
  children,
  reduxStore,
}) => <Provider store={reduxStore}>{children}</Provider>;

export default MockReduxProvider;
