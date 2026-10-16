---
title: FairShots
pitch: A Fruit Ninja style mobile game where you shoot flying objects instead of slicing them, and one of them is a bomb.
status: Completed prototype
role: Solo game designer and programmer
team: Solo
engine: Unity
timeline: Built in about 24 hours for a class assignment, well ahead of the deadline
tags: [Unity, C#, Mobile, Game Feel, Scoring Design]
order: 2
hero: /media/fairshots/FairShotsMain.gif
links: []  # TODO: add itch.io or APK link
---

## Overview

The assignment was to make a casual mobile game with good replayability. I made a Fruit Ninja style game where you shoot objects instead of slicing them. It started as a shooting gallery at a fair, which is where the name comes from. I could not find free assets for that theme, so I switched to simple shapes with outlines and a basic shader. It looks good, and I think that is because I committed to one clean style instead of mixing assets.

## How a run works

Objects launch upward from the bottom of the screen and you shoot them before they get away. You have five hearts. Letting an object escape costs a heart, and the run ends when the hearts are gone. The best score is saved and shown on the menu.

| Object | Role |
| --- | --- |
| Yellow | 10 points |
| Cyan | 15 points |
| Green | 30 points, the rare target |
| Black sphere with red outline | Bomb. Shooting it ends the run immediately |

![Gameplay with the score and five hearts](/media/fairshots/gameplay-2.jpg)

## Systems and mechanics

- **Spawner and difficulty scaling.** The run is endless. As it goes on, more objects are on screen at once and bombs appear more often.
- **Scoring and rarity.** Rarer objects give more points, so the player is always choosing between safe points and the high-value target.
- **Persistent best score.** The menu shows your best, which is the main reason to play again.

`TODO: add the spawner or difficulty code snippet here.`

## Game design and polish

The bomb is the main design idea. In most games every object is a target. Here one object punishes you for shooting, so the player has to look at what they are shooting before they tap. As bombs get more frequent, the difficulty becomes reading speed, not only reaction speed.

Screen shake gets stronger as the event gets more serious, so the player feels how bad something is before they read the score or hearts.

| Event | Feedback |
| --- | --- |
| Hit an object | Small shake |
| Object escapes | Medium shake |
| Shoot the bomb | Massive shake |

Sound effects go along with these. This is the game feel that Plateformer was missing, and I added it on purpose.

![Main menu with the best score](/media/fairshots/menu.jpg)

## Key takeaways

- **Adapting to missing assets worked.** Changing the theme to simple outlined shapes gave the game a clear look that I could make polished on my own.
- **Juice is design.** Grading the shake by event severity cost little code and made the game much better to play.
- **Small rules go a long way.** One bomb object and rarity-based scores made a risk and reward system without much code.
- **Next time,** I would show the difficulty curve in a short clip and tune the bomb frequency with playtesters.
