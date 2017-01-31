class Cell {

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.isVisited = false;

        this.isPlayer = false;

        this.isWumpus = false;
        this.isPit = false;
        this.isGold = false;

        this.isStench = false;
        this.isBreeze = false;
    }

    setWumpus() {
        this.isWumpus = true;
    }

    setPit() {
        this.isPit = true;
    }

    setGold() {
        this.isGold = true;
    }

    setPlayer() {
        this.isPlayer = true;
        this.isVisited = true;
    }

    setBreeze() {
        this.isBreeze = true;
    }

    setStench() {
        this.isStench = true;
    }

    unsetPlayer() {
        this.isPlayer = false;
        $(".mboard .cell" + this.x + "" + this.y).css("background-image", "none");
    }
}

class CellVisited {

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.pitChance = 0;
        this.wumpusChance = 0;
        this.visitedNum = 0;
        this.nearDanger = false;
    }
}