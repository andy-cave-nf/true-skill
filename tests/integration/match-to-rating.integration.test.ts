
describe('given two rated players and a match result, return updated ratings with winner increasing mu and loser decreasing mu', () => {
    let player1: Rating
    let player2: Rating
    let newPlayer1: Rating
    let newPlayer2: Rating
    let match: Match
    beforeEach(() => {
        player1 = {
            mu: 25,
            sigma: (25/3)
        }
        player2 = {
            mu: 15,
            sigma: (15/3)
        }
        match = DefaultMatch(player1, player2)
        [newPlayer1, newPlayer2] = match.rate()
    })
    it.todo('given two players when a match result is processed then winner mu increases and loser mu decreases', () => {
        expect(newPlayer1.mu).toBeGreaterThan(player1.mu)
        expect(newPlayer2.mu).toBeLessThan(player2.mu)
    })
    it.todo('given two players when a match result is processed then sigma for both teams is different')
    it.todo('given two teams of equal size, when a match result is processed then winners mu increases and losers mu decreases')
})