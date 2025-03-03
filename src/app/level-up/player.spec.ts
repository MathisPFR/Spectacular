import { Player } from "./player";

describe('LevelUpComponent', () => {

    it('should gain 10 experience point each day', () =>{
        const player = new Player(0, 0);
        player.newDay();
        expect(player.experience).toBe(10);
    });

    it('should start with 0 in experience and level', () => {
        const player = new Player(0, 0);
        expect(player.experience).toBe(0);
        expect(player.level).toBe(0);
    });

    it('should win a level when experience equal 100', () => {
        const player = new Player(0, 100);
        player.newDay();
        expect(player.level).toBe(1);
    });

    it('should keep the same level', () => {
        const player = new Player(0, 10);
        player.newDay();
        expect(player.level).toBe(0);
    });

    it('max level should be 10', () => {
        const player = new Player(10, 100);
        player.newDay();
        expect(player.level).toBe(10);
    });

    it('should have a level strictly inferior to 11', () => {
        const player = new Player(10, 200);
        player.newDay();
        expect(player.level).toBeLessThan(11);
    });

    it('should never have initial experience very high', () => {
        const player = new Player(0, 1000);
        player.newDay();
        expect(player.experience).toBe(10);
    });

    it('should never have negative experience', () =>{
        const player = new Player(0, -10);
        player.newDay();
        expect(player.experience).toBeGreaterThanOrEqual(0);
    });

    it('should never have negative level', () =>{
        const player = new Player(-1, 10);
        player.newDay();
        expect(player.level).toBeGreaterThanOrEqual(0);
    });

    it('experience and level should be a valid number', () => {
        // const player = new Player(NaN, NaN);
        // player.newDay();
        // expect(player.level && player.experience).toBeFalsy();

        //Pas Compris 

    });

    describe('experience excess', () => {
        it('should keep the experience excess after level up', () => {
            const player = new Player(1, 97);
        player.newDay();
        expect(player.experience).toBe(7);

        });
    });
})
