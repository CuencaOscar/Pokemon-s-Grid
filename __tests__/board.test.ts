import { Board, Positions } from '../src/components/Board_PositionsGameScreen';

describe('game board', () => {
  it('has 8 rows of 15 cells', () => {
    const { tablero } = Board();
    expect(tablero).toHaveLength(120);
    expect(tablero[0]).toBe(0);
    expect(tablero[119]).toBe(119);
  });

  it('places 17 distinct hazards and keeps the start cell free', () => {
    for (let run = 0; run < 50; run++) {
      const { posiciones } = Positions();
      expect(posiciones).toHaveLength(17);
      expect(new Set(posiciones).size).toBe(17);
      expect(posiciones).not.toContain(0);
      expect(Math.max(...posiciones)).toBeLessThan(120);
    }
  });
});
