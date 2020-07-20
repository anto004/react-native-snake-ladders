export const MOVE_PLAYER = "move_player";


export const movePlayer = (position) => ({
  type: MOVE_PLAYER,
  position,
});