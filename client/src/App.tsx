import { useState, useEffect } from 'react';
import { Container, List } from "semantic-ui-react";

type List = {
  list_name: string,
  display_name: string
}

const getLists = async () => {
  const response = await fetch("/lists");
  const jsonResponse = await response.json();
  const arrayOfLists = jsonResponse.lists.map(
    (list: List) => <List.Item key={list.list_name}>{list.display_name}</List.Item>
  );
  return arrayOfLists;
}

function App() {

  const [lists, setLists] = useState<any | undefined>(undefined);

  useEffect(() => {
    getLists().then(
      result => setLists(result));
  }, []);

  return (
    <Container textAlign='center'>
      <List>{lists}</List>
    </Container>
  );
}

export default App;
