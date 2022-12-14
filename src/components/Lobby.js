import React from "react";
import { Image, List } from "semantic-ui-react";

const PlayerItem = ({ item }) => {
  return (
    <List.Item>
      <Image avatar src={item.avlink} />
      <List.Content>
        <List.Header>{item.name}</List.Header>
      </List.Content>
    </List.Item>
  );
};

export const OnlinePlayers = ({ onlinePlayers }) => {
  return (
    <List selection verticalAlign="middle">
      {onlinePlayers.map((player) => (
        <PlayerItem key={player.id} item={player} />
      ))}
    </List>
  );
};
