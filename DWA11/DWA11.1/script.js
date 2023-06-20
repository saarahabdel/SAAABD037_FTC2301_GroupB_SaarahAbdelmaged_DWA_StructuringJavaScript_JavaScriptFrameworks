class Counter {
    value = 1;

    increase() {
        this.value += 1;

    }

    decrease() {
        this.value -= 1;

    }

    log() {
        console.log(this.value)

    }
}

const instance = new Counter()

instance.increase() // increase is a side effect
instance.decrease() // decrease is a side effect
instance.log() // has 2 side effects, it relies on something outside of itself and also targets the browser

// How we would do the above (OOP) in functional programming





