import ApolloClient from 'apollo-boost';

export default new ApolloClient({
  uri: process.env.REACT_NATIVE_API_URL,
});
