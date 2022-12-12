namespace SpriteKind {
    export const Football = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.stopDart()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
function Blockers () {
    myDart = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e 1 e 1 e 1 e 1 e . . . . 
        . . e 1 1 1 1 1 1 1 1 1 e . . . 
        . . . e 1 e 1 e 1 e 1 e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Football)
    myDart.setTrace()
    myDart.controlWithArrowKeys()
    mySprite = sprites.create(img`
        .............cc.
        ............cbbc
        ............cbbc
        ...........bdcc.
        ...........bdbb.
        ..........bddc..
        ..........bdbb..
        .........bddc...
        .........bdbb...
        ........bddc....
        ........bdbb....
        .......bddc.....
        .......bdbb.....
        ......bddc......
        ......bdbb......
        .....bddc.......
        .....bdbb.......
        ....bddc........
        ....bdbb........
        ...bddc.........
        ...bdbb.........
        ..bddc..........
        ..bdbb..........
        .bddc...........
        .bdbb...........
        b1dc............
        b11c............
        b11c............
        b11c.........cc.
        b11c........cbbc
        b11c........cbbc
        b11c.......bdcc.
        b11c.......bdbb.
        b11c......bddc..
        b11bccc...bdbb..
        b11bbbbcccddc...
        b11bcccbccdbb...
        b11b..ccbddc....
        b11b...ccdbbc...
        b11b...bddcbc...
        b11b...bdbbcbc..
        b11b..bddc.fbc..
        b11b..bdbb.fbf..
        b11b.bddc..fcf..
        b11b.bdbb..fcf..
        b11bbddc...fcf..
        b11bbdbb...fcf..
        b11bddc...cfcfc.
        b11ddbb..cbfcfbc
        b1dddc...cdfffdc
        b1ddbb...cdcfcdc
        cdddc....cbdddbc
        cddbb....cbbbbbc
        cddc.....cbbbbbc
        cdbb.....cbbbbbc
        .cc......cbbbbbc
        .........cbbbbbc
        .........cbbbbbc
        .........cbbbbbc
        .........8bbbbb8
        .........8bbbbb8
        .........6bbbbb6
        ..........6bbb6.
        ...........666..
        `, SpriteKind.Player)
    mySprite.setPosition(150, randint(50, 75))
    myDart2 = sprites.create(img`
        ..........bbbbbb................
        .......bbb444444bb..............
        .....2244444ddd444b.............
        ....244444444dddd44e............
        ...244444444444ddd4be...........
        ..244444444444444d44be..........
        .2b444444444444444d4be..........
        .2b44444444444444444bbe.........
        2bbb4444444444444444bbe.........
        2bbb4444444444444444bbe.........
        2bb4b4444444444444444bbe........
        2bb4444444444444444444be........
        2bb44444444444444444444e........
        2bbb444bbb4444444444444e........
        22bbb444bb4bb444444444be........
        .2bbbbb44bbbb44444444bbe........
        .22bbbbbbbb44bbb444444bbe.......
        ..eeebbbbbbb44bbb444444be.......
        ...eeeeebbbbbbbb44b4444be.......
        .....eeeeee222bb44bbb4bbe.......
        .......eeeee222bb44bbbbee.......
        ............e222bbbbbbbec.......
        ..............ee2bbbbeebdb......
        .................eeeeecdddb.....
        .......................cd11bbbb.
        ........................cd111dbb
        .........................b11111c
        .........................c11dd1c
        .........................cd1dbc.
        .........................cb11c..
        ..........................ccc...
        ................................
        `, SpriteKind.Enemy)
    myDart2.setPosition(randint(50, 100), randint(0, 75))
    e = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    e.setPosition(randint(50, 100), randint(0, 75))
    my_sprite = sprites.create(img`
        ................86..................
        ...........6688867886...............
        ...........8666877688868............
        ............868777767768............
        .........688667777776688............
        ........67767777777778666...........
        .........6776667767666868...........
        ..........866667667677688...........
        .........8666666666667778...........
        ........667766666666666676..........
        .......67766667666776667776.........
        ......886667776676777666688.........
        .....67766777667767777666768........
        ....6776666666777667776666776.......
        .....8667776667766676677776776......
        ......8777666666667776777776688.....
        ....6887766776677677777777776776....
        ..8866666677767777777777766666778...
        .86666666777667767777766666776668...
        ..88677666666777677677666667776668..
        ..86776677666666666666667776666668..
        886666677766667666666776677766668...
        6668666676667766767767766677666668..
        88866666666777677677667666666776668.
        .86668866666766776776666667766666668
        .86688666666666776666667667776666688
        .668866666666666666666677666666688..
        ..8866686666666666677667776666668...
        ...866886666666666677667776666668...
        ...86886668666666667666666666888....
        ....88866886686666666666666668......
        ......86886668666866668666868.......
        ......88866688668866688866888.......
        ........8888888688888ce868..........
        ..............e88e88.ec.8...........
        ...............eeee..e..............
        ...............ceef.ce..............
        ...............ceefcec..............
        ...............feefce...............
        ...............fceeec...............
        ...............ffceec...............
        `, SpriteKind.Enemy)
    my_sprite.setPosition(randint(50, 100), randint(0, 75))
}
sprites.onOverlap(SpriteKind.Football, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("GOAL!")
    info.changeScoreBy(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Football)
    Blockers()
})
sprites.onOverlap(SpriteKind.Football, SpriteKind.Enemy, function (sprite, otherSprite) {
    myDart.stopDart()
    game.splash("oops")
    info.changeScoreBy(-1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Football)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    Blockers()
})
let my_sprite: Sprite = null
let e: Sprite = null
let myDart2: Sprite = null
let mySprite: Sprite = null
let myDart: Dart = null
Blockers()
