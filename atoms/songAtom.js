import React from 'react';
import {atom, selectorFamily} from 'recoil'

export const currentTrackIdState = atom({
    key: "currentTrackIdState",
    default: null
})

export const isPlayingState = atom({
    key: "isPlayingState",
    default: false
})